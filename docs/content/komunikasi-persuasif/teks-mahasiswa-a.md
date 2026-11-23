# Audit teks — Komunikasi Persuasif, mahasiswa A (halaman 1–39)

## 1. Identitas dan cakupan

- Jenis pekerjaan: **konversi teks saja**, bukan konversi PDF lengkap atau integrasi portal.
- Penanggung jawab: agent konversi teks; pemeriksaan visual/ekstraksi aset dilakukan oleh parent.
- Tanggal: 2026-11-23.
- Cakupan: halaman fisik PDF 1–39; alias sumber `mahasiswa`.
- Pembagian sesuai instruksi eksplisit pemilik: pertemuan 2 halaman 1–10 (Unsur), pertemuan 3 halaman 11–18 (Kredibilitas), pertemuan 4 halaman 19–39 (Pesan). Bukan dugaan jadwal dari PDF.
- Di luar cakupan: halaman 40–87, seluruh gambar/aset, CSS, data utama portal, kuis, dan publikasi.
- Status: **teks dikonversi dan dicocokkan dengan ekstraksi PDF; visual belum parentreview**.
- Izin publikasi: belum diperiksa dalam tugas teks ini; bukan persetujuan untuk memublikasikan materi atau atribusi individu.
- Aturan yang dibaca: [AGENTS.md](../../../AGENTS.md), [README.md](../../../README.md), [DESIGN.md](../../DESIGN.md), [PDF-TO-WEB.md](../../PDF-TO-WEB.md), [template audit](../../templates/MATERIAL-AUDIT.md).
- README inventaris sebelumnya menyatakan konversi belum dilakukan dan pembagian pertemuan belum dikonfirmasi. Catatan tersebut merupakan status historis; tugas ini hanya menghasilkan JSON teks terpisah dengan pemetaan dari instruksi terbaru, bukan mengubah data utama/README tersebut.

### Sumber dan keluaran

| Alias | Sumber lokal | SHA-256 | Jumlah halaman | Cakupan |
| --- | --- | --- | --- | --- |
| mahasiswa | `komunikasi-persuasif/pdf/PDF komunikasi persuasif mahasiswa.pdf` | `472805d9cb9146192e13764513e54c87efe2e07a96c32cef49f3aaf6fcf84de3` | 87 | 1–39 |

- Ekstraksi masukan: `komunikasi-persuasif/extracted/mahasiswa.json`; seluruh teks halaman 1–39 cocok persis dengan `PyMuPDF page.get_text()` dari PDF lokal saat pengerjaan.
- Keluaran: `komunikasi-persuasif/extracted/mahasiswa-a-parts.json` dengan `parts` per pertemuan dan `unresolved: []` untuk teks yang berhasil diekstrak. Daftar kosong ini **tidak** berarti visual, izin, atau publikasi telah diverifikasi.
- `sections` berisi satu entri per halaman; setiap ID menunjuk `<h2>` unik dalam `content`.
- JSON berada di folder ekstraksi yang diabaikan Git, sebagai artefak serah terima lokal bagi parent; belum menjadi materi web yang dipublikasikan.

## 2. Pemetaan setiap halaman

**VISUAL STATUS: belum parentreview untuk seluruh halaman 1–39.** Tidak ada gambar dibaca, dirender, diekstrak atau dimasukkan oleh agent teks. Tidak ada placeholder gambar dalam HTML. Pemeriksaan koordinat blok/span adalah pemeriksaan tekstual, **bukan** tinjauan visual.

Tujuan JSON di setiap baris merujuk `komunikasi-persuasif/extracted/mahasiswa-a-parts.json`; semua isi akademik tetap lengkap di HTML, sedangkan kolom catatan berikut hanya mendeskripsikan penanganan audit, bukan menggantikan isi.

| Sumber | Halaman fisik | Isi/penanganan teks | Tujuan (pertemuan; ID h2) | Aset/visual | Status teks | VISUAL STATUS | Status hasil |
| --- | --- | --- | --- | --- | --- | --- | --- |
| mahasiswa | 1 | Sampul; judul dan atribusi Kelompok 1 dipertahankan. | 2; `kp-mhs-p001` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 2 | Enam topik dipisahkan sebagai daftar; label multibaris digabung. | 2; `kp-mhs-p002` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 3 | Seluruh latar belakang, termasuk pernyataan enam unsur, dipertahankan. | 2; `kp-mhs-p003` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 4 | Definisi lengkap dan tiga karakteristik persuader. | 2; `kp-mhs-p004` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 5 | Definisi, strategi rasional/emosional, serta seluruh bentuk penyampaian. | 2; `kp-mhs-p005` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 6 | Definisi persuadee serta dua rute pengolahan dan contoh faktor penampilan persuader. | 2; `kp-mhs-p006` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 7 | Definisi media dan tiga perspektif beserta penjelasannya. | 2; `kp-mhs-p007` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 8 | Definisi, empat pasangan jenis, fungsi instruksional/motivasional, serta peran feedback. | 2; `kp-mhs-p008` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 9 | Definisi, tiga faktor penentu, contoh tenang/bising dan budaya, serta tiga efek. | 2; `kp-mhs-p009` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 10 | Kesimpulan asli lengkap; bukan ringkasan buatan konverter. | 2; `kp-mhs-p010` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 11 | Pertanyaan pemantik lengkap, atribusi Kelompok 2 dan tanggal asli. | 3; `kp-mhs-p011` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 12 | Dua pernyataan lengkap, atribusi dan tanggal; istilah Persuadee dipertahankan apa adanya. | 3; `kp-mhs-p012` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 13 | Definisi, pembentukan konsisten, kompetensi/kepercayaan/daya tarik; atribusi dan tanggal. | 3; `kp-mhs-p013` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 14 | Aristoteles 1926; Ethos–Reputasi / Otoritas, Logos–Argumentasi, Pathos–Emosional dipasangkan melalui koordinat y blok. | 3; `kp-mhs-p014` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 15 | Menurut Carl Hovland; penanda 01/02/03 dipasangkan dengan komponen melalui koordinat x span, bukan urutan stream. | 3; `kp-mhs-p015` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 16 | Tiga bentuk pengaruh dan label AUDIENS; atribusi/tanggal. Tidak mengarang relasi panah visual. | 3; `kp-mhs-p016` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 17 | Enam strategi lengkap diurutkan 01–06 melalui posisi nomor/label blok; atribusi dan tanggal. | 3; `kp-mhs-p017` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 18 | Seluruh kesimpulan asli dipisah menjadi paragraf; atribusi dan tanggal dipertahankan. | 3; `kp-mhs-p018` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 19 | Sampul; ajakan belajar, judul lengkap dan atribusi Kelompok IV. | 4; `kp-mhs-p019` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 20 | Seluruh pendahuluan dipertahankan, termasuk penolakan perintah dan faktor keberhasilan. | 4; `kp-mhs-p020` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 21 | Pertanyaan pengantar lengkap; tidak diberi jawaban tambahan. | 4; `kp-mhs-p021` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 22 | Definisi, seluruh sasaran pengaruh, alur berpikir/sikap/tindakan, perbedaan dari perintah. | 4; `kp-mhs-p022` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 23 | Lima unsur lengkap; semua contoh simbol, bukti, cerita, dan unsur nonverbal. | 4; `kp-mhs-p023` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 24 | Lima prinsip lengkap; alasan, fakta, pengalaman, nilai dan kedua pendekatan. | 4; `kp-mhs-p024` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 25 | Halaman pembatas Sistem Model AIDA dan empat istilah kepanjangannya. | 4; `kp-mhs-p025` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 26 | Definisi Model AIDA dan penjelasan keseluruhan tahapan. | 4; `kp-mhs-p026` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 27 | Attention; seluruh cara menarik perhatian. Pemenggalan kata- / kata disatukan menjadi kata-kata. | 4; `kp-mhs-p027` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 28 | Interest; ketertarikan, rasa ingin tahu dan pencarian informasi. | 4; `kp-mhs-p028` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 29 | Desire; manfaat/nilai yang relevan dengan kebutuhan dan motivasi. | 4; `kp-mhs-p029` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 30 | Action; seluruh penjelasan serta contoh keputusan membeli produk. | 4; `kp-mhs-p030` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 31 | Alur lengkap dua bahasa dan seluruh nasihat penyusunan pesan dipertahankan. | 4; `kp-mhs-p031` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 32 | Pengulangan teks halaman 31 dipertahankan utuh sebagai halaman/ID tersendiri sesuai permintaan. | 4; `kp-mhs-p032` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 33 | Tiga domain, semua uraian dan alur turun/Intinya dipertahankan; tanda tanya asli tidak ditebak. | 4; `kp-mhs-p033` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 34 | Struktur tiga bagian, seluruh subbutir dan gambaran alur; kolom penutup dipindah sesudah pertengahan. | 4; `kp-mhs-p034` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 35 | Halaman pembatas Tujuan Pesan Komunikasi Persuasif; judul lengkap. | 4; `kp-mhs-p035` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 36 | Tujuan 1–3 dengan semua penjelasan Maksudnya; tanda tanya asli dipertahankan. | 4; `kp-mhs-p036` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 37 | Tujuan 4–6 lengkap, daftar berlanjut mulai 4. | 4; `kp-mhs-p037` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 38 | Tujuan 7–9 lengkap, daftar berlanjut mulai 7; tanda tanya asli dipertahankan. | 4; `kp-mhs-p038` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |
| mahasiswa | 39 | Tujuan 10–11 lengkap termasuk batas efektivitas dan kebebasan respons sadar; daftar mulai 10. | 4; `kp-mhs-p039` | Di luar tugas teks; parent | Diperiksa terhadap ekstraksi | **belum parentreview** | HTML teks dalam JSON; belum terintegrasi |

### Rekap cakupan

- Halaman dalam cakupan/baris audit unik: **39/39**.
- Halaman berisi HTML teks: **39**, dalam tiga bagian pertemuan: 10 + 8 + 21 halaman.
- ID `<h2>`/entri `sections`: **39/39**, unik dan saling cocok.
- Halaman dicocokkan tekstual terhadap PDF: **39**; halaman diverifikasi visual oleh agent ini: **0**.
- Sampul/pembatas/pertanyaan singkat tetap dipertahankan: halaman 1, 11, 19, 21, 25, 35.
- Pengulangan halaman 31–32: keduanya dipertahankan utuh dengan ID berbeda.
- Tidak ada halaman dihilangkan atau digantikan oleh ringkasan; tidak ada deduplikasi lintas halaman. Tidak ditemukan pengulangan shadow persis yang perlu dihapus pada teks cakupan; teks sumber tetap dipertahankan.

## 3. Inventaris visual, tabel, rumus, dan sumber

- **Seluruh inventaris/tinjauan visual menunggu parent; belum parentreview.** Tidak ada klaim tentang jumlah/jenis/kelengkapan visual informatif.
- Tidak menambahkan `<img>`, `<figure>`, placeholder, aset atau tautan media. Parent menyisipkan visual per halaman sesudah peninjauan sendiri.
- Teks yang berbentuk daftar/kelompok dijadikan `<ul>`/`<ol>`; tidak menyimpulkan adanya tabel dari susunan kolom semata.
- Sumber teori yang tertulis dipertahankan: `(Aristoteles 1926)` halaman 14 dan `Menurut Carl Hovland` halaman 15. Tidak mengarang bibliografi, tahun lain, atau tautan.
- Atribusi Kelompok 1 (halaman 1), Kelompok 2 beserta `Sep, 22 2026` pada setiap halaman 11–18, dan Kelompok IV (halaman 19) tetap ada.
- Panah teks AIDA dan hierarki dipertahankan. Relasi pasangan halaman 14 serta nomor/label halaman 15 dan 17 ditentukan dari koordinat blok/span PDF, tetap memerlukan pembandingan visual oleh parent.

## 4. Adaptasi semantik dan pelestarian teks

- Setiap halaman mempunyai `<h2 id="kp-mhs-pNNN">` dari judul/pertanyaan asli. Judul yang keluar sesudah isi dalam stream PDF dipindah ke awal halaman secara semantik.
- Paragraf disatukan dari pemenggalan baris, dengan normalisasi whitespace tanpa meringkas kalimat. Pemenggalan `kata-` + `kata` halaman 27 disatukan menjadi `kata-kata`.
- Judul subkelompok memakai `<h3>`; daftar memakai `<ul>` atau `<ol>`, termasuk subdaftar struktur pesan halaman 34. Tujuan 4–11 memakai `ol start` agar nomor tetap berlanjut.
- Halaman 14: pasangan Ethos, Logos, Pathos dengan tiga uraian disusun menurut keselarasan koordinat y.
- Halaman 15: urutan stream `03, 01, 02` diperbaiki menjadi kelompok kiri-ke-kanan `01 Keterpercayaan (trustworthiness)`, `02 Keahlian (expertise)`, `03 Daya Tarik Sumber (attractiveness)` menurut koordinat x span. Nomor nol awal dipertahankan sebagai teks.
- Halaman 17: urutan 01–06 diperbaiki menurut nomor/label blok: Meningkatkan keahlian; Dapat dipercaya; Berdasarkan fakta; Memperlihatkan antusiasme; Menyesuaikan gaya komunikasi dengan audiens; Membangun reputasi positif.
- Halaman 34: Permulaan → Pertengahan → Penutup, beserta seluruh butirnya, alih-alih membaca kolom kanan sebelum kiri selesai.
- Markup hanya heading, paragraf, daftar dan penekanan semantik; teks di-escape. Tidak menambah CSS, gaya inline, pustaka, soal, jawaban atau penjelasan akademik baru.

## 5. Integritas dan ketidakpastian

| Temuan | Halaman | Penanganan | Status |
| --- | --- | --- | --- |
| Pemeriksaan gambar/diagram dan relasi visual tidak dilakukan | 1–39 | Parent menangani; jangan menyebut konversi PDF lengkap | **belum parentreview** |
| Sumber menulis “Persuadee berkredibilitas tinggi” | 12 | Dipertahankan, tidak diam-diam diganti menjadi persuader | Perlu konfirmasi koreksi substantif bila diinginkan |
| Ejaan/struktur kalimat sumber tidak selalu baku, misalnya “di bangun” dan “Semakin,” | 13, 18 dan lainnya | Teks dipertahankan, hanya whitespace dinormalisasi | Tidak dikoreksi substantif |
| Karakter `?` muncul pada teks biasa, misalnya “Pemikiran?”, “Intinya:?” dan “Gambaran:?Pembuka” | 33–34, 36, 38 | Dipertahankan sesuai ekstraksi, bukan ditebak sebagai bullet atau jeda | Parent dapat membandingkan visual sebelum koreksi |
| Izin publikasi | 1–39 | Tidak diperiksa/diasumsikan dalam tugas teks | Terbuka |

Tidak ada bagian teks hasil ekstraksi yang gagal dimasukkan; `unresolved` JSON kosong hanya untuk cakupan teks. Tidak ada konten tambahan buatan agent atau kunci jawaban baru. Kelengkapan informasi yang hanya berada dalam gambar tidak dinilai di sini.

## 6. Validasi yang benar-benar dijalankan

| Pemeriksaan | Metode | Hasil dan batasan |
| --- | --- | --- |
| Identitas sumber | SHA-256 lokal dan `len(fitz.open(...))` | 87 halaman; hash tercantum di atas |
| Kesesuaian ekstraksi | Perbandingan string per halaman antara JSON masukan dan `page.get_text()` | 39/39 persis sama; bukan pemeriksaan visual |
| Cakupan baris sumber | Setiap baris nonkosong dilacak saat dikonversi | Semua baris terpakai tepat sekali pada halaman masing-masing |
| Kelengkapan kata | Counter token Unicode sumber vs hasil parse HTML per halaman; abaikan tanda baca/numerasi daftar; normalisasi kata-kata halaman 27 | 39/39 cocok; tidak membuktikan relasi visual |
| Struktur JSON dan pemetaan | Parse JSON; periksa pertemuan/rentang/sections/ID | Tiga parts; halaman 1–39 tanpa celah; 39 ID cocok dan unik |
| Struktur HTML | Python `HTMLParser` dengan pemeriksaan stack tag dan whitelist atribut/elemen | Tag seimbang; tidak ada gambar, placeholder, script atau HTML hasil ekstraksi mentah |
| Teks pengulangan | Perbandingan konten halaman 31–32 tanpa ID masing-masing | Tetap sama; kedua halaman dipertahankan |
| JavaScript | Tidak berlaku | Tidak ada berkas JS diubah |
| Desktop, ponsel, keyboard, zoom, cetak, navigasi portal | Tidak dijalankan | Artefak JSON lokal belum diintegrasikan; parent melakukan validasi UI setelah integrasi |
| Aset/visual dan izin | Tidak dijalankan | Di luar tugas teks; **belum parentreview** |

## 7. Serah terima

- Berkas keluaran: `komunikasi-persuasif/extracted/mahasiswa-a-parts.json` dan audit ini, `docs/content/komunikasi-persuasif/teks-mahasiswa-a.md`.
- Cakupan teks: mahasiswa halaman 1–39 → pertemuan 2, 3, 4 sesuai pemetaan instruksi.
- Aset yang disertakan: **0**; tidak ada gambar dibaca.
- Belum selesai untuk konversi penuh: semua tinjauan/penyisipan visual, verifikasi izin, integrasi data utama, dan pengujian UI oleh parent.
- Status akhir: **artefak konversi teks selesai dalam cakupan; bukan konversi PDF terverifikasi lengkap**.

## 8. Riwayat

| Tanggal | Sumber | Cakupan | Perubahan | Peninjau |
| --- | --- | --- | --- | --- |
| 2026-11-23 | mahasiswa; hash di bagian 1 | 1–39 | Konversi teks ke JSON semantik; audit satu baris/halaman | Agent teks; visual belum parentreview |
