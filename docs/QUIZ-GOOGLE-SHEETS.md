# Menyimpan hasil kuis ke Google Spreadsheet

Kuis di portal tidak menampilkan skor, jawaban benar/salah, atau pembahasan kepada mahasiswa. Setelah mahasiswa mengisi identitas (nama, NIM, kelas; mata kuliah terisi otomatis) dan **semua** soal, jawaban dikirim ke Google Spreadsheet milik dosen dan mahasiswa hanya melihat pesan “Berhasil dikirim”.

## Yang dicatat

Setiap mata kuliah mendapat tab sendiri di spreadsheet. Kolomnya:

| Waktu | Nama | NIM | Kelas | Mata Kuliah | Kuis | ID Kuis | Skor | Jumlah Benar | Jumlah Soal | Soal 1 … Soal N |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

- **Skor** = `Math.round(jumlah benar / jumlah soal × 100)`, dihitung di browser.
- **Soal 1 … N** berisi huruf jawaban mahasiswa (A/B/C/D).
- Satu NIM hanya dapat mengirim **satu kali per kuis**; kiriman kedua ditolak skrip dan mahasiswa melihat pesan bahwa NIM sudah pernah mengirim.

## Pemasangan (sekali saja)

1. Buat Google Spreadsheet baru (misalnya “Hasil Kuis Musfiah Center”).
2. Buka **Ekstensi → Apps Script**. Hapus isi `Code.gs`, lalu tempel seluruh isi [`docs/google-apps-script/Code.gs`](google-apps-script/Code.gs). Simpan.
3. Klik **Terapkan (Deploy) → Deployment baru**. Jenis: **Aplikasi web (Web app)**.
   - *Jalankan sebagai (Execute as)*: **Saya (Me)**
   - *Siapa yang memiliki akses (Who has access)*: **Siapa saja (Anyone)**
4. Klik **Terapkan**, izinkan akses yang diminta Google, lalu salin **URL aplikasi web** (berakhiran `/exec`).
5. Tempel URL itu ke `endpoint` di [`data/quiz-config.js`](../data/quiz-config.js).
6. Isi `classes` di file yang sama dengan daftar kelas, misalnya `['KPI 5A', 'KPI 5B']`. Selama daftar kosong, kolom kelas berupa isian bebas.
7. Commit dan push. Uji dengan satu pengiriman, lalu periksa tab baru di spreadsheet.

Membuka URL `/exec` di browser seharusnya menampilkan `{"status":"ready"}`. Jika `Code.gs` diubah, buat deployment versi baru (**Kelola deployment → Edit → Versi baru**); URL tetap sama.

## Batasan yang perlu diketahui

- Situs ini statis (GitHub Pages). Soal dan kunci jawaban berada di file JavaScript publik, dan skor dihitung di browser. Mahasiswa yang paham teknis dapat melihat kunci atau mengirim skor yang tidak sesuai. Gunakan kuis ini sebagai latihan/penilaian ringan, **bukan ujian resmi yang aman**. Kolom jawaban per soal dapat dipakai dosen untuk memeriksa ulang skor.
- Pembatasan satu kiriman berdasarkan NIM yang diketik; skrip tidak dapat memastikan pemilik NIM sebenarnya.
- URL `/exec` bersifat publik bagi siapa pun yang membuka kode situs. Data yang masuk hanya ditambahkan ke spreadsheet; skrip tidak mengirim balik isi spreadsheet.
- Data nama dan NIM mahasiswa tersimpan di Google Drive dosen; atur berbagi spreadsheet seperlunya.
