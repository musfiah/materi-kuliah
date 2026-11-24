/**
 * Penerima hasil kuis portal Musfiah Center → Google Spreadsheet.
 *
 * Pasang pada spreadsheet tujuan (Ekstensi → Apps Script), lalu deploy sebagai
 * Web App: "Execute as: Me", "Who has access: Anyone". Panduan lengkap:
 * docs/QUIZ-GOOGLE-SHEETS.md.
 *
 * Setiap mata kuliah mendapat tab (sheet) sendiri. Satu NIM hanya boleh
 * mengirim satu kali untuk kuis yang sama; kiriman berikutnya ditolak.
 */

const BASE_HEADERS = ['Waktu', 'Nama', 'NIM', 'Kelas', 'Mata Kuliah', 'Kuis', 'ID Kuis', 'Skor', 'Jumlah Benar', 'Jumlah Soal'];
const NIM_COLUMN = 3;
const QUIZ_ID_COLUMN = 7;

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const data = JSON.parse(e.postData.contents);
    const required = ['course', 'courseSlug', 'quizId', 'quizTitle', 'nama', 'nim', 'kelas'];
    if (required.some((key) => !String(data[key] || '').trim()) || !/^[0-9]+$/.test(String(data.nim).trim())
        || !Array.isArray(data.answers) || data.answers.length !== Number(data.questionCount)) {
      return reply({ status: 'invalid' });
    }

    const sheet = sheetFor(data.course, data.answers.length);
    const nim = String(data.nim).trim();
    const quizKey = data.courseSlug + '#' + data.quizId;
    const rows = sheet.getLastRow() > 1
      ? sheet.getRange(2, 1, sheet.getLastRow() - 1, QUIZ_ID_COLUMN).getValues()
      : [];
    if (rows.some((row) => String(row[NIM_COLUMN - 1]).replace(/^'/, '') === nim && row[QUIZ_ID_COLUMN - 1] === quizKey)) {
      return reply({ status: 'duplicate' });
    }

    sheet.appendRow([
      new Date(),
      safe(data.nama),
      "'" + nim,
      safe(data.kelas),
      safe(data.course),
      safe(data.quizTitle),
      quizKey,
      Number(data.score),
      Number(data.correctCount),
      Number(data.questionCount)
    ].concat(data.answers.map(safe)));
    return reply({ status: 'ok' });
  } catch (error) {
    return reply({ status: 'error' });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return reply({ status: 'ready' });
}

function sheetFor(courseTitle, questionCount) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const name = String(courseTitle).slice(0, 90);
  const sheet = spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
  const headers = BASE_HEADERS.concat(Array.from({ length: questionCount }, (_, index) => 'Soal ' + (index + 1)));
  const current = sheet.getLastColumn() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
  if (current.length < headers.length) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Text starting with = + - @ would be evaluated as a spreadsheet formula.
function safe(value) {
  const text = String(value == null ? '' : value).trim().slice(0, 200);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function reply(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
