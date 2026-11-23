# Audit konversi materi — [mata kuliah / pertemuan]

> Salin template ini ke `docs/content/<slug>/pertemuan-XX.md` setelah direktori dibuat. Ini template kosong, **bukan bukti bahwa materi sudah dikonversi atau diperiksa**. Jangan centang pekerjaan yang belum dilakukan. Baca [panduan konversi](../PDF-TO-WEB.md) dan [desain](../DESIGN.md). Saat disalin, sesuaikan tautan relatif dokumen ini.

## 1. Identitas dan cakupan

- Mata kuliah / slug:
- Pertemuan dan judul:
- Penanggung jawab konversi / peninjau:
- Tanggal pemeriksaan:
- Cakupan halaman dan sumber:
- Di luar cakupan:
- Dasar pembagian pertemuan (halaman/judul sumber atau konfirmasi pemilik):
- Status keseluruhan: **Belum diperiksa / Dalam proses / Perlu verifikasi / Terverifikasi dalam cakupan**
- Izin publikasi materi dan aset (dasar/konfirmasi, tanpa mengungkap data pribadi):

### Daftar sumber

Gunakan nomor halaman **fisik PDF (mulai 1)**; catat nomor slide tercetak jika berbeda. Identifikasi beberapa sumber dengan alias unik.

| Alias | Path/nama file lokal | Versi/tanggal atau SHA-256 | Jumlah halaman | Halaman cakupan | Hubungan dengan sumber lain |
| --- | --- | --- | --- | --- | --- |
| [sumber-a] | [path PDF] | [isi setelah diperiksa] | [jumlah] | [rentang] | [utama/pelengkap/soal] |

Jika sumber berubah, pemeriksaan lama tidak otomatis berlaku. Catat perubahan versi, halaman, aset, dan hasil verifikasi ulang pada bagian 8.

## 2. Pemetaan setiap halaman

**Satu baris per halaman**, termasuk sampul, kosong, pengulangan, dan penutup. Jika halaman berisi beberapa unsur, inventaris semuanya atau tambahkan rujukan rinci di bagian 3. Jangan menggabungkan rentang panjang menjadi satu baris “selesai”.

Status teks/visual: **Belum / Diperiksa / Perlu verifikasi**. Status hasil: **Belum / Dikonversi / Terverifikasi**. Dikonversi berarti sudah dimasukkan ke web; terverifikasi berarti sudah dibandingkan ulang dengan sumber.

| Sumber | Halaman PDF / nomor slide | Seluruh isi penting & relasi visual | Tujuan web (file, pertemuan, ID bagian) | ID aset/visual | Teks diperiksa | Visual diperiksa | Status hasil & alasan penanganan |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [alias] | [halaman] | [teks, contoh, pertanyaan, tabel, diagram, catatan kaki, sumber] | [tujuan] | [ID atau tidak ada] | Belum | Belum | Belum |

### Rekap cakupan

- Jumlah halaman dalam cakupan:
- Jumlah baris halaman unik yang dipetakan:
- Halaman dengan teks dan visual sudah diperiksa:
- Halaman sudah dikonversi:
- Halaman terverifikasi terhadap sumber:
- Halaman sampul/kosong/dekoratif/pengulangan (daftar dan alasan; bukan penghilangan diam-diam):
- Selisih atau halaman belum tertangani:

Jumlah halaman cakupan harus cocok dengan halaman unik pada tabel. Semua pengecualian harus memiliki alasan dan tujuan rujukan bila digabung.

## 3. Inventaris visual, tabel, rumus, dan sumber

**Satu baris per unsur informatif**, bukan satu baris per PDF. Diagram komposit harus dipastikan mencakup teks, panah, legenda, anotasi, skala, dan kredit yang relevan.

| ID unsur | Sumber & halaman | Jenis / isi / hubungan penting | Cara konversi | Aset publik atau ID HTML | Caption, alt, uraian teks, kredit/sitasi | Status visual/isi & izin |
| --- | --- | --- | --- | --- | --- | --- |
| [id] | [alias dan halaman] | [foto/grafik/tabel/rumus/dll.] | [ekstrak/render-crop/HTML/rekonstruksi] | [path relatif root portal atau ID] | [isi atau lokasi lengkap] | Belum |

Catat dimensi/resolusi/crop jika dibutuhkan untuk mengulang ekstraksi. Aset harus berada di `assets/media/<slug>/pertemuan-XX/`, bukan `<slug>/pdf/` atau `<slug>/extracted/`.

## 4. Keputusan adaptasi desain

- Komponen bersama yang digunakan:
- Layout sumber → layout web (termasuk susunan ponsel):
- Relasi visual dan warna bermakna yang dipertahankan:
- Alasan ekstrak/crop/rekonstruksi tiap visual:
- Informasi yang digabung atau dipindah, dan rujukan asalnya:
- Komponen/gaya baru yang benar-benar diimplementasikan dan diuji (bukan sekadar usulan):
- Interaksi tambahan jika diminta, dan alasan pedagogisnya:
- Bagian yang perlu sumber PPTX/media asli, jika ada:

## 5. Integritas materi dan ketidakpastian

| Temuan | Sumber & halaman | Dampak pada isi/publikasi | Tindakan / pertanyaan ke pemilik | Status |
| --- | --- | --- | --- | --- |
| [mis. label kabur, kunci tidak ada, izin belum jelas] | [asal] | [dampak] | [jangan mengarang] | Terbuka |

- Koreksi OCR/pemenggalan baris yang dilakukan:
- Koreksi substantif atau sumber yang tampak tidak konsisten (beserta keputusan/konfirmasi):
- Penjelasan atau soal tambahan buatan agent yang diminta (label, lokasi, dasar izin):
- Kelengkapan sitasi, catatan kaki, link, dan daftar pustaka:
- Kunci/pembahasan soal: [ada di sumber / dikonfirmasi pemilik / tidak tersedia]; asal:

## 6. Validasi

Tuliskan **perintah/langkah, hasil aktual, dan batasannya**. Tanda centang tanpa hasil bukan bukti validasi. Gunakan “tidak berlaku” dengan alasan jika diperlukan.

| Pemeriksaan | Perintah/langkah dan lingkungan | Hasil aktual / bukti | Status |
| --- | --- | --- | --- |
| Perbandingan ulang semua halaman cakupan | [halaman dan metode visual + teks] | [hasil] | Belum |
| Kelengkapan tabel, angka, gambar, rumus, sumber | [bandingkan inventaris] | [hasil] | Belum |
| Sintaks seluruh JS yang berubah | [node --check path yang benar] | [hasil] | Belum |
| Semua aset publik ada dan tidak diabaikan Git | [cek path dan aturan ignore] | [hasil] | Belum |
| Desktop 1440 px dan tablet 768 px | [browser/perangkat] | [hasil] | Belum |
| Ponsel 390 px, sidebar/drawer dan tabel/gambar | [browser/perangkat] | [hasil] | Belum |
| Zoom browser 200% | [langkah] | [overflow/keterbacaan] | Belum |
| Keyboard, fokus, daftar isi, alt/caption | [langkah] | [hasil] | Belum |
| Navigasi pertemuan, URL langsung/refresh/link lama | [URL relatif yang diuji] | [hasil] | Belum |
| Kuis benar/salah, skor dan pembahasan | [skenario terkait] | [hasil] | Belum |
| Cetak/simpan PDF | [halaman/visual/tabel/komponen terbuka] | [hasil] | Belum |
| Keamanan path GitHub Pages project site | [base path yang diuji] | [hasil] | Belum |

## 7. Kesimpulan serah terima

- Berkas data yang diubah:
- Berkas komponen/CSS yang diubah jika diperlukan:
- Halaman sumber yang selesai dikonversi:
- Jumlah/path aset publik yang disertakan:
- Jumlah visual yang terverifikasi / total visual informatif:
- Halaman atau unsur yang belum selesai:
- Penghalang publikasi dan konfirmasi yang dibutuhkan:
- Status akhir dan dasar penetapannya:

**Jangan menyatakan konversi lengkap jika ada informasi pembelajaran yang belum terwakili, visual belum diverifikasi, atau penghalang publikasi yang belum diselesaikan.**

## 8. Riwayat pembaruan sumber dan audit

| Tanggal | Sumber/versi lama → baru | Halaman/aset yang terdampak | Perubahan web & hasil pemeriksaan ulang | Peninjau |
| --- | --- | --- | --- | --- |
| [tanggal] | [identitas sumber] | [cakupan] | [hasil nyata] | [peninjau] |
