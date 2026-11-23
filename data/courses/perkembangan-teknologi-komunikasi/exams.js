/**
 * Data Ujian (UTS & UAS) — Perkembangan Teknologi Komunikasi
 */
window.PortalData = window.PortalData || {};
window.PortalData.courses = window.PortalData.courses || {};
window.PortalData.courses['perkembangan-teknologi-komunikasi'] =
    window.PortalData.courses['perkembangan-teknologi-komunikasi'] || {};

window.PortalData.courses['perkembangan-teknologi-komunikasi'].exams = {
    uts: {
        available: true,
        type: 'Penugasan Paper Esai Akademik',
        title: 'Panduan Penulisan Paper Ujian Tengah Semester (UTS)',
        deadline: 'Jumat, 23 Oktober 2026',
        submissionChannel: 'Google Drive Kelas & Google Sheet Dosen',
        subjectFormat: 'UTS_PERTEKOM_NAMA_NIM',
        content: `
            <p class="editorial-lead">
                Penugasan Ujian Tengah Semester (UTS) mata kuliah Perkembangan Teknologi Komunikasi berbentuk penulisan <strong>esai akademik (paper)</strong> yang menganalisis satu fenomena sosial-digital menggunakan konsep teoretis yang telah dipelajari pada Pertemuan 1 hingga Pertemuan 5.
            </p>

            <h2>1. Instruksi Umum Penugasan</h2>
            <ol>
                <li>Susunlah sebuah <strong>esai ilmiah</strong> dengan tema yang relevan dengan isu-isu dalam mata kuliah Perkembangan Teknologi Komunikasi.</li>
                <li>Secara spesifik, tentukan <strong>satu fenomena nyata</strong> dan bedah fenomena tersebut menggunakan konsep atau teori yang telah dipelajari di kelas.</li>
                <li>Dokumen paper diunggah ke <strong>Google Drive Kelas</strong> dengan format penamaan berkas/subjek: <code class="font-mono-meta" style="background: var(--bg-subtle); padding: 0.15rem 0.45rem; border: 1px solid var(--border-default); border-radius: 3px; font-weight: 600;">UTS_PERTEKOM_NAMA_NIM</code>.</li>
                <li>Tautan (<em>link</em>) Google Drive wajib dicantumkan ke dalam lembar <strong>Google Sheet</strong> yang telah disediakan oleh dosen pengampu.</li>
            </ol>

            <h2>2. Struktur &amp; Komponen Wajib Paper</h2>
            <div class="step-grid">
                <div class="step-card">
                    <span class="step-card-num">BAGIAN 01</span>
                    <strong>Judul Paper</strong>
                    <p style="margin: 0.25rem 0 0 0; font-size: 0.8rem; color: var(--ink-muted);">Spesifik, mencerminkan fenomena &amp; fokus kajian.</p>
                </div>
                <div class="step-card">
                    <span class="step-card-num">BAGIAN 02</span>
                    <strong>Pendahuluan</strong>
                    <p style="margin: 0.25rem 0 0 0; font-size: 0.8rem; color: var(--ink-muted);">Latar belakang fenomena, rumusan masalah &amp; tujuan penulisan.</p>
                </div>
                <div class="step-card">
                    <span class="step-card-num">BAGIAN 03</span>
                    <strong>Pembahasan</strong>
                    <p style="margin: 0.25rem 0 0 0; font-size: 0.8rem; color: var(--ink-muted);">Tinjauan literatur (literature review), temuan data &amp; analisis teoretis.</p>
                </div>
                <div class="step-card">
                    <span class="step-card-num">BAGIAN 04</span>
                    <strong>Kesimpulan</strong>
                    <p style="margin: 0.25rem 0 0 0; font-size: 0.8rem; color: var(--ink-muted);">Sintesis argumen utama dan implikasi kajian.</p>
                </div>
                <div class="step-card">
                    <span class="step-card-num">BAGIAN 05</span>
                    <strong>Daftar Pustaka</strong>
                    <p style="margin: 0.25rem 0 0 0; font-size: 0.8rem; color: var(--ink-muted);">Referensi jurnal ilmiah, buku akademik &amp; sumber kredibel.</p>
                </div>
            </div>

            <h2>3. Lima Pilihan Tema Kajian Paper</h2>
            <div class="concept-list">
                <div class="concept-item">
                    <strong><span class="concept-index">TEMA 01</span>Determinasi Teknologi</strong>
                    <p style="margin: 0.3rem 0 0 0;"><em>"Apakah Manusia Mengendalikan Teknologi atau Justru Dikendalikan Olehnya?"</em></p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">TEMA 02</span>Network Society</strong>
                    <p style="margin: 0.3rem 0 0 0;"><em>"Kekuasaan Algoritma dan Penyebaran Informasi dalam Masyarakat Digital."</em></p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">TEMA 03</span>Social Construction of Technology (SCOT)</strong>
                    <p style="margin: 0.3rem 0 0 0;"><em>"Bagaimana Masyarakat Membentuk Penggunaan dan Makna Teknologi Komunikasi?"</em></p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">TEMA 04</span>Difusi Inovasi</strong>
                    <p style="margin: 0.3rem 0 0 0;"><em>"Bagaimana Teknologi Komunikasi Baru Diterima atau Ditolak oleh Masyarakat?"</em></p>
                </div>
                <div class="concept-item">
                    <strong><span class="concept-index">TEMA 05</span>Cybercrime dan Cybersecurity</strong>
                    <p style="margin: 0.3rem 0 0 0;"><em>"Sebuah Tinjauan Fenomena dan Solusinya."</em></p>
                </div>
            </div>

            <h2>4. Ketentuan Akademik, Integritas &amp; Lembar Consent AI</h2>
            <div class="academic-box" style="border-left: 4px solid var(--status-danger); background-color: var(--status-danger-bg); border-color: var(--status-danger-border);">
                <div class="academic-box-header" style="color: var(--status-danger);">
                    <span>Perhatian Integritas Akademik</span>
                </div>
                <ol style="margin-bottom: 0; color: var(--ink-primary);">
                    <li>Mahasiswa wajib menyusun paper dengan struktur yang runtut, menganalisis topik secara mendalam, memberikan argumen kritis, dan menyertakan referensi akademik yang relevan.</li>
                    <li>Patuhi kaidah kutipan ilmiah agar terhindar dari plagiarisme. <strong>Tidak ada toleransi untuk tindakan plagiasi.</strong></li>
                    <li>
                        <strong>Kebijakan Penggunaan Kecerdasan Buatan (AI):</strong> Gunakan bantuan AI secara bijak dan bertanggung jawab. Apabila menggunakan bantuan AI dalam proses penyusunan, mahasiswa <strong>wajib melampirkan Lembar Consent AI</strong> di bagian akhir tugas yang memuat:
                        <ul>
                            <li><strong>a.</strong> Pernyataan jujur bahwa penulis menggunakan bantuan perangkat AI.</li>
                            <li><strong>b.</strong> Daftar <em>prompt</em> lengkap yang digunakan.</li>
                            <li><strong>c.</strong> Penandaan bagian tulisan mana yang melibatkan bantuan AI.</li>
                            <li><strong>d.</strong> Lampiran diletakkan pada halaman paling akhir dokumen tugas.</li>
                        </ul>
                    </li>
                    <li><strong>Tidak ada ujian susulan</strong> untuk penugasan ini; pastikan pengumpulan dilakukan sebelum batas waktu berakhir.</li>
                </ol>
            </div>
        `
    },
    uas: {
        available: false,
        type: 'Ujian Akhir Semester (UAS)',
        title: 'Informasi Ujian Akhir Semester (UAS)',
        deadline: 'Menunggu Jadwal Akademik Fakultas',
        submissionChannel: 'Akan diumumkan oleh Dosen Pengampu',
        content: `
            <div class="academic-box">
                <div class="academic-box-header">
                    <span>Status Ujian Akhir Semester</span>
                </div>
                <p style="margin: 0;">
                    Soal dan instruksi <strong>Ujian Akhir Semester (UAS)</strong> untuk mata kuliah Perkembangan Teknologi Komunikasi akan dipublikasikan setelah rangkaian materi paruh kedua semester selesai disampaikan.
                </p>
            </div>
        `
    }
};
