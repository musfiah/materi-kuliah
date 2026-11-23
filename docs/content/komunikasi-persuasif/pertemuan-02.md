# Audit konversi materi — Komunikasi Persuasif / Pertemuan 2: Unsur-Unsur Komunikasi Persuasif

## 1. Identitas dan cakupan

- Mata kuliah / slug: Komunikasi Persuasif / `komunikasi-persuasif`
- Pertemuan dan judul: Pertemuan 2 — Unsur-Unsur Komunikasi Persuasif
- Penanggung jawab konversi / peninjau: agent (lapisan teks, pemeriksaan visual per halaman, integrasi); belum ditinjau manusia
- Tanggal pemeriksaan: 2026-11-23
- Cakupan halaman dan sumber: dosen halaman 12–13, 24; mahasiswa halaman 1–10
- Di luar cakupan: halaman sumber lain (dipetakan pada audit pertemuan lain); PPTX/animasi asli tidak tersedia
- Dasar pembagian pertemuan: pemetaan halaman eksplisit dari pemilik portal (dicatat pada audit teks), bukan inferensi dari PDF
- Status keseluruhan: **Perlu verifikasi (menunggu jawaban dosen)**
- Izin publikasi materi dan aset: **disetujui pemilik portal (2026-11-23)** untuk menampilkan seluruh isi dan gambar sesuai PDF; tanda publikasi di bagian 5 dicatat sebagai jejak keputusan

### Daftar sumber

| Alias | Path/nama file lokal | SHA-256 | Jumlah halaman | Halaman cakupan | Hubungan |
| --- | --- | --- | --- | --- | --- |
| dosen | `komunikasi-persuasif/pdf/materi dosen_Komunikasi persuasif.pdf` | `1e9ce8660060cd60d660315a571b78372f43287a9a54daaeff8b56dc0e64b36f` | 37 | 12–13, 24 | materi dosen (utama) |
| mahasiswa | `komunikasi-persuasif/pdf/PDF komunikasi persuasif mahasiswa.pdf` | `472805d9cb9146192e13764513e54c87efe2e07a96c32cef49f3aaf6fcf84de3` | 87 | 1–10 | presentasi kelompok mahasiswa (pelengkap) |

Rincian transkripsi lapisan teks setiap halaman ada di audit teks: [teks-dosen.md](teks-dosen.md), [teks-mahasiswa-a.md](teks-mahasiswa-a.md).

## 2. Pemetaan setiap halaman

| Sumber | Halaman PDF | Isi penting & relasi visual | Tujuan web | Aset | Teks diperiksa | Visual diperiksa | Status hasil & penanganan |
| --- | --- | --- | --- | --- | --- | --- | --- |
| dosen | 12 | Halaman pembatas: lingkaran merah bertekstur di kiri judul “UNSUR UNSUR KOMUNIKASI PERSUASIF”; pita tekstur abu-abu lebar di bagian bawah. ornamen templat halaman pembatas: pita/latar tekstur abu-abu (xref 7, 15 berulang) dan lingkaran merah bertekstur (xref 12). | `meetings.js` P2 `#kp-dosen-p012` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Tidak dijadikan aset: Latar tekstur abu-abu dan lingkaran merah besar halaman pembatas (xref 7, 12, 15) (Dekoratif templat; judul pembatas sudah ada sebagai h2.) |
| dosen | 13 | Tanpa judul; enam kotak oranye berukuran sama dalam grid 3×2: Persuader, Persuadee, Pesan Persuasif / Saluran, Media, Efek Persuasi. Tidak ada panah atau penomoran. ornamen templat: lingkaran merah bertekstur bergaris putih di pojok kanan bawah (xref 26, ditempatkan dua kali di luar area halaman); judul dalam font bertekstur hitam. | `meetings.js` P2 `#kp-dosen-p013` | tidak ada | Diperiksa | Diperiksa | Perlu verifikasi. Tidak dijadikan aset: Grid enam kotak oranye (Kotak/bentuk berwarna templat hanya memberi penekanan visual; seluruh teks dan urutannya sudah tersedia dalam HTML, tanpa relasi panah atau makna warna tambahan.); Ornamen templat (lingkaran merah pojok kanan bawah, ubin tekstur xref 15/26) (Dekoratif dan berulang di hampir semua slide; tidak membawa informasi pembelajaran.) |
| dosen | 24 | Pertanyaan lima baris kapital tebal “SIAPA / MENGATAKAN APA / KEPADA SIAPA / MELALUI MEDIA APA / DENGAN EFEK APA?” dan satu paragraf. ornamen templat: lingkaran merah bertekstur bergaris putih di pojok kanan bawah (xref 26, ditempatkan dua kali di luar area halaman); judul dalam font bertekstur hitam. | `meetings.js` P2 `#kp-dosen-p024` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Tidak dijadikan aset: Ornamen templat (lingkaran merah pojok kanan bawah, ubin tekstur xref 15/26) (Dekoratif dan berulang di hampir semua slide; tidak membawa informasi pembelajaran.) |
| mahasiswa | 1 | Sampul Kelompok 1: kotak biru tua di tengah berisi judul “UNSUR UNSUR KOMUNIKASI” dan “Presented by : Kelompok 1”; latar templat dengan belah ketupat dekoratif di kiri atas dan kanan bawah. | `meetings.js` P2 `#kp-mhs-p001` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Koreksi: Tidak ada; teks HTML sesuai visual. Tidak dijadikan aset: Latar templat xref 14 (1920x1280 JPEG; bingkai biru tua, pola kotak-kotak, belah ketupat dekoratif) (Dekorasi templat yang berulang di setiap halaman Kelompok 1; tidak membawa informasi pembelajaran.) |
| mahasiswa | 2 | Judul “TOPIK PEMBAHASAN” pada pita biru tua; enam kartu berderet kiri-ke-kanan, masing-masing dengan lingkaran di atasnya dan bingkai warna bergantian biru/oranye/abu-biru: Persuader, Pesan persuasi, Persuadee, Media, Feedback, Efek Konteks Situasional (kartu ke-6 memuat tiga baris). Urutan daftar HTML cocok dengan urutan visual. | `meetings.js` P2 `#kp-mhs-p002` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Koreksi: Tidak ada; teks HTML sesuai visual. Tidak dijadikan aset: Latar templat xref 14 (1920x1280 JPEG; bingkai biru tua, pola kotak-kotak, belah ketupat dekoratif) (Dekorasi templat yang berulang di setiap halaman Kelompok 1; tidak membawa informasi pembelajaran.); Gambar kartu xref 64 (1077x834 PNG, dipakai dua kali) berupa bingkai kartu/lingkaran (Bingkai dekoratif kosong; label kartu sudah ada sebagai daftar HTML. Warna bingkai bergantian tanpa legenda sehingga dinilai dekoratif.) |
| mahasiswa | 3 | Pita judul “LATAR BELAKANG” dan satu paragraf rata kanan-kiri. | `meetings.js` P2 `#kp-mhs-p003` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Koreksi: Tidak ada; teks HTML sesuai visual. Tidak dijadikan aset: Latar templat xref 14 (1920x1280 JPEG; bingkai biru tua, pola kotak-kotak, belah ketupat dekoratif) (Dekorasi templat yang berulang di setiap halaman Kelompok 1; tidak membawa informasi pembelajaran.); Pita judul biru tua (vektor) di atas isi (Elemen gaya; teks judul sudah menjadi h2.) |
| mahasiswa | 4 | Pita judul “PERSUADER”, paragraf definisi, label “Karakteristik:” dan tiga butir bulat. | `meetings.js` P2 `#kp-mhs-p004` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Koreksi: Tidak ada; teks HTML sesuai visual. Tidak dijadikan aset: Latar templat xref 14 (1920x1280 JPEG; bingkai biru tua, pola kotak-kotak, belah ketupat dekoratif) (Dekorasi templat yang berulang di setiap halaman Kelompok 1; tidak membawa informasi pembelajaran.); Pita judul biru tua (vektor) di atas isi (Elemen gaya; teks judul sudah menjadi h2.) |
| mahasiswa | 5 | Pita judul “PESAN PERSUASI”, paragraf definisi, dan dua butir bulat (Strategi Penyampaian; Bentuk). | `meetings.js` P2 `#kp-mhs-p005` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Koreksi: Strategi Penyampaian dan Bentuk diubah dari paragraf menjadi daftar butir sesuai tampilan slide; teks tidak berubah. Tidak dijadikan aset: Latar templat xref 14 (1920x1280 JPEG; bingkai biru tua, pola kotak-kotak, belah ketupat dekoratif) (Dekorasi templat yang berulang di setiap halaman Kelompok 1; tidak membawa informasi pembelajaran.); Pita judul biru tua (vektor) di atas isi (Elemen gaya; teks judul sudah menjadi h2.) |
| mahasiswa | 6 | Pita judul “PERSUADEE”, paragraf definisi, label “Pengolahan Pesan:” dan dua butir bulat (Rute Sentral, Rute Periferal). | `meetings.js` P2 `#kp-mhs-p006` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Koreksi: Tidak ada; teks HTML sesuai visual. Tidak dijadikan aset: Latar templat xref 14 (1920x1280 JPEG; bingkai biru tua, pola kotak-kotak, belah ketupat dekoratif) (Dekorasi templat yang berulang di setiap halaman Kelompok 1; tidak membawa informasi pembelajaran.); Pita judul biru tua (vektor) di atas isi (Elemen gaya; teks judul sudah menjadi h2.) |
| mahasiswa | 7 | Pita judul “MEDIA”, paragraf definisi, label “Tiga Perspektif Media:” dan tiga butir bulat. | `meetings.js` P2 `#kp-mhs-p007` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Koreksi: Tidak ada; teks HTML sesuai visual. Tidak dijadikan aset: Latar templat xref 14 (1920x1280 JPEG; bingkai biru tua, pola kotak-kotak, belah ketupat dekoratif) (Dekorasi templat yang berulang di setiap halaman Kelompok 1; tidak membawa informasi pembelajaran.); Pita judul biru tua (vektor) di atas isi (Elemen gaya; teks judul sudah menjadi h2.) |
| mahasiswa | 8 | Pita judul “FEEDBACK”, paragraf definisi, lalu butir “Jenis-Jenis:” diikuti empat baris bertanda “-” (subbutir), serta butir “Fungsi” dan “Peran”. | `meetings.js` P2 `#kp-mhs-p008` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Koreksi: Struktur disesuaikan dengan visual: “Jenis-Jenis:”, “Fungsi”, dan “Peran” adalah butir setara; empat pasangan jenis menjadi subdaftar “Jenis-Jenis”. Sebelumnya Fungsi/Peran berupa paragraf dan Jenis-Jenis berupa h3. Tidak dijadikan aset: Latar templat xref 14 (1920x1280 JPEG; bingkai biru tua, pola kotak-kotak, belah ketupat dekoratif) (Dekorasi templat yang berulang di setiap halaman Kelompok 1; tidak membawa informasi pembelajaran.); Pita judul biru tua (vektor) di atas isi (Elemen gaya; teks judul sudah menjadi h2.) |
| mahasiswa | 9 | Pita judul “EFEK KONTEKS SITUASIONAL”, paragraf definisi, butir “Faktor Penentu:” dengan tiga subbutir “-”, dan butir “Efek yang Dihasilkan pada Persuadee:” dengan tiga subbutir “-”. | `meetings.js` P2 `#kp-mhs-p009` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Koreksi: h3 “Faktor Penentu:” dan “Efek yang Dihasilkan pada Persuadee:” diubah menjadi butir daftar dengan subdaftar sesuai tampilan slide; teks tidak berubah. Tidak dijadikan aset: Latar templat xref 14 (1920x1280 JPEG; bingkai biru tua, pola kotak-kotak, belah ketupat dekoratif) (Dekorasi templat yang berulang di setiap halaman Kelompok 1; tidak membawa informasi pembelajaran.); Pita judul biru tua (vektor) di atas isi (Elemen gaya; teks judul sudah menjadi h2.) |
| mahasiswa | 10 | Pita judul “KESIMPULAN” dan satu paragraf panjang rata kanan-kiri. | `meetings.js` P2 `#kp-mhs-p010` | tidak ada | Diperiksa | Diperiksa | Dikonversi. Koreksi: Tidak ada; teks HTML sesuai visual. Tidak dijadikan aset: Latar templat xref 14 (1920x1280 JPEG; bingkai biru tua, pola kotak-kotak, belah ketupat dekoratif) (Dekorasi templat yang berulang di setiap halaman Kelompok 1; tidak membawa informasi pembelajaran.); Pita judul biru tua (vektor) di atas isi (Elemen gaya; teks judul sudah menjadi h2.) |

### Rekap cakupan

- Jumlah halaman dalam cakupan: 13
- Jumlah baris halaman unik yang dipetakan: 13
- Halaman dengan teks dan visual sudah diperiksa: 13
- Halaman sudah dikonversi: 13
- Halaman dengan butir perlu verifikasi: 1
- Halaman sampul/pembatas/pengulangan: tetap dipetakan sebagai heading (lihat tabel); tidak ada penghilangan diam-diam
- Selisih atau halaman belum tertangani: tidak ada

## 3. Inventaris visual, tabel, rumus, dan sumber

Tidak ada visual informatif yang dijadikan aset pada pertemuan ini; seluruh unsur visual yang tidak dijadikan aset beserta alasannya tercatat pada tabel bagian 2. Tabel sumber (jika ada) dikonversi sebagai `table.academic-table`.

## 4. Keputusan adaptasi desain

- Komponen bersama: `.academic-box` (blok sumber), `.lesson-figure`/`.figure-grid`/`.figure-description`/`.source-note` (baru, `assets/css/main.css`), `.table-wrapper`/`.academic-table`, `.case-study-block`, daftar HTML.
- Setiap halaman PDF menjadi satu `h2` ber-ID `kp-<sumber>-pNNN` yang juga masuk daftar isi; urutan: materi dosen lalu presentasi mahasiswa.
- Warna gambar sumber tidak diubah; diagram dengan tata letak bermakna disertakan sebagai crop dan teksnya tetap ada sebagai HTML.
- Catatan agent diberi label “Catatan konversi (bukan teks asli slide)”.
- Animasi/transisi PPT asli tidak tersedia dalam PDF dan tidak direkonstruksi.

## 5. Integritas materi dan ketidakpastian

| Temuan | Sumber & halaman | Dampak | Tindakan / pertanyaan ke pemilik | Status |
| --- | --- | --- | --- | --- |
| Slide tidak memakai panah; urutan baca kiri-ke-kanan dipertahankan sebagai daftar tak berurut tanpa menyiratkan alur. | dosen 13 | Isi | Ditandai “perlu verifikasi” di web; tidak ditebak; pemilik menanyakan ke dosen | Terbuka |

- Kunci/pembahasan soal: kuis review lintas pertemuan dicatat di [kuis-review-uas.md](kuis-review-uas.md).

## 6. Validasi

Lihat [hasil validasi bersama](README.md#validasi) — dijalankan untuk seluruh pertemuan sekaligus.

## 7. Kesimpulan serah terima

- Berkas data: `data/courses/komunikasi-persuasif/meetings.js` (pertemuan 2)
- Aset publik: 0 berkas di `assets/media/komunikasi-persuasif/pertemuan-02/`
- Status akhir: izin publikasi disetujui; butir isi menunggu jawaban dosen (bagian 5)

## 8. Riwayat pembaruan sumber dan audit

| Tanggal | Sumber/versi | Cakupan | Perubahan & hasil | Peninjau |
| --- | --- | --- | --- | --- |
| 2026-11-23 | SHA-256 di bagian 1 | dosen 12–13, 24; mahasiswa 1–10 | Konversi awal dan integrasi ke portal | agent |
