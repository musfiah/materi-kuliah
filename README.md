# Portal Materi & Evaluasi Perkuliahan — Musfiah Saidah, M.Si

Portal akademik statis dengan tampilan platform belajar yang terinspirasi Coursera: warna biru-putih, font Lato, kartu mata kuliah, dan navigasi modul di samping area baca. Di-deploy langsung menggunakan **GitHub Pages**, tanpa build step atau Tailwind CDN. Font diambil dari Google Fonts dengan fallback Arial.

## Aturan desain dan kerja lintas agent

**Mulai dari [AGENTS.md](AGENTS.md)** sebelum mengubah desain, kode, atau materi.

| Dokumen | Kegunaan |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Aturan utama agent: desain yang disetujui, batas arsitektur, keselamatan, dan kriteria selesai |
| [docs/DESIGN.md](docs/DESIGN.md) | Warna, font, ukuran, kelas komponen, layout responsif, aksesibilitas, dan checklist pengujian |
| [docs/PDF-TO-WEB.md](docs/PDF-TO-WEB.md) | Konversi PDF secara tekstual dan visual tanpa kehilangan isi/gambar, serta contoh prompt |
| [docs/templates/MATERIAL-AUDIT.md](docs/templates/MATERIAL-AUDIT.md) | Template pemetaan setiap halaman PDF ke bagian web dan aset |

Untuk sesi baru, awali prompt dengan:

> Baca `AGENTS.md`, `README.md`, dan `docs/DESIGN.md` sebelum mengedit. Untuk pekerjaan materi/PDF, baca juga `docs/PDF-TO-WEB.md` dan gunakan `docs/templates/MATERIAL-AUDIT.md`. Pertahankan desain biru-putih/Lato yang disetujui. Jangan merangkum atau menghilangkan gambar/informasi tanpa persetujuan. Laporkan cakupan, perubahan, pengujian nyata, serta bagian yang belum terverifikasi.

Tidak semua agent/editor otomatis memuat `AGENTS.md`; rujukan eksplisit pada prompt tetap diperlukan. Aturan ini memandu kerja, bukan jaminan kepatuhan setiap model.

---

## Struktur Direktori (Clean Architecture & Separation of Concerns)

Proyek ini memisahkan **Kerangka Halaman (HTML)**, **Sistem Desain & Tipografi (CSS)**, **Logika Aplikasi (JS)**, dan **Konten Akademik per Mata Kuliah (Data)** agar mudah dipelihara dan dikembangkan:

```text
materi-kuliah/
├── .nojekyll                        # Menonaktifkan pemrosesan Jekyll di GitHub Pages
├── .gitignore                       # Mengabaikan berkas mentah (**/pdf/ dan **/extracted/)
├── index.html                       # Entry point utama portal (Root GitHub Pages)
├── README.md                        # Dokumentasi arsitektur & panduan penambahan materi
├── AGENTS.md                        # Aturan utama untuk agent
├── docs/
│   ├── DESIGN.md                    # Desain yang telah disetujui
│   ├── PDF-TO-WEB.md                 # Panduan konversi materi lengkap
│   └── templates/MATERIAL-AUDIT.md   # Template audit per halaman PDF
├── assets/
│   ├── css/
│   │   └── main.css                 # Tema platform belajar, layout responsif, dan gaya bacaan
│   └── js/
│       ├── app.js                   # State controller, URL routing, & preferensi baca mahasiswa
│       └── components/
│           └── renderer.js          # Komponen perender UI (Katalog, Ruang Baca, Kuis, UTS/UAS)
├── data/
│   ├── courses-registry.js          # Katalog & metadata seluruh mata kuliah
│   └── courses/
│       ├── perkembangan-teknologi-komunikasi/
│       │   ├── meetings.js          # Materi bacaan per pertemuan (Pertemuan 1 - 5)
│       │   ├── quizzes.js           # Soal kuis evaluasi interaktif per pertemuan
│       │   └── exams.js             # Panduan & soal UTS maupun UAS
│       └── komunikasi-persuasif/
│           ├── meetings.js          # Modul materi per pertemuan Komunikasi Persuasif
│           ├── quizzes.js           # Modul kuis evaluasi Komunikasi Persuasif
│           └── exams.js             # Modul UTS & UAS Komunikasi Persuasif
├── perkembangan-teknologi-komunikasi/
│   ├── index.html                   # Redirect otomatis ke ../?course=perkembangan-teknologi-komunikasi
│   └── pdf/                         # Berkas slide PDF mentah (diabaikan oleh Git)
├── komunikasi-persuasif/
│   ├── index.html                   # Redirect otomatis ke ../?course=komunikasi-persuasif
│   └── pdf/                         # Berkas slide PDF mentah (diabaikan oleh Git)
└── lawas/                           # Arsip versi lama (bukan bagian portal; jangan diubah)
    └── perkembangan-teknologi-komunikasi/
        └── index.html               # Halaman tunggal lama (Tailwind CDN) dari commit a322234
```

---

## Panduan Menambahkan Konten

Jika sumbernya PDF slide, ikuti [alur konversi lengkap](docs/PDF-TO-WEB.md) sebelum mengisi data. Contoh kode di bawah hanya menjelaskan format; bukan alasan menyingkat materi atau menebak metadata. Isi `readingTime` hanya jika merupakan estimasi yang dihitung dan dinyatakan sebagai estimasi, atau hilangkan jika tidak diperlukan.

Untuk konversi berikutnya, buat `assets/media/<slug>/pertemuan-XX/` bagi aset publik dan `docs/content/<slug>/pertemuan-XX.md` bagi audit. Sumber di `<slug>/pdf/` dan ekstraksi di `<slug>/extracted/` tetap lokal/diabaikan Git. Jangan menautkan gambar web ke folder terabaikan tersebut.

### 1. Menambah Pertemuan Baru pada Mata Kuliah yang Sudah Ada
Buka berkas `data/courses/<nama-matkul>/meetings.js`, lalu tambahkan objek pertemuan baru ke dalam array `meetings`:

```javascript
{
    number: 1,
    code: 'KP-01',
    badge: 'Pertemuan 1',
    title: 'Judul Materi Pertemuan',
    subtitle: 'Ringkasan singkat pokok bahasan pertemuan ini.',
    readingTime: '7 menit baca',
    sections: [
        { id: 'p1-pengantar', label: 'Pengantar Konsep' },
        { id: 'p1-teori', label: 'Teori Utama' }
    ],
    content: `
        <p class="editorial-lead" id="p1-pengantar">Paragraf pembuka...</p>
        <h2 id="p1-teori">Subjudul Materi</h2>
        <p>Penjelasan materi...</p>
    `
}
```

### 2. Menambah Kuis Evaluasi Per Pertemuan
Buka berkas `data/courses/<nama-matkul>/quizzes.js`, lalu tambahkan nomor pertemuan sebagai kunci objek:

```javascript
1: {
    meetingNumber: 1,
    title: 'Evaluasi Pertemuan 1',
    questions: [
        {
            q: 'Pertanyaan kuis?',
            options: ['Pilihan A', 'Pilihan B', 'Pilihan C', 'Pilihan D'],
            correct: 0, // Indeks jawaban benar (0 = A, 1 = B, dst.)
            exp: 'Penjelasan akademik mengapa jawaban tersebut benar.'
        }
    ]
}
```

### 3. Mengisi Soal / Panduan UTS & UAS
Buka berkas `data/courses/<nama-matkul>/exams.js`, ubah `available: true` pada objek `uts` atau `uas`, lalu isi properti `deadline`, `submissionChannel`, dan `content`.

### 4. Menambah Mata Kuliah Baru di Masa Depan
1. Buat folder baru di `data/courses/<slug-mata-kuliah>/` berisi `meetings.js`, `quizzes.js`, dan `exams.js`.
2. Daftarkan mata kuliah tersebut di dalam `data/courses-registry.js`.
3. Tambahkan pemanggilan `<script>` ketiga file data tersebut di bagian bawah `index.html`.
4. Isi metadata hanya dari sumber atau konfirmasi pemilik, simpan aset publik dan audit sesuai panduan, lalu uji fungsi serta layout terkait.

## Status materi dan batas dokumentasi

- `lawas/` berisi arsip halaman lama Perkembangan Teknologi Komunikasi (desain dan konten sebelum portal baru), disalin apa adanya dari commit `a322234`. Halaman ini terbit di GitHub Pages tetapi tidak ditautkan dari portal; tidak mengikuti `docs/DESIGN.md` dan **tidak boleh diubah** atau dijadikan acuan desain. Materinya belum dibandingkan dengan modul data yang baru.

- Modul data Perkembangan Teknologi Komunikasi memuat lima pertemuan hasil pekerjaan sebelumnya. Keberadaan data tersebut **bukan bukti seluruh halaman/gambar PDF sudah diaudit lengkap**; belum ada audit per halaman pada struktur dokumentasi ini.
- Komunikasi Persuasif sudah dikonversi dari tiga PDF (127 halaman) menjadi 8 pertemuan dan satu kuis review UAS, dengan audit per halaman di [docs/content/komunikasi-persuasif/](docs/content/komunikasi-persuasif/README.md). Izin publikasi disetujui pemilik; beberapa butir isi yang tidak jelas di sumber masih menunggu jawaban dosen.
- Metadata yang sudah ada di kode tidak otomatis berarti sudah diverifikasi terhadap sumber. Periksa kembali SKS, semester, jadwal, atribusi, dan ketentuan ujian saat audit materi.
- Komponen bacaan, tabel, studi kasus, dan langkah sudah ada. Gambar materi memakai `.lesson-figure`, `.figure-grid`, `.figure-description`, dan `.source-note` di `main.css` (termasuk aturan cetak). Belum ada komponen diagram interaktif atau konversi otomatis.
