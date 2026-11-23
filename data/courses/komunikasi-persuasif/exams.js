/**
 * Data Ujian (UTS & UAS) — Komunikasi Persuasif
 *
 * UAS memuat soal review dari "soal quiz review menjelang uas.pdf" (halaman 1–3).
 * Sumber tidak mencantumkan jadwal, durasi, atau cara pengumpulan UAS.
 */
window.PortalData = window.PortalData || {};
window.PortalData.courses = window.PortalData.courses || {};
window.PortalData.courses['komunikasi-persuasif'] =
    window.PortalData.courses['komunikasi-persuasif'] || {};

window.PortalData.courses['komunikasi-persuasif'].exams = {
    uts: {
        available: false,
        type: 'Ujian Tengah Semester (UTS)',
        title: 'Informasi Ujian Tengah Semester (UTS) — Komunikasi Persuasif',
        deadline: '',
        submissionChannel: '',
        content: ''
    },
    uas: {
        available: true,
        type: 'Ujian Akhir Semester (UAS)',
        title: 'Soal Review Menjelang UAS — Komunikasi Persuasif',
        deadline: '',
        submissionChannel: '',
        content: `
            <p class="editorial-lead" id="uas-pengantar">Berikut soal kuis review menjelang Ujian Akhir Semester sesuai berkas sumber. Halaman ini adalah bahan latihan, bukan soal atau ketentuan UAS resmi. Jadwal, durasi, dan cara pengumpulan UAS tidak tercantum dalam sumber.</p>
            <div class="academic-box">
                <span class="academic-box-header">Latihan interaktif</span>
                <p>Soal yang sama dapat dikerjakan dan diperiksa langsung di tab Kuis, pilihan <strong>Kuis review menjelang UAS</strong>, lengkap dengan skor dan pembahasan.</p>
                <p><button type="button" class="button button-primary" onclick="PortalApp.switchTab('kuis', 99)">Kerjakan kuis review</button></p>
            </div>

            <h2 id="uas-soal">Kuis Komunikasi Persuasif</h2>
            <p><strong>Petunjuk:</strong> Pilih satu jawaban yang paling tepat dari pilihan A, B, C, atau D.</p>
            <ol>
                <li>Dalam komunikasi persuasif, pihak yang berperan menyampaikan pesan dengan tujuan memengaruhi sikap, keyakinan, atau perilaku orang lain disebut ....
                    <ol type="A"><li>Persuadee</li><li>Persuader</li><li>Feedback</li><li>Audience</li></ol></li>
                <li>Seorang dokter memberikan edukasi kesehatan dengan menyampaikan data medis, pengalaman profesional, dan penjelasan yang dapat dipercaya. Hal tersebut menunjukkan pentingnya unsur ....
                    <ol type="A"><li>Popularitas media</li><li>Kredibilitas sumber</li><li>Efek situasional</li><li>Komunikasi nonverbal</li></ol></li>
                <li>Menurut konsep Elaboration Likelihood Model (ELM), seseorang yang memiliki motivasi dan keterlibatan tinggi dalam memproses pesan akan menggunakan ....
                    <ol type="A"><li>Rute periferal</li><li>Rute emosional</li><li>Rute sentral</li><li>Rute interpersonal</li></ol></li>
                <li>Seorang influencer mengajak pengikutnya mengurangi penggunaan plastik dengan menampilkan data pencemaran lingkungan sekaligus video dampak sampah terhadap kehidupan masyarakat. Strategi tersebut menggabungkan pendekatan ....
                    <ol type="A"><li>Rasional dan emosional</li><li>Verbal dan nonverbal</li><li>Internal dan eksternal</li><li>Formal dan informal</li></ol></li>
                <li>Dalam konsep retorika Aristoteles, penggunaan argumentasi logis dan fakta untuk meyakinkan audiens disebut ....
                    <ol type="A"><li>Ethos</li><li>Pathos</li><li>Logos</li><li>AIDA</li></ol></li>
                <li>Seorang mahasiswa memberikan komentar dan kritik terhadap kampanye digital yang dibuat oleh sebuah organisasi. Dalam komunikasi persuasif, respons tersebut termasuk ....
                    <ol type="A"><li>Persuader</li><li>Feedback</li><li>Media</li><li>Konteks situasional</li></ol></li>
                <li>Sebuah kampanye keselamatan berkendara ditujukan kepada remaja. Komunikator memilih Instagram Reels dengan video singkat dan visual menarik. Pertimbangan tersebut menunjukkan pentingnya ....
                    <ol type="A"><li>Menyesuaikan media dengan karakteristik audiens</li><li>Menggunakan media yang paling mahal</li><li>Menghindari komunikasi dua arah</li><li>Mengutamakan popularitas komunikator</li></ol></li>
                <li>Dalam model AIDA, tahapan ketika seseorang mulai memiliki ketertarikan terhadap produk atau pesan setelah mendapatkan perhatian disebut ....
                    <ol type="A"><li>Action</li><li>Desire</li><li>Interest</li><li>Attention</li></ol></li>
                <li>Sebuah pesan kampanye kesehatan tidak mendapatkan respons positif karena masyarakat memiliki prasangka negatif terhadap pihak yang menyampaikan pesan. Kondisi tersebut termasuk hambatan ....
                    <ol type="A"><li>Psikologis</li><li>Teknologis</li><li>Administratif</li><li>Geografis</li></ol></li>
                <li>Setelah mengikuti kampanye hemat energi, seseorang tidak hanya memahami pentingnya penghematan listrik, tetapi juga mulai membiasakan diri mematikan lampu ketika tidak digunakan. Perubahan perilaku tersebut termasuk efek ....
                    <ol type="A"><li>Kognitif</li><li>Afektif</li><li>Konatif</li><li>Persepsi</li></ol></li>
            </ol>

            <h2 id="uas-kunci">Kunci jawaban</h2>
                <div class="table-wrapper" tabindex="0" role="region" aria-label="Kunci jawaban kuis review">
                    <table class="academic-table">
                        <caption>Kunci jawaban kuis review menjelang UAS</caption>
                        <thead><tr><th scope="col">Nomor</th><th scope="col">Jawaban</th><th scope="col">Asal kunci</th></tr></thead>
                        <tbody>
                            <tr><th scope="row">1</th><td>B</td><td>Tercantum di sumber</td></tr>
                            <tr><th scope="row">2</th><td>B</td><td>Tercantum di sumber</td></tr>
                            <tr><th scope="row">3</th><td>C</td><td>Tercantum di sumber</td></tr>
                            <tr><th scope="row">4</th><td>A</td><td>Tercantum di sumber</td></tr>
                            <tr><th scope="row">5</th><td>C</td><td>Tercantum di sumber</td></tr>
                            <tr><th scope="row">6</th><td>B</td><td>Tercantum di sumber</td></tr>
                            <tr><th scope="row">7</th><td>A</td><td>Tercantum di sumber</td></tr>
                            <tr><th scope="row">8</th><td>C</td><td>Tercantum di sumber</td></tr>
                            <tr><th scope="row">9</th><td>A</td><td>Tercantum di sumber</td></tr>
                            <tr><th scope="row">10</th><td>C</td><td>Dikonfirmasi pemilik portal; sumber berhenti pada tulisan “Nomor 10” tanpa huruf jawaban</td></tr>
                        </tbody>
                    </table>
                </div>
            <p class="source-note">Sumber: “soal quiz review menjelang uas”, halaman 1–3.</p>
        `
    }
};
