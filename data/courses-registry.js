/**
 * Course Registry — Pusat Pendaftaran Mata Kuliah Portal Akademik
 *
 * Untuk menambah mata kuliah baru di masa mendatang:
 * 1. Buat folder baru di `data/courses/<slug-matkul>/` berisi `meetings.js`, `quizzes.js`, dan `exams.js`.
 * 2. Daftarkan metadata mata kuliah pada array `courseCatalog` di bawah ini.
 * 3. Muat script datanya di `index.html`.
 */
window.PortalData = window.PortalData || {};

window.PortalData.portalMeta = {
    institution: 'UIN Syarif Hidayatullah Jakarta',
    department: 'Program Studi Komunikasi dan Penyiaran Islam',
    portalTitle: 'Ruang Baca & Arsip Kuliah',
    lecturer: 'Musfiah Saidah, M.Si',
    academicYear: 'Semester Gasal 2026/2027'
};

window.PortalData.courseCatalog = [
    {
        slug: 'perkembangan-teknologi-komunikasi',
        code: 'KPI-PTK',
        title: 'Perkembangan Teknologi Komunikasi',
        lecturer: 'Musfiah Saidah, M.Si',
        credits: '3 SKS',
        semester: 'Gasal 2026/2027',
        category: 'Mata Kuliah Wajib',
        status: 'active',
        summary: 'Mengkaji transformasi komunikasi dari era cetak hingga digital, perdebatan Determinisme Teknologi vs. SCOT, Difusi Inovasi (studi kasus QRIS Desa Kanekes Baduy), Network Society Manuel Castells, hingga Cybercrime, Teori Manajemen Privasi (CPM), dan KBGO.'
    },
    {
        slug: 'komunikasi-persuasif',
        code: 'KPI-KP',
        title: 'Komunikasi Persuasif',
        lecturer: 'Musfiah Saidah, M.Si',
        credits: '3 SKS',
        semester: 'Gasal 2026/2027',
        category: 'Mata Kuliah Wajib',
        status: 'active',
        summary: 'Mempelajari pengertian dan teori persuasi (ELM, Social Judgment Theory), unsur-unsur komunikasi persuasif, kredibilitas sumber, pesan dan model AIDA, saluran dan ragam media, difusi inovasi, hambatan, strategi, serta teknik komunikasi persuasif, dilengkapi kuis review menjelang UAS.'
    }
];
