/**
 * Data Kuis — Perkembangan Teknologi Komunikasi
 *
 * Kunci 99 bukan nomor pertemuan: satu kuis gabungan berisi seluruh soal yang
 * sebelumnya terbagi per pertemuan (1–5), dengan urutan dan kunci yang sama.
 */
window.PortalData = window.PortalData || {};
window.PortalData.courses = window.PortalData.courses || {};
window.PortalData.courses['perkembangan-teknologi-komunikasi'] =
    window.PortalData.courses['perkembangan-teknologi-komunikasi'] || {};

window.PortalData.courses['perkembangan-teknologi-komunikasi'].quizzes = {
    99: {
        meetingNumber: null,
        label: 'Kuis pilihan ganda',
        title: 'Kuis Perkembangan Teknologi Komunikasi',
        questions: [
            {
                q: "Menurut Berniker (1987), apa definisi teknologi?",
                options: ["Sebuah pengetahuan dan di dalamnya terdapat metode, seni, dan cara kerja untuk membangun dunia","Sistem mesin otomatis untuk memproduksi barang konsumsi massal","Aplikasi komunikasi modern berbasis perangkat telepon pintar","Perangkat keras elektronik pemancar gelombang radio dan televisi"],
                correct: 0,
                exp: "Berniker (1987) mendefinisikan teknologi sebagai pengetahuan yang memuat metode, seni, dan cara kerja untuk membangun dunia."
            },
            {
                q: "Manakah contoh pasangan \"Proses (Communication)\" dan \"Saluran (Communications)\" yang tepat?",
                options: ["Proses: WhatsApp — Saluran: Ngobrol","Proses: Dosen menjelaskan materi — Saluran: Televisi","Proses: Zoom Meeting — Saluran: Pementasan teater","Proses: Televisi — Saluran: Diskusi kelas"],
                correct: 1,
                exp: "Proses (communication) adalah aktivitas interaksi sosialnya (dosen menjelaskan), sedangkan saluran (communications) adalah medium teknisnya (televisi)."
            },
            {
                q: "Kemampuan teknologi komunikasi modern untuk menyampaikan pesan yang disesuaikan (personalized) kepada individu dan tidak lagi seragam secara massal disebut...",
                options: ["Demassifikasi (Demassification)","Asinkron (Asynchronous)","Komunikasi Intrapersonal","Mediated Quasi-Interaction"],
                correct: 0,
                exp: "Demassifikasi (Dekonsentrasi) berarti pesan tidak lagi one-size-fits-all ke khalayak massal, melainkan terpersonalisasi sesuai kebutuhan pengguna."
            },
            {
                q: "Kutipan terkenal Marshall McLuhan \"We shape our tools, and thereafter our tools shape us\" mewakili perspektif teori apa?",
                options: ["Determinisme Teknologi (Technological Determinism)","Konstruktivisme Sosial (Social Construction of Technology / SCOT)","Communication Privacy Management (CPM)","Difusi Inovasi"],
                correct: 0,
                exp: "Kutipan ini menegaskan pandangan Determinisme Teknologi bahwa peralatan/teknologi yang diciptakan manusia pada akhirnya balik membentuk pola pikir dan struktur kehidupan manusia."
            },
            {
                q: "Bagaimana perspektif Social Construction of Technology (SCOT) memandang peran manusia terhadap teknologi?",
                options: ["Manusia bersifat pasif dan hanya mengikuti determinasi mesin","Manusia memiliki kendali penuh (human agency) untuk menerima, menolak, memodifikasi, dan memberi makna pada teknologi","Teknologi berkembang secara otonom di luar kendali sosial","Makna teknologi bersifat tunggal sesuai keinginan pencipta pabriknya"],
                correct: 1,
                exp: "SCOT menekankan human agency dan negosiasi makna oleh relevant social groups dalam menentukan fungsi serta arti suatu teknologi."
            },
            {
                q: "Berapa persentase kelompok \"Early Majority\" dan \"Late Majority\" dalam kurva Adopsi Inovasi Everett M. Rogers?",
                options: ["Masing-masing 34%","Masing-masing 13,5%","Masing-masing 2,5%","Masing-masing 16%"],
                correct: 0,
                exp: "Dalam kurva distribusi normal Rogers, Early Majority dan Late Majority masing-masing mencakup 34% dari populasi adopter."
            },
            {
                q: "Dalam perbandingan Tiga Era Teknologi Komunikasi, apa peran audiens pada Era Digital?",
                options: ["Pembaca pasif yang hanya menerima teks statis","Pendengar dan penonton pasif satu arah","Prosumer aktif (sekaligus menjadi produsen dan konsumen informasi)","Objek distribusi fisik surat kabar"],
                correct: 2,
                exp: "Di Era Digital, pola komunikasi bersifat multiarah (many-to-many) dengan gatekeeping terdesentralisasi sehingga audiens berperan sebagai prosumer aktif."
            },
            {
                q: "Menurut Manuel Castells, apa fokus utama dari gerakan sosial berbentuk \"Alternative Networks\"?",
                options: ["Fokus pada \"apa yang ingin kami ubah\" (membangun proyek perubahan sosial)","Fokus pada \"siapa kami\" (mempertahankan identitas komunitas tertutup)","Hanya berorientasi pada transaksi perdagangan komersial","Menolak seluruh bentuk penggunaan internet"],
                correct: 0,
                exp: "Alternative Networks berfokus pada proyek perubahan sosial (\"apa yang ingin kami ubah\"), seperti gerakan lingkungan hidup, HAM, dan keadilan gender."
            },
            {
                q: "Manakah pembedaan yang tepat antara Masyarakat Informasi, Masyarakat Jaringan, dan Masyarakat Maya?",
                options: ["Masyarakat informasi menjadikan informasi sebagai sumber daya; masyarakat jaringan menjadikan konektivitas sebagai struktur; masyarakat maya menjadikan ruang digital sebagai ruang sosial","Ketiganya memiliki arti yang sama persis tanpa perbedaan fokus","Masyarakat maya hanya terjadi secara tatap muka tanpa internet","Masyarakat jaringan menolak penggunaan informasi sebagai sumber daya"],
                correct: 0,
                exp: "Sesuai materi Pertemuan 4, ketiganya memiliki titik tekan berbeda: informasi sebagai sumber daya, konektivitas sebagai struktur, dan ruang digital sebagai ruang sosial."
            },
            {
                q: "Menurut Thomas dan Loader (2000), cybercrime mencakup...",
                options: ["Aktivitas yang dimediasi komputer yang bersifat melanggar hukum atau norma di lingkungan jaringan elektronik","Kerusakan mekanis pada mesin cetak konvensional","Perdagangan perangkat keras komputer bekas secara luring","Komunikasi tatap muka langsung tanpa perantara jaringan"],
                correct: 0,
                exp: "Thomas dan Loader (2000) mendefinisikan cybercrime sebagai aktivitas yang dimediasi komputer (computer-mediated activities) yang melanggar hukum atau norma di ruang elektronik."
            },
            {
                q: "Dalam Teori Communication Privacy Management (Sandra Petronio), kondisi ketika tangkapan layar cerita dari \"second account\" disebarkan tanpa izin pemiliknya disebut...",
                options: ["Privacy Turbulence (Turbulensi Privasi)","Determinisme Mesin Cetak","Demassifikasi Saluran","Cultural Communes"],
                correct: 0,
                exp: "Privacy Turbulence terjadi ketika manajemen batas privasi gagal berjalan sesuai ekspektasi pemilik informasi akibat pelanggaran oleh co-owner."
            }
        ]
    }
};
