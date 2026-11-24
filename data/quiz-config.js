/**
 * Konfigurasi pengiriman kuis ke Google Spreadsheet.
 *
 * 1. Pasang skrip docs/google-apps-script/Code.gs pada spreadsheet Anda
 *    (langkahnya ada di docs/QUIZ-GOOGLE-SHEETS.md), lalu salin URL Web App
 *    yang berakhiran /exec ke `endpoint`.
 * 2. Isi `classes` dengan daftar kelas yang muncul di pilihan "Kelas".
 *    Selama daftar masih kosong, kolom kelas berupa isian bebas.
 */
window.PortalData = window.PortalData || {};

window.PortalData.quizConfig = {
    endpoint: 'https://script.google.com/macros/s/AKfycbxm79b8pcSIhLxKnzAXmwGUipC1h88Qm8YZVk60RGVZZCmsnHPxFeYLm1NYNsM-UYPojg/exec',
    classes: [
        // 'KPI 5A',
        // 'KPI 5B',
    ]
};
