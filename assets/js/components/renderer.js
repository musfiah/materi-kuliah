/** Semantic presentation templates; course content HTML is supplied by PortalData. */
window.PortalRenderer = (function () {
    'use strict';

    function escapeHtml(value) {
        return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[character]);
    }

    // Escape JavaScript arguments separately from their surrounding HTML attribute.
    function argument(value) {
        return escapeHtml(JSON.stringify(value));
    }

    function emptyState(title, description) {
        return `
            <section class="empty-state">
                <span class="empty-icon" aria-hidden="true">○</span>
                <h2>${escapeHtml(title)}</h2>
                <p>${escapeHtml(description)}</p>
                <button type="button" class="button button-secondary" onclick="PortalApp.navigateHome()">Kembali ke katalog</button>
            </section>
        `;
    }

    function renderCatalogView(meta, catalog, coursesData) {
        const courseCardsHtml = catalog.map((course, index) => {
            const detail = (coursesData || {})[course.slug] || {};
            const meetings = Array.isArray(detail.meetings) ? detail.meetings : [];
            const quizNumbers = Object.keys(detail.quizzes || {}).map(Number).sort((a, b) => a - b);
            const availableExams = ['uts', 'uas'].filter((type) => detail.exams && detail.exams[type] && detail.exams[type].available);
            const firstMeeting = meetings.length ? meetings[0].number : 1;
            const openReader = `PortalApp.openCourse(${argument(course.slug)}, 'materi', ${argument(firstMeeting)})`;

            return `
                <article class="course-card">
                    <div class="course-cover cover-${index % 2 + 1}">
                        <span class="cover-subject">${escapeHtml(course.title)}</span>
                        <span class="cover-symbol" aria-hidden="true">${index % 2 ? '◎' : '∿'}</span>
                    </div>
                    <div class="course-card-body">
                        <p class="course-provider">${escapeHtml(meta.institution)}</p>
                        <h3 class="course-card-title">
                            <button type="button" class="button button-text" onclick="${openReader}">${escapeHtml(course.title)}</button>
                        </h3>
                        <p class="course-description">${escapeHtml(course.summary)}</p>
                        <p class="course-provider">Pengampu: ${escapeHtml(course.lecturer)}</p>
                        <ul class="course-facts" aria-label="Informasi mata kuliah">
                            <li>${escapeHtml(course.code)} · ${escapeHtml(course.credits)}</li>
                            <li>${escapeHtml(course.semester)}</li>
                            <li>${meetings.length} pertemuan · ${quizNumbers.length} kuis · ${availableExams.length} panduan ujian</li>
                        </ul>
                        <footer class="course-card-footer">
                            <span class="badge${meetings.length ? '' : ' badge-muted'}">${meetings.length ? `${meetings.length} pertemuan tersedia` : 'Materi belum tersedia'}</span>
                            <button type="button" class="button button-primary" onclick="${openReader}">${meetings.length ? 'Mulai belajar' : 'Lihat mata kuliah'}</button>
                            ${quizNumbers.length ? `<button type="button" class="button button-secondary" onclick="PortalApp.openCourse(${argument(course.slug)}, 'kuis', ${argument(quizNumbers[0])})">Latihan kuis</button>` : ''}
                            ${availableExams.length ? `<button type="button" class="button button-text" onclick="PortalApp.openCourse(${argument(course.slug)}, 'ujian', ${argument(availableExams[0])})">Panduan ${availableExams[0] === 'uts' ? 'UTS' : 'UAS'}</button>` : ''}
                        </footer>
                    </div>
                </article>
            `;
        }).join('');

        return `
            <section class="catalog-hero" aria-labelledby="catalog-title">
                <p class="eyebrow">${escapeHtml(meta.department)} · ${escapeHtml(meta.academicYear)}</p>
                <h1 id="catalog-title">Belajar lebih terarah, satu pertemuan setiap langkah.</h1>
                <p class="hero-copy">Jelajahi materi kuliah, latih pemahaman melalui kuis, dan temukan panduan ujian dalam satu ruang belajar bersama ${escapeHtml(meta.lecturer)}.</p>
                <a class="button button-primary" href="#course-catalog" onclick="PortalApp.scrollToSection(event, 'course-catalog')">Jelajahi mata kuliah</a>
            </section>
            <section id="course-catalog" class="catalog-section" aria-labelledby="courses-heading">
                <header class="section-heading">
                    <h2 id="courses-heading">Mata kuliah Anda</h2>
                    <p>${catalog.length} mata kuliah</p>
                </header>
                <div class="course-grid">${courseCardsHtml}</div>
            </section>
            <section class="learning-guide" aria-labelledby="guide-heading">
                <header class="section-heading">
                    <div>
                        <p class="eyebrow">Panduan belajar</p>
                        <h2 id="guide-heading">Bangun pemahaman, langkah demi langkah</h2>
                    </div>
                </header>
                <div class="guide-grid">
                    <div class="guide-item">
                        <span class="badge" aria-hidden="true">1</span>
                        <h3>Baca materi</h3>
                        <p>Pilih mata kuliah dan pertemuan. Gunakan daftar isi untuk menelusuri pokok bahasan.</p>
                    </div>
                    <div class="guide-item">
                        <span class="badge" aria-hidden="true">2</span>
                        <h3>Uji pemahaman</h3>
                        <p>Isi identitas, kerjakan semua soal kuis, lalu kirim jawaban Anda untuk dicatat dosen.</p>
                    </div>
                    <div class="guide-item">
                        <span class="badge" aria-hidden="true">3</span>
                        <h3>Pelajari panduan ujian</h3>
                        <p>Baca instruksi, batas waktu, dan ketentuan pengumpulan pada panduan UTS atau UAS yang tersedia.</p>
                    </div>
                </div>
            </section>
        `;
    }

    function renderMeetingReader(courseMeta, meetings, activeMeetingNumber) {
        if (!meetings || !meetings.length) {
            return emptyState('Materi belum tersedia', `Belum ada materi pertemuan yang dapat dibaca untuk mata kuliah ${courseMeta.title}.`);
        }

        const foundIndex = meetings.findIndex((meeting) => Number(meeting.number) === Number(activeMeetingNumber));
        const currentIndex = foundIndex < 0 ? 0 : foundIndex;
        const meeting = meetings[currentIndex];
        const prevMeeting = meetings[currentIndex - 1];
        const nextMeeting = meetings[currentIndex + 1];
        const selectorButtons = meetings.map((item, index) => `
            <button type="button" class="module-chip${index === currentIndex ? ' is-active' : ''}"
                aria-pressed="${index === currentIndex}" onclick="PortalApp.selectMeeting(${argument(item.number)})">
                Pertemuan ${escapeHtml(item.number)}: ${escapeHtml(item.title)}
            </button>
        `).join('');
        const tocItems = (meeting.sections || []).map((section) => `
            <li><a href="#${escapeHtml(section.id)}" onclick="PortalApp.scrollToSection(event, ${argument(section.id)})">${escapeHtml(section.label)}</a></li>
        `).join('');

        return `
            <nav class="module-strip" aria-label="Pilih pertemuan">${selectorButtons}</nav>
            <div class="reader-layout">
                <article class="lesson-paper">
                    <header class="lesson-header">
                        <div class="lesson-meta">
                            <span>${escapeHtml(courseMeta.code)}</span>
                            <span class="badge">${escapeHtml(meeting.badge || `Pertemuan ${meeting.number}`)}</span>
                            ${meeting.readingTime ? `<span>${escapeHtml(meeting.readingTime)}</span>` : ''}
                        </div>
                        <h1 class="lesson-title">${escapeHtml(meeting.title)}</h1>
                        ${meeting.subtitle ? `<p class="lesson-subtitle">${escapeHtml(meeting.subtitle)}</p>` : ''}
                        <p class="lesson-byline">Pengampu: ${escapeHtml(courseMeta.lecturer)}</p>
                        <div class="lesson-actions">
                            <button type="button" class="button button-secondary" onclick="window.print()">Cetak / Simpan PDF</button>
                        </div>
                    </header>
                    ${tocItems ? `
                        <details class="mobile-toc">
                            <summary>Daftar isi pertemuan</summary>
                            <nav aria-label="Daftar isi pertemuan, seluler"><ol class="toc-list">${tocItems}</ol></nav>
                        </details>
                    ` : ''}
                    <div class="academic-prose">${meeting.content || ''}</div>
                    <footer class="lesson-footer">
                        <section class="practice-callout" aria-labelledby="practice-heading">
                            <div>
                                <p class="eyebrow">Kuis mata kuliah</p>
                                <h2 id="practice-heading">Uji pemahaman Anda</h2>
                                <p>Kerjakan kuis mata kuliah ini, lalu kirim jawaban Anda untuk dicatat dosen.</p>
                            </div>
                            <button type="button" class="button button-primary" onclick="PortalApp.switchTab('kuis', ${argument(meeting.number)})">Kerjakan kuis</button>
                        </section>
                        <nav class="lesson-pagination" aria-label="Navigasi pertemuan">
                            ${prevMeeting ? `
                                <button type="button" class="pagination-link" onclick="PortalApp.selectMeeting(${argument(prevMeeting.number)})">
                                    <span>← Pertemuan sebelumnya</span>
                                    <strong>${escapeHtml(prevMeeting.number)}. ${escapeHtml(prevMeeting.title)}</strong>
                                </button>
                            ` : ''}
                            ${nextMeeting ? `
                                <button type="button" class="pagination-link" onclick="PortalApp.selectMeeting(${argument(nextMeeting.number)})">
                                    <span>Pertemuan berikutnya →</span>
                                    <strong>${escapeHtml(nextMeeting.number)}. ${escapeHtml(nextMeeting.title)}</strong>
                                </button>
                            ` : ''}
                        </nav>
                    </footer>
                </article>
                <aside class="lesson-toc" aria-label="Navigasi bacaan">
                    <h2>Dalam pertemuan ini</h2>
                    ${tocItems ? `<nav aria-label="Daftar isi pertemuan, desktop"><ol class="toc-list">${tocItems}</ol></nav>` : '<p>Tidak ada subbagian untuk pertemuan ini.</p>'}
                </aside>
            </div>
        `;
    }

    function renderIdentityFields(courseMeta, quizConfig) {
        const classes = (quizConfig && Array.isArray(quizConfig.classes)) ? quizConfig.classes : [];
        // Until the owner fills quizConfig.classes, accept typed class names instead of blocking submissions.
        const classField = classes.length ? `
            <select id="quiz-class" name="kelas" required>
                <option value="">Pilih kelas</option>
                ${classes.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join('')}
            </select>
        ` : '<input id="quiz-class" name="kelas" type="text" autocomplete="off" required>';

        return `
            <fieldset class="quiz-identity">
                <legend>Identitas mahasiswa</legend>
                <div class="identity-grid">
                    <label for="quiz-name">Nama lengkap<input id="quiz-name" name="nama" type="text" autocomplete="name" required></label>
                    <label for="quiz-nim">NIM<input id="quiz-nim" name="nim" type="text" inputmode="numeric" pattern="[0-9]+" title="NIM hanya berisi angka" autocomplete="off" required></label>
                    <label for="quiz-class">Kelas${classField}</label>
                    <label for="quiz-course">Mata kuliah<input id="quiz-course" name="mataKuliah" type="text" value="${escapeHtml(courseMeta.title)}" readonly></label>
                </div>
            </fieldset>
        `;
    }

    function renderQuizView(courseMeta, meetings, quizzesObj, activeQuizNum, quizConfig) {
        const quizKeys = Object.keys(quizzesObj || {}).map(Number).sort((a, b) => a - b);
        if (!quizKeys.length) {
            return emptyState('Kuis belum tersedia', `Belum ada kuis yang dapat dikerjakan untuk mata kuliah ${courseMeta.title}.`);
        }

        const selectedNum = quizKeys.includes(Number(activeQuizNum)) ? Number(activeQuizNum) : quizKeys[0];
        const currentQuiz = quizzesObj[selectedNum];
        const questions = currentQuiz.questions || [];
        const relatedMeeting = (meetings || []).find((meeting) => Number(meeting.number) === selectedNum);
        const selectorButtons = quizKeys.map((number) => `
            <button type="button" class="module-chip${number === selectedNum ? ' is-active' : ''}"
                aria-pressed="${number === selectedNum}" onclick="PortalApp.selectQuiz(${argument(number)})">${escapeHtml(quizzesObj[number].label || `Kuis pertemuan ${number}`)}</button>
        `).join('');
        const questionsHtml = questions.map((question, index) => `
            <fieldset class="question">
                <legend><span class="question-number">Soal ${index + 1}.</span> ${escapeHtml(question.q)}</legend>
                <div class="question-options">
                    ${(question.options || []).map((option, optionIndex) => `
                        <label class="answer-option">
                            <input type="radio" name="q_${index}" value="${optionIndex}" required>
                            <span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escapeHtml(option)}</span>
                        </label>
                    `).join('')}
                </div>
            </fieldset>
        `).join('');

        return `
            <div class="quiz-layout">
                ${quizKeys.length > 1 ? `<nav class="module-strip" aria-label="Pilih kuis">${selectorButtons}</nav>` : ''}
                <section class="quiz-paper" aria-labelledby="quiz-heading">
                    <header class="lesson-header">
                        <p class="lesson-meta">${escapeHtml(courseMeta.title)} · ${questions.length} soal</p>
                        <h1 id="quiz-heading" class="lesson-title">${escapeHtml(currentQuiz.title)}</h1>
                        <p class="lesson-subtitle">Isi identitas Anda, jawab semua soal, lalu kirim. Setiap NIM hanya dapat mengirim kuis ini satu kali; hasil dicatat untuk dosen dan tidak ditampilkan di halaman ini.</p>
                    </header>
                    ${questions.length ? `
                        <form id="portal-quiz-form" onsubmit="PortalApp.submitQuiz(event, ${argument(selectedNum)});">
                            ${renderIdentityFields(courseMeta, quizConfig)}
                            ${questionsHtml}
                            <div class="quiz-actions">
                                ${relatedMeeting ? `<button type="button" class="button button-text" onclick="PortalApp.switchTab('materi', ${argument(relatedMeeting.number)})">← Baca ulang materi pertemuan ${escapeHtml(relatedMeeting.number)}</button>` : ''}
                                <button type="submit" class="button button-primary">Kirim jawaban</button>
                            </div>
                        </form>
                    ` : '<p class="empty-state">Belum ada soal yang dapat dikerjakan pada kuis ini.</p>'}
                    <div id="portal-quiz-result" class="quiz-result" role="status" aria-live="polite" hidden></div>
                </section>
            </div>
        `;
    }

    function renderExamView(courseMeta, examsObj, activeExamType) {
        const examType = activeExamType === 'uas' ? 'uas' : 'uts';
        const examData = examsObj && examsObj[examType];
        const isAvailable = Boolean(examData && examData.available);
        const examLabels = { uts: 'Ujian Tengah Semester (UTS)', uas: 'Ujian Akhir Semester (UAS)' };

        return `
            <nav class="exam-switch" aria-label="Pilih ujian">
                ${['uts', 'uas'].map((type) => `
                    <button type="button" class="module-chip${examType === type ? ' is-active' : ''}"
                        aria-pressed="${examType === type}" onclick="PortalApp.selectExam('${type}')">${examLabels[type]}</button>
                `).join('')}
            </nav>
            ${isAvailable ? `
                <article class="exam-paper">
                    <header class="lesson-header">
                        <p class="lesson-meta">${escapeHtml(examData.type || examLabels[examType])} · ${escapeHtml(courseMeta.title)}</p>
                        <span class="exam-status badge">Panduan tersedia</span>
                        <h1 class="lesson-title">${escapeHtml(examData.title)}</h1>
                        <dl class="exam-meta">
                            <div><dt>Batas waktu</dt><dd>${escapeHtml(examData.deadline || 'Belum tercantum')}</dd></div>
                            <div><dt>Saluran pengumpulan</dt><dd>${escapeHtml(examData.submissionChannel || 'Belum tercantum')}</dd></div>
                        </dl>
                        <div class="lesson-actions">
                            <button type="button" class="button button-secondary" onclick="window.print()">Cetak / Simpan PDF</button>
                        </div>
                    </header>
                    <div class="academic-prose">${examData.content || ''}</div>
                </article>
            ` : `
                <section class="exam-paper">
                    <p class="exam-status badge badge-muted">Panduan belum tersedia</p>
                    ${emptyState('Informasi ujian belum tersedia', `Belum ada panduan ${examLabels[examType]} yang dapat dibaca untuk mata kuliah ${courseMeta.title}.`)}
                </section>
            `}
        `;
    }

    return {
        renderCatalogView,
        renderMeetingReader,
        renderQuizView,
        renderExamView
    };
})();
