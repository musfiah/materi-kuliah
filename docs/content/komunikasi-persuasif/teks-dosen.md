# Audit konversi teks — Komunikasi Persuasif, sumber dosen

## 1. Identitas dan cakupan

- Mata kuliah / slug: Komunikasi Persuasif / `komunikasi-persuasif`.
- Tanggal pemeriksaan: 2026-11-23.
- Pelaksana: agent konversi **teks saja**; parent menangani pemeriksaan visual, ekstraksi, penyisipan aset, dan padanan teks visual.
- Dasar kerja: [aturan proyek](../../../AGENTS.md), [README](../../../README.md), [desain](../../DESIGN.md), [panduan konversi](../../PDF-TO-WEB.md), dan [template audit](../../templates/MATERIAL-AUDIT.md).
- Cakupan: seluruh teks yang tersedia dalam lapisan teks 37 halaman fisik PDF, termasuk contoh, instruksi diskusi, angka, nama, sitasi, dan dua tabel.
- Sumber dibaca sebagai teks menggunakan JSON ekstraksi dan PyMuPDF lokal. **Tidak ada gambar yang dibuka, dibaca melalui alat gambar, atau diekstrak dalam tugas ini.**
- Berkas hasil: `komunikasi-persuasif/extracted/dosen-parts.json` (artefak staging lokal, diabaikan Git; belum dimasukkan ke modul web).
- Berkas audit: `docs/content/komunikasi-persuasif/teks-dosen.md`.
- Di luar cakupan: sumber mahasiswa/review, visual dan teks di dalam raster, aset publik, modul JS, CSS, renderer, kuis, commit, deploy, dan pengujian UI terintegrasi.
- Status: **Konversi lapisan teks selesai; konversi materi secara keseluruhan belum terverifikasi. Pemeriksaan visual seluruh halaman menunggu parent.**
- Izin publikasi: belum diverifikasi dalam tugas teks ini; parent/pemilik perlu memastikannya sebelum publikasi.

### Daftar sumber

| Alias | Path lokal | SHA-256 yang diperiksa | Halaman | Cakupan | Peran |
| --- | --- | --- | --- | --- | --- |
| dosen | `komunikasi-persuasif/pdf/materi dosen_Komunikasi persuasif.pdf` | `1e9ce8660060cd60d660315a571b78372f43287a9a54daaeff8b56dc0e64b36f` | 37 | 1–37 | Materi dosen |

Teks `komunikasi-persuasif/extracted/dosen.json` cocok persis dengan hasil `page.get_text()` PyMuPDF untuk seluruh 37 halaman pada pemeriksaan ini. Kecocokan tersebut tidak membuktikan kelengkapan teks raster atau informasi visual.

### Pembagian pertemuan

Pemetaan mengikuti instruksi eksplisit pengguna, bukan jadwal yang disimpulkan dari PDF:

| Pertemuan | Halaman fisik PDF | Topik bagian |
| --- | --- | --- |
| 1 | 1–11, 14–19 | Pengantar dan teori komunikasi persuasif |
| 2 | 12–13, 24 | Unsur-unsur komunikasi persuasif |
| 4 | 22–23, 25–26 | Pesan persuasif dan AIDA |
| 5 | 20–21, 27–37 | Saluran, media persuasif, dan difusi inovasi |

Pertemuan 3 tidak dibuat karena tidak termasuk pemetaan sumber dosen yang diminta.

## 2. Pemetaan setiap halaman

Semua tujuan di bawah berada dalam `komunikasi-persuasif/extracted/dosen-parts.json`, pada `parts[].content` dan `parts[].sections`, **bukan halaman web yang sudah dipublikasikan**. Setiap ID menunjuk tepat satu `h2`. “Diperiksa” pada teks berarti pemeriksaan terhadap lapisan teks sumber, bukan terhadap gambar. Kolom visual berlaku untuk semua unsur visual halaman; inventaris detailnya harus dilengkapi parent.

| Sumber | Halaman PDF | Seluruh isi lapisan teks dan penanganan | Pertemuan / ID tujuan | Aset/visual | Teks diperiksa | Visual diperiksa | Status hasil dan alasan |
| --- | --- | --- | --- | --- | --- | --- | --- |
| dosen | 1 | Sampul “Komunikasi Persuasif”; atribusi Musfiah Saidah, M. Si dipertahankan. | 1 / `kp-dosen-p001` | Parent | Diperiksa | Belum — parent | HTML staging; sampul tidak dihilangkan. |
| dosen | 2 | Definisi lengkap: memengaruhi/mengubah sikap, keyakinan, persepsi, intensi, perilaku melalui pesan dan strategi. | 1 / `kp-dosen-p002` | Parent | Diperiksa | Belum — parent | HTML staging, paragraf lengkap. |
| dosen | 3 | Perspektif komunikasi: apa, bagaimana, siapa penyampai, sasaran, dan pemrosesan pesan. | 1 / `kp-dosen-p003` | Parent | Diperiksa | Belum — parent | HTML staging; heading editorial ditambahkan. |
| dosen | 4 | Lima kata kunci beserta seluruh penjelasan: Message, Influence, Attitude / Belief, Intention, Behavior. | 1 / `kp-dosen-p004` | Parent | Diperiksa | Belum — parent | HTML staging, daftar pasangan istilah–makna. |
| dosen | 5 | Cognitive, Affective, Conative / Behavioral; jenis perubahan dan ketiga contoh ucapan. | 1 / `kp-dosen-p005` | Parent | Diperiksa | Belum — parent | HTML staging, daftar bernomor dengan rincian. |
| dosen | 6 | Pengertian ELM dan perubahan sikap; Richard E. Petty dan John T. Cacioppo (1986). | 1 / `kp-dosen-p006` | Parent | Diperiksa | Belum — parent | HTML staging; sitasi dipertahankan. |
| dosen | 7 | Central route: motivasi, perhatian/kemampuan, evaluasi argumen/bukti; peripheral route: kredibilitas, daya tarik/popularitas/visual, slogan/social proof. | 1 / `kp-dosen-p007` | Parent | Diperiksa | Belum — parent | HTML staging, dua subbagian; relasi visual menunggu parent. |
| dosen | 8 | Satu-satunya teks tersedia: “DISCUSS”. | 1 / `kp-dosen-p008` | Parent: visual dan padanan teks | Diperiksa | Belum — parent | Heading saja; tidak menebak isi gambar atau jawaban. |
| dosen | 9 | Kedua butir lengkap tentang elaborasi rendah/sedang/tinggi, powerless language, kredibilitas, argumen, pembiasan pikiran, dan thought confidence. | 1 / `kp-dosen-p009` | Parent | Diperiksa | Belum — parent | HTML staging; heading editorial ditambahkan. |
| dosen | 10 | Ketiga butir “Gaya Bahasa”, “Powerfull words”, “Rendah, sedang, tinggi”. | 1 / `kp-dosen-p010` | Parent | Diperiksa | Belum — parent | HTML staging; ejaan Powerfull dipertahankan. |
| dosen | 11 | Ragam bahasa persuasi (kelompok): lima contoh POWERFULL dan enam contoh Powerless, termasuk ragam lisan serta elipsis. | 1 / `kp-dosen-p011` | Parent | Diperiksa | Belum — parent | HTML staging, dua daftar terpisah. |
| dosen | 12 | Sampul topik “Unsur unsur komunikasi persuasif”. | 2 / `kp-dosen-p012` | Parent | Diperiksa | Belum — parent | HTML staging, heading; bukan halaman kosong. |
| dosen | 13 | Enam label: Persuader, Persuadee, Pesan Persuasif, Saluran, Media, Efek Persuasi. | 2 / `kp-dosen-p013` | Parent: relasi visual | Diperiksa | Belum — parent | HTML staging, daftar tidak berurutan; Saluran dan Media tetap dua unsur. |
| dosen | 14 | Pertanyaan “Kenapa netizen marah?”. | 1 / `kp-dosen-p014` | Parent: visual dan padanan teks | Diperiksa | Belum — parent | Heading pertanyaan saja; kasus dalam gambar tidak ditebak. |
| dosen | 15 | “Tahu kah kamu?”; Skriptō + barýs + polýs; seluruh pernyataan tentang tulisan banyak/berat, tradisi akademik, ketebalan naskah dan kedalaman ilmu. | 1 / `kp-dosen-p015` | Parent | Diperiksa | Belum — parent | HTML staging; parodi sumber dipertahankan dengan catatan eksplisit bukan fakta linguistik terverifikasi. |
| dosen | 16 | SJT, Muzafer Sherif dan Carl Hovland; penerimaan/penolakan bergantung sikap atau posisi awal. | 1 / `kp-dosen-p016` | Parent | Diperiksa | Belum — parent | HTML staging, paragraf lengkap. |
| dosen | 17 | Tiga zona: Latitude of Acceptance, Rejection, Non-commitment beserta definisi lengkap. | 1 / `kp-dosen-p017` | Parent | Diperiksa | Belum — parent | HTML staging, daftar bernomor. |
| dosen | 18 | Kutipan utuh “Kalau ada masalah, kita harus selalu cerita satu sama lain.” | 1 / `kp-dosen-p018` | Parent | Diperiksa | Belum — parent | HTML staging; heading editorial; kutipan tidak dihapus walaupun diulang pada halaman 19. |
| dosen | 19 | Contoh pertemanan; pernyataan sumber dan tiga pasangan tipe keterbukaan–respons, termasuk sikap menjaga privasi. | 1 / `kp-dosen-p019` | Parent | Diperiksa | Belum — parent | HTML staging; tidak menambahkan klasifikasi jawaban. |
| dosen | 20 | Saluran persuasi; prinsip pesan sama dapat berefek berbeda melalui saluran berbeda. | 5 / `kp-dosen-p020` | Parent | Diperiksa | Belum — parent | HTML staging, prinsip lengkap. |
| dosen | 21 | Tatap muka, media massa, digital, nonverbal; semua contoh percakapan/diskusi/presentasi, televisi/radio/surat kabar, Instagram/TikTok/podcast, ekspresi/gestur/kontak mata. | 5 / `kp-dosen-p021` | Parent | Diperiksa | Belum — parent | HTML staging, empat pasangan kategori–contoh. |
| dosen | 22 | Tidak ada teks dalam lapisan teks PDF. | 4 / `kp-dosen-p022` | Parent: visual dan padanan teks | Diperiksa — kosong pada lapisan teks | Belum — parent | Heading editorial “Pesan persuasif — halaman 22” saja; tidak menyatakan halaman sumber kosong secara visual. |
| dosen | 23 | Tabel AIDA lengkap: empat header, empat tahap, makna, fokus komunikator, seluruh contoh skripsi termasuk 70% dan satu halaman per hari. | 4 / `kp-dosen-p023` | Tabel HTML; visual parent | Diperiksa; posisi sel diperiksa | Belum — parent | HTML staging, tabel 4 kolom × 4 baris isi; angka 70% ditandai ilustratif tanpa rujukan. |
| dosen | 24 | “Siapa mengatakan apa kepada siapa melalui media apa dengan efek apa?”; paragraf tentang persuader, pesan, audiens, media, tujuan perubahan. | 2 / `kp-dosen-p024` | Parent | Diperiksa | Belum — parent | HTML staging, pertanyaan dan paragraf lengkap. |
| dosen | 25 | Persuasion Challenge; “Posting prestasi bukan flexing, tapi personal branding”; “Flexing vs Personal Branding”. | 4 / `kp-dosen-p025` | Parent | Diperiksa | Belum — parent | HTML staging; ketiga teks dipertahankan. |
| dosen | 26 | Contoh AIDA lengkap: IPK 4.00, perbedaan pembacaan teman/dosen/recruiter, peluang personal branding, proses dan value pencapaian. | 4 / `kp-dosen-p026` | Parent | Diperiksa | Belum — parent | HTML staging, empat tahap berurutan; heading editorial. |
| dosen | 27 | Sampul topik “Ragam media komunikasi persuasif”. | 5 / `kp-dosen-p027` | Parent | Diperiksa | Belum — parent | HTML staging, heading dipertahankan. |
| dosen | 28 | Perbandingan interpersonal, kelompok, massa, digital, visual/audiovisual; seluruh kelebihan, keterbatasan, kecocokan penggunaan. | 5 / `kp-dosen-p028` | Tabel HTML; visual parent | Diperiksa; posisi sel diperiksa | Belum — parent | HTML staging, tabel 4 kolom × 5 baris isi, judul sumber dipertahankan. |
| dosen | 29 | Lima pertimbangan memilih media: karakteristik audiens, tujuan, karakter pesan, kredibilitas, umpan balik; semua rincian dan contoh poster/diskusi/video. | 5 / `kp-dosen-p029` | Parent | Diperiksa | Belum — parent | HTML staging, daftar lengkap. |
| dosen | 30 | Sampul topik “Difusi Inovasi”. | 5 / `kp-dosen-p030` | Parent | Diperiksa | Belum — parent | HTML staging; tetap dipetakan meskipun judul berulang pada halaman 31. |
| dosen | 31 | Definisi difusi inovasi, gagasan/produk teknologi/praktik kerja/metode baru, adopsi individu/kelompok dalam masyarakat/organisasi; Everett M. Rogers, Diffusion of Innovations (1962). | 5 / `kp-dosen-p031` | Parent | Diperiksa | Belum — parent | HTML staging, paragraf dan sitasi utuh; heading dibedakan untuk navigasi. |
| dosen | 32 | Instruksi “Jelaskan proses difusi inovasi dalam kasus ini”. | 5 / `kp-dosen-p032` | Parent: visual dan padanan teks | Diperiksa | Belum — parent | Heading editorial dan instruksi sumber; tidak mengarang kasus atau jawaban. |
| dosen | 33 | Lima tahap Rogers: Knowledge, Persuasion, Decision, Implementation, Confirmation; semua terjemahan dan uraian, termasuk mengadopsi/menolak serta melanjutkan/meninggalkan. | 5 / `kp-dosen-p033` | Parent | Diperiksa | Belum — parent | HTML staging, lima langkah berurutan. |
| dosen | 34 | Sampul topik “Ragam media komunikasi”. | 5 / `kp-dosen-p034` | Parent | Diperiksa | Belum — parent | HTML staging, heading; tidak digabung dengan halaman 27. |
| dosen | 35 | Empat hubungan teori–media: ELM dua jalur; pembelajaran sosial dan contoh tumbler/teman/influencer; SJT dan sikap awal; difusi inovasi, pembayaran digital dan praktik ramah lingkungan. | 5 / `kp-dosen-p035` | Parent | Diperiksa | Belum — parent | HTML staging, empat uraian lengkap. |
| dosen | 36 | Latihan diskusi: tim komunikasi kampus mengurangi penyebaran berita belum terverifikasi; tantangan merumuskan pesan persuasif. | 5 / `kp-dosen-p036` | Parent | Diperiksa | Belum — parent | HTML staging; instruksi mahasiswa, bukan instruksi agent. |
| dosen | 37 | Tiga pertanyaan dan semua pilihan target/media/tujuan; “Strong words in 30 - 60 second”. | 5 / `kp-dosen-p037` | Parent | Diperiksa | Belum — parent | HTML staging, daftar bertingkat; instruksi durasi dipertahankan terpisah. |

### Rekap cakupan

- Halaman sumber: **37**; baris audit halaman unik: **37**; ID heading/daftar isi unik: **37**.
- Pembagian jumlah halaman: pertemuan 1 = 17; pertemuan 2 = 3; pertemuan 4 = 4; pertemuan 5 = 13.
- Lapisan teks: **37/37 diperiksa dan dikonversi ke artefak staging**; halaman 22 memang tidak memiliki teks yang dapat diekstrak.
- Halaman dengan teks **dan visual** diperiksa dalam tugas ini: **0**.
- Halaman terintegrasi ke web dalam tugas ini: **0**; integrasi merupakan pekerjaan parent.
- Sampul/pembatas topik: 1, 12, 27, 30, 34 tetap dipetakan sebagai heading, dengan atribusi pada halaman 1. Tidak ada halaman dihilangkan.
- Halaman 8, 14, 22, 32 memerlukan tindak lanjut visual dan padanan teks dari parent; artefak ini hanya memuat heading serta teks yang tersedia.
- Visual halaman lain juga **belum diperiksa**; daftar empat halaman tersebut bukan inventaris lengkap visual seluruh PDF.

## 3. Tabel, relasi, sitasi, dan serah terima visual

| Unsur | Sumber | Cara konversi teks | Tujuan | Status |
| --- | --- | --- | --- | --- |
| Dua jalur ELM | dosen 7 | Dua `h3` dengan daftar masing-masing, tidak dijadikan tahapan berurutan palsu | `kp-dosen-p007` | Teks selesai; visual parent |
| Enam unsur persuasi | dosen 13 | Daftar tanpa nomor; koordinat menunjukkan Saluran dan Media adalah label terpisah | `kp-dosen-p013` | Teks selesai; hubungan visual parent |
| Tabel AIDA | dosen 23 | `table.academic-table`, caption, `thead`, header kolom `scope="col"`, header baris `scope="row"`, pembungkus `.table-wrapper` berlabel dan dapat difokuskan | `kp-dosen-p023` | Isi dan pasangan sel diperiksa dari koordinat PyMuPDF; tampilan belum diuji |
| Tabel perbandingan media | dosen 28 | Struktur semantik yang sama; lima baris isi dan empat kolom tetap utuh | `kp-dosen-p028` | Isi dan pasangan sel diperiksa dari koordinat PyMuPDF; tampilan belum diuji |
| Petty dan Cacioppo (1986) | dosen 6 | Nama dan tahun dipertahankan; tidak menambah judul pustaka yang tidak tersedia | `kp-dosen-p006` | Sesuai lapisan teks |
| Sherif dan Hovland | dosen 16 | Nama dipertahankan; tidak menambah tahun yang tidak tersedia | `kp-dosen-p016` | Sesuai lapisan teks |
| Rogers, Diffusion of Innovations (1962) | dosen 31 | Nama, judul buku dalam `cite`, tahun dipertahankan | `kp-dosen-p031` | Sesuai lapisan teks |
| Kasus diskusi tanpa uraian raster | dosen 8, 14, 22, 32 | Heading dan teks sumber saja; tidak ada figure, gambar, atau placeholder | ID halaman masing-masing | **Menunggu parent: visual, caption/alt, padanan teks** |

Pemeriksaan koordinat tabel, tanpa membuka gambar:

- Halaman 23: awal kolom x sekitar **83.3 / 217.0 / 416.2 / 587.3 pt**; header y sekitar 95.8–143.2; kelompok isi Attention 150.3–246.0, Interest 255.7–327.6, Desire 337.1–432.8, Action 439.7–511.7. Baris terbungkus digabung di dalam sel yang benar, bukan dipasangkan berdasarkan satu baseline.
- Halaman 28: awal kolom x sekitar **91.5 / 289.6 / 487.7 / 685.8 pt**; header y 169.0–190.1; kelompok interpersonal 197.9–240.5, kelompok 248.3–291.0, massa 298.8–319.9, digital 327.7–370.3, visual/audiovisual 378.1–442.5.
- Parent tetap perlu membandingkan kedua tabel dengan tampilan sumber serta menguji responsivitas dan cetak setelah integrasi.

Inventaris visual per objek, path aset, dimensi/crop, kredit, alt, caption, izin, dan status visual **belum dikerjakan di audit teks ini**. Tidak ada aset publik yang dibuat. Parent perlu melengkapinya pada audit visual/konversi terintegrasi, bukan menganggap tabel inventaris di atas sebagai inventaris gambar lengkap.

## 4. Keputusan adaptasi

- Setiap halaman mendapat `h2` dengan ID `kp-dosen-pNNN`; `sections[].id` dan urutan `pages[]` sama persis dengan urutan heading.
- Heading navigasi editorial ditambahkan/diperjelas pada halaman 3, 9, 10, 13, 18, 21, 22, 23, 24, 26, 31, 32, 37; heading 7 memperjelas dua jalur yang sudah berlabel di sumber. Ini label navigasi, bukan klaim kutipan judul asli. Khusus halaman 22, label diturunkan dari topik pertemuan yang ditetapkan pengguna, bukan hasil membaca gambar.
- Paragraf, daftar tidak berurutan, daftar bernomor, dan kutipan digunakan menurut jenis teks. Nomor serta bullet sumber diterjemahkan menjadi markup daftar, bukan dihilangkan secara semantik.
- Pemenggalan baris PDF, jarak sebelum tanda baca, kapitalisasi judul, dan tanda baca akhir dinormalisasi tanpa menghapus informasi. Ejaan khas sumber seperti “Powerfull”, “Bener gak sih”, “Hemmmmmm”, “Tapiii ….”, dan “Strong words in 30 - 60 second” dipertahankan.
- Pengulangan halaman 18–19 serta pembatas topik tetap disertakan agar jejak setiap halaman utuh.
- Dua tabel menggunakan kelas bersama `.table-wrapper` dan `.academic-table`; kutipan menggunakan `.editorial-quote`. Tidak ada gaya inline, kanvas slide tetap, framework, dependency, atau perubahan desain.
- Tidak ada `figure`, `img`, placeholder, teks kasus rekaan, jawaban latihan tambahan, atau sumber kutipan rekaan.
- Artefak tidak mengubah kerangka portal atau mengimplementasikan integrasi. Catatan inventaris awal dalam `README.md` audit tetap merupakan status historis; dokumen itu tidak diubah karena di luar lingkup dua berkas.

## 5. Integritas dan ketidakpastian

| Temuan | Halaman | Keputusan | Status |
| --- | --- | --- | --- |
| Parodi etimologi “Skriptō + barýs + polýs” dan klaim tentang skripsi berpotensi dibaca sebagai fakta | 15 | Semua teks sumber dipertahankan dalam kutipan; catatan berlabel “Catatan konversi (bukan teks asli slide)” menegaskan contoh parodi, bukan fakta linguistik terverifikasi | Ditangani dalam HTML |
| Angka 70% tanpa rujukan | 23 | Contoh Attention tetap utuh; catatan konversi eksplisit menyebut angka ilustratif, tidak boleh dianggap statistik terverifikasi | Ditangani dalam HTML |
| Makna/kasus dalam visual tidak tersedia dalam lapisan teks | Khususnya 8, 14, 22, 32; pemeriksaan berlaku semua halaman | Tidak ditebak; parent menyisipkan visual dan padanan teks | Terbuka untuk parent |
| Izin publikasi materi/visual belum dikonfirmasi dalam tugas ini | 1–37 | Tidak membuat klaim izin; pastikan sebelum publikasi publik | Terbuka untuk parent/pemilik |

`unresolved: []` pada JSON berarti **tidak ada persoalan transkripsi lapisan teks yang tertinggal dalam lingkup tugas ini**. Nilai itu tidak berarti visual, izin, integrasi, dan pengujian UI sudah selesai. Semua tindak lanjut tersebut tercatat di audit ini dan menjadi tanggung jawab parent.

Tidak ada daftar pustaka lengkap atau URL pada lapisan teks sumber yang dibaca. Sitasi nama/tahun yang tersedia dipertahankan tanpa melengkapinya dari tebakan. Soal diskusi tidak diberi jawaban/kunci buatan agent.

## 6. Validasi yang benar-benar dijalankan

| Pemeriksaan | Metode aktual | Hasil / batasan |
| --- | --- | --- |
| Identitas PDF dan jumlah halaman | Python `hashlib.sha256`, `fitz.open`, `len(document)` | Hash sesuai tabel; 37 halaman |
| Kecocokan ekstraksi | Membandingkan `dosen.json` dengan `page.get_text()` PyMuPDF setiap halaman | Cocok persis 37/37 |
| Sintaks dan bentuk JSON | Python `json.loads`; pemeriksaan key `parts`, `unresolved`, dan field setiap part | Lulus; 4 part; `unresolved` kosong |
| Pemetaan pertemuan | Assertion `pages[]` terhadap pemetaan eksplisit pengguna | Lulus; 37 halaman, sekali masing-masing, tidak ada halaman ekstra |
| Heading dan daftar isi | Python `HTMLParser`, membandingkan seluruh `h2[id]` dengan `pages[]` dan `sections[]` | Lulus; 37 target unik |
| Struktur HTML | Parser dengan stack start/end tag; pemeriksaan atribut handler dan tag yang tidak diizinkan | Lulus; elemen tertutup/bersarang benar; tanpa gambar, figure, script, iframe, style atau event handler |
| Retensi teks per halaman | Normalisasi Unicode, kapitalisasi dan tanda baca; pembandingan multiset token sumber terhadap teks HTML per halaman; nomor daftar sumber dipetakan ke `ol` | Tidak ada token sumber kurang pada 37 halaman. Ini pemeriksaan pendukung, bukan bukti hubungan visual atau urutan baca raster |
| Pasangan sel tabel | Membaca bbox setiap baris teks pada halaman 23 dan 28 melalui PyMuPDF; membandingkan dengan seluruh sel HTML | Empat kolom, masing-masing 4 dan 5 baris isi; seluruh isi sel dipertahankan dengan pasangan yang sesuai |
| Header dan akses tabel | Pemeriksaan `caption`, `th[scope]`, wrapper berlabel dan `tabindex="0"` dalam HTML | Struktur tersedia; perilaku browser belum diuji |
| Sintaks JS | Tidak berlaku | Tidak ada JS yang diubah |
| Path/aset publik | Tidak berlaku pada artefak teks | Tidak membuat/menautkan aset; lokasi staging diabaikan Git |
| Visual, desktop 1440 px, tablet 768 px, ponsel 390 px, keyboard, zoom 200%, A+, daftar isi, navigasi, cetak | **Tidak dijalankan** | Menunggu parent setelah integrasi; tidak ada klaim lulus |
| Kuis dan skor | Tidak berlaku | Tidak ada kuis/kunci/engine yang diubah |

## 7. Kesimpulan serah terima

- Dua berkas hasil: `komunikasi-persuasif/extracted/dosen-parts.json` dan `docs/content/komunikasi-persuasif/teks-dosen.md`.
- Cakupan teks: **halaman 1–37**, dipisah ke pertemuan **1, 2, 4, 5**; 37 section dan 37 heading; dua tabel semantik lengkap.
- Aset gambar dibuat/disertakan: **0**. Tidak ada pembacaan gambar melalui alat gambar.
- Pemeriksaan visual diselesaikan dalam tugas ini: **0 halaman**; total objek informatif belum diinventaris oleh agent teks.
- Belum selesai: pemeriksaan visual semua halaman, penyisipan visual dan padanan teks terutama 8/14/22/32, inventaris aset/kredit/izin, integrasi ke modul web, serta pengujian browser dan cetak.
- Status akhir: **artefak konversi teks siap diteruskan ke parent; bukan klaim konversi materi lengkap atau siap publikasi**.

## 8. Riwayat

| Tanggal | Sumber | Cakupan dan tindakan | Peninjau |
| --- | --- | --- | --- |
| 2026-11-23 | dosen, SHA-256 di bagian 1 | Konversi lapisan teks 37 halaman; tabel berdasarkan koordinat; audit teks awal; visual tetap tertunda | Agent teks; parent untuk tindak lanjut visual |
