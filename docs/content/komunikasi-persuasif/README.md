# Konversi Komunikasi Persuasif — ringkasan dan validasi

Status: **dikonversi dan diintegrasikan ke portal (8 pertemuan + kuis review UAS); izin publikasi disetujui pemilik; beberapa butir isi menunggu jawaban dosen**.

## Sumber lokal

| Alias | Nama file di `komunikasi-persuasif/pdf/` | Halaman | SHA-256 |
| --- | --- | --- | --- |
| dosen | materi dosen_Komunikasi persuasif.pdf | 37 | 1e9ce8660060cd60d660315a571b78372f43287a9a54daaeff8b56dc0e64b36f |
| mahasiswa | PDF komunikasi persuasif mahasiswa.pdf | 87 | 472805d9cb9146192e13764513e54c87efe2e07a96c32cef49f3aaf6fcf84de3 |
| review | soal quiz review menjelang uas.pdf | 3 | 0c4ab33f915b0c408015ef29ad1a70651807484fe2f97ac8ae9dcc17f5f66e0d |

Total: **127 halaman**, semuanya dipetakan.

## Pembagian pertemuan (ditetapkan pemilik)

| Pertemuan | Materi dosen | Presentasi mahasiswa | Audit |
| --- | --- | --- | --- |
| 1 Pengantar dan teori | 1–11, 14–19 | — | [pertemuan-01.md](pertemuan-01.md) |
| 2 Unsur-unsur | 12–13, 24 | 1–10 (Kelompok 1) | [pertemuan-02.md](pertemuan-02.md) |
| 3 Kredibilitas sumber | — | 11–18 (Kelompok 2) | [pertemuan-03.md](pertemuan-03.md) |
| 4 Pesan | 22–23, 25–26 | 19–39 (Kelompok IV) | [pertemuan-04.md](pertemuan-04.md) |
| 5 Saluran dan ragam media | 20–21, 27–37 | 40–54 (Kelompok 4) | [pertemuan-05.md](pertemuan-05.md) |
| 6 Hambatan | — | 55–66 (Kelompok 5) | [pertemuan-06.md](pertemuan-06.md) |
| 7 Strategi | — | 67–74 | [pertemuan-07.md](pertemuan-07.md) |
| 8 Teknik | — | 75–87 (Kelompok 7) | [pertemuan-08.md](pertemuan-08.md) |
| Kuis review UAS | review 1–3 | | [kuis-review-uas.md](kuis-review-uas.md) |

Transkripsi lapisan teks per halaman: [teks-dosen.md](teks-dosen.md), [teks-mahasiswa-a.md](teks-mahasiswa-a.md), [teks-mahasiswa-b.md](teks-mahasiswa-b.md). Audit pertemuan menambahkan pemeriksaan visual setiap halaman, inventaris aset, dan koreksi teks berdasarkan visual.

Alur kerja: ekstraksi teks dan render lokal (PyMuPDF/Poppler) → staging `komunikasi-persuasif/extracted/*-parts.json` → pemeriksaan visual setiap halaman, ekstraksi/crop aset → `*-final.json` dan `*-visual-audit.json` (lokal, diabaikan Git) → dirakit ke `data/courses/komunikasi-persuasif/meetings.js`. Tidak ada layanan eksternal yang dipakai.

Aset publik: **27 berkas** (sekitar 3,3 MB) di `assets/media/komunikasi-persuasif/pertemuan-0{1,3,4,5,8}/`. Pertemuan 2, 6, dan 7 tidak memiliki visual informatif selain template/ikon dekoratif (dicatat per halaman).

## Hal yang perlu keputusan pemilik

1. **Izin publikasi:** pemilik portal menyetujui (2026-11-23) publikasi seluruh materi dan gambar sesuai PDF di GitHub Pages. — Selesai.
2. **Gambar dengan orang/data pihak ketiga** — tetap ditampilkan sesuai keputusan butir 1; daftar dipertahankan sebagai jejak:
   - dosen 32: wajah empat pedagang, kode QR pedagang, papan nomor telepon (tidak ditranskripsi); dosen 16: potret tanpa nama/kredit; dosen 8: potongan halaman jurnal.
   - mahasiswa 11: foto dua orang yang dapat dikenali; 13 dan 15: foto stok tanpa kredit.
   - mahasiswa 78: wajah anak dan kreator TikTok; 82: wajah model poster dan nama pengguna; 78–82, 85: hak cipta konten pihak ketiga.
3. **Ketidakpastian isi** — terbuka, pemilik sedang menanyakan ke dosen (ditandai “perlu verifikasi” di web, tidak ditebak): teks kecil tak terbaca pada foto dosen 32; dosen 14 hanya berisi judul “Kenapa netizen marah?” tanpa kasus; tanda “?” liar pada mahasiswa 33, 34, 36, 38; mahasiswa 12 “Persuadee berkredibilitas tinggi” (kemungkinan maksudnya persuader); mahasiswa 78 tidak menyebut teknik untuk tangkapan layar 2–3; mahasiswa 81 relasi gambar RevoU; dosen 22 vs 23 (“Menciptakan” vs “Membangun” keinginan).
4. **Metadata katalog** “3 SKS” dan “Gasal 2026/2027” sudah ada di registry sebelumnya dan tidak tercantum dalam ketiga PDF; perlu dikonfirmasi.

## Validasi

Dijalankan 2026-11-23 di server lokal `python3 -m http.server` dan Chrome headless (CDP):

| Pemeriksaan | Hasil |
| --- | --- |
| `node --check` pada `meetings.js`, `quizzes.js`, `exams.js`, `courses-registry.js`, `app.js`, `renderer.js` | Lulus |
| Perakitan: ID unik, `sections` cocok dengan heading, `<img>` ada, alt terisi, width/height sama dengan berkas, path relatif tidak menunjuk folder terabaikan | Lulus (132 bagian, 27 gambar) |
| `git check-ignore` aset publik | Tidak ada yang diabaikan |
| Pertemuan 1–8 pada 1440, 768, 390 px | Tidak ada overflow horizontal; 0 gambar rusak; 0 gambar melebihi kolom; 0 tautan TOC rusak; TOC samping tampil di 1440, TOC lipat di bawahnya |
| Ukuran teks A+ (390 px) dan perkiraan zoom 200% (viewport 640 px) | Tidak ada overflow |
| Kuis review: semua benar / semua salah / campuran / belum lengkap | 100 / 0 / 70 / form ditolak |
| Tab UAS, tombol ke kuis, UTS belum tersedia, katalog, link lama `komunikasi-persuasif/`, regresi Perkembangan Teknologi Komunikasi | Berfungsi |
| Cetak PDF pertemuan 5 | 11 halaman; tabel dan foto tercetak, navigasi tersembunyi |
| Konsol | Hanya 404 `favicon.ico` (sudah ada sebelumnya) |
| Keyboard (CDP): Tab pertama ke skip link; drawer 390 px buka → fokus tombol tutup, Escape → tertutup dan fokus kembali ke tombol menu; panah bawah memilih radio kuis | Lulus |

Belum dijalankan: pembaca layar, peninjauan visual manusia atas seluruh halaman web, serta uji di subpath `/nama-repo/` GitHub Pages yang sebenarnya (path diperiksa relatif secara statis).

## Pembaruan tampilan 2026-11-26

Atas permintaan pemilik, tampilan web dibuat seperti materi pembelajaran, bukan salinan presentasi:

- Blok “Sumber pertemuan ini”, subjudul sumber, keterangan “Sumber: … halaman N”, catatan konversi, penanda “perlu verifikasi”, dan nama/label kelompok **tidak lagi tampil**. Semuanya tetap ada sebagai komentar HTML di `content` dan komentar `// Sumber:` per pertemuan di `meetings.js`.
- Slide sampul, daftar anggota, agenda, penutup, dan tanya jawab disembunyikan (isi disimpan sebagai komentar). Pembatas topik tanpa isi juga disembunyikan; judul pertanyaan tanpa isi menjadi blok “Diskusi”.
- Judul “(lanjutan)” dan judul ganda berurutan digabung ke bagian sebelumnya; judul huruf kapital semua dirapikan.
- Pemetaan halaman di tabel audit tetap berlaku sebagai jejak sumber; ID bagian yang disembunyikan atau digabung tidak lagi muncul di daftar isi.
