/**
 * Data Ujian (UTS & UAS) — Manajemen Media Penyiaran
 *
 * Tab UAS memuat "Soal Quiz Pilihan Ganda MMP.pdf" (halaman 1–4) sebagai bahan latihan,
 * sesuai keputusan pemilik portal. Sumber tidak menyebut jadwal, durasi, atau cara pengumpulan.
 */
window.PortalData = window.PortalData || {};
window.PortalData.courses = window.PortalData.courses || {};
window.PortalData.courses['manajemen-media-penyiaran'] =
    window.PortalData.courses['manajemen-media-penyiaran'] || {};

window.PortalData.courses['manajemen-media-penyiaran'].exams = {
    uts: {
        available: false,
        type: 'Ujian Tengah Semester (UTS)',
        title: 'Informasi Ujian Tengah Semester (UTS) — Manajemen Media Penyiaran',
        deadline: '',
        submissionChannel: '',
        content: ''
    },
    uas: {
        available: true,
        type: 'Ujian Akhir Semester (UAS)',
        title: 'Soal Quiz Pilihan Ganda — Manajemen Media Penyiaran',
        deadline: '',
        submissionChannel: '',
        content: `
            <p class="editorial-lead" id="uas-pengantar">Berikut soal kuis pilihan ganda Manajemen Media Penyiaran sesuai berkas sumber, sebagai bahan latihan menjelang UAS. Halaman ini bukan soal atau ketentuan UAS resmi; jadwal, durasi, dan cara pengumpulan UAS tidak tercantum dalam sumber.</p>
            <div class="academic-box">
                <span class="academic-box-header">Latihan interaktif</span>
                <p>Soal yang sama dapat dikerjakan dan diperiksa langsung di tab Kuis, pilihan <strong>Kuis pilihan ganda</strong>, lengkap dengan skor dan pembahasan.</p>
                <p><button type="button" class="button button-primary" onclick="PortalApp.switchTab('kuis', 99)">Kerjakan kuis</button></p>
            </div>

            <h2 id="uas-soal">Soal Quiz Pilihan Ganda</h2>
            <ol>
                <li><strong>Nilai Ekonomi Informasi dan Komodifikasi</strong><br>Dalam perspektif ekonomi informasi dan ekonomi politik media, perubahan nilai guna (manfaat informasi bagi masyarakat) menjadi nilai tukar (keuntungan yang diperoleh media melalui iklan, langganan, maupun data audiens) disebut sebagai ...
                    <ol type="A"><li>Spasialisasi</li><li>Komodifikasi</li><li>Strukturasi</li><li>Standardisasi</li></ol></li>
                <li><strong>Perbedaan Nilai Guna dan Nilai Tukar</strong><br>Berdasarkan materi nilai ekonomi informasi, manakah yang termasuk contoh dari nilai tukar informasi bagi media?
                    <ol type="A"><li>Manfaat edukasi dan wawasan bagi masyarakat</li><li>Keuntungan yang diperoleh melalui iklan, langganan, dan data audiens</li><li>Kebebasan audiens memilih waktu menonton secara on-demand</li><li>Kepuasan pendengar terhadap kualitas suara siaran</li></ol></li>
                <li><strong>Dimensi dan Faktor Konvergensi Media</strong><br>Salah satu dimensi konvergensi media yang merujuk pada adanya ruang redaksi terintegrasi untuk menyatukan proses kerja lintas platform disebut ...
                    <ol type="A"><li>Newsroom</li><li>Dayparting</li><li>Clock format</li><li>Ad-lib</li></ol></li>
                <li><strong>Regulasi dan Pengawasan Penyiaran di Indonesia</strong><br>Lembaga yang berperan sebagai regulator independen publik dalam menyusun P3SPS serta mengawasi isi siaran di Indonesia adalah ...
                    <ol type="A"><li>Kemenkomdigi</li><li>Komisi Penyiaran Indonesia (KPI)</li><li>Dewan Pers</li><li>Lembaga Sensor Film</li></ol></li>
                <li><strong>Batas Waktu Iklan Niaga Menurut UU No. 32 Tahun 2002</strong><br>Berdasarkan UU Nomor 32 Tahun 2002 tentang Penyiaran, berapa batas maksimal waktu siaran iklan niaga dari seluruh waktu siaran untuk Lembaga Penyiaran Publik (LPP) dan Lembaga Penyiaran Swasta (LPS)?
                    <ol type="A"><li>10% LPP – 15% LPS</li><li>15% LPP – 20% LPS</li><li>20% LPP – 25% LPS</li><li>25% LPP – 30% LPS</li></ol></li>
                <li><strong>Model Bisnis Layanan Streaming (OTT)</strong><br>Dalam ekosistem layanan Over-The-Top (OTT) dan streaming, model bisnis SVOD merujuk pada layanan ...
                    <ol type="A"><li>Gratis dengan iklan</li><li>Bayar per konten</li><li>Berlangganan</li><li>Siaran gratis berbasis iklan</li></ol></li>
                <li><strong>Strategi Menyeimbangkan Idealisme dan Realitas Industri</strong><br>Strategi menyeimbangkan idealisme (edukasi, informasi, kepentingan publik) dan realitas industri (pendapatan, rating, iklan) di mana program komersial yang menghasilkan pendapatan digunakan untuk mendukung program bernilai edukasi atau sosial disebut ...
                    <ol type="A"><li>Clock format</li><li>Self-censorship</li><li>Sistem subsidi silang</li><li>Repurposing</li></ol></li>
                <li><strong>Pengelolaan Program Radio (Dayparting dan Clock Format)</strong><br>Pembagian waktu siaran radio berdasarkan kebiasaan pendengar pada periode waktu tertentu—seperti informasi aktual di pagi hari, musik/hiburan ringan di siang hari, dan diskusi/musik santai di malam hari—disebut ...
                    <ol type="A"><li>Dayparting</li><li>Clock format</li><li>Visual radio</li><li>Spot advertising</li></ol></li>
                <li><strong>Fungsi Manajemen POAC dalam Penyiaran</strong><br>Dalam siklus manajemen POAC (Planning, Organizing, Actuating, Controlling), fungsi yang berfokus pada mengarahkan dan mengoordinasikan tim (seperti penyiar, produser, dan teknisi) agar bekerja secara kolaboratif merealisasikan rencana siaran adalah ...
                    <ol type="A"><li>Planning</li><li>Organizing</li><li>Actuating</li><li>Controlling</li></ol></li>
                <li><strong>Studi Kasus Konvergensi dan Manajemen Program</strong><br>Dalam studi kasus pengelolaan media di Indonesia, penerapan konsep hybrid business model melalui pengembangan kanal digital/YouTube, portal berita daring, dan event sekaligus menjaga keberlanjutan media disoroti pada contoh lembaga seperti ...
                    <ol type="A"><li>Metro TV / Kompas TV</li><li>RDK FM</li><li>TVRI</li><li>Netflix</li></ol></li>
            </ol>

            <h2 id="uas-kunci">Kunci jawaban</h2>
            <div class="table-wrapper" tabindex="0" role="region" aria-label="Kunci jawaban kuis pilihan ganda">
                <table class="academic-table">
                    <caption>Kunci jawaban dan pembahasan dari sumber</caption>
                    <thead><tr><th scope="col">Nomor</th><th scope="col">Jawaban</th><th scope="col">Pembahasan</th></tr></thead>
                    <tbody>
                            <tr><th scope="row">1</th><td>B. Komodifikasi</td><td>Perubahan nilai guna menjadi nilai tukar disebut komodifikasi dalam perspektif ekonomi politik dan nilai ekonomi informasi.</td></tr>
                            <tr><th scope="row">2</th><td>B. Keuntungan yang diperoleh melalui iklan, langganan, dan data audiens</td><td>Nilai tukar berkaitan dengan keuntungan ekonomi/finansial media, sedangkan manfaat bagi masyarakat merupakan nilai guna.</td></tr>
                            <tr><th scope="row">3</th><td>A. Newsroom</td><td>Newsroom merupakan ruang redaksi terintegrasi sebagai salah satu dimensi konvergensi media.</td></tr>
                            <tr><th scope="row">4</th><td>B. Komisi Penyiaran Indonesia (KPI)</td><td>KPI merupakan regulator independen publik yang menyusun P3SPS dan mengawasi isi siaran.</td></tr>
                            <tr><th scope="row">5</th><td>B. 15% LPP – 20% LPS</td><td>Batas maksimal waktu siaran iklan niaga menurut UU No. 32 Tahun 2002 adalah 15% untuk LPP dan 20% untuk LPS.</td></tr>
                            <tr><th scope="row">6</th><td>C. Berlangganan</td><td>SVOD (Subscription Video on Demand) adalah model bisnis layanan streaming/OTT berbasis berlangganan.</td></tr>
                            <tr><th scope="row">7</th><td>C. Sistem subsidi silang</td><td>Pendapatan dari program komersial dimanfaatkan untuk mendukung program edukatif, informatif, atau sosial.</td></tr>
                            <tr><th scope="row">8</th><td>A. Dayparting</td><td>Dayparting adalah pembagian waktu siaran berdasarkan kebiasaan dan kebutuhan pendengar di tiap rentang waktu.</td></tr>
                            <tr><th scope="row">9</th><td>C. Actuating</td><td>Actuating berfokus pada pengarahan dan koordinasi tim agar rencana yang telah disusun dapat dieksekusi.</td></tr>
                            <tr><th scope="row">10</th><td>A. Metro TV / Kompas TV</td><td>Contoh penerapan hybrid business model melalui kanal digital, portal berita, dan event dicontohkan pada Metro TV / Kompas TV.</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="source-note">Sumber: “Soal Quiz Pilihan Ganda MMP”, halaman 1–4.</p>
        `
    }
};
