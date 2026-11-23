# Audit teks mahasiswa B — Komunikasi Persuasif, halaman 40–87

## 1. Identitas dan cakupan

- Sumber/alias: `mahasiswa`, `komunikasi-persuasif/pdf/PDF komunikasi persuasif mahasiswa.pdf`.
- SHA-256 PDF yang diperiksa: `472805d9cb9146192e13764513e54c87efe2e07a96c32cef49f3aaf6fcf84de3`.
- Jumlah halaman sumber: 87; cakupan tugas: **48 halaman fisik PDF, 40–87**, penomoran mulai 1.
- Tanggal pengerjaan: 2026-11-23.
- Pelaksana: agent konversi teks; peninjau visual dan pengolah aset: **parent**, belum dilakukan oleh agent ini.
- Dasar pembagian: instruksi eksplisit pengguna, bukan inferensi jadwal: pertemuan 5 = 40–54 (Media), 6 = 55–66 (Hambatan), 7 = 67–74 (Strategi), 8 = 75–87 (Teknik).
- Hasil data: `komunikasi-persuasif/extracted/mahasiswa-b-parts.json`, empat objek dalam `parts`, masing-masing mempunyai `meeting`, `source`, `pages`, `title`, `sections`, dan `content`.
- Status: **teks dikonversi; seluruh pemeriksaan visual masih menunggu parent**. Ini bukan klaim konversi lengkap teks dan gambar, bukan integrasi ke portal, dan bukan persetujuan publikasi.
- Di luar cakupan: halaman 1–39, sumber dosen/review, gambar/aset publik, data utama, CSS, renderer, kuis, pengujian UI, commit dan deployment.
- Izin publikasi materi/visual: belum dikonfirmasi dalam tugas ini; parent/pemilik perlu memastikan sebelum publikasi.

Dokumen mengikuti struktur [template audit](../../templates/MATERIAL-AUDIT.md), [panduan konversi](../../PDF-TO-WEB.md), dan [pedoman desain](../../DESIGN.md), dengan batas tugas **TEXT-ONLY** dari pengguna. Tidak ada pemanggilan pembaca gambar. Sumber teks dibaca dari `komunikasi-persuasif/extracted/mahasiswa.json`; PyMuPDF digunakan untuk memeriksa teks/koordinat dan objek PDF. OCR lokal Tesseract digunakan pada objek gambar halaman 85; OCR **bukan** pemeriksaan visual manusia/model.

## 2. Pemetaan setiap halaman

Seluruh tujuan di bawah berada dalam `komunikasi-persuasif/extracted/mahasiswa-b-parts.json`. Kolom P menunjukkan `parts[].meeting`. Setiap ID adalah heading `h2` sekaligus target `sections[].id`. Teks sumber dipertahankan sebagai paragraf/daftar/tabel, bukan ringkasan. Judul kesimpulan diberi konteks topik dan beberapa judul lanjutan diberi penanda “lanjutan” untuk navigasi; isi kesimpulan asli tetap lengkap.

| Sumber | Halaman PDF | Isi teks yang dipetakan | P / ID heading | Penanganan teks | Status visual |
| --- | --- | --- | --- | --- | --- |
| mahasiswa | 40 | Sampul Ragam Media untuk Komunikasi Persuasif; atribusi Kelompok 4. | 5 / `kp-mhs-p040` | Dikonversi; kapitalisasi judul dinormalisasi. | Menunggu parent |
| mahasiswa | 41 | Latar belakang era digital, kelebihan informasi, pergeseran media konvensional ke internet, ragam jangkauan/keterlibatan dan pentingnya pemilihan strategi. | 5 / `kp-mhs-p041` | Dikonversi; empat lapisan teks identik dijadikan satu, lihat §5. | Menunggu parent |
| mahasiswa | 42 | Etimologi medium/medius sebagaimana sumber; media sebagai sarana/saluran/teknologi, jembatan epistemologis, konkretisasi dan noise. | 5 / `kp-mhs-p042` | Dikonversi seluruh paragraf; klaim etimologi tidak dikoreksi diam-diam. | Menunggu parent |
| mahasiswa | 43 | Rumusan Harold Lasswell sebagaimana tertulis, framing, empat komponen komunikasi dan efisiensi hubungan. | 5 / `kp-mhs-p043` | Dikonversi; atribusi serta rumusan sumber tetap ada. | Menunggu parent |
| mahasiswa | 44 | Media pedagogis, kedudukan setara metode, berpusat pada siswa, keterbatasan indra/ruang/waktu, simulasi, verbalisme dan komunikasi instruksional dua arah. | 5 / `kp-mhs-p044` | Dikonversi seluruh paragraf. | Menunggu parent |
| mahasiswa | 45 | Tiga klasifikasi: sifat/bentuk (tradisional, digital, nonverbal, elektronik); unsur pembelajaran (visual, audio, audio-visual, multimedia); ciri fisik (2D, 3D, pandang diam/gerak). | 5 / `kp-mhs-p045` | Dikonversi sebagai tiga subjudul dan daftar; judul halaman dipindah ke awal alur. | Menunggu parent |
| mahasiswa | 46 | Perkembangan media: papan tulis, buku, poster/gambar/diagram, alat peraga; presentasi/video/aplikasi/Learning Management System (LSM); media tatap muka, ceramah/diskusi, umpan balik dan kepercayaan. | 5 / `kp-mhs-p046` | Dikonversi; judul kategori 4 ditempatkan sebelum subkategori 1–2, lalu kategori 5. Singkatan LSM dipertahankan. | Menunggu parent |
| mahasiswa | 47 | Kriteria tujuan/kondisi/keterbatasan/karakteristik media, sistem komunikasi, pertimbangan biaya/waktu/format, tiga prinsip pemilihan. | 5 / `kp-mhs-p047` | Dikonversi sebagai daftar pertimbangan dan tiga prinsip bernomor. | Menunggu parent |
| mahasiswa | 48 | Usia 6–12, 13–18, 19–25 tahun beserta karakteristik dan contoh media; penerimaan visual, auditori, kinestetik beserta seluruh contoh. | 5 / `kp-mhs-p048` | Dikonversi sebagai dua daftar bernomor; rentang usia dan panah terjaga. | Menunggu parent |
| mahasiswa | 49 | Lima pertimbangan praktis: isi/metode, efektivitas alternatif, kemampuan/pengalaman/daya tarik penerima, fleksibilitas/kenyamanan/keamanan, keterampilan persuader. | 5 / `kp-mhs-p049` | Dikonversi sebagai lima butir. | Menunggu parent |
| mahasiswa | 50 | Pengantar Analisis Media dalam Pesan Persuasif: pengertian dan penggunaan media untuk khalayak. | 5 / `kp-mhs-p050` | Dikonversi; judul dipindah sebelum paragraf. | Menunggu parent |
| mahasiswa | 51 | Konsep media dengan contoh percakapan, telepon, surat, tempat ibadah, kegiatan masyarakat; hubungan media/pesan, Instagram dan kampanye video pengurangan plastik. | 5 / `kp-mhs-p051` | Dikonversi sebagai dua subbagian; seluruh contoh dipertahankan. | Menunggu parent |
| mahasiswa | 52 | Perumusan pesan: tujuan, sasaran, isi, bahasa/makna, media; daya tarik ethos/pathos/logos; penyesuaian poster dan Instagram. | 5 / `kp-mhs-p052` | Dikonversi; dua rincian diberi heading. | Menunggu parent |
| mahasiswa | 53 | Efektivitas dari perhatian, pemahaman, perubahan; kesesuaian/keterlibatan khalayak, likes/komentar/bagikan, informasi keliru dan pengukuran. | 5 / `kp-mhs-p053` | Dikonversi dengan empat faktor terpisah. | Menunggu parent |
| mahasiswa | 54 | Kesimpulan media: ragam cetak/audio/visual/audiovisual/digital/sosial, pertimbangan pemilihan, kesesuaian pesan dan etika antimanipulasi. | 5 / `kp-mhs-p054` | Kesimpulan asli dikonversi penuh, tidak diringkas ulang. | Menunggu parent |
| mahasiswa | 55 | Sampul Hambatan Komunikasi Persuasif; Kelompok 5. | 6 / `kp-mhs-p055` | Dikonversi; dua judul identik ditampilkan sekali. | Menunggu parent |
| mahasiswa | 56 | Tujuan peningkatan kesadaran/sikap/perilaku, hambatan dan ketepatan kemasan/metode/media/strategi. | 6 / `kp-mhs-p056` | Dikonversi; heading ganda dijadikan satu dan dipindah ke awal. | Menunggu parent |
| mahasiswa | 57 | Hambatan komunikasi umum/persuasif; prasangka negatif dan perbedaan kepentingan; pengukuran tingkat kesulitan. | 6 / `kp-mhs-p057` | Dikonversi; dua faktor bernomor, heading bayangan dideduplikasi. | Menunggu parent |
| mahasiswa | 58 | Fisher: faktor mekanis dan psikologis; kesulitan komunikasi pendidikan/perkuliahan; David R. Hampton dikutip Moekijat: sumber, penyampaian, penerima, umpan balik. | 6 / `kp-mhs-p058` | Dikonversi; empat kategori dan kedua lapis atribusi dipertahankan. Angka bebas 1–3 tidak dipaksakan menjadi kategori. | Menunggu parent |
| mahasiswa | 59 | Hambatan psikologis: kepentingan, prasangka, stereotip, motivasi; sosiokultural: etnik, norma, bahasa, semantik, pendidikan. | 6 / `kp-mhs-p059` | Dikonversi; judul ganda dan tanda format liar di kategori kedua disederhanakan. | Menunggu parent |
| mahasiswa | 60 | Hambatan interaksi nonverbal: konsepsi, pengucapan, metodologi beserta penjelasannya. | 6 / `kp-mhs-p060` | Dikonversi tiga butir; istilah sumber tidak diganti. | Menunggu parent |
| mahasiswa | 61 | Pengertian ketepatan kemasan pesan dan kesesuaian kebutuhan; Attention, Need, Satisfaction, Visualisation, Action. | 6 / `kp-mhs-p061` | Dikonversi; lima tahapan berurutan, judul ganda menjadi satu. | Menunggu parent |
| mahasiswa | 62 | Empat syarat pesan menarik dan empat perhatian kemasan tepat sasaran, termasuk media, kesukaan komunikan dan pengalaman. | 6 / `kp-mhs-p062` | Dikonversi dua daftar, masing-masing empat butir; heading bayangan tidak diulang. | Menunggu parent |
| mahasiswa | 63 | Metode informatif/persuasif/instruktif-koersif; ELM sentral/periferal; kondisi audiens; lima pertimbangan media termasuk gangguan saluran dan kritisisme media sosial. | 6 / `kp-mhs-p063` | Dikonversi; urutan metode lalu media, judul utama dipindah ke awal dan dideduplikasi. | Menunggu parent |
| mahasiswa | 64 | Empat tindakan strategi dan REACH: Respect, Empathy, Audible, Clarity, Humble dengan penjelasan tiap prinsip. | 6 / `kp-mhs-p064` | Dikonversi; sembilan butir dalam dua kelompok, angka bebas 1–3 tidak dimaknai sebagai urutan materi. | Menunggu parent |
| mahasiswa | 65 | Kasus minat membaca siswa MAN 1 Ponorogo, preferensi internet/digital; contoh hambatan sumber, penyampaian, penerima dan feedback beserta semua rincian. | 6 / `kp-mhs-p065` | Dikonversi; konteks kasus diletakkan sebelum empat uraian, heading ganda dijadikan satu. | Menunggu parent |
| mahasiswa | 66 | Kesimpulan hambatan: prasangka, kepentingan, motivasi terpendam, tiga kelompok hambatan, kemasan tidak memaksa dan pemilihan metode/media/strategi. | 6 / `kp-mhs-p066` | Kesimpulan asli dikonversi penuh; judul ganda dideduplikasi. | Menunggu parent |
| mahasiswa | 67 | Sampul Strategi Komunikasi Persuasif; BPI 5A, 2026, Kelompok 6. | 7 / `kp-mhs-p067` | Dikonversi; huruf/angka berjarak tipografis disatukan. | Menunggu parent |
| mahasiswa | 68 | Persuasi tanpa paksaan, kebutuhan strategi dan pemahaman khalayak; tiga strategi Melvin L. DeFleur dan Sandra J. Ball-Rokeach. | 7 / `kp-mhs-p068` | Dikonversi; nomor slide tercetak 3 tidak menjadi isi paragraf. | Menunggu parent |
| mahasiswa | 69 | Perencanaan sistematis; definisi Soleh Soemirat dan perpaduan perencanaan/manajemen menurut Asep Suryana. | 7 / `kp-mhs-p069` | Dikonversi; kedua atribusi utuh, nomor slide tercetak 4 tidak disisipkan. | Menunggu parent |
| mahasiswa | 70 | Pentingnya identifikasi audiens: relevansi, bahasa, hambatan, saluran, sumber daya, etika, kejenuhan, filter bubble, manipulasi dan kesimpulannya. | 7 / `kp-mhs-p070` | Dikonversi penuh; nomor slide tercetak 5 tidak disisipkan. | Menunggu parent |
| mahasiswa | 71 | Enam prinsip naluriah: Reciprocity, Commitment & Consistency, Social Proof, Liking, Authority, Scarcity; lima fungsi strategi berikut contoh tindakan. | 7 / `kp-mhs-p071` | Dikonversi enam prinsip dan lima fungsi; nomor slide 6 di luar prosa. | Menunggu parent |
| mahasiswa | 72 | Tiga model: Ethos–Pathos–Logos/Aristoteles, ELM/Petty & Cacioppo, AIDA dengan kepanjangan/tahapan dan pentingnya kesesuaian psikologi audiens. | 7 / `kp-mhs-p072` | Dikonversi tiga butir lengkap dan paragraf penutup; nomor slide 7 tidak disisipkan. | Menunggu parent |
| mahasiswa | 73 | DeFleur & Ball-Rokeach: psikodinamika, sosiokultural, konstruksi makna; penyusunan strategi, pemilihan media dan evaluasi. | 7 / `kp-mhs-p073` | Dikonversi tiga strategi, langkah dan simpulan sumber; nomor slide 8 tidak disisipkan. | Menunggu parent |
| mahasiswa | 74 | Kesimpulan strategi; usia, jenis kelamin, pendidikan, pekerjaan, minat, budaya, kebiasaan media; model persuasi, media dan evaluasi. | 7 / `kp-mhs-p074` | Kesimpulan asli dikonversi penuh; nomor slide 9 tidak disisipkan. | Menunggu parent |
| mahasiswa | 75 | Sampul Teknik-Teknik Komunikasi Persuasif; Kelompok 7; 2026. | 8 / `kp-mhs-p075` | Dikonversi beserta atribusi dan tahun. | Menunggu parent |
| mahasiswa | 76 | Pertanyaan tentang cara penyampaian; dua kutipan ajakan Perpusnas oleh Tubagus dan Rifqy, termasuk istilah percakapan asli. | 8 / `kp-mhs-p076` | Dikonversi sebagai dua kutipan dengan atribusi terpisah. | Menunggu parent |
| mahasiswa | 77 | Tujuan memahami → menerima → mempertimbangkan → bertindak; definisi persuasi dan penekanan APA/BAGAIMANA. | 8 / `kp-mhs-p077` | Dikonversi dengan alur panah dan penekanan kapital sumber terjaga. | Menunggu parent |
| mahasiswa | 78 | Judul Teknik-Teknik Komunikasi Persuasif; empat tangkapan layar tertanam, bukan halaman kosong. | 8 / `kp-mhs-p078` | Seluruh teks lapisan PDF berupa judul telah dikonversi; teks/atribusi di dalam empat gambar dan pemasangan aset ditangani parent, lihat §3. | Menunggu parent |
| mahasiswa | 79 | Asosiasi: objek/peristiwa menarik, perhatian terbawa, contoh kopi dengan idol K-pop. | 8 / `kp-mhs-p079` | Dikonversi penuh dengan contoh. | Menunggu parent |
| mahasiswa | 80 | Integrasi: senasib/sebagian dari kita/memahami kita, kata kita; contoh Ustad Hannan Attaki, overthinking, sapaan Teman-teman dan posisi terhadap jamaah. | 8 / `kp-mhs-p080` | Dikonversi penuh; nama dan atribusi contoh dipertahankan. | Menunggu parent |
| mahasiswa | 81 | Pay-Off Idea: keuntungan/harapan, kutipan utama, contoh pengurangan scrolling satu jam sebelum tidur, tubuh segar/fokus belajar dan alur manfaat. | 8 / `kp-mhs-p081` | Dikonversi seluruh uraian, contoh dan alur. | Menunggu parent |
| mahasiswa | 82 | Fear arousing: rasa takut/kecemasan/konsekuensi, kewajiban solusi dan dua kutipan pengarahan risiko untuk perlindungan diri. | 8 / `kp-mhs-p082` | Dikonversi seluruh teks; tidak ditambah ancaman/contoh baru. | Menunggu parent |
| mahasiswa | 83 | The Yes-Response: persetujuan bertahap, tiga pertanyaan sunscreen lengkap, masuk ke ajakan utama dan alur setuju. | 8 / `kp-mhs-p083` | Dikonversi empat langkah dan panah; bahasa percakapan tetap. | Menunggu parent |
| mahasiswa | 84 | Icing: kutipan kemasan pesan, enak didengar/dilihat/dibaca, lima cara kemasan dan kalimat penutup. | 8 / `kp-mhs-p084` | Dikonversi dua daftar dan seluruh uraian. | Menunggu parent |
| mahasiswa | 85 | Perbandingan enam teknik dan penjelasan masing-masing, berasal dari gambar tertanam berjudul 6 Teknik Komunikasi Persuasif. | 8 / `kp-mhs-p085` | Dikonversi menjadi tabel HTML enam baris melalui OCR lokal, pasangan dijaga; bukan sekadar judul. Verifikasi visual akhir belum dilakukan. | Menunggu parent |
| mahasiswa | 86 | Empat pertimbangan: kerangka referensi, kondisi fisik/mental, situasi lingkungan dan respons komunikan, seluruh definisinya. | 8 / `kp-mhs-p086` | Dikonversi empat butir bernomor. | Menunggu parent |
| mahasiswa | 87 | Kesimpulan persuasi sukarela; keenam teknik dan perbedaan pendekatan; kesesuaian tujuan, situasi dan karakter audiens. | 8 / `kp-mhs-p087` | Kesimpulan asli dikonversi penuh, tidak diringkas ulang. | Menunggu parent |

### Rekap cakupan

- Halaman dalam cakupan: **48**; baris halaman unik: **48**; heading/target daftar isi unik: **48**.
- Pembagian: pertemuan 5 = 15 halaman; 6 = 12; 7 = 8; 8 = 13.
- Lapisan teks PDF seluruh halaman telah ditranskripsikan ke fragmen HTML; halaman 85 mendapat tambahan enam pasangan teks dari OCR objek gambar.
- Sampul 40, 55, 67, 75 tetap mempunyai heading dan atribusi; halaman 78 tetap mempunyai heading dan dicatat mempunyai empat gambar, tidak diklaim kosong.
- Halaman dengan pemeriksaan visual oleh agent ini: **0**. Halaman terverifikasi lengkap teks+visual: **0**.
- Jumlah aset publik yang dibuat/disertakan: **0**, sesuai pembagian tugas. Tidak ada gambar atau placeholder gambar dalam JSON.

## 3. Tabel, visual, dan sumber yang memerlukan parent

**Inventaris ini terbatas pada temuan tekstual/objek yang diperiksa, bukan inventaris visual lengkap. Seluruh 48 halaman masih memerlukan pemeriksaan visual oleh parent**, termasuk teks yang mungkin hanya berada di gambar, caption, logo/atribusi, panah dan relasi warna.

| ID unsur | Sumber/halaman | Temuan dan penanganan | Tujuan/status |
| --- | --- | --- | --- |
| `mahasiswa-p078-screenshots` | mahasiswa 78 | Empat objek gambar terpisah, berukuran 644×840, 619×840, 492×840, dan 519×840 piksel. Lapisan teks hanya memuat judul. OCR percobaan seluruh halaman menghasilkan potongan UI/caption yang tidak andal, sehingga tidak disalin sebagai transkripsi terverifikasi. Parent menangani aset, teks tertanam, caption/alt dan atribusinya. Tidak ada placeholder atau hasil tebakan dalam HTML. | `kp-mhs-p078`; menunggu parent. |
| `mahasiswa-p085-comparison` | mahasiswa 85 | Objek gambar PDF xref 3914, 1505×847 piksel; area halaman sekitar (221.065, 201.600)–(1218.935, 763.135). Tesseract lokal pada objek asli diperbesar 3×, mode PSM 3/6/11, menghasilkan pasangan konsisten. OCR seluruh halaman kurang baik dan tidak dijadikan dasar tunggal. | Tabel `.academic-table` di `kp-mhs-p085`; verifikasi visual akhir menunggu parent. |

### Pasangan tabel halaman 85

Urutan bacanya dibuat kiri ke kanan pada baris atas, lalu kiri ke kanan pada baris bawah objek sumber; bukan urutan keluaran OCR yang mencampur kolom.

| Teknik dalam sumber | Penjelasan sumber yang ditranskripsikan |
| --- | --- |
| Association | Menghubungkan pesan dengan sesuatu yang menarik/populer. |
| Integration | Membangun rasa dekat dan kesamaan dengan komunikan. |
| Pay-Off | Menawarkan keuntungan atau hasil yang menyenangkan. |
| Fear Arousing | Menunjukkan risiko atau konsekuensi yang merugikan. |
| Yes-Response | Membangun persetujuan secara bertahap. |
| Icing | Mengemas pesan agar menarik dan menyenangkan. |

Header “Teknik” dan “Penjelasan” ditambahkan sebagai label struktural tabel HTML, bukan diklaim kutipan judul kolom asli. Tabel mempunyai caption, dua `th scope="col"`, dan enam `th scope="row"`. Parent tetap perlu mencocokkan ejaan, pasangan, urutan dan tanda baca terhadap gambar sumber; gambar pendamping tidak dipasang dalam tugas ini.

## 4. Adaptasi semantik

- Heading per halaman memakai `h2 id="kp-mhs-pNNN"`; subtopik `h3`, rincian metode serta subkategori media pembelajaran `h4` sesuai tingkatnya.
- Paragraf mengalir tanpa posisi absolut, dimensi slide, pemisah halaman cetak buatan atau CSS baru.
- Daftar bernomor mempertahankan urutan tahapan/model/contoh; klasifikasi dan rincian setara memakai `ul`.
- Dialog halaman 76 memakai `blockquote` dengan nama pembicara di heading terpisah. Kutipan lain tetap dalam paragraf sesuai konteks sumber.
- Tabel halaman 85 menggunakan komponen bersama `table-wrapper` dan `academic-table`, bukan screenshot sebagai pengganti teks.
- Tidak ada penjelasan akademik, kuis, kunci, fakta metadata atau sitasi baru yang ditambahkan. Kata “lanjutan” dan konteks judul kesimpulan adalah label navigasi editorial saja.

## 5. Integritas teks, deduplikasi dan ketidakpastian

### Deduplikasi yang dilakukan

- **Halaman 41:** setiap baris isi muncul tiga kali berimpit, kemudian satu paragraf identik muncul lagi sebagai blok keempat. Pemeriksaan blok/koordinat PyMuPDF menunjukkan pengulangan pada area teks sama. Setiap baris unik dipertahankan sekali dalam urutan aslinya; bukan merangkum. Pemenggalan `Masing-` + `masing` disatukan menjadi `Masing-masing`.
- **Halaman 55–66:** judul utama muncul dua kali identik. Satu heading dipertahankan per halaman; isi unik, contoh, klasifikasi dan kesimpulan tidak dibuang. Pada halaman 56–57, 60–63 dan 65, urutan ekstraksi menaruh judul setelah/sejajar isi; heading dipindah ke awal agar alur HTML logis.
- **Halaman 58 dan 64:** angka bebas 1, 2, 3 muncul pada koordinat yang sama di kedua halaman meskipun isi berbeda. Angka tersebut tidak ditafsirkan menjadi tiga kategori tambahan; kategori bernomor yang benar-benar melekat pada teks tetap dipertahankan. Status fungsi visual angka tersebut belum diverifikasi dan menjadi tanggung jawab parent.
- **Halaman 68–74:** nomor slide tercetak 3–9 tidak disisipkan ke paragraf. Nomor fisik sumber tetap tercatat satu per satu dalam audit/`pages`/ID.
- **Halaman 67:** spasi dekoratif `2 0 2 6` dan `K E L O M P O K 6` dinormalisasi menjadi `2026` dan `Kelompok 6`, tidak menghilangkan tahun/atribusi.
- Tidak dilakukan deduplikasi lintas halaman yang menghapus kesimpulan atau penjelasan berulang bermakna. Semua kesimpulan sumber tetap utuh.

### Normalisasi dan pelestarian sumber

- Pemenggalan baris, whitespace berlebih, spasi sebelum beberapa tanda baca, serta tanda format liar `:*` dinormalisasi tanpa perubahan isi. Kapitalisasi beberapa judul disesuaikan untuk navigasi.
- Penomoran butir dapat dihasilkan oleh HTML `ol`, bukan angka literal di dalam setiap `li`; tidak berarti angka/urutan hilang.
- Halaman 42 mempertahankan klaim sumber `medium (jamak: medius)`; halaman 43 mempertahankan rumusan Lasswell `Who said What in Where channel to Whom with What effect` dan `saluran (saluran)`; halaman 46 mempertahankan `Learning Management System (LSM)`. Ini tidak dinyatakan sebagai koreksi ilmiah atau verifikasi eksternal.
- Ejaan/istilah seperti `prilaku`, `persuade`, `Pengucapan`, `Visualisation`, `Ustad Hannan Attaki`, serta bahasa percakapan contoh tidak diganti dengan pengetahuan agent.
- Atribusi Kelompok 4/5/6/7, BPI 5A, tahun 2026, Harold Lasswell, Fisher, David R. Hampton yang dikutip Moekijat, Soleh Soemirat, Asep Suryana, Aristoteles, Petty & Cacioppo, Melvin L. DeFleur dan Sandra J. Ball-Rokeach dipertahankan sesuai letaknya. Daftar pustaka tambahan tidak dikarang.
- `unresolved: []` pada JSON menyatakan tidak ada fragmen **lapisan teks** yang dibiarkan sebagai placeholder. Itu **bukan** sertifikasi lengkap teks tertanam dalam gambar, kelengkapan visual, izin publikasi atau kelulusan UI. Kewajiban parent halaman 78/85 dan seluruh pemeriksaan visual tetap terbuka dalam audit ini.

## 6. Validasi yang benar-benar dijalankan

| Pemeriksaan | Metode dan hasil aktual | Batas/status |
| --- | --- | --- |
| Identitas sumber | PyMuPDF membuka 87 halaman; SHA-256 dihitung dari PDF dan cocok dengan inventaris awal. | Lulus identitas sumber saat pengerjaan. |
| Rentang/pembagian/schema | Python `json.loads`, pemeriksaan kunci struktur dan array empat bagian; halaman berurutan tepat 40–87 dengan batas 40–54/55–66/67–74/75–87. | Lulus struktur data. |
| ID dan daftar isi | Pemeriksaan setiap `sections[].id` sama dengan heading `h2` pada halaman bersangkutan; 48 ID unik dan terurut. | Lulus pemeriksaan statis. |
| Struktur HTML | Semua fragmen berhasil diurai `xml.etree.ElementTree` dengan root sementara; elemen seimbang; tidak ada `img` atau `script`. | Lulus struktur statis, bukan browser. |
| Kelengkapan kosakata sumber | Per halaman, himpunan kata alfabetis dibandingkan terhadap lapisan teks PDF. Tidak ada kata unik hilang selain huruf terpisah pada `K E L O M P O K` halaman 67 yang sudah dinormalisasi. | Pemeriksaan pendamping, bukan bukti kelengkapan visual atau semantik mandiri. |
| Sambungan frasa | Perbandingan 5-gram kata per halaman dan pembacaan selisih. Selisih berasal dari deduplikasi, heading pindah/konteks judul, urutan kategori, batas daftar dan normalisasi huruf berjarak; tidak ditemukan penghilangan frasa materi unik dari lapisan teks. | Lulus dalam cakupan lapisan teks. |
| Daftar | Jumlah butir ditinjau: halaman 48 = 6; 58 = 4; 62 = 8; 64 = 9; 71 = 11; 72 = 3; 73 = 3; 83 = 4; 86 = 4. | Lulus pemeriksaan statis dan pembacaan teks. |
| Tabel halaman 85 | Teks OCR lokal objek asli dibandingkan antar-PSM; enam pasangan dituangkan ke tabel, enam baris masing-masing dua sel dengan header baris. | OCR/struktur selesai; visual menunggu parent. |
| Audit | Satu baris per halaman, total 48, ID sesuai data. | Diperiksa statis setelah pembuatan. |
| Sintaks JS | Tidak ada JavaScript diubah. JSON diurai dan fragmen HTML diperiksa dengan Python. | `node --check` tidak berlaku untuk berkas JSON ini. |
| Aset/path publik | Tidak membuat/menautkan aset, gambar atau placeholder; tidak mengubah `.gitignore`. | JSON di folder `extracted/` adalah artefak serah terima lokal yang diabaikan Git, bukan data publik portal. |
| Visual semua halaman | Tidak dilakukan, sesuai pembagian tugas dan larangan tool gambar. | **Menunggu parent.** |
| Desktop/ponsel/keyboard/zoom/cetak/navigasi | Tidak dilakukan karena tugas berupa fragmen teks dan audit; data utama/UI tidak diubah. | **Menunggu integrasi dan pengujian parent.** |

## 7. Serah terima

Hanya dua berkas dibuat dalam tugas ini:

1. `komunikasi-persuasif/extracted/mahasiswa-b-parts.json` — HTML semantik lapisan teks halaman 40–87, empat pertemuan, 48 heading/section, tabel enam teknik halaman 85.
2. `docs/content/komunikasi-persuasif/teks-mahasiswa-b.md` — audit ini, 48 baris halaman, deduplikasi, sumber OCR, validasi dan batas cakupan.

Parent perlu meninjau visual seluruh halaman, khususnya empat screenshot halaman 78 dan perbandingan halaman 85; melengkapi aset beserta teks tertanam/caption/alt/atribusi; memastikan izin publikasi; mengintegrasikan fragmen ke data utama; serta menjalankan pengujian browser/keyboard/zoom/cetak. Tidak ada commit, perubahan CSS/data utama atau deployment oleh agent ini. Status akhir: **selesai untuk transkripsi lapisan teks yang ditugaskan, belum terverifikasi visual dan belum siap diklaim sebagai konversi lengkap portal**.

## 8. Riwayat

| Tanggal | Sumber | Cakupan/perubahan | Peninjau |
| --- | --- | --- | --- |
| 2026-11-23 | mahasiswa, hash di §1 | Konversi teks halaman 40–87; tabel halaman 85 melalui OCR lokal; audit per halaman. | Agent teks; visual menunggu parent. |
