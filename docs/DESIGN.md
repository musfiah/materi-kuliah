# Pedoman desain portal perkuliahan

## Status dan ruang lingkup

Desain putih–biru yang terinspirasi pola platform pembelajaran Coursera **telah disetujui pengguna**. Pertahankan arah ini pada katalog, navigasi mata kuliah, bacaan, kuis, dan panduan ujian; jangan mendesain ulang ketika tugas hanya menambahkan materi.

Dokumen ini mengatur UI dan penyajian materi. Instruksi pengguna yang secara eksplisit meminta perubahan desain dapat mengubah ketentuan ini; jangan menafsirkan permintaan konversi PDF sebagai persetujuan mengganti tema. Jika perubahan desain disetujui, selaraskan implementasi dan pedomannya dalam lingkup tugas tersebut.

Baca bersama [instruksi agen proyek](../AGENTS.md) dan [alur PDF ke web](PDF-TO-WEB.md). Agen yang bekerja pada UI atau materi perlu membuka dokumen yang relevan secara eksplisit; jangan mengasumsikan setiap alat atau agen otomatis membaca `AGENTS.md` maupun dokumen ini.

Rujukan implementasi saat ini:

- `assets/css/main.css`: token, kelas bersama, breakpoint, dan aturan cetak.
- `assets/js/components/renderer.js`: struktur katalog, pembaca pertemuan, kuis, dan ujian.
- `assets/js/app.js`: navigasi, drawer, perhitungan skor, dan pengiriman kuis ke Google Apps Script.
- `index.html`: kerangka portal, pemuatan font, aset, dan kontrol bacaan.

## Identitas visual yang harus dipertahankan

- Gunakan latar putih, teks gelap, garis pembatas netral, dan biru utama **`#0056d2`**. Prioritaskan token CSS yang ada, bukan warna baru per halaman.
- Token utama: `--accent-primary: #0056d2`, `--accent-primary-hover: #00419e`, `--accent-soft: #edf4ff`, `--secondary-accent: #143c83`.
- Permukaan: `--bg-canvas` dan `--bg-surface` putih; `--bg-subtle: #f5f7f8`. Teks: `--ink-primary: #1f1f1f`, `--ink-secondary: #373a3c`, `--ink-muted: #59616a`. Garis utama: `--border-default: #d6dbe1`.
- Utamakan hierarki teks, ruang kosong, pemisah, dan bidang biru muda untuk orientasi belajar. Jangan membuat setiap paragraf menjadi kartu.
- Radius bersahaja mengikuti komponen: tombol sekitar 4px, komponen isi 5–6px, panel bacaan 8px, kartu katalog 12px. Pertahankan bayangan ringan kartu dan bayangan fungsional drawer/popover; jangan memperbesarnya menjadi efek dekoratif dominan.
- Inspirasi Coursera adalah pola navigasi dan keterbacaan, **bukan penyalinan identitas**. Pertahankan merek portal sendiri; jangan memakai logo, merek, klaim afiliasi, atau aset bermerek Coursera.
- Jangan menambahkan rating, jumlah peserta, sertifikat, progres penyelesaian, atau statistik rekaan. Status hanya boleh berasal dari data/fungsi nyata.

### Larangan regresi visual

Jangan kembali ke tema krem/terracotta, latar kertas antik, atau serif sebagai identitas utama. Hindari klise tampilan generatif: gradien dekoratif, kilau/neon, efek kaca, radius sangat besar, bayangan berat, dan hero raksasa yang menggeser materi ke bawah. Warna semantik pada materi sumber dan umpan balik benar/salah bukan pelanggaran palet portal.

## Tipografi dan keterbacaan

- Font standar adalah **Lato**, bobot **400, 700, 900**, dengan fallback **Arial, sans-serif** sesuai `--font-sans`. Gunakan 400 untuk bacaan, 700 untuk penekanan/kontrol, dan 900 untuk judul utama yang sudah menggunakannya.
- UI umumnya 14–16px. Metadata ringkas dapat mengikuti ukuran 12–13px yang sudah ada; jangan mengecilkan isi utama demi memadatkan halaman.
- `.academic-prose` memakai ukuran `1.0625rem` (17px pada ukuran akar 16px), tinggi baris **1.8**, dan lebar maksimum **72ch**.
- Pengatur ukuran teks dan pilihan font di header **dihapus atas permintaan pemilik (2026-11-23)**. Jangan menambahkannya kembali tanpa permintaan; keterbacaan bergantung pada ukuran dasar yang lapang dan zoom browser, jadi jangan menonaktifkan atau menghambat zoom.
- Judul harus responsif, bukan berukuran poster tetap: hero memakai `clamp(34px, 3.7vw, 50px)`, judul pertemuan `clamp(26px, 2.3vw, 34px)`, dan judul ringkasan mata kuliah `clamp(24px, 2.4vw, 34px)` dengan penyesuaian seluler yang ada.
- Di dalam prosa, gunakan hierarki HTML yang benar: `h2` sekitar `1.45em`, `h3` `1.2em`, `h4` `1.05em`. Jangan memakai paragraf tebal sebagai pengganti semua heading atau memilih tingkat heading hanya demi ukuran visual.
- Biarkan teks mengalir dan membungkus; jangan mengunci tinggi blok yang dapat memotong judul, terjemahan, atau teks saat diperbesar.

## Tata letak responsif

- Desktop di atas 1023px menggunakan sidebar mata kuliah di kiri dalam alur workspace, dengan posisi sticky. Lebar dasarnya 290px dan menjadi 255px pada breakpoint maksimum 1199px.
- Pada **lebar ≤1023px**, sidebar menjadi drawer dengan backdrop, tombol buka/tutup, penguncian gulir latar saat terbuka, serta perilaku fokus dan Escape yang dipertahankan. Jangan membiarkan drawer menutupi konten secara permanen.
- Grid katalog menggunakan dua kolom; pada **lebar ≤699px** menjadi **satu kolom**. Panduan belajar dan metadata ujian juga menumpuk sesuai CSS saat ini. Jangan memaksa semua `.step-grid` menjadi satu kolom jika kartu masih muat secara alami.
- TOC samping desktop `.lesson-toc` hanya ditampilkan pada **lebar ≥1440px**, dengan kolom bacaan fleksibel dan kolom TOC 200px. Di bawahnya gunakan `.mobile-toc` berbasis `details`/`summary`, termasuk pada tablet dan desktop yang lebih sempit.
- Pertahankan `min-width: 0` pada area fleksibel/grid agar konten tidak memaksa halaman melebar. Tidak boleh ada gulir horizontal seluruh halaman; tabel lebar atau deretan pilihan dapat memakai area gulir lokal yang jelas.
- Gunakan ruang dan padding adaptif yang ada. Jangan menyamakan ukuran halaman dengan dimensi slide atau kanvas PDF.

## Pemetaan kelas semantik yang sudah tersedia

Gunakan nama berikut persis seperti implementasi. Kelas memberi gaya, tetapi tidak menggantikan elemen HTML semantik, label, atau atribut aksesibilitas.

| Kebutuhan | Kelas saat ini dan pemakaian |
| --- | --- |
| Kerangka portal | `.institution-bar`, `.site-header`, `.header-inner`, `.brand`, `.header-nav`, `.portal-workspace`, `.site-footer` |
| Akses cepat | `.skip-link` |
| Tombol | `.button` dengan `.button-primary`, `.button-secondary`, atau `.button-text` |
| Label ringkas | `.eyebrow`, `.badge`, `.badge-muted` |
| Katalog | `.catalog-hero`, `.hero-copy`, `.catalog-section`, `.section-heading`, `.course-grid`, `.course-card` |
| Isi kartu mata kuliah | `.course-cover` dengan `.cover-1`/`.cover-2`, `.cover-subject`, `.cover-symbol`, `.course-card-body`, `.course-provider`, `.course-card-title`, `.course-description`, `.course-facts`, `.course-card-footer` |
| Panduan belajar | `.learning-guide`, `.guide-grid`, `.guide-item` |
| Sidebar/drawer | `.course-sidebar`, `.sidebar-top`, `.sidebar-back`, `.sidebar-course-name`, `.sidebar-label`, `.module-list`, `.module-link`, `.module-number`, `.sidebar-evaluations`, `.sidebar-footer`, `.menu-toggle`, `.sidebar-close`, `.sidebar-backdrop`; status terbuka pada `body.sidebar-open` |
| Ringkasan dan navigasi mata kuliah | `.course-overview`, `.breadcrumbs`, `.overview-byline`, `.course-tabs`, `.course-content`, `.module-strip`, `.module-chip` dengan `.is-active` |
| Panel bacaan | `.reader-layout`, `.lesson-paper`, `.lesson-header`, `.lesson-meta`, `.lesson-title`, `.lesson-subtitle`, `.lesson-byline`, `.lesson-actions` |
| Daftar isi | `.lesson-toc` untuk samping desktop; `.mobile-toc` untuk versi lipat; keduanya memakai `.toc-list` |
| Isi materi/ujian | `.academic-prose` sebagai pembungkus prosa; `.editorial-lead` untuk paragraf pengantar |
| Kutipan | `.editorial-quote` pada kutipan; gunakan `cite` untuk atribusi |
| Kotak konsep/catatan | `.academic-box` dengan `.academic-box-header` |
| Studi kasus | `.case-study-block` dengan `.case-study-label` |
| Tabel | `.table-wrapper` membungkus elemen `table.academic-table`; gunakan header tabel yang tepat |
| Daftar konsep | `.concept-list`, `.concept-item`, `.concept-index` |
| Gambar materi | `figure.lesson-figure` dengan `img[alt][width][height]` dan `figcaption`; `.figure-grid`, `.figure-description`, `.source-note` |
| Tahapan/proses sederhana | `.step-grid`, `.step-card`, `.step-card-num`; bukan mesin diagram universal |
| Metadata lama | `.font-mono-meta` saat ini memakai sans-serif; namanya bukan alasan memperkenalkan font monospace baru |
| Akhir materi | `.lesson-footer`, `.practice-callout`, `.lesson-pagination`, `.pagination-link` |
| Kuis | `.quiz-layout`, `.quiz-paper`, `.question` pada `fieldset`, `.question-number`, `.question-options`, `.answer-option` pada `label`, `.quiz-actions` |
| Identitas & status kuis | `fieldset.quiz-identity` dengan `.identity-grid`; status kirim `.quiz-result.quiz-status` dengan `.is-success` atau `.is-error` |
| Ujian | `.exam-switch`, `.exam-paper`, `.exam-meta`, `.exam-status` |
| Data belum tersedia | `.empty-state`, `.empty-icon`, `.sidebar-empty`; jangan menggantinya dengan isi rekaan |

Renderer membungkus `meeting.content` dan `examData.content` dengan `.academic-prose`. Isi data tidak perlu menduplikasi header, sidebar, kerangka portal, atau pembungkus prosa tersebut. ID heading harus unik dan sesuai dengan tautan daftar isi pada `meeting.sections`.

Jangan memakai kelas utility Tailwind atau menganggap nama kelas dari contoh/desain lain tersedia. Untuk kebutuhan baru, periksa CSS terlebih dahulu. Gambar materi memakai `figure.lesson-figure` (gambar responsif, caption, tidak terpotong saat cetak), `.figure-grid` untuk beberapa gambar berdampingan, `.figure-description` untuk uraian teks visual kompleks, dan `.source-note` untuk sumber/catatan konversi. **Komponen diagram interaktif belum tersedia**: jika diperlukan, implementasikan kelas semantik yang dapat digunakan ulang dan tambahkan definisinya secara eksplisit ke CSS bersama dalam tugas yang mengizinkan perubahan itu. Jangan menyebut kelas yang belum didefinisikan sebagai fitur yang sudah bekerja; jangan menambah gaya satu kali yang hanya cocok untuk satu PDF.

## Kesetiaan isi PDF dan konsistensi portal

Bedakan **isi akademik sumber** dari **kerangka antarmuka global**:

1. Header, navigasi, tombol, panel bacaan, dan tipografi dasar mengikuti desain portal yang konsisten, bukan tema tiap PDF.
2. Pertahankan makna, urutan logis, istilah, kutipan, sumber, data, rumus, hubungan antarkonsep, serta gambar/diagram asli yang membawa informasi. Jangan menghapus diagram karena sulit diekstrak atau menggantinya dengan hiasan generik.
3. Pertahankan pengodean warna semantik pada diagram, kategori, legenda, dan grafik. Jangan memaksa semua isi menjadi biru portal. **Jangan mewarnai ulang foto atau grafik**, memakai filter warna merek, maupun mengubah warna yang membedakan kelompok data.
4. Simpan gambar asli dengan rasio aspek yang benar, teks alternatif bermakna, dan keterangan/sumber bila tersedia. Diagram kompleks memerlukan penjelasan tekstual yang memadai, bukan hanya alt berupa “gambar”. Jangan meregangkan atau memangkas bagian informatif.
5. Jika diagram perlu dibuat ulang, pertahankan label, arah panah, hubungan, legenda, nilai, dan makna warna; jangan mengarang elemen. Gunakan komponen responsif yang dapat digunakan ulang, dengan CSS yang benar-benar ditambahkan dan diuji. Ketidakjelasan sumber harus ditandai, bukan ditebak.
6. Jangan menyalin font PDF yang sangat kecil, posisi absolut setiap elemen, pemisah halaman buatan, atau kanvas berdimensi tetap. Ubah tata letak menjadi aliran HTML responsif: paragraf, heading, daftar, tabel, dan kelompok konsep sesuai maknanya.
7. Tabel tetap tabel dan kutipan tetap kutipan. Jika elemen perlu digulir untuk menjaga keterbacaan, batasi gulir pada elemen itu; jangan mengecilkan seluruh halaman hingga teks tidak terbaca.

Kesetiaan sumber bukan penyalinan piksel PDF, dan konsistensi UI bukan alasan menghilangkan informasi visual asli. Langkah pengolahan dan pemeriksaan isi mengikuti [alur PDF ke web](PDF-TO-WEB.md).

## Aksesibilitas dan perilaku

- Semua tautan, tombol, pengaturan bacaan, TOC, drawer, dan pilihan jawaban harus dapat digunakan dengan keyboard. Pertahankan skip link, fokus yang terlihat, urutan fokus logis, penanganan Escape, serta pengelolaan fokus drawer.
- Berikan nama aksesibel pada kontrol ikon. Pertahankan hubungan `label`–input, `fieldset`–`legend`, `aria-controls`, `aria-expanded`, `aria-pressed`, dan `aria-current` sesuai fungsi yang sudah ada; jangan menambahkan peran ARIA yang tidak disertai perilakunya.
- Pertahankan status pengiriman kuis sebagai `role="status"` dengan `aria-live="polite"`. Berhasil/gagal disampaikan lewat teks, bukan warna saja.
- Pastikan kontras teks biasa minimal 4.5:1, teks besar 3:1, dan indikator kontrol/fokus yang relevan 3:1 terhadap warna sekitarnya. Periksa kembali saat menambah pasangan warna, terutama pada gambar atau latar berwarna.
- Uji pembesaran teks/zoom browser setidaknya 200%. Jangan memotong teks, menyembunyikan fungsi penting, atau menonaktifkan zoom untuk mempertahankan tata letak.
- Hormati `prefers-reduced-motion: reduce`; jangan menambah animasi, transisi, atau gulir halus yang mengabaikan preferensi itu.
- Pertahankan gaya cetak: sembunyikan kerangka navigasi dan kontrol, gunakan isi putih dengan teks terbaca, hindari heading terpisah dari isinya, dan periksa tabel/gambar tidak terpotong. Jangan menghilangkan gambar akademik atau legenda warna yang diperlukan untuk memahami materi saat dicetak.

## Batas teknis dan pelestarian fungsi

- Proyek tetap situs statis HTML/CSS/JavaScript untuk **GitHub Pages**. Tidak perlu Tailwind, framework baru, bundler, langkah build, atau server aplikasi. Satu-satunya layanan eksternal untuk data adalah Web App Google Apps Script penerima hasil kuis (lihat `docs/QUIZ-GOOGLE-SHEETS.md`).
- Gunakan aset dan jalur relatif yang sesuai lokasi dokumen. Hindari jalur berawalan `/` yang mengasumsikan situs berada di akar domain; uji tautan pada deployment di subdirektori repositori.
- Gunakan komponen, token, dan pola yang sudah ada. Jangan mengganti sistem renderer atau model data hanya untuk menambah materi.
- Perubahan visual tidak boleh merusak katalog, pembukaan mata kuliah, pemilihan pertemuan, tab materi/kuis/ujian, URL/riwayat navigasi, TOC, tombol sebelumnya/berikutnya, atau cetak.
- Pertahankan ID dan pengait peristiwa yang dipakai aplikasi, termasuk `portal-main-view`, `portal-sidebar`, `portal-quiz-form`, dan `portal-quiz-result`, kecuali perubahan fungsi itu memang diminta dan seluruh pemanggil ikut diselaraskan.
- Alur kuis: satu kuis per mata kuliah → isi nama, NIM, kelas (mata kuliah otomatis, hanya-baca) → jawab **semua** soal (validasi wajib) → kirim. Skor dihitung di browser dengan `Math.round(jumlahBenar / jumlahSoal * 100)` dan dikirim bersama jawaban tiap soal ke Google Spreadsheet. Halaman hanya menampilkan status “Berhasil dikirim”, NIM duplikat, atau gagal; **jangan menampilkan skor, benar/salah, pembahasan, atau kunci**. Jangan mengubah kunci atau rumus dalam tugas desain.
- Kunci dan skor berada di browser sehingga dapat dilihat atau dimanipulasi oleh pengguna yang paham teknis; jangan mengklaim kuis aman sebagai ujian resmi.

## Daftar periksa sebelum menyatakan selesai

Untuk perubahan UI, CSS, renderer, atau materi yang memengaruhi tata letak, lakukan pemeriksaan berikut dan laporkan mana yang benar-benar dijalankan:

- **390px:** katalog satu kolom, judul membungkus, kontrol tetap terjangkau, drawer dapat dibuka/ditutup, TOC lipat bekerja, prosa/gambar/tabel tidak melebarkan halaman.
- **768px:** sidebar masih drawer, katalog dua kolom sesuai CSS, TOC tetap lipat, tabel dan komponen materi tetap terbaca.
- **1440px:** sidebar desktop dan TOC samping terlihat pada pembaca, lebar prosa tetap dibatasi, area bacaan tidak tertindih navigasi.
- **Keyboard:** uji Tab/Shift+Tab, Enter/Space pada kontrol yang sesuai, Escape pada drawer, skip link, fokus terlihat, pemilihan radio, dan pengiriman kuis tanpa mouse.
- **Bacaan:** uji zoom browser 200%, kontras, dan reduced motion. Periksa pratinjau cetak, termasuk tabel dan gambar.
- **Isi:** bandingkan hasil dengan PDF untuk label, data, kutipan, diagram, legenda, dan makna warna; periksa tautan serta target TOC.
- **Kuis:** uji identitas kosong, NIM non-angka, soal belum lengkap (ditolak), endpoint kosong (pesan belum aktif), kiriman berhasil, NIM duplikat, dan gangguan koneksi. Pastikan payload berisi skor yang benar (semua benar 100, semua salah 0, campuran sesuai pembulatan) dan tidak ada skor/kunci yang tampil di halaman.
- **Regresi portal:** buka katalog, materi, kuis, panduan UTS/UAS, dan status belum tersedia; periksa navigasi sebelumnya/berikutnya, tombol kembali/maju browser, serta tautan/aset relatif.

Jangan menyatakan pengujian visual, keyboard, atau skor lulus bila belum dilakukan. Jika alat pengujian tidak tersedia, tuliskan keterbatasan dan pemeriksaan yang masih perlu dilakukan. Perubahan dokumentasi saja cukup diperiksa isi, rujukan, dan lingkup berkasnya; tidak perlu mengklaim pengujian aplikasi.
