# Konversi Manajemen Media Penyiaran — ringkasan dan validasi

Status: **dikonversi dan diintegrasikan ke portal (9 pertemuan + kuis pilihan ganda); beberapa butir isi perlu verifikasi**.

## Sumber lokal

| Alias | Nama file di `manajemen-media-penyiaran/pdf/` | Halaman | SHA-256 |
| --- | --- | --- | --- |
| dosen | Manajemen Media Penyiaran all materi_versi dosen.pdf | 34 | 9aab75c55660aee95e7b8c38681cd0c653c3797a59031cfb6030747f0c6b3150 |
| mahasiswa | Manajemen Media Penyiaran all materi_versi mahasiswa.pdf | 134 | d3be549f742a86b194a0003ee15e3f21e06160000b69d44fc1dc02d215b42649 |
| quiz | Soal Quiz Pilihan Ganda MMP.pdf | 4 | 22a189859bc5ccbc45fd934d7617e520f3bb9ee75f20a92f7614128557688115 |

Total **172 halaman**, semuanya dipetakan (168 halaman materi + 4 halaman kuis).

## Pembagian pertemuan (usulan per topik, disetujui pemilik 2026-11-23)

| Pertemuan | Materi dosen | Presentasi mahasiswa | Audit |
| --- | --- | --- | --- |
| 1 Pengantar dan fungsi manajemen media | 1–9 | — | [pertemuan-01.md](pertemuan-01.md) |
| 2 Prinsip manajemen, SWOT, pengambilan keputusan | 15–19, 26 | — | [pertemuan-02.md](pertemuan-02.md) |
| 3 Idealisme, realitas industri, prinsip pengelolaan | 10–14 | 43–55 | [pertemuan-03.md](pertemuan-03.md) |
| 4 Dinamika industri media | — | 1–19 | [pertemuan-04.md](pertemuan-04.md) |
| 5 Teknologi, nilai ekonomi, komodifikasi informasi | — | 20–42 | [pertemuan-05.md](pertemuan-05.md) |
| 6 New media di era konvergensi | — | 56–70 | [pertemuan-06.md](pertemuan-06.md) |
| 7 Tata kelola dan regulasi penyiaran digital | — | 71–87 | [pertemuan-07.md](pertemuan-07.md) |
| 8 Manajemen televisi | 20–25 | 88–109 | [pertemuan-08.md](pertemuan-08.md) |
| 9 Manajemen radio dan diskusi tugas kelompok | 27–34 | 110–134 | [pertemuan-09.md](pertemuan-09.md) |
| Kuis pilihan ganda | quiz 1–4 | | [kuis.md](kuis.md) |

Alur: ekstraksi teks/inventaris gambar lokal (PyMuPDF) → render dan pemeriksaan visual setiap halaman → `extracted/*-final.json` dan `*-audit.json` (lokal, diabaikan Git) → dirakit ke `data/courses/manajemen-media-penyiaran/meetings.js`. Tidak ada layanan eksternal.

Aset publik: **34 berkas** (sekitar 2,6 MB) di `assets/media/manajemen-media-penyiaran/`.

## Keputusan pemilik yang diterapkan

- Nama dan NIM mahasiswa **tidak dipublikasikan**; foto orang ditampilkan tanpa nama atas permintaan pemilik (“fokus ke materinya saja”). Halaman terdampak: mahasiswa 1, mahasiswa 21, mahasiswa 57, mahasiswa 72, mahasiswa 74, mahasiswa 75, mahasiswa 90, mahasiswa 111. Setiap penghilangan diberi catatan konversi di web dan dicatat per halaman.
- Metadata katalog disamakan dengan mata kuliah lain (KPI-MMP, 3 SKS, Gasal 2026/2027) atas instruksi pemilik; tidak tercantum di PDF.
- Kuis ditampilkan di tab Kuis dan tab UAS.

## Hal yang perlu dikonfirmasi

1. Butir isi yang tidak jelas di sumber (ditandai di web/audit, tidak ditebak):
   - dosen 6 (P1): Label "SiITV"/"SilTV" pada gambar kecil dan tidak tegas; ditandai perlu verifikasi.
   - dosen 6 (P1): Pengelompokan stasiun berdasarkan garis dan warna titik pada gambar; garis tipis yang saling bersilangan (mis. Channel [V] berwarna biru kehijauan di dekat Antv) dicatat apa adanya.
   - dosen 24 (P8): Arti perbedaan bentuk elips vs kotak tidak dijelaskan sumber; tidak ditafsirkan.
   - dosen 25 (P8): Angka "117,09 TVs" tertulis demikian pada gambar resolusi rendah; perlu verifikasi.
   - dosen 25 (P8): Logo merah kecil di samping "GRAPHICS (c) 2006" tampak bertuliskan "Star" (kemungkinan penerbit infografik); tidak dapat dipastikan.
   - dosen 25 (P8): Hubungan infografik dengan daftar tahapan produksi tidak dijelaskan sumber.
   - mahasiswa 11 (P4): Lokasi dan tahun foto jalur produksi televisi tidak disebut pada slide; caption tidak mengklaim foto berasal dari Indonesia.
   - mahasiswa 13 (P4): Slide tidak memberi label 'positif/negatif'; web hanya menyebut tanda plus/minus sesuai sumber.
   - mahasiswa 14 (P4): Tahun MNC Now (2020) dan rebranding Vision+ (15 Januari 2020) tampak berurutan janggal; ditampilkan sesuai sumber dengan catatan, belum diverifikasi.
   - mahasiswa 19 (P4): Teks pantun pada meme ('ikan hiu melayang-layang... presentasinya sudah ya sayang...') tidak dimuat karena bagian dari gambar dekoratif penutup.
   - mahasiswa 29 (P5): Ejaan nama 'Wenderda' (hal. 29) vs 'Wenerda' (hal. 33) tidak konsisten; dipertahankan sesuai masing-masing slide dengan catatan.
   - mahasiswa 32 (P5): Penulisan nama 'Hesmondhalhgh' kemungkinan salah ketik untuk Hesmondhalgh; tidak dikoreksi tanpa konfirmasi.
   - mahasiswa 35 (P5): Kolom kiri (rujukan) dan kolom kanan (uraian) tidak dihubungkan eksplisit pada slide; disajikan berurutan tanpa memasangkan rujukan ke butir tertentu.
   - mahasiswa 37 (P5): Relasi label 'TEMUAN UTAMA' dengan kotak oranye 'Berubah: multiple ASO' disimpulkan dari kedekatan visual; perlu verifikasi.
   - mahasiswa 37 (P5): Poster memuat foto pejabat Kominfo (tokoh publik) di layar televisi; poster kampanye pemerintah dipertahankan sebagai visual informatif — izin publikasi poster perlu dikonfirmasi pemilik portal.
   - mahasiswa 41 (P5): Teks tersembunyi 'RELASI INFORMASI' pada lapisan teks; tidak tampil di slide.
   - mahasiswa 43 (P3): Label 'Innovative Business Development Plan' kemungkinan teks bawaan templat; tetap ditampilkan dengan catatan konversi.
   - mahasiswa 44 (P3): Sumber infografik tidak dicantumkan pada slide (gaya visual mirip laporan berita tahunan, tetapi tidak diklaim). Izin publikasi infografik pihak ketiga perlu dikonfirmasi pemilik portal.
   - mahasiswa 44 (P3): Resolusi asli gambar tertanam hanya 814x360 px; label kecil masih terbaca tetapi tidak tajam.
   - mahasiswa 48 (P3): Slide tanpa judul utama; heading memakai label 'Tantangan yang Masih Harus Dihadapi'.
   - mahasiswa 49 (P3): Slide tanpa judul utama; heading dibuat dari subjudul dan ditandai catatan konversi.
   - mahasiswa 53 (P3): Teks terpotong di tepi kanan atas ('S', 'B', 'k', 'd') tidak terbaca; tampaknya sisa elemen di luar kanvas, bukan isi slide ini.
   - mahasiswa 58 (P6): Paragraf menyebut 'data empiris' tetapi slide tidak menampilkan data/angka; tidak ditambahkan.
   - mahasiswa 69 (P6): Angka pelanggan Vidio dan laporan Media Partners Asia tidak dapat diverifikasi dari slide (tanpa rujukan lengkap).
   - mahasiswa 71 (P7): Halaman ini secara visual dan topik merupakan kesimpulan presentasi Kelompok 7 (halaman 56-70), tetapi dipetakan ke Pertemuan 7 sesuai keputusan pemilik; ditandai dengan catatan konversi.
   - mahasiswa 80 (P7): Baris 1 kolom Contoh Penerapan ('Menyesuaikan konten berdasarkan ...') dan baris 3 kolom Dasar Segmentasi ('... atau keterikatan ...') serta Contoh Penerapan ('... berdasarkan ...') terpotong oleh batas kotak tabel; lapisan teks hanya memuat potongan huruf ('k', 'i', 'k il i'). Perlu file asli untuk melengkapi.
   - mahasiswa 80 (P7): Tahun sitasi 'Khasanah' pada baris 1 tidak tercantum.
   - mahasiswa 83 (P7): Foto ruang sidang dilewati sebagai ilustrasi; dapat ditambahkan jika pemilik menganggapnya informatif dan izinnya jelas.
   - mahasiswa 84 (P7): Foto promosi sinetron dilewati karena hak cipta dan adanya anak dalam foto; perlu keputusan pemilik bila ingin ditampilkan.
   - mahasiswa 93 (P8): Ejaan sumber "Lembaga Penyuaran Swasta" dipertahankan (kemungkinan salah ketik "Penyiaran").
   - mahasiswa 95 (P8): "Pada Modal" dipertahankan sesuai sumber (kemungkinan maksudnya "Padat Modal").
   - mahasiswa 95 (P8): "pengiklanan" dipertahankan sesuai sumber.
   - mahasiswa 97 (P8): Kolom kiri hanya berjudul "Tantangan Industri Televisi" tanpa subjudul butir sendiri; judul itu dipakai sebagai h2 halaman.
   - mahasiswa 102 (P8): Kata "menyangkan" dipertahankan sesuai sumber (kemungkinan "menayangkan").
   - mahasiswa 107 (P8): Resolusi foto asli rendah (379x270); hak cipta tangkapan layar TRANS7 perlu dikonfirmasi pemilik portal sebelum publikasi.
   - mahasiswa 108 (P8): Sitasi Pradityawati dan Sanjaya (2026) tidak disertai daftar pustaka lengkap di presentasi.
   - mahasiswa 108 (P8): Hak cipta tangkapan layar TRANS7 perlu dikonfirmasi.
   - mahasiswa 110 (P9): Urutan judul (Produksi Program Radio vs Program Radio Produksi) tidak tegas secara visual.
   - mahasiswa 110 (P9): Jam/tanggal "5:30 PM 9/10/2026" adalah ornamen template, tidak dijadikan fakta jadwal.
   - mahasiswa 131 (P9): "Islamic Histori" dan "Karna" dipertahankan sesuai sumber.
   - mahasiswa 134 (P9): Tanggal "9 OKTOBER 2026" pada bilah tugas tidak dijadikan fakta jadwal.
2. **Gambar ditambahkan atas permintaan pemilik (2026-11-23):** foto parlemen (mahasiswa 83), foto promosi sinetron (84), meme (19, 75, 76, 77), foto orang/suasana (42, 72 tanpa daftar nama, 73, 74, 82), ruang kontrol siaran (85), dan konsol studio radio (126). Sumber/hak cipta gambar tidak disebut di slide. Yang tetap tidak ditampilkan: ornamen template, foto stok generik tanpa informasi (mis. bidak catur, studio podcast, meja kosong), kucing/kartun penutup, dan avatar anggota (57) karena mewakili identitas mahasiswa. Rincian per halaman ada di audit pertemuan.
3. Izin publikasi gambar pihak ketiga (poster ASO Kominfo hlm. 37, infografik hlm. 44, tangkapan layar TRANS7 hlm. 107–108, peta konsentrasi media dosen hlm. 6) belum dikonfirmasi terpisah.

## Validasi

Dijalankan 2026-11-23 di `python3 -m http.server` lokal + Chrome headless (CDP):

| Pemeriksaan | Hasil |
| --- | --- |
| `node --check` `meetings.js`, `quizzes.js`, `exams.js`, `courses-registry.js` | Lulus |
| Perakitan: ID unik, `sections` cocok, `<img>` ada, alt terisi, ukuran cocok, path relatif; tidak ada string angka ≥8 digit (NIM) | Lulus (177 bagian, 34 gambar, 0 aset yatim) |
| `git check-ignore` aset publik | Tidak ada yang diabaikan |
| Pertemuan 1–9 pada 1440 / 768 / 390 px | Tidak ada overflow; 0 gambar rusak/melebar; 0 tautan TOC rusak; TOC samping di 1440 |
| Ukuran teks A+ (390 px), perkiraan zoom 200% | Tidak ada overflow |
| Kuis: semua benar / semua salah / campuran / belum lengkap | 100 / 0 / 70 / form ditolak |
| Tab UAS → tombol kuis, UTS belum tersedia, katalog 3 mata kuliah, link lama `manajemen-media-penyiaran/`, regresi mata kuliah lain | Berfungsi |
| Konsol | Hanya 404 `favicon.ico` (sudah ada sebelumnya) |

Belum dijalankan: pembaca layar, tinjauan manusia seluruh halaman, uji di subpath GitHub Pages sebenarnya.

## Pembaruan tampilan 2026-11-26

Atas permintaan pemilik, tampilan web dibuat seperti materi pembelajaran, bukan salinan presentasi:

- Blok “Sumber pertemuan ini”, subjudul sumber, keterangan “Sumber: … halaman N”, catatan konversi, penanda “perlu verifikasi”, dan nama/label kelompok **tidak lagi tampil**. Semuanya tetap ada sebagai komentar HTML di `content` dan komentar `// Sumber:` per pertemuan di `meetings.js`.
- Slide sampul, daftar anggota, agenda, penutup, dan tanya jawab disembunyikan (isi disimpan sebagai komentar). Pembatas topik tanpa isi juga disembunyikan; judul pertanyaan tanpa isi menjadi blok “Diskusi”.
- Judul “(lanjutan)” dan judul ganda berurutan digabung ke bagian sebelumnya; judul huruf kapital semua dirapikan.
- Pemetaan halaman di tabel audit tetap berlaku sebagai jejak sumber; ID bagian yang disembunyikan atau digabung tidak lagi muncul di daftar isi.
- Kesimpulan new media (mahasiswa hlm. 71) dipindah ke akhir Pertemuan 6 karena merupakan penutup topik new media.
- Meme penutup (hlm. 19, bertuliskan “…presentasinya sudah…”) dan foto perpustakaan pada slide tanya jawab (hlm. 42) ikut tersembunyi bersama bagian penutup/tanya jawabnya; asetnya tetap ada di `assets/media/`.
