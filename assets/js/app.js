/** Static course controller. URLs remain relative for GitHub Pages project sites. */
window.PortalApp = (function () {
    'use strict';

    const data = window.PortalData;
    const catalog = data.courseCatalog;
    const mobileQuery = window.matchMedia('(max-width: 1023px)');
    const state = {
        view: 'catalog', activeCourseSlug: catalog[0].slug, activeTab: 'materi',
        activeMeeting: 1, activeQuiz: 1, activeExam: 'uts', sidebarOpen: !mobileQuery.matches
    };

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, char => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[char]);
    }

    function courseMeta() { return catalog.find(course => course.slug === state.activeCourseSlug); }
    function courseDetail() { return data.courses[state.activeCourseSlug] || {}; }

    function parseUrlState() {
        const params = new URLSearchParams(location.hash.slice(1) || location.search);
        state.view = catalog.some(course => course.slug === params.get('course')) ? 'course' : 'catalog';
        if (state.view === 'catalog') return;
        state.activeCourseSlug = params.get('course');
        state.activeTab = ['materi', 'kuis', 'ujian'].includes(params.get('tab')) ? params.get('tab') : 'materi';
        state.activeMeeting = Number(params.get('meeting')) || 1;
        state.activeQuiz = state.activeMeeting;
        state.activeExam = params.get('exam') === 'uas' ? 'uas' : 'uts';
    }

    function updateUrl() {
        const params = new URLSearchParams();
        if (state.view === 'course') {
            params.set('course', state.activeCourseSlug);
            params.set('tab', state.activeTab);
            if (state.activeTab === 'ujian') params.set('exam', state.activeExam);
            else params.set('meeting', state.activeTab === 'kuis' ? state.activeQuiz : state.activeMeeting);
        }
        const url = location.pathname + (params.size ? '#' + params.toString() : '');
        if (location.pathname + location.search + location.hash !== url) history.pushState(null, '', url);
    }

    function updateSidebar() {
        const visible = state.view === 'course' && state.sidebarOpen;
        document.getElementById('portal-sidebar').hidden = !visible;
        document.getElementById('sidebar-backdrop').hidden = !(visible && mobileQuery.matches);
        const toggle = document.getElementById('sidebar-toggle');
        toggle.hidden = state.view !== 'course';
        toggle.setAttribute('aria-expanded', String(visible));
        toggle.setAttribute('aria-label', visible ? 'Tutup navigasi modul' : 'Buka navigasi modul');
        document.body.classList.toggle('sidebar-open', visible && mobileQuery.matches);
    }

    function renderSidebar() {
        const detail = courseDetail();
        const meetings = detail.meetings || [];
        const selected = (tab, item) => state.activeTab === tab && (tab === 'materi' ? state.activeMeeting === item : tab === 'ujian' ? state.activeExam === item : true);
        const current = active => active ? ' aria-current="page"' : '';
        document.getElementById('sidebar-curriculum').innerHTML = `
            <a class="sidebar-back" href="./" onclick="event.preventDefault(); PortalApp.navigateHome()">← Semua mata kuliah</a>
            <p class="sidebar-course-name">${escapeHtml(courseMeta().title)}</p>
            <p class="sidebar-label">Modul pembelajaran</p>
            <ol class="module-list">${meetings.map(meeting => `
                <li><button type="button" class="module-link"${current(selected('materi', meeting.number))} onclick="PortalApp.selectMeeting(${meeting.number})">
                    <span class="module-number">${meeting.number}</span>
                    <span><small>Pertemuan ${meeting.number}</small><strong>${escapeHtml(meeting.title)}</strong><small>Materi bacaan${detail.quizzes && detail.quizzes[meeting.number] ? ' · Kuis latihan' : ''}</small></span>
                </button></li>`).join('') || '<li class="sidebar-empty">Belum ada modul tersedia.</li>'}
            </ol>
            <p class="sidebar-label">Latihan & ujian</p>
            <div class="sidebar-evaluations">
                <button type="button"${current(selected('kuis'))} onclick="PortalApp.switchTab('kuis')">Kuis evaluasi <span>${Object.keys(detail.quizzes || {}).length}</span></button>
                <button type="button"${current(selected('ujian', 'uts'))} onclick="PortalApp.selectExam('uts')">Ujian Tengah Semester <span>UTS</span></button>
                <button type="button"${current(selected('ujian', 'uas'))} onclick="PortalApp.selectExam('uas')">Ujian Akhir Semester <span>UAS</span></button>
            </div>`;
    }

    function normalizeSelection() {
        const detail = courseDetail();
        const meetings = detail.meetings || [];
        if (meetings.length && !meetings.some(meeting => meeting.number === state.activeMeeting)) state.activeMeeting = meetings[0].number;
        const quizNumbers = Object.keys(detail.quizzes || {}).map(Number).sort((a, b) => a - b);
        if (quizNumbers.length && !quizNumbers.includes(state.activeQuiz)) state.activeQuiz = quizNumbers[0];
    }

    function renderMain(syncUrl = true) {
        normalizeSelection();
        document.body.dataset.view = state.view;
        document.getElementById('catalog-link').setAttribute('aria-current', state.view === 'catalog' ? 'page' : 'false');
        const container = document.getElementById('portal-main-view');
        if (state.view === 'catalog') {
            document.title = 'Musfiah Center — Portal Perkuliahan';
            container.innerHTML = window.PortalRenderer.renderCatalogView(data.portalMeta, catalog, data.courses);
        } else {
            const meta = courseMeta();
            const detail = courseDetail();
            const meetings = detail.meetings || [];
            document.title = `${meta.title} — Musfiah Center`;
            const tabs = [['materi', 'Materi', meetings.length], ['kuis', 'Kuis', Object.keys(detail.quizzes || {}).length], ['ujian', 'UTS & UAS', null]];
            const content = state.activeTab === 'materi'
                ? window.PortalRenderer.renderMeetingReader(meta, meetings, state.activeMeeting)
                : state.activeTab === 'kuis'
                    ? window.PortalRenderer.renderQuizView(meta, meetings, detail.quizzes, state.activeQuiz)
                    : window.PortalRenderer.renderExamView(meta, detail.exams, state.activeExam);
            container.innerHTML = `
                <section class="course-overview" aria-label="Informasi mata kuliah">
                    <nav class="breadcrumbs" aria-label="Lokasi halaman"><a href="./" onclick="event.preventDefault(); PortalApp.navigateHome()">Mata kuliah</a><span aria-hidden="true">›</span><span>${escapeHtml(meta.code)}</span></nav>
                    <p class="course-provider">${escapeHtml(data.portalMeta.institution)}</p>
                    <h2>${escapeHtml(meta.title)}</h2>
                    <p class="overview-byline">Pengampu: <strong>${escapeHtml(meta.lecturer)}</strong><span> · ${escapeHtml(meta.credits)} · ${meetings.length} pertemuan</span></p>
                </section>
                <nav class="course-tabs" aria-label="Bagian mata kuliah">${tabs.map(([tab, label, count]) => `
                    <button type="button"${state.activeTab === tab ? ' aria-current="page"' : ''} onclick="PortalApp.switchTab('${tab}')">${label}${count === null ? '' : `<span>${count}</span>`}</button>`).join('')}
                </nav>
                <div class="course-content">${content}</div>`;
            renderSidebar();
        }
        updateSidebar();
        if (syncUrl) updateUrl();
    }

    function finishNavigation() {
        if (mobileQuery.matches) state.sidebarOpen = false;
        renderMain();
        document.getElementById('portal-main-view').focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    function navigateHome() { state.view = 'catalog'; finishNavigation(); }

    function openCourse(slug, tab = 'materi', item = 1) {
        if (!catalog.some(course => course.slug === slug)) return;
        const changedCourse = state.activeCourseSlug !== slug || state.view !== 'course';
        state.view = 'course';
        state.activeCourseSlug = slug;
        state.activeTab = ['materi', 'kuis', 'ujian'].includes(tab) ? tab : 'materi';
        if (state.activeTab === 'materi') state.activeMeeting = state.activeQuiz = Number(item) || 1;
        if (state.activeTab === 'kuis') state.activeQuiz = Number(item) || 1;
        if (state.activeTab === 'ujian') state.activeExam = item === 'uas' ? 'uas' : 'uts';
        if (changedCourse) state.sidebarOpen = !mobileQuery.matches;
        finishNavigation();
    }

    function switchTab(tab, number) {
        if (!['materi', 'kuis', 'ujian'].includes(tab)) return;
        state.activeTab = tab;
        if (number && tab === 'materi') state.activeMeeting = Number(number);
        if (number && tab === 'kuis') state.activeQuiz = Number(number);
        finishNavigation();
    }
    function selectMeeting(number) { state.activeQuiz = Number(number); switchTab('materi', number); }
    function selectQuiz(number) { switchTab('kuis', number); }
    function selectExam(type) { state.activeExam = type === 'uas' ? 'uas' : 'uts'; switchTab('ujian'); }

    function scrollToSection(event, id) {
        event.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    }

    function submitQuiz(event, number) {
        event.preventDefault();
        const quiz = (courseDetail().quizzes || {})[number];
        if (!quiz || !quiz.questions.length) return;
        const answers = new FormData(document.getElementById('portal-quiz-form'));
        let correctCount = 0;
        const feedback = quiz.questions.map((question, index) => {
            const correct = Number(answers.get(`q_${index}`)) === question.correct;
            if (correct) correctCount++;
            return `<section class="answer-feedback ${correct ? 'is-correct' : 'is-incorrect'}">
                <h3>Soal ${index + 1}: ${correct ? 'Benar' : 'Belum tepat'}</h3>
                <p>${escapeHtml(question.q)}</p>
                <p><strong>Jawaban benar:</strong> ${escapeHtml(question.options[question.correct])}</p>
                <p><strong>Pembahasan:</strong> ${escapeHtml(question.exp)}</p>
            </section>`;
        }).join('');
        const score = Math.round(correctCount / quiz.questions.length * 100);
        const result = document.getElementById('portal-quiz-result');
        result.innerHTML = `<div class="score-summary"><div><p>Hasil latihan Anda</p><h2>${score}<span> / 100</span></h2><p>${correctCount} dari ${quiz.questions.length} jawaban benar. Latihan ini tidak dikirim sebagai nilai resmi.</p></div></div>${feedback}`;
        result.hidden = false;
        result.scrollIntoView({ behavior: 'instant', block: 'start' });
    }

    function toggleSidebar() {
        state.sidebarOpen = !state.sidebarOpen;
        updateSidebar();
        if (state.sidebarOpen && mobileQuery.matches) document.querySelector('.sidebar-close').focus();
        else document.getElementById('sidebar-toggle').focus();
    }

    function init() {
        parseUrlState();
        renderMain(false);
        window.addEventListener('popstate', () => { parseUrlState(); renderMain(false); });
        window.addEventListener('hashchange', () => { parseUrlState(); renderMain(false); });
        mobileQuery.addEventListener('change', () => { state.sidebarOpen = !mobileQuery.matches; updateSidebar(); });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && mobileQuery.matches && state.sidebarOpen) toggleSidebar();
            if (event.key === 'Tab' && mobileQuery.matches && state.sidebarOpen) {
                const links = Array.from(document.getElementById('portal-sidebar').querySelectorAll('a, button'));
                const first = links[0], last = links[links.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
                if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
            }
        });
    }

    return { init, navigateHome, openCourse, switchTab, selectMeeting, selectQuiz, selectExam,
        scrollToSection, submitQuiz, toggleSidebar };
})();
document.addEventListener('DOMContentLoaded', window.PortalApp.init);
