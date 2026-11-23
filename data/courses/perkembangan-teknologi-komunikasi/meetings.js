/**
 * Data Materi Perkuliahan — Perkembangan Teknologi Komunikasi
 * Pengampu: Musfiah Saidah, M.Si
 */
window.PortalData = window.PortalData || {};
window.PortalData.courses = window.PortalData.courses || {};

window.PortalData.courses['perkembangan-teknologi-komunikasi'] =
    window.PortalData.courses['perkembangan-teknologi-komunikasi'] || {};

window.PortalData.courses['perkembangan-teknologi-komunikasi'].meetings = [
    {
        number: 1,
        code: 'PTK-01',
        badge: 'Pertemuan 1',
        title: 'Pengantar Perkembangan Teknologi Komunikasi',
        subtitle: 'Definisi teknologi, komunikasi sebagai proses vs saluran, tipologi media, dan lima karakteristik teknologi komunikasi modern.',
        readingTime: '8 menit baca',
        sections: [
            { id: 'p1-definisi', label: 'Hakikat Teknologi & Kajian Jurnal' },
            { id: 'p1-proses-saluran', label: 'Communication vs Communications' },
            { id: 'p1-tipologi-peserta', label: 'Tipologi Tingkatan Komunikasi' },
            { id: 'p1-tipologi-media', label: 'Tipologi Saluran & Media' },
            { id: 'p1-karakteristik', label: '5 Karakteristik Teknologi Komunikasi' }
        ],
        content: `
            <p class="editorial-lead" id="p1-definisi">
                Menurut Berniker (1987), <strong>teknologi</strong> adalah sebuah pengetahuan yang di dalamnya memuat metode, seni, dan cara kerja untuk membangun dunia.
            </p>

            <div class="academic-box">
                <div class="academic-box-header">
                    <span>Referensi Jurnal &bull; Chapter 1 / Chapter 6</span>
                </div>
                <h4>Communication Technologies: Means of Communication as Means of Production</h4>
                <p>
                    Dalam kajian ekonomi-politik media, komunikasi berkaitan erat dengan <strong>kapitalisme</strong> dan <strong>kekuasaan (power)</strong>. Pokok-pokok analisis dalam bab ini meliputi:
                </p>
                <ul>
                    <li>Cara menyampaikan informasi melalui alat produksi komunikasi</li>
                    <li>Lima pembagian teknologi komunikasi sepanjang sejarah sosial</li>
                    <li>Kapitalisme teknologi dan transformasi teknologi</li>
                    <li>Perspektif materialisme terhadap sarana komunikasi</li>
                    <li>Struktur kepemilikan, kekuasaan, dan eksploitasi pekerja di industri media</li>
                </ul>
            </div>

            <h2 id="p1-proses-saluran">Communication vs. Communications</h2>
            <p>
                Dalam studi ilmu komunikasi, penting untuk membedakan secara konseptual antara <strong>Communication</strong> (tanpa huruf <em>s</em>) sebagai <em>proses interaksi sosial</em> penyampaian makna, dengan <strong>Communications</strong> (dengan huruf <em>s</em>) sebagai <em>saluran, perangkat, atau infrastruktur teknis</em> yang memediasi pesan tersebut.
            </p>

            <div class="table-wrapper">
                <table class="academic-table">
                    <thead>
                        <tr>
                            <th>Konteks Aktivitas</th>
                            <th>Komunikasi sebagai Proses (Communication)</th>
                            <th>Komunikasi sebagai Saluran (Communications)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Percakapan Sehari-hari</strong></td>
                            <td>Ngobrol / bertukar kabar antarindividu</td>
                            <td>Aplikasi perpesanan WhatsApp</td>
                        </tr>
                        <tr>
                            <td><strong>Kegiatan Akademik</strong></td>
                            <td>Dosen menjelaskan materi perkuliahan</td>
                            <td>Siaran Televisi / Media penyiaran</td>
                        </tr>
                        <tr>
                            <td><strong>Seni Pertunjukan</strong></td>
                            <td>Pementasan teater &amp; ekspresi peran</td>
                            <td>Konferensi video (Google Meet / Zoom)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p1-tipologi-peserta">Tipologi Berdasarkan Jumlah Peserta &amp; Konteks</h2>
            <p>
                Berdasarkan cakupan partisipan dan konteks sosialnya, tingkatan komunikasi diklasifikasikan ke dalam lima level utama:
            </p>

            <div class="concept-list">
                <div class="concept-item">
                    <strong><span class="concept-index">01</span>Komunikasi Intrapersonal</strong>
                    <p style="margin: 0.35rem 0 0 0;">Proses komunikasi yang terjadi di dalam diri individu sendiri, seperti berpikir, bermeditasi, merenung, atau memproses informasi sebelum mengambil keputusan.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">02</span>Komunikasi Interpersonal</strong>
                    <p style="margin: 0.35rem 0 0 0;">Komunikasi tatap muka atau langsung antara dua orang maupun kelompok kecil yang memungkinkan umpan balik secara langsung (<em>real-time feedback</em>).</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">03</span>Komunikasi Kelompok</strong>
                    <p style="margin: 0.35rem 0 0 0;">Komunikasi yang berlangsung dalam kelompok terstruktur (kecil maupun besar), seperti diskusi tim, rapat kerja, atau seminar akademik.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">04</span>Komunikasi Organisasi</strong>
                    <p style="margin: 0.35rem 0 0 0;">Komunikasi yang terjadi dalam jaringan struktural suatu lembaga atau perusahaan, mencakup saluran formal (instruksi atas-bawah, laporan bawah-atas) maupun saluran informal.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">05</span>Komunikasi Massa</strong>
                    <p style="margin: 0.35rem 0 0 0;">Proses penyampaian pesan dari institusi atau komunikator terlembaga kepada khalayak luas, heterogen, dan anonim menggunakan media massa (televisi, radio, surat kabar, dan media digital).</p>
                </div>
            </div>

            <h2 id="p1-tipologi-media">Tipologi Berdasarkan Saluran &amp; Perspektif Teoretis</h2>
            <p>
                <strong>John B. Thompson</strong> membedakan tiga bentuk interaksi komunikasi: (1) <em>face-to-face interaction</em> yang bersifat dialogis (misalnya percakapan langsung dengan teman), (2) <em>mediated interaction</em> yang bersifat dialogis melalui perantara teknis (misalnya panggilan telepon), dan (3) <em>mediated quasi-interaction</em> yang bersifat monologis (misalnya siaran radio, televisi, atau surat kabar).
            </p>
            <p>
                Melanjutkan pemikiran Thompson ke era jaringan digital, <strong>Andreas Hepp</strong> merumuskan empat tipe komunikasi:
            </p>
            <ol>
                <li><strong>Direct Communication:</strong> Percakapan langsung tatap muka dengan orang lain tanpa perantara mesin.</li>
                <li><strong>Reciprocal Technically Mediated Personal Communication:</strong> Komunikasi personal timbal balik yang dimediasi perangkat teknis (contoh: percakapan telepon).</li>
                <li><strong>Produced Media Communication:</strong> Ruang komunikasi media massa terproduksi (surat kabar, radio, televisi).</li>
                <li><strong>Virtualised Media Communication:</strong> Komunikasi di dalam lingkungan digital dan berjejaring (<em>digital and networked environment</em>).</li>
            </ol>

            <h3>Klasifikasi Media Komunikasi</h3>
            <ul>
                <li><strong>Komunikasi Konvensional / Tatap Muka:</strong> Berorientasi pada kehadiran fisik tanpa perantara teknologi.</li>
                <li><strong>Komunikasi Media Cetak:</strong> Menggunakan teks tulisan atau cetakan fisik (buku, koran, majalah).</li>
                <li><strong>Komunikasi Media Elektronik:</strong> Menggunakan transmisi sinyal gelombang atau analog (radio, televisi, telepon rumah).</li>
                <li><strong>Komunikasi Digital / Media Baru (New Media):</strong> Komunikasi berbasis jaringan internet yang bersifat interaktif, konvergen, dan melampaui batas ruang/waktu (media sosial, aplikasi pesan instan, <em>videoconference</em>).</li>
            </ul>

            <h2 id="p1-karakteristik">Lima Karakteristik Teknologi Komunikasi</h2>
            <p>
                Menurut <strong>Everett M. Rogers</strong> dan para ahli komunikasi media baru, terdapat lima karakteristik utama yang melekat pada teknologi komunikasi modern:
            </p>

            <div class="concept-list">
                <div class="concept-item">
                    <strong><span class="concept-index">1.</span>Interaktivitas (Interactivity)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Kemampuan sistem teknologi komunikasi untuk memfasilitasi komunikasi timbal balik dua arah atau multi-arah secara dinamis antara pengirim dan penerima.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">2.</span>Dekonsentrasi / Demassifikasi (Demassification)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Pesan tidak lagi harus disiarkan secara massal dan seragam (<em>one-size-fits-all</em>), melainkan dapat disesuaikan secara spesifik (<em>personalized</em>) dengan kebutuhan atau minat individu.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">3.</span>Asinkron (Asynchronous)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Kemampuan mengirim dan menerima pesan tanpa terikat keharusan berada pada waktu yang bersamaan (contoh: surat elektronik/e-mail, forum diskusi, atau pesan instan).</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">4.</span>Konvergensi &amp; Digitalisasi (Convergence)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Penggabungan berbagai format media (teks, audio, gambar, video) dan fungsi saluran (telekomunikasi, komputasi, penyiaran) ke dalam satu platform tunggal berbasis kode biner/digital.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">5.</span>Jangkauan Tanpa Batas Ruang (Ubiquity / Global Reach)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Pemrosesan dan penyebaran informasi melampaui batas geografis secara cepat dan efisien, sehingga informasi dapat diakses dari mana saja dan kapan saja.</p>
                </div>
            </div>
        `
    },
    {
        number: 2,
        code: 'PTK-02',
        badge: 'Pertemuan 2',
        title: 'Teori Determinisme Teknologi vs. Konstruktivisme Sosial (SCOT)',
        subtitle: 'Membedah perdebatan klasik: apakah manusia yang mendominasi teknologi, atau teknologi yang mendominasi manusia?',
        readingTime: '7 menit baca',
        sections: [
            { id: 'p2-studi-kasus', label: 'Refleksi Kasus: Arus Informasi & Platform' },
            { id: 'p2-matriks-scot', label: 'Matriks Negosiasi Makna (POV SCOT)' },
            { id: 'p2-determinisme', label: 'Determinisme Teknologi' },
            { id: 'p2-scot', label: 'Social Construction of Technology (SCOT)' },
            { id: 'p2-komparasi', label: 'Tabel Komparasi Teori' }
        ],
        content: `
            <p class="editorial-lead">
                Pertanyaan mendasar dalam kajian teknologi komunikasi adalah: <em>"Apakah manusia yang mendominasi teknologi, atau justru teknologi yang mendominasi manusia?"</em>
            </p>

            <div class="case-study-block" id="p2-studi-kasus">
                <span class="case-study-label">Refleksi Fenomena Digital</span>
                <h4>Kontroversi Video Refleksi Maudy Ayunda</h4>
                <p>
                    Dari sudut pandang <strong>Determinasi Teknologi</strong>, teknologi mengubah perilaku manusia &rarr; mengubah cara manusia berkomunikasi &rarr; mengubah cara manusia memahami realitas. Dalam konteks video Maudy Ayunda, persoalannya bukan sekadar topik "berita buruk", melainkan kondisi ekosistem teknologi komunikasi yang membuat seseorang sulit benar-benar keluar dari terpaan arus informasi.
                </p>
            </div>

            <h2 id="p2-matriks-scot">Perspektif SCOT pada Ekosistem Platform Digital</h2>
            <p>
                Dari sudut pandang <strong>Social Construction of Technology (SCOT)</strong>, YouTube, X (Twitter), Instagram, dan Threads pada dasarnya hanyalah artefak teknologi atau platform. Cara teknologi tersebut digunakan dan makna sosial yang terbentuk sangat bergantung pada tindakan dan negosiasi pengguna:
            </p>

            <div class="table-wrapper">
                <table class="academic-table">
                    <thead>
                        <tr>
                            <th>Teknologi / Fitur</th>
                            <th>Cara Digunakan</th>
                            <th>Makna Sosial yang Terbentuk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>YouTube</strong></td>
                            <td>Maudy membuat dan mengunggah video refleksi panjang</td>
                            <td>Ruang edukasi dan refleksi personal</td>
                        </tr>
                        <tr>
                            <td><strong>X (Twitter)</strong></td>
                            <td>Warganet memotong dan mengkritik isi video</td>
                            <td>Ruang kritik publik yang terbuka</td>
                        </tr>
                        <tr>
                            <td><strong>Threads</strong></td>
                            <td>Diskusi berantai dan tanggapan antar-pengguna</td>
                            <td>Ruang percakapan komunal</td>
                        </tr>
                        <tr>
                            <td><strong>Algoritma Rekomendasi</strong></td>
                            <td>Mengangkat potongan klip yang kontroversial</td>
                            <td>Amplifikasi dan perluasan perhatian publik</td>
                        </tr>
                        <tr>
                            <td><strong>Kolom Komentar</strong></td>
                            <td>Audiens memberikan respons pro dan kontra</td>
                            <td>Mekanisme negosiasi makna secara kolektif</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <blockquote class="editorial-quote">
                Konten yang awalnya diniatkan sebagai "Bagaimana saya menjaga kesehatan mental di tengah banjir berita buruk" dinegosiasikan ulang maknanya oleh sebagian audiens menjadi: "Orang yang memiliki privilese menyuruh masyarakat menjauh dari persoalan sosial."
                <cite>Ilustrasi Negosiasi Makna dalam Perspektif SCOT</cite>
            </blockquote>

            <h2 id="p2-determinisme">1. Determinisme Teknologi (Technological Determinism)</h2>
            <p>
                Pendekatan ini memandang bahwa teknologilah yang menjadi kekuatan otonom yang membentuk dan mengendalikan struktur masyarakat.
            </p>
            <ul>
                <li><strong>Inti Pemikiran:</strong> Perkembangan teknologi berjalan mengikuti logikanya sendiri secara otonom dan menjadi penggerak utama perubahan sosial, budaya, struktur politik, hingga pola pikir manusia.</li>
                <li><strong>Perspektif Utama:</strong> <em>"We shape our tools, and thereafter our tools shape us"</em> — Kita membentuk peralatan kita, dan setelah itu peralatan kitalah yang membentuk kita (Marshall McLuhan).</li>
                <li><strong>Contoh Sejarah:</strong> Penemuan mesin cetak Gutenberg tidak sekadar memperbanyak buku, tetapi secara struktural merombak masyarakat Eropa dari budaya lisan (<em>oral culture</em>) menuju budaya cetak/tulisan (<em>print culture</em>).</li>
            </ul>

            <h2 id="p2-scot">2. Konstruktivisme Sosial (Social Construction of Technology / SCOT)</h2>
            <p>
                Berlawanan dengan determinisme, pendekatan ini menegaskan bahwa teknologi tidak menentukan tindakan manusia, melainkan tindakan manusialah yang membentuk teknologi.
            </p>
            <ul>
                <li><strong>Inti Pemikiran:</strong> Perkembangan, desain, bentuk, dan pemanfaatan teknologi merupakan hasil dari proses negosiasi sosial, budaya, politik, dan ekonomi oleh berbagai kelompok sosial yang relevan (<em>relevant social groups</em>).</li>
                <li><strong>Perspektif Utama:</strong> Manusia memiliki agensi atau kendali penuh (<em>human agency</em>) untuk menerima, menolak, memodifikasi, atau menyematkan makna tertentu pada suatu teknologi.</li>
                <li><strong>Contoh Kontemporer:</strong> Ponsel pintar (<em>smartphone</em>) dirancang dengan spesifikasi teknis tertentu, namun cara masyarakat menggunakannya—seperti melahirkan budaya kerja <em>work-from-anywhere</em> atau profesi <em>content creator</em>—ditentukan oleh kebutuhan dan konstruksi sosial masyarakatnya.</li>
            </ul>

            <h2 id="p2-komparasi">Perbandingan Determinisme Teknologi vs. SCOT</h2>
            <div class="table-wrapper">
                <table class="academic-table">
                    <thead>
                        <tr>
                            <th>Aspek Analisis</th>
                            <th>Determinisme Teknologi</th>
                            <th>Konstruktivisme Sosial (SCOT)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Arah Pengaruh</strong></td>
                            <td>Teknologi &rarr; Masyarakat</td>
                            <td>Masyarakat &rarr; Teknologi</td>
                        </tr>
                        <tr>
                            <td><strong>Peran Manusia</strong></td>
                            <td>Pasif / beradaptasi mengikuti arus teknologi</td>
                            <td>Aktif / memiliki agensi membentuk arah teknologi</td>
                        </tr>
                        <tr>
                            <td><strong>Pandangan Utama</strong></td>
                            <td>Teknologi adalah kausa utama perubahan sosial</td>
                            <td>Teknologi adalah produk dari interaksi &amp; kebutuhan sosial</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        number: 3,
        code: 'PTK-03',
        badge: 'Pertemuan 3',
        title: 'Tiga Era Teknologi Komunikasi & Teori Difusi Inovasi',
        subtitle: 'Perbandingan era cetak, elektronik, dan digital, peta konglomerasi media, serta studi kasus adopsi QRIS di Desa Kanekes Baduy.',
        readingTime: '9 menit baca',
        sections: [
            { id: 'p3-tiga-era', label: 'Perbandingan Tiga Era Teknologi' },
            { id: 'p3-konglomerasi', label: 'Peta Konsentrasi Media di Indonesia' },
            { id: 'p3-difusi-inovasi', label: 'Teori Difusi Inovasi (Rogers, 1962)' },
            { id: 'p3-tahap-implementasi', label: '8 Tahap Implementasi Teknologi' },
            { id: 'p3-riset-baduy', label: 'Studi Kasus: Digital Payment Suku Baduy' },
            { id: 'p3-adopsi-adopter', label: '5 Tahap Adopsi & 5 Kelompok Adopter' }
        ],
        content: `
            <p class="editorial-lead" id="p3-tiga-era">
                Evolusi teknologi komunikasi dapat dipetakan ke dalam tiga babak besar: <strong>Era Cetak</strong>, <strong>Era Elektronik</strong>, dan <strong>Era Digital</strong>. Setiap era merombak sifat pesan, kecepatan distribusi, hingga posisi khalayak.
            </p>

            <h2>Matriks Perbandingan Tiga Era Teknologi Komunikasi</h2>
            <div class="table-wrapper">
                <table class="academic-table">
                    <thead>
                        <tr>
                            <th>Aspek</th>
                            <th>Era Cetak</th>
                            <th>Era Elektronik</th>
                            <th>Era Digital</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Teknologi Utama</strong></td>
                            <td>Mesin cetak, kertas</td>
                            <td>Radio, televisi, sinyal analog</td>
                            <td>Komputer, internet, <em>smartphone</em></td>
                        </tr>
                        <tr>
                            <td><strong>Bentuk Pesan</strong></td>
                            <td>Teks dan gambar statis</td>
                            <td>Audio dan audiovisual</td>
                            <td>Multimedia terkonvergensi</td>
                        </tr>
                        <tr>
                            <td><strong>Kecepatan &amp; Jangkauan</strong></td>
                            <td>Lambat, bergantung distribusi fisik</td>
                            <td><em>Real-time</em>, dibatasi jangkauan pemancar</td>
                            <td>Seketika (instan), tanpa batas geografis</td>
                        </tr>
                        <tr>
                            <td><strong>Pola Komunikasi</strong></td>
                            <td>Satu arah (<em>one-to-many</em>)</td>
                            <td>Satu arah (<em>one-to-many</em>)</td>
                            <td>Multiarah / berjejaring (<em>many-to-many</em>)</td>
                        </tr>
                        <tr>
                            <td><strong>Peran Audiens</strong></td>
                            <td>Pembaca pasif</td>
                            <td>Pendengar / penonton pasif</td>
                            <td><strong>Prosumer aktif</strong> (produsen sekaligus konsumen)</td>
                        </tr>
                        <tr>
                            <td><strong>Gatekeeping</strong></td>
                            <td>Redaksi dan pemilik modal cetak</td>
                            <td>Stasiun penyiaran terpusat</td>
                            <td>Terdesentralisasi; setiap individu dapat memproduksi konten</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="academic-box" id="p3-konglomerasi">
                <div class="academic-box-header">
                    <span>Peta Industri Media &bull; Merlyna Lim (2012)</span>
                </div>
                <h4>Map of Media Concentration in Indonesia</h4>
                <p>
                    Pemetaan konsentrasi kepemilikan media di Indonesia menunjukkan struktur oligopoli di mana saluran televisi, radio, media cetak, dan portal daring terpusat pada sejumlah grup konglomerasi besar: <strong>MNC Group, Kompas Gramedia Group, Jawa Pos Group, Trans Corpora (Para Group), Visi Media Asia (Bakrie), Lippo Group, EMTEK Group, Mugi Reka Abadi (MRA) Group, Media Group, KM Bali Post, Tempo Inti Media</strong>, di samping lembaga penyiaran publik negara (<strong>TVRI &amp; RRI</strong>).
                </p>
            </div>

            <h2 id="p3-difusi-inovasi">Teori Difusi Inovasi (Everett M. Rogers, 1962)</h2>
            <p>
                <strong>Difusi inovasi</strong> adalah teori yang menjelaskan bagaimana, mengapa, dan seberapa cepat suatu inovasi—baik berupa gagasan baru, produk teknologi, praktik kerja, maupun metode baru—disebarluaskan dan diadopsi oleh individu atau kelompok di dalam suatu sistem sosial. Teori ini diperkenalkan oleh Everett M. Rogers melalui karyanya <em>Diffusion of Innovations</em> (1962).
            </p>

            <h3 id="p3-tahap-implementasi">Delapan Tahap Implementasi Teknologi dalam Komunikasi Massa</h3>
            <div class="step-grid">
                <div class="step-card">
                    <span class="step-card-num">TAHAP 01</span>
                    <strong>Identifikasi Kebutuhan</strong>
                </div>
                <div class="step-card">
                    <span class="step-card-num">TAHAP 02</span>
                    <strong>Perencanaan &amp; Persiapan</strong>
                </div>
                <div class="step-card">
                    <span class="step-card-num">TAHAP 03</span>
                    <strong>Pengadaan / Pengembangan</strong>
                </div>
                <div class="step-card">
                    <span class="step-card-num">TAHAP 04</span>
                    <strong>Pelaksanaan Implementasi</strong>
                </div>
                <div class="step-card">
                    <span class="step-card-num">TAHAP 05</span>
                    <strong>Pelatihan &amp; Pendampingan</strong>
                </div>
                <div class="step-card">
                    <span class="step-card-num">TAHAP 06</span>
                    <strong>Komunikasi &amp; Koordinasi</strong>
                </div>
                <div class="step-card">
                    <span class="step-card-num">TAHAP 07</span>
                    <strong>Evaluasi &amp; Penyempurnaan</strong>
                </div>
                <div class="step-card">
                    <span class="step-card-num">TAHAP 08</span>
                    <strong>Implementasi Komunikasi Massa</strong>
                </div>
            </div>

            <div class="case-study-block" id="p3-riset-baduy">
                <span class="case-study-label">Studi Kasus Riset Dosen &bull; Jurnal Ilmiah (2022)</span>
                <h4>Difusi Inovasi Program Digital Payment di Desa Kanekes Baduy</h4>
                <p style="font-size: 0.88em; color: var(--ink-muted); margin-bottom: 0.75rem;">
                    <strong>Penulis:</strong> Musfiah Saidah, Hilda Trianutami, &amp; Fidya Sukma Amani (Program Studi Komunikasi dan Penyiaran Islam, UIN Syarif Hidayatullah Jakarta) &mdash; Diterima 14 Oktober 2022, Disetujui 16 Desember 2022.
                </p>
                <p>
                    <strong>Ringkasan Kajian:</strong> Komunikasi merupakan kunci utama dalam membangun interaksi komunitas dan memperkenalkan perubahan. Masyarakat Baduy (khususnya Baduy Luar di Desa Kanekes) mulai beradaptasi dengan teknologi pembayaran digital (QRIS) untuk memfasilitasi transaksi wisatawan dan pemasaran kerajinan lokal, sembari tetap melakukan negosiasi ketat agar tidak melanggar nilai-nilai adat tradisional mereka.
                </p>
            </div>

            <h2 id="p3-adopsi-adopter">Lima Tahap Adopsi &amp; Lima Kategori Adopter</h2>
            <p>
                Rogers membagi proses mental yang dilalui seseorang saat mengadopsi inovasi ke dalam <strong>5 tahap berurutan</strong>, serta mengelompokkan anggota masyarakat ke dalam <strong>5 kategori adopter</strong> berdasarkan kecepatan mereka menerima inovasi:
            </p>

            <div class="table-wrapper">
                <table class="academic-table">
                    <thead>
                        <tr>
                            <th>5 Tahap Proses Keputusan Inovasi</th>
                            <th>Penjelasan Tahapan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Knowledge (Pengetahuan)</strong></td>
                            <td>Individu pertama kali mengetahui keberadaan suatu inovasi dan memahami fungsi dasarnya.</td>
                        </tr>
                        <tr>
                            <td><strong>2. Persuasion (Pembentukan Sikap)</strong></td>
                            <td>Individu mulai tertarik, mencari informasi lebih dalam, serta menimbang manfaat dan kelemahan inovasi.</td>
                        </tr>
                        <tr>
                            <td><strong>3. Decision (Keputusan)</strong></td>
                            <td>Individu mengambil pilihan untuk menerima (mengadopsi) atau menolak inovasi tersebut.</td>
                        </tr>
                        <tr>
                            <td><strong>4. Implementation (Pelaksanaan)</strong></td>
                            <td>Individu mulai menggunakan atau menerapkan inovasi dalam aktivitas nyata.</td>
                        </tr>
                        <tr>
                            <td><strong>5. Confirmation (Konfirmasi)</strong></td>
                            <td>Individu mencari penguatan atas keputusannya dan mengevaluasi apakah akan terus menggunakan atau meninggalkan inovasi.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Lima Kelompok Adopter Berdasarkan Kecepatan Adopsi</h3>
            <ul>
                <li><strong>Innovators / Perintis (2,5%):</strong> Kelompok paling pertama yang berani mencoba gagasan baru, menyukai tantangan teknologi, dan siap menanggung risiko ketidakpastian.</li>
                <li><strong>Early Adopters / Pengadopsi Awal (13,5%):</strong> Kelompok pemuka pendapat (<em>opinion leaders</em>) yang dihormati di lingkungannya dan menjadi panutan bagi masyarakat sekitar.</li>
                <li><strong>Early Majority / Mayoritas Awal (34%):</strong> Kelompok pragmatis yang mengadopsi inovasi setelah melihat bukti keberhasilan nyata dari para pengadopsi awal.</li>
                <li><strong>Late Majority / Mayoritas Akhir (34%):</strong> Kelompok skeptis yang baru mengadopsi inovasi karena dorongan kebutuhan ekonomi atau tekanan sosial lingkungan.</li>
                <li><strong>Laggards / Kaum Tradisional (16%):</strong> Kelompok paling akhir yang berpegang kuat pada tradisi lama dan sangat kritis terhadap perubahan teknologi baru.</li>
            </ul>
        `
    },
    {
        number: 4,
        code: 'PTK-04',
        badge: 'Pertemuan 4',
        title: 'Masyarakat Informasi, Masyarakat Jaringan & Masyarakat Maya',
        subtitle: 'Transformasi budaya offline ke digital, konsep Information Age & Network Society Manuel Castells, serta gerakan perubahan sosial.',
        readingTime: '8 menit baca',
        sections: [
            { id: 'p4-pengantar', label: 'Tiga Konsep Masyarakat Digital' },
            { id: 'p4-budaya', label: 'Pergeseran Budaya Offline ke Digital' },
            { id: 'p4-castells', label: 'Network Society (Manuel Castells)' },
            { id: 'p4-empat-pilar', label: 'Produksi, Power, Experience & Jaringan' },
            { id: 'p4-perubahan-sosial', label: 'Cultural Communes vs Alternative Networks' }
        ],
        content: `
            <p class="editorial-lead" id="p4-pengantar">
                Masyarakat informasi bukan sekadar masyarakat yang menggunakan perangkat teknologi. Teknologi jaringan mengubah secara fundamental cara masyarakat bekerja, menggunakan kekuasaan, berkomunikasi, membangun identitas, dan menjalani kehidupan sehari-hari.
            </p>

            <div class="concept-list">
                <div class="concept-item">
                    <strong><span class="concept-index">01</span>Masyarakat Informasi (Information Society)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Menjadikan <strong>informasi</strong> sebagai sumber daya ekonomi, politik, dan produksi yang paling utama.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">02</span>Masyarakat Jaringan (Network Society)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Menjadikan <strong>konektivitas dan simpul jaringan</strong> sebagai struktur pengorganisasian masyarakat.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">03</span>Masyarakat Maya (Cyber Society)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Menjadikan <strong>ruang digital (cyberspace)</strong> sebagai ruang interaksi sosial dan pembentukan budaya baru.</p>
                </div>
            </div>

            <h2 id="p4-budaya">Transformasi Praktik Budaya: Offline ke Digital</h2>
            <p>
                Kehadiran ruang siber memindahkan sekaligus memodifikasi berbagai aktivitas sosial harian ke dalam bentuk praktik budaya digital baru:
            </p>

            <div class="table-wrapper">
                <table class="academic-table">
                    <thead>
                        <tr>
                            <th>Praktik Budaya Offline</th>
                            <th>Transformasi Budaya Digital</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Gosip dari mulut ke mulut</td><td><strong>Spill</strong> (membongkar utas/cerita di media sosial)</td></tr>
                        <tr><td>Surat fisik</td><td><strong>DM (Direct Message)</strong></td></tr>
                        <tr><td>Nongkrong di ruang fisik</td><td><strong>Virtual community</strong> (komunitas daring)</td></tr>
                        <tr><td>Papan pengumuman</td><td><strong>Instagram Story / Status</strong></td></tr>
                        <tr><td>Demonstrasi jalanan</td><td><strong>Digital activism</strong> (petisi daring, kampanye tagar)</td></tr>
                        <tr><td>Majalah cetak</td><td><strong>TikTok / YouTube</strong></td></tr>
                        <tr><td>Idola televisi</td><td><strong>Influencer / Kreator Konten</strong></td></tr>
                        <tr><td>Forum diskusi tatap muka</td><td><strong>Discord / Reddit</strong></td></tr>
                        <tr><td>Album foto cetak</td><td><strong>Feed Instagram</strong></td></tr>
                        <tr><td>Buku harian (<em>diary</em>)</td><td><strong>Vlog (Video Blog)</strong></td></tr>
                    </tbody>
                </table>
            </div>

            <blockquote class="editorial-quote" id="p4-castells">
                "Dulu masyarakat dibentuk oleh tempat kita tinggal. Sekarang, masyarakat juga dibentuk oleh jaringan tempat kita terhubung."
                <cite>Manuel Castells &mdash; The Information Age: Economy, Society and Culture</cite>
            </blockquote>

            <div class="academic-box">
                <div class="academic-box-header">
                    <span>Pertanyaan Refleksi &amp; Diskusi Kelas</span>
                </div>
                <p style="margin: 0; font-weight: 600; color: var(--ink-primary);">
                    "Apakah teknologi membuat manusia semakin terhubung, atau justru semakin terpisah?"
                </p>
            </div>

            <h2 id="p4-empat-pilar">Bagaimana Manuel Castells Melihat Masyarakat Jaringan</h2>
            <p>
                Dalam kerangka <em>Information Age: Network Society</em>, teknologi digital membentuk jaringan yang merombak cara masyarakat bekerja, berinteraksi, dan menjalankan kekuasaan. Castells membedah masyarakat melalui empat dimensi utama:
            </p>

            <div class="concept-list">
                <div class="concept-item">
                    <strong><span class="concept-index">1.</span>Produksi (Production)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Bagaimana manusia bekerja dan menghasilkan nilai ekonomi. <br><em>Contoh:</em> Kreator konten memproduksi video digital dan memperoleh pendapatan melalui <em>endorsement</em> atau monetisasi platform.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">2.</span>Kekuasaan (Power)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Siapa yang memiliki kapasitas memengaruhi pikiran dan tindakan orang lain. <br><em>Contoh:</em> <em>Influencer</em>, algoritma rekomendasi, dan pemilik platform digital dapat menentukan wacana apa yang menjadi viral.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">3.</span>Pengalaman (Experience)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Bagaimana manusia menjalani kehidupan sehari-hari dan membangun identitas diri. <br><em>Contoh:</em> Pengguna media sosial mengonstruksi citra diri (<em>personal branding</em>) dan memperoleh pengakuan sosial.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">4.</span>Teknologi Jaringan (Network Technology)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Infrastruktur yang mengubah cara produksi, kekuasaan, dan pengalaman berlangsung. <br><em>Contoh:</em> Internet dan platform digital memungkinkan ketiga dimensi di atas terjadi secara instan, lintas batas, dan saling terhubung.</p>
                </div>
            </div>

            <h2 id="p4-perubahan-sosial">Dinamika Perubahan Sosial: Cultural Communes vs. Alternative Networks</h2>
            <p>
                Menurut Castells, di dalam masyarakat jaringan, perubahan sosial tidak selalu terjadi dengan memperbaiki sistem yang sudah ada dari dalam. Sering kali, perubahan justru muncul dari kelompok di luar jaringan dominan yang menawarkan nilai, identitas, atau cara hidup yang berbeda:
            </p>

            <div class="table-wrapper">
                <table class="academic-table">
                    <thead>
                        <tr>
                            <th>Dimensi Perbandingan</th>
                            <th>Cultural Communes</th>
                            <th>Alternative Networks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Orientasi Utama</strong></td>
                            <td>Mempertahankan identitas dan nilai komunal</td>
                            <td>Membangun proyek perubahan sosial baru</td>
                        </tr>
                        <tr>
                            <td><strong>Bentuk Organisasi</strong></td>
                            <td>Cenderung membentuk komunitas yang erat</td>
                            <td>Cenderung membentuk jaringan terbuka lintas kelompok</td>
                        </tr>
                        <tr>
                            <td><strong>Sikap terhadap Sistem Dominan</strong></td>
                            <td>Menolak nilai-nilai dominan demi menjaga kemurnian kelompok</td>
                            <td>Menawarkan alternatif kebijakan dan nilai baru kepada publik</td>
                        </tr>
                        <tr>
                            <td><strong>Pertanyaan Kunci</strong></td>
                            <td>Fokus pada <strong>"Siapa kami"</strong></td>
                            <td>Fokus pada <strong>"Apa yang ingin kami ubah"</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Contoh Gerakan</strong></td>
                            <td>Komunitas keagamaan eksklusif / identitas etnis</td>
                            <td>Gerakan lingkungan hidup, HAM, dan keadilan gender</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        number: 5,
        code: 'PTK-05',
        badge: 'Pertemuan 5',
        title: 'Cybercrime, Manajemen Privasi Komunikasi (CPM) & KBGO',
        subtitle: 'Kejahatan ruang siber, teori batas privasi Sandra Petronio, serta analisis Kekerasan Berbasis Gender Online.',
        readingTime: '9 menit baca',
        sections: [
            { id: 'p5-kasus-1', label: 'Studi Kasus 1: Akun Anonim Kampus' },
            { id: 'p5-cybercrime', label: 'Konsep & Perspektif Cybercrime' },
            { id: 'p5-cpm', label: 'Teori Communication Privacy Management' },
            { id: 'p5-kasus-2', label: 'Studi Kasus 2: Second Account & Privasi' },
            { id: 'p5-kbgo', label: 'Kekerasan Berbasis Gender Online (KBGO)' }
        ],
        content: `
            <div class="case-study-block" id="p5-kasus-1">
                <span class="case-study-label">Studi Kasus 1 &bull; Diskusi Pembuka</span>
                <h4>Akun Palsu di Lingkungan Kampus</h4>
                <p>
                    <em>"Seorang mahasiswa membuat akun anonim untuk mengkritik kebijakan kampus. Suatu hari, akun tersebut mengunggah tangkapan layar percakapan pribadi seorang dosen, disertai nomor telepon dan tuduhan yang belum terverifikasi. Unggahan itu kemudian tersebar luas."</em>
                </p>
                <p style="margin-bottom: 0.35rem;"><strong>Pertanyaan Analisis Kelas:</strong></p>
                <ol style="margin-bottom: 0;">
                    <li>Apakah penggunaan akun anonim secara otomatis termasuk <em>cybercrime</em>? Mengapa?</li>
                    <li>Bentuk-bentuk penyalahgunaan digital apa saja yang terjadi dalam kasus tersebut (mis. <em>doxing</em>, pencemaran nama baik, pelanggaran data pribadi)?</li>
                    <li>Apa dampak kasus tersebut terhadap privasi, reputasi akademik, dan kepercayaan sosial di lingkungan kampus?</li>
                </ol>
            </div>

            <h2 id="p5-cybercrime">Pengertian &amp; Perspektif Teoretis Cybercrime</h2>
            <p>
                <strong>David S. Wall (2001)</strong> mengkaji kejahatan internet sebagai fenomena yang berkaitan erat dengan perubahan teknologi, struktur jaringan, dan terbukanya peluang baru untuk melakukan pelanggaran. Pendekatan Wall menjelaskan bahwa internet bukan sekadar alat komunikasi, melainkan juga <strong>lingkungan sosial baru</strong> tempat berlangsungnya aktivitas kriminal.
            </p>
            <p>
                <strong>Thomas dan Loader (2000)</strong> mendefinisikan <em>cybercrime</em> sebagai aktivitas yang dimediasi komputer (<em>computer-mediated activities</em>) yang bersifat melanggar hukum maupun melanggar norma sosial tertentu di dalam lingkungan jaringan elektronik.
            </p>
            <p>
                Dengan demikian, <em>cybercrime</em> bukan semata-mata persoalan teknis perangkat keras atau kode pemrograman, melainkan berkaitan langsung dengan perilaku manusia, pola komunikasi, kepercayaan, identitas, dan relasi sosial di ruang digital.
            </p>

            <div class="academic-box">
                <div class="academic-box-header">
                    <span>Rumusan Definisi Utama</span>
                </div>
                <p style="margin: 0;">
                    <strong>Cybercrime</strong> adalah tindakan melanggar hukum yang memanfaatkan komputer, jaringan internet, atau teknologi digital sebagai <em>sarana</em>, <em>sasaran</em>, maupun <em>lingkungan</em> terjadinya kejahatan. Dalam perspektif Perkembangan Teknologi Komunikasi, <em>cybercrime</em> merupakan salah satu konsekuensi dari transformasi cara manusia berkomunikasi—dari interaksi tatap muka menuju komunikasi termediasi teknologi yang terhubung dalam jaringan global.
                </p>
            </div>

            <h2 id="p5-cpm">Teori Manajemen Privasi Komunikasi (Communication Privacy Management / CPM)</h2>
            <p>
                Setiap individu memiliki kapasitas sekaligus hak untuk memilih apakah akan menyampaikan atau menyimpan informasi pribadinya. Menurut <strong>Sandra Petronio (2002)</strong> (dalam Griffin, Ledbetter, &amp; Sparks, 2019: 145), manusia mengelola batas-batas privasi (<em>privacy boundaries</em>) melalui tiga elemen utama:
            </p>

            <div class="concept-list">
                <div class="concept-item">
                    <strong><span class="concept-index">01</span>Kepemilikan Privasi (Privacy Ownership)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Informasi privat yang dimiliki oleh seseorang dan tidak diketahui oleh pihak lain. Ketika informasi tersebut dibagikan kepada orang lain, penerima informasi menjadi <em>co-owner</em> (pemilik bersama) yang terikat tanggung jawab batas privasi.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">02</span>Kontrol Privasi (Privacy Control)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Keputusan dan aturan yang dibuat individu terkait kapan, bagaimana, dan kepada siapa informasi pribadi tersebut diberikan atau ditutup.</p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">03</span>Turbulensi Privasi (Privacy Turbulence)</strong>
                    <p style="margin: 0.35rem 0 0 0;">Kondisi ketika pengelolaan privasi mengalami kegagalan atau pelanggaran dan tidak berjalan sesuai ekspektasi pemilik informasi (misalnya penyebaran tangkapan layar rahasia tanpa izin).</p>
                </div>
            </div>

            <div class="case-study-block" id="p5-kasus-2">
                <span class="case-study-label">Studi Kasus 2 &bull; Analisis CPM &amp; Keamanan Digital</span>
                <h4>Dari Second Account ke Kekerasan Digital</h4>
                <p>
                    <em>"Seorang mahasiswi memiliki akun Instagram kedua (second account) yang hanya diikuti oleh teman-teman dekatnya. Ia mengunggah cerita tentang pengalaman pribadi dan hubungan yang sedang dijalani. Salah satu pengikut mengambil tangkapan layar (screenshot) tanpa sepengetahuannya, lalu mengirimkannya kepada orang lain disertai komentar yang mempermalukan korban. Setelah terjadi konflik, seseorang mengancam akan menyebarkan foto pribadi korban ke grup kampus."</em>
                </p>
                <p style="margin-bottom: 0.35rem;"><strong>Pertanyaan Diskusi:</strong></p>
                <ol style="margin-bottom: 0;">
                    <li>Di bagian mana terjadi perubahan konteks komunikasi (<em>context collapse</em>) dari ruang privat terbatas menjadi konsumsi publik?</li>
                    <li>Bagaimana konsep <em>Privacy Ownership</em>, <em>Privacy Control</em>, dan <em>Privacy Turbulence</em> dalam teori CPM menjelaskan kasus ini?</li>
                    <li>Apakah kasus tersebut termasuk pelanggaran privasi, KBGO, <em>cybercrime</em>, atau irisan dari ketiganya?</li>
                </ol>
            </div>

            <h2 id="p5-kbgo">Kekerasan Berbasis Gender Online (KBGO)</h2>
            <p>
                <strong>Kekerasan Berbasis Gender Online (KBGO)</strong> adalah segala bentuk kekerasan yang difasilitasi oleh teknologi digital dan berakar pada ketimpangan gender, relasi kuasa yang timpang, atau norma gender yang merugikan korban.
            </p>
            <ul>
                <li><strong>Medium Penyebaran:</strong> Dapat terjadi melalui media sosial, aplikasi perpesanan instan, forum daring, situs web, hingga manipulasi teknologi berbasis kecerdasan buatan (seperti <em>deepfake</em> non-konsensual).</li>
                <li><strong>Dampak Multidimensi:</strong> Dampaknya tidak berhenti di ruang virtual; korban dapat mengalami trauma psikologis berat, pengucilan sosial, kerugian akademik/ekonomi, hingga ancaman langsung terhadap keselamatan fisik.</li>
                <li><strong>Perspektif Ilmu Komunikasi:</strong> KBGO perlu dipahami secara kritis sebagai penyalahgunaan pesan, representasi visual, identitas, dan akses jaringan digital untuk melecehkan, mengontrol, mempermalukan, atau mengintimidasi seseorang.</li>
            </ul>
        `
    }
];
