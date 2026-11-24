# Audit konversi — Komunikasi Persuasif / Kuis review menjelang UAS

## 1. Identitas dan cakupan

- Sumber: `komunikasi-persuasif/pdf/soal quiz review menjelang uas.pdf`, 3 halaman, SHA-256 `0c4ab33f915b0c408015ef29ad1a70651807484fe2f97ac8ae9dcc17f5f66e0d`.
- Tujuan web: `data/courses/komunikasi-persuasif/quizzes.js` (kunci objek `99`, label “Kuis review menjelang UAS”; 99 dipilih agar tidak bertabrakan dengan nomor pertemuan) dan `data/courses/komunikasi-persuasif/exams.js` (tab UAS: daftar soal yang dapat dicetak beserta kunci).
- Tanggal: 2026-11-23. Status: **Dikonversi; kunci lengkap setelah konfirmasi pemilik**.

## 2. Pemetaan setiap halaman

| Halaman | Isi | Tujuan web | Visual | Status |
| --- | --- | --- | --- | --- |
| 1 | Judul “Kuis Komunikasi Persuasif”, petunjuk, soal 1–5, soal 6 tanpa pilihan | `quizzes.js` 99; `exams.js` UAS `#uas-soal` | Teks saja, tanpa gambar | Dikonversi |
| 2 | Pilihan soal 6, soal 7–10, “Jawaban :”, kunci nomor 1 | idem; kunci di `#uas-kunci` | Teks saja | Dikonversi |
| 3 | Kunci nomor 2–9; tulisan “Nomor 10” tanpa huruf | `#uas-kunci` | Teks saja; diperiksa visual pada inventaris awal | Dikonversi |

## 3. Kunci dan pembahasan

- Kunci 1–9 dari sumber: B, B, C, A, C, B, A, C, A.
- Kunci 10 = **C (Konatif)**: sumber tidak mencetak huruf; **dikonfirmasi pemilik portal** dalam sesi 2026-11-23. Asal kunci ditulis pada tabel kunci UAS dan pembahasan soal 10.
- Pembahasan: tidak ada di sumber. Atas persetujuan pemilik, agent menulis pembahasan singkat yang merujuk materi pertemuan; setiap pembahasan diawali “Pembahasan tambahan (bukan dari dosen)”. Setiap rujukan diperiksa terhadap teks materi (mis. soal 9: halaman mahasiswa 59 menggolongkan prasangka sebagai hambatan psikologis).
- Teks soal dan pilihan disalin sesuai sumber; pemenggalan baris PDF dinormalisasi.
- Sumber tidak memuat jadwal, durasi, atau cara pengumpulan UAS; tab UAS menampilkan “Belum tercantum” dan menyatakan bahwa halaman ini bahan latihan, bukan ketentuan UAS resmi.

## 4. Perubahan pendukung

- `assets/js/components/renderer.js`: tombol pemilih kuis memakai `quiz.label` bila ada (fallback tetap “Kuis pertemuan N”). Rumus skor dan alur kuis tidak diubah.

## 5. Validasi

Lihat [README.md#validasi](README.md#validasi): skenario semua benar (100), semua salah (0), campuran 7/10 (70), dan isian belum lengkap (form tidak valid) sudah diuji di Chrome headless.

## Pembaruan 2026-11-24

Atas permintaan pemilik, kuis tidak lagi menampilkan skor, benar/salah, atau pembahasan kepada mahasiswa. Mahasiswa mengisi nama, NIM, kelas, dan semua soal; skor dan jawaban dikirim ke Google Spreadsheet dosen (lihat [docs/QUIZ-GOOGLE-SHEETS.md](../../QUIZ-GOOGLE-SHEETS.md)). Tabel kunci jawaban di tab UAS dihapus; kunci dan pembahasan tetap tersimpan di `quizzes.js` untuk perhitungan skor dan tidak ditampilkan.
