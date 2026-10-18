/* ============================================================
   CHRONOS — futuristik 3D taymer
   Real 3D Crystal + Procedural 3D Tree + Dynamic Animations
   + Custom Daily Goal
   ============================================================ */

const I18N = {
  uz: {
    themeTitle: 'Kunduzgi/Tungi rejim', soundTitle: 'Ovozni yoqish/o‘chirish', fullscreenTitle: 'To‘liq ekran',
    statsTitle: '📊 Statistika', statSessions: 'Bajarilgan sessiyalar:', statFocus: 'Umumiy fokus vaqti:',
    statGoal: 'Kunlik maqsad:', statRecord: 'Rekord sessiya:', resetStats: 'Statistikani tozalash',
    goalInputLabel: 'Kunlik maqsad (daqiqa):', saveGoalBtn: 'Saqlash',
    gardenTitle: '🌱 Vaqt bog\'i', gardenDesc: 'Har bir tugallangan fokus sessiyasi yangi barg ochadi.',
    volumeLabel: '🔉 Ovoz balandligi',
    startBtn: '▶ Boshlash', pauseBtn: '⏸ Pauza', resumeBtn: '⏵ Davom', resetBtn: '↺ Qayta',
    presetPomodoro: '🍅 Pomodoro 25', presetBreak: '☕ Tanaffus 5', setCustomBtn: 'Vaqtni sozlash',
    modePomodoro: '🍅 Pomodoro', modeCountdown: '⏳ Countdown', modeStopwatch: '⏱ Sekundomer',
    modeInterval: '🔄 Intervallar', modeEvent: '🎯 Voqea',
    eventTitle: '🎯 Kelajak kapsulalari', eventNamePh: 'Voqea nomi (IELTS, tug‘ilgan kun...)',
    setEventBtn: 'Kapsulani saqlash', clearEventBtn: 'O‘chirish',
    shortcutsTitle: '⌨️ Klaviatura yorliqlari', shortcutSpace: 'Boshlash/Pauza', shortcutR: 'Qayta boshlash',
    shortcutS: 'Sekundomer', shortcutP: 'Pomodoro', shortcutT: 'Rejim almashtirish', shortcutF: 'To‘liq ekran',
    modeInfoTitle: 'ℹ️ Rejim haqida', footerText: 'CHRONOS — vaqtni boshqarish san’ati',
    statusPomodoroReady: 'Pomodoro tayyor', statusPomodoroRunning: '🍅 Fokus davom etmoqda...',
    statusCountdownReady: 'Countdown tayyor', statusCountdownRunning: '⏳ Countdown ishlamoqda',
    statusStopwatchReady: 'Sekundomer tayyor', statusStopwatchRunning: '⏱ Sekundomer ishlamoqda',
    statusIntervalFocus: '💪 Fokus intervali', statusIntervalBreak: '☕ Dam olish intervali',
    statusPaused: '⏸ Pauza qilindi', statusPomodoroDone: '✅ Pomodoro tugadi! Tanaffus boshlandi.',
    statusCountdownDone: '✅ Countdown tugadi!', statusEventReady: 'Voqea sanagichi tayyor',
    descPomodoro: 'Pomodoro: 25 daqiqa fokus, so‘ng 5 daqiqa tanaffus.',
    descCountdown: 'Countdown: istalgan vaqtni orqaga sanash.',
    descStopwatch: 'Sekundomer: vaqtni millisekundgacha oldinga sanaydi.',
    descInterval: 'Intervallar: 25 daqiqa fokus va 5 daqiqa dam olish davriy almashinadi.',
    descEvent: 'Voqea: muhim sanagacha qolgan vaqtni real vaqtda ko‘rsatadi.',
    unitDays: 'kun', unitHours: 'soat', unitMin: 'daqiqa', unitSec: 'soniya',
    eventPassed: 'Voqea o‘tib ketdi!', daysLeft: 'kun qoldi',
    alertCustomTime: 'Iltimos, 1 dan 180 gacha daqiqa kiriting!',
    alertModeCantSet: 'Bu rejimda vaqtni sozlash mumkin emas.',
    alertEventName: 'Voqea nomini kiriting!', alertEventDate: 'Voqea sanasini tanlang!',
    confirmResetStats: 'Barcha statistikani o‘chirmoqchimisiz?',
    toastEventSaved: '✅ Kapsula saqlandi!', toastEventCleared: '🗑 Kapsula o‘chirildi',
    toastSessionComplete: '🌸 Yangi barg o‘sdi!',
    toastGoalSaved: '🎯 Kunlik maqsad saqlandi!',
    alertGoalInvalid: 'Iltimos, 5 dan 600 gacha daqiqa kiriting!',
  },
  ru: {
    themeTitle: 'Дневной/Ночной режим', soundTitle: 'Вкл/выкл звук', fullscreenTitle: 'Полный экран',
    statsTitle: '📊 Статистика', statSessions: 'Выполненные сессии:', statFocus: 'Общее время фокуса:',
    statGoal: 'Дневная цель:', statRecord: 'Рекордная сессия:', resetStats: 'Сбросить статистику',
    goalInputLabel: 'Дневная цель (минуты):', saveGoalBtn: 'Сохранить',
    gardenTitle: '🌱 Сад времени', gardenDesc: 'Каждая завершённая сессия выращивает новый лист.',
    volumeLabel: '🔉 Громкость', startBtn: '▶ Старт', pauseBtn: '⏸ Пауза', resumeBtn: '⏵ Продолжить',
    resetBtn: '↺ Сброс', presetPomodoro: '🍅 Помодоро 25', presetBreak: '☕ Перерыв 5',
    setCustomBtn: 'Установить время', modePomodoro: '🍅 Помодоро', modeCountdown: '⏳ Обратный отсчёт',
    modeStopwatch: '⏱ Секундомер', modeInterval: '🔄 Интервалы', modeEvent: '🎯 Событие',
    eventTitle: '🎯 Капсулы будущего', eventNamePh: 'Название события...', setEventBtn: 'Сохранить капсулу',
    clearEventBtn: 'Удалить', shortcutsTitle: '⌨️ Горячие клавиши', shortcutSpace: 'Старт/Пауза',
    shortcutR: 'Сброс', shortcutS: 'Секундомер', shortcutP: 'Помодоро', shortcutT: 'Сменить режим',
    shortcutF: 'Полный экран', modeInfoTitle: 'ℹ️ О режиме', footerText: 'CHRONOS — искусство управления временем',
    statusPomodoroReady: 'Помодоро готов', statusPomodoroRunning: '🍅 Фокус продолжается...',
    statusCountdownReady: 'Отсчёт готов', statusCountdownRunning: '⏳ Отсчёт идёт',
    statusStopwatchReady: 'Секундомер готов', statusStopwatchRunning: '⏱ Секундомер идёт',
    statusIntervalFocus: '💪 Интервал фокуса', statusIntervalBreak: '☕ Перерыв', statusPaused: '⏸ Пауза',
    statusPomodoroDone: '✅ Помодоро завершён! Перерыв начат.', statusCountdownDone: '✅ Отсчёт завершён!',
    statusEventReady: 'Счётчик события готов', descPomodoro: 'Помодоро: 25 минут фокуса, затем 5 минут перерыва.',
    descCountdown: 'Обратный отсчёт: любой интервал времени.', descStopwatch: 'Секундомер: считает вперёд с миллисекундами.',
    descInterval: 'Интервалы: 25 минут фокуса и 5 минут отдыха чередуются.', descEvent: 'Событие: показывает время до важной даты.',
    unitDays: 'дн', unitHours: 'ч', unitMin: 'мин', unitSec: 'сек', eventPassed: 'Событие прошло!', daysLeft: 'дней осталось',
    alertCustomTime: 'Пожалуйста, введите от 1 до 180 минут!', alertModeCantSet: 'В этом режиме нельзя установить время.',
    alertEventName: 'Введите название события!', alertEventDate: 'Выберите дату события!',
    confirmResetStats: 'Удалить всю статистику?', toastEventSaved: '✅ Капсула сохранена!', toastEventCleared: '🗑 Капсула удалена',
    toastSessionComplete: '🌸 Новый лист вырос!',
    toastGoalSaved: '🎯 Дневная цель сохранена!',
    alertGoalInvalid: 'Пожалуйста, введите от 5 до 600 минут!',
  },
  en: {
    themeTitle: 'Day/Night mode', soundTitle: 'Sound on/off', fullscreenTitle: 'Fullscreen',
    statsTitle: '📊 Statistics', statSessions: 'Completed sessions:', statFocus: 'Total focus time:',
    statGoal: 'Daily goal:', statRecord: 'Record session:', resetStats: 'Reset statistics',
    goalInputLabel: 'Daily goal (minutes):', saveGoalBtn: 'Save',
    gardenTitle: '🌱 Time Garden', gardenDesc: 'Each completed focus session grows a new leaf.',
    volumeLabel: '🔉 Volume', startBtn: '▶ Start', pauseBtn: '⏸ Pause', resumeBtn: '⏵ Resume',
    resetBtn: '↺ Reset', presetPomodoro: '🍅 Pomodoro 25', presetBreak: '☕ Break 5',
    setCustomBtn: 'Set time', modePomodoro: '🍅 Pomodoro', modeCountdown: '⏳ Countdown',
    modeStopwatch: '⏱ Stopwatch', modeInterval: '🔄 Intervals', modeEvent: '🎯 Event',
    eventTitle: '🎯 Future Capsules', eventNamePh: 'Event name (IELTS, birthday...)', setEventBtn: 'Save capsule',
    clearEventBtn: 'Delete', shortcutsTitle: '⌨️ Keyboard shortcuts', shortcutSpace: 'Start/Pause',
    shortcutR: 'Reset', shortcutS: 'Stopwatch', shortcutP: 'Pomodoro', shortcutT: 'Change mode',
    shortcutF: 'Fullscreen', modeInfoTitle: 'ℹ️ About mode', footerText: 'CHRONOS — the art of time management',
    statusPomodoroReady: 'Pomodoro ready', statusPomodoroRunning: '🍅 Focus in progress...',
    statusCountdownReady: 'Countdown ready', statusCountdownRunning: '⏳ Countdown running',
    statusStopwatchReady: 'Stopwatch ready', statusStopwatchRunning: '⏱ Stopwatch running',
    statusIntervalFocus: '💪 Focus interval', statusIntervalBreak: '☕ Break interval', statusPaused: '⏸ Paused',
    statusPomodoroDone: '✅ Pomodoro done! Break started.', statusCountdownDone: '✅ Countdown finished!',
    statusEventReady: 'Event countdown ready', descPomodoro: 'Pomodoro: 25 minutes focus, then 5 minutes break.',
    descCountdown: 'Countdown: any time interval backwards.', descStopwatch: 'Stopwatch: counts forward with milliseconds.',
    descInterval: 'Intervals: 25 minutes focus and 5 minutes rest alternate.', descEvent: 'Event: shows time remaining to an important date.',
    unitDays: 'days', unitHours: 'hrs', unitMin: 'min', unitSec: 'sec', eventPassed: 'Event has passed!', daysLeft: 'days left',
    alertCustomTime: 'Please enter 1 to 180 minutes!', alertModeCantSet: 'Cannot set time in this mode.',
    alertEventName: 'Enter event name!', alertEventDate: 'Select event date!',
    confirmResetStats: 'Delete all statistics?', toastEventSaved: '✅ Capsule saved!', toastEventCleared: '🗑 Capsule deleted',
    toastSessionComplete: '🌸 A new leaf grew!',
    toastGoalSaved: '🎯 Daily goal saved!',
    alertGoalInvalid: 'Please enter 5 to 600 minutes!',
  }
};

let currentLang = localStorage.getItem('chronos_lang') || 'uz';
const $ = id => document.getElementById(id);

// DOM
const timerDisplay = $('timerDisplay'), timerStatus = $('timerStatus');
const startBtn = $('startBtn'), pauseBtn = $('pauseBtn'), resumeBtn = $('resumeBtn'), resetBtn = $('resetBtn');
const setCustomBtn = $('setCustomBtn'), customMinutes = $('customMinutes');
const themeToggle = $('themeToggle'), soundToggle = $('soundToggle'), fullscreenBtn = $('fullscreenBtn');
const volumeSlider = $('volumeSlider'), liveClock = $('liveClock'), liveDate = $('liveDate'), footerTime = $('footerTime');
const modeTabs = document.querySelectorAll('.mode-tab'), presetBtns = document.querySelectorAll('.preset-btn');
const modeDescription = $('modeDescription'), resetStatsBtn = $('resetStatsBtn');
const statSessions = $('statSessions'), statFocus = $('statFocus'), statGoal = $('statGoal'), statRecord = $('statRecord');
const langBtns = document.querySelectorAll('.lang-btn');
const eventName = $('eventName'), eventDate = $('eventDate'), setEventBtn = $('setEventBtn');
const capsulesList = $('capsulesList');
const gardenGoalText = $('gardenGoalText'), gardenProgressFill = $('gardenProgressFill');
const dailyGoalInput = $('dailyGoalInput'), saveGoalBtn = $('saveGoalBtn');

// i18n
function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || I18N.uz[key] || key; }
function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.getAttribute('data-i18n')));
  document.querySelectorAll('[data-i18n-ph]').forEach(el => el.placeholder = t(el.getAttribute('data-i18n-ph')));
  document.querySelectorAll('[data-i18n-title]').forEach(el => el.title = t(el.getAttribute('data-i18n-title')));
  langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
  updateDisplay(true); refreshStatsUI(); updateModeDescription(); renderCapsules(); updateGardenUI();
}
langBtns.forEach(btn => btn.addEventListener('click', () => {
  currentLang = btn.dataset.lang; localStorage.setItem('chronos_lang', currentLang);
  playClick(); applyLanguage(); updateLiveClock();
}));

// Audio
let audioCtx = null, soundEnabled = true, volume = 0.7;
function initAudio() {
  if (!audioCtx) { try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {} }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}
function playTone(freq, dur, type='sine', gainVal=0.3) {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
    osc.type = type; osc.frequency.value = freq; gain.gain.value = gainVal * volume;
    osc.connect(gain); gain.connect(audioCtx.destination); osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur); osc.stop(audioCtx.currentTime + dur);
  } catch(e) {}
}
function playClick() { initAudio(); playTone(800, 0.05, 'square', 0.12); }
function playCoin() {
  if (!soundEnabled) return; initAudio(); if (!audioCtx) return;
  const now = audioCtx.currentTime;
  [2093, 2637, 3136, 3951].forEach((f, i) => {
    const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
    osc.type = 'triangle'; osc.frequency.value = f; gain.gain.value = 0;
    osc.connect(gain); gain.connect(audioCtx.destination);
    const start = now + i * 0.012;
    gain.gain.setValueAtTime(0.001, start);
    gain.gain.exponentialRampToValueAtTime(0.28 * volume, start + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.18);
    osc.start(start); osc.stop(start + 0.22);
  });
  const osc2 = audioCtx.createOscillator(), gain2 = audioCtx.createGain();
  osc2.type = 'sine'; osc2.frequency.value = 1568; gain2.gain.value = 0;
  osc2.connect(gain2); gain2.connect(audioCtx.destination);
  gain2.gain.setValueAtTime(0.001, now);
  gain2.gain.exponentialRampToValueAtTime(0.2 * volume, now + 0.008);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
  osc2.start(now); osc2.stop(now + 0.4);
}
function playAlarm() {
  if (!soundEnabled) return; initAudio(); playCoin();
  setTimeout(() => playTone(1318, 0.25, 'sine', 0.35), 180);
  setTimeout(() => playTone(1568, 0.25, 'sine', 0.35), 380);
  setTimeout(() => playCoin(), 600);
  setTimeout(() => playTone(1760, 0.5, 'sine', 0.4), 900);
}

// State
const state = {
  mode: 'pomodoro', running: false, paused: false, startTime: 0, accumulated: 0,
  duration: 25 * 60 * 1000, intervalPhase: 'focus',
  intervalFocusMs: 25 * 60 * 1000, intervalBreakMs: 5 * 60 * 1000,
  tickInterval: null, lastRenderedMs: -1,
  eventTarget: null, eventNameStr: '',
  threeIntensity: 0.3, threeSpeedMult: 1, threeFlash: 0,
  portalTargetScale: 1, portalCurrentScale: 1
};

// Stats
const STATS_KEY = 'chronos_stats_v3';
function loadStats() {
  try { const raw = localStorage.getItem(STATS_KEY); if (raw) return JSON.parse(raw); } catch(e) {}
  return { sessions: 0, totalFocusMs: 0, recordMs: 0, dailyFocusMs: 0, dailyDate: new Date().toDateString(), totalSprouts: 0, dailyGoalMinutes: 120 };
}
function saveStats(s) { localStorage.setItem(STATS_KEY, JSON.stringify(s)); }
let stats = loadStats();
if (stats.dailyGoalMinutes === undefined) stats.dailyGoalMinutes = 120;

function refreshStatsUI() {
  statSessions.textContent = stats.sessions;
  statFocus.textContent = Math.floor(stats.totalFocusMs / 60000) + ' ' + t('unitMin');
  statRecord.textContent = Math.floor(stats.recordMs / 60000) + ' ' + t('unitMin');
  statGoal.textContent = Math.floor(stats.dailyFocusMs / 60000) + ' / ' + stats.dailyGoalMinutes + ' ' + t('unitMin');
  if (dailyGoalInput) dailyGoalInput.value = stats.dailyGoalMinutes;
}
function checkDailyReset() {
  const today = new Date().toDateString();
  if (stats.dailyDate !== today) {
    stats.dailyDate = today; stats.dailyFocusMs = 0; saveStats(stats); refreshStatsUI();
  }
}
function addFocusTime(ms) {
  if (ms <= 0) return;
  stats.sessions += 1; stats.totalFocusMs += ms; stats.dailyFocusMs += ms;
  if (ms > stats.recordMs) stats.recordMs = ms;
  stats.totalSprouts += 1;
  saveStats(stats); refreshStatsUI();
  updateGardenUI();
  growTree();
  showToast(t('toastSessionComplete'));
}

// Helpers
function formatTime(ms, withMs = false) {
  if (ms < 0) ms = 0;
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600), m = Math.floor((totalSec % 3600) / 60), s = totalSec % 60;
  const msPart = Math.floor((ms % 1000) / 10);
  let base = h > 0 ? `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}` : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  if (withMs) base += `.${String(msPart).padStart(2,'0')}`;
  return base;
}
function getElapsedMs() {
  if (state.paused) return state.accumulated;
  if (!state.running) return state.accumulated;
  return state.accumulated + (Date.now() - state.startTime);
}
function getDisplayMs() {
  if (state.mode === 'stopwatch') return getElapsedMs();
  if (state.mode === 'interval') {
    const cycle = state.intervalFocusMs + state.intervalBreakMs;
    const elapsed = getElapsedMs(), pos = elapsed % cycle;
    if (pos < state.intervalFocusMs) return state.intervalFocusMs - pos;
    return cycle - pos;
  }
  if (state.mode === 'event') return 0;
  return Math.max(0, state.duration - getElapsedMs());
}

function updateDisplay(force = false) {
  if (state.mode === 'event') {
    timerDisplay.textContent = '🎯'; timerStatus.textContent = t('statusEventReady'); return;
  }
  const ms = getDisplayMs();
  const isStopwatch = state.mode === 'stopwatch';
  const roundedMs = isStopwatch ? Math.floor(ms / 10) * 10 : Math.floor(ms / 1000) * 1000;
  if (force || roundedMs !== state.lastRenderedMs) {
    state.lastRenderedMs = roundedMs;
    timerDisplay.textContent = formatTime(roundedMs, isStopwatch);
    timerDisplay.classList.toggle('ms-display', isStopwatch);
  }
  let statusText = '';
  if (state.mode === 'pomodoro') statusText = state.running ? t('statusPomodoroRunning') : (state.paused ? t('statusPaused') : t('statusPomodoroReady'));
  else if (state.mode === 'countdown') statusText = state.running ? t('statusCountdownRunning') : (state.paused ? t('statusPaused') : t('statusCountdownReady'));
  else if (state.mode === 'stopwatch') statusText = state.running ? t('statusStopwatchRunning') : (state.paused ? t('statusPaused') : t('statusStopwatchReady'));
  else if (state.mode === 'interval') {
    const cycle = state.intervalFocusMs + state.intervalBreakMs, pos = getElapsedMs() % cycle;
    const isFocus = pos < state.intervalFocusMs;
    statusText = state.paused ? t('statusPaused') : (isFocus ? t('statusIntervalFocus') : t('statusIntervalBreak'));
  }
  timerStatus.textContent = statusText;
}
function updateModeDescription() {
  const map = { pomodoro: 'descPomodoro', countdown: 'descCountdown', stopwatch: 'descStopwatch', interval: 'descInterval', event: 'descEvent' };
  modeDescription.textContent = t(map[state.mode] || 'descPomodoro');
}

// Tick
function tick() {
  if (state.running && !state.paused) {
    if (state.mode === 'pomodoro' || state.mode === 'countdown') {
      if (getElapsedMs() >= state.duration) { handlePomodoroEnd(); return; }
    }
    if (state.mode === 'interval') {
      const cycle = state.intervalFocusMs + state.intervalBreakMs;
      const pos = getElapsedMs() % cycle;
      const newPhase = pos < state.intervalFocusMs ? 'focus' : 'break';
      if (state.intervalPhase !== newPhase) {
        state.intervalPhase = newPhase; state.lastRenderedMs = -1; playAlarm();
        trigger3DShockwave();
        if (newPhase === 'break') addFocusTime(state.intervalFocusMs);
      }
    }
  }
  updateThreeIntensity();
  if (state.eventTarget) renderCapsules();
  updateDisplay();
}

function handlePomodoroEnd() {
  const focusMs = state.mode === 'pomodoro' ? state.intervalFocusMs : state.duration;
  addFocusTime(focusMs);
  playAlarm();
  trigger3DShockwave();
  if (state.mode === 'pomodoro') {
    timerStatus.textContent = t('statusPomodoroDone');
    state.mode = 'countdown'; state.duration = 5 * 60 * 1000;
    state.accumulated = 0; state.startTime = Date.now(); state.running = true; state.paused = false;
    state.lastRenderedMs = -1; startBtn.disabled = true; pauseBtn.disabled = false; resumeBtn.disabled = true;
    modeTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.mode === 'countdown'));
    updateModeDescription(); setTimeout(() => updateDisplay(true), 50);
  } else {
    state.running = false; state.paused = false; state.accumulated = 0;
    startBtn.disabled = false; pauseBtn.disabled = true; resumeBtn.disabled = true;
    state.lastRenderedMs = -1; timerDisplay.textContent = '00:00';
    timerStatus.textContent = t('statusCountdownDone');
  }
}

function updateThreeIntensity() {
  if (!crystalGroup) return;
  let target = 0.3, speedMult = 1.0;
  if (state.mode === 'pomodoro' || state.mode === 'countdown') {
    if (state.running) {
      const remaining = getDisplayMs(), total = state.duration;
      const progress = total > 0 ? 1 - (remaining / total) : 0;
      target = 0.4 + progress * 1.8;
      speedMult = 1 + progress * 4;
    } else { target = 0.3; speedMult = 0.6; }
  } else if (state.mode === 'interval') {
    target = state.intervalPhase === 'focus' ? 1.2 : 2.2;
    speedMult = state.intervalPhase === 'focus' ? 1.6 : 0.5;
  } else if (state.mode === 'stopwatch') {
    target = state.running ? 1.4 : 0.3;
    speedMult = state.running ? 2.5 : 0.5;
  } else if (state.mode === 'event') { target = 0.8; speedMult = 1.2; }

  state.threeIntensity += (target - state.threeIntensity) * 0.05;
  state.threeSpeedMult = (state.threeSpeedMult || 1) + (speedMult - (state.threeSpeedMult || 1)) * 0.05;
  if (state.threeFlash > 0) state.threeFlash *= 0.95;
  if (state.threeFlash < 0.01) state.threeFlash = 0;
}

function trigger3DShockwave() {
  state.threeFlash = 2.5;
  if (shockwave) {
    shockwave.visible = true;
    shockwave.scale.set(0.3, 0.3, 0.3);
    shockwave.material.opacity = 1.0;
  }
  if (burstParticles) {
    burstParticles.visible = true;
    burstParticles.material.opacity = 1.0;
    const pos = burstParticles.geometry.attributes.position.array;
    for (let i = 0; i < pos.length; i += 3) { pos[i] = 0; pos[i+1] = 0; pos[i+2] = 0; }
    burstParticles.geometry.attributes.position.needsUpdate = true;
    burstParticles.userData.velocities = [];
    for (let i = 0; i < pos.length / 3; i++) {
      burstParticles.userData.velocities.push({
        x: (Math.random() - 0.5) * 0.4, y: (Math.random() - 0.5) * 0.4, z: (Math.random() - 0.5) * 0.4
      });
    }
  }
}

// Controls
function startTimer() {
  if (state.running && !state.paused) return;
  initAudio(); checkDailyReset();
  if (state.mode === 'event') return;
  if (state.paused) { state.startTime = Date.now(); state.paused = false; }
  else { state.accumulated = 0; state.startTime = Date.now(); }
  state.running = true; state.lastRenderedMs = -1;
  startBtn.disabled = true; pauseBtn.disabled = false; resumeBtn.disabled = true;
  updateDisplay(true);
}
function pauseTimer() {
  if (!state.running || state.paused) return;
  state.accumulated = getElapsedMs(); state.paused = true; state.running = false;
  startBtn.disabled = true; pauseBtn.disabled = true; resumeBtn.disabled = false;
  updateDisplay(true);
}
function resumeTimer() {
  if (!state.paused) return;
  state.startTime = Date.now(); state.paused = false; state.running = true;
  startBtn.disabled = true; pauseBtn.disabled = false; resumeBtn.disabled = true;
  updateDisplay(true);
}
function resetTimer() {
  playClick();
  state.running = false; state.paused = false; state.accumulated = 0;
  state.lastRenderedMs = -1; state.intervalPhase = 'focus'; state.threeFlash = 0;
  startBtn.disabled = false; pauseBtn.disabled = true; resumeBtn.disabled = true;
  if (state.mode === 'stopwatch') { timerDisplay.textContent = '00:00.00'; timerStatus.textContent = t('statusStopwatchReady'); }
  else if (state.mode === 'interval') { state.duration = state.intervalFocusMs; timerDisplay.textContent = formatTime(state.intervalFocusMs); timerStatus.textContent = t('statusIntervalFocus'); }
  else if (state.mode === 'countdown') { state.duration = 10 * 60 * 1000; timerDisplay.textContent = '10:00'; timerStatus.textContent = t('statusCountdownReady'); }
  else if (state.mode === 'pomodoro') { state.duration = 25 * 60 * 1000; timerDisplay.textContent = '25:00'; timerStatus.textContent = t('statusPomodoroReady'); }
  else if (state.mode === 'event') { renderCapsules(); }
  timerDisplay.classList.remove('ms-display');
}

function setMode(mode) {
  playClick();
  state.running = false; state.paused = false; state.accumulated = 0;
  state.lastRenderedMs = -1; state.intervalPhase = 'focus'; state.mode = mode;
  startBtn.disabled = false; pauseBtn.disabled = true; resumeBtn.disabled = true;
  modeTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.mode === mode));
  timerDisplay.classList.remove('ms-display');
  if (mode === 'pomodoro') { state.duration = 25*60*1000; state.intervalFocusMs = 25*60*1000; timerDisplay.textContent = '25:00'; timerStatus.textContent = t('statusPomodoroReady'); }
  else if (mode === 'countdown') { state.duration = 10*60*1000; timerDisplay.textContent = '10:00'; timerStatus.textContent = t('statusCountdownReady'); }
  else if (mode === 'stopwatch') { state.duration = 0; timerDisplay.textContent = '00:00.00'; timerStatus.textContent = t('statusStopwatchReady'); timerDisplay.classList.add('ms-display'); }
  else if (mode === 'interval') { state.intervalPhase = 'focus'; state.intervalFocusMs = 25*60*1000; state.intervalBreakMs = 5*60*1000; state.duration = state.intervalFocusMs; timerDisplay.textContent = formatTime(state.intervalFocusMs); timerStatus.textContent = t('statusIntervalFocus'); }
  else if (mode === 'event') { timerDisplay.textContent = '🎯'; timerStatus.textContent = t('statusEventReady'); renderCapsules(); }
  updateModeDescription();
  state.portalTargetScale = mode === 'pomodoro' ? 1.0 : mode === 'countdown' ? 1.3 : mode === 'stopwatch' ? 0.8 : mode === 'interval' ? 1.1 : 1.5;
}

// Future Capsules
const EVENTS_KEY = 'chronos_events_v3';
function loadEvents() {
  try { const raw = localStorage.getItem(EVENTS_KEY); if (raw) return JSON.parse(raw); } catch(e) {}
  return [];
}
function saveEvents(evs) { localStorage.setItem(EVENTS_KEY, JSON.stringify(evs)); }
let eventsList = loadEvents();

function saveEvent() {
  const name = (eventName.value || '').trim();
  const dateVal = eventDate.value;
  if (!name) { alert(t('alertEventName')); return; }
  if (!dateVal) { alert(t('alertEventDate')); return; }
  const ts = new Date(dateVal).getTime();
  if (isNaN(ts)) { alert(t('alertEventDate')); return; }
  eventsList.push({ id: Date.now(), name, target: ts });
  eventsList.sort((a, b) => a.target - b.target);
  saveEvents(eventsList);
  playCoin(); renderCapsules(); showToast(t('toastEventSaved'));
  eventName.value = ''; eventDate.value = '';
}
function deleteEvent(id) {
  eventsList = eventsList.filter(e => e.id !== id);
  saveEvents(eventsList); playClick(); renderCapsules(); showToast(t('toastEventCleared'));
}
setEventBtn.addEventListener('click', saveEvent);

function renderCapsules() {
  if (!capsulesList) return;
  capsulesList.innerHTML = '';
  const now = Date.now();
  eventsList.sort((a, b) => a.target - b.target);
  let closestId = eventsList.length > 0 && eventsList[0].target > now ? eventsList[0].id : null;
  
  eventsList.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'capsule-card';
    if (ev.id === closestId) card.classList.add('closest');
    const diff = ev.target - now;
    if (diff <= 0) card.classList.add('capsule-passed');
    
    const d = new Date(ev.target);
    const dateStr = `${d.getDate()}.${String(d.getMonth()+1).padStart(2,'0')}.${d.getFullYear()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    
    let timeStr = '';
    if (diff <= 0) { timeStr = t('eventPassed'); }
    else {
      const totalSec = Math.floor(diff / 1000);
      const days = Math.floor(totalSec / 86400);
      const hours = Math.floor((totalSec % 86400) / 3600);
      const mins = Math.floor((totalSec % 3600) / 60);
      const secs = totalSec % 60;
      timeStr = `${days}${t('unitDays')} ${String(hours).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    }
    card.innerHTML = `
      <button class="capsule-delete" title="O'chirish">✕</button>
      <div class="capsule-title">${escapeHtml(ev.name)}</div>
      <div class="capsule-date">${dateStr}</div>
      <div class="capsule-time">${timeStr}</div>
    `;
    card.querySelector('.capsule-delete').addEventListener('click', (e) => { e.stopPropagation(); deleteEvent(ev.id); });
    capsulesList.appendChild(card);
  });
  const futureEvs = eventsList.filter(e => e.target > now);
  if (futureEvs.length > 0) { state.eventTarget = futureEvs[0].target; state.eventNameStr = futureEvs[0].name; }
  else { state.eventTarget = null; state.eventNameStr = ''; }
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

// Time Garden UI (Progress Bar)
function updateGardenUI() {
  const goalMs = stats.dailyGoalMinutes * 60 * 1000;
  const progress = goalMs > 0 ? Math.min(100, (stats.dailyFocusMs / goalMs) * 100) : 0;
  if (gardenProgressFill) gardenProgressFill.style.width = progress + '%';
  if (gardenGoalText) gardenGoalText.textContent = Math.floor(stats.dailyFocusMs / 60000) + ' / ' + stats.dailyGoalMinutes + ' ' + t('unitMin');
}

// Event listeners
modeTabs.forEach(tab => tab.addEventListener('click', () => setMode(tab.dataset.mode)));
presetBtns.forEach(btn => btn.addEventListener('click', () => {
  playClick();
  const mode = btn.dataset.mode, minutes = parseInt(btn.dataset.min, 10);
  setMode(mode);
  if (mode === 'pomodoro') { state.duration = minutes*60*1000; state.intervalFocusMs = minutes*60*1000; }
  else if (mode === 'countdown') { state.duration = minutes*60*1000; }
  timerDisplay.textContent = formatTime(state.duration);
  timerStatus.textContent = `${minutes} ${t('unitMin')} — ${t('statusCountdownReady')}`;
  state.lastRenderedMs = -1;
}));
setCustomBtn.addEventListener('click', () => {
  playClick();
  const mins = parseInt(customMinutes.value, 10);
  if (isNaN(mins) || mins < 1 || mins > 180) { alert(t('alertCustomTime')); return; }
  if (state.mode === 'pomodoro' || state.mode === 'countdown') {
    state.duration = mins*60*1000;
    if (state.mode === 'pomodoro') state.intervalFocusMs = mins*60*1000;
    timerDisplay.textContent = formatTime(state.duration);
    timerStatus.textContent = `${mins} ${t('unitMin')}`;
    state.accumulated = 0; state.paused = false; state.running = false; state.lastRenderedMs = -1;
    startBtn.disabled = false; pauseBtn.disabled = true; resumeBtn.disabled = true;
  } else { alert(t('alertModeCantSet')); }
});
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click', resetTimer);
themeToggle.addEventListener('click', () => {
  playClick(); document.body.classList.toggle('night');
  const isNight = document.body.classList.contains('night');
  themeToggle.textContent = isNight ? '☀️' : '🌙'; updateThreeSceneTheme(isNight);
});
soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled; soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
  if (soundEnabled) { initAudio(); playCoin(); }
});
volumeSlider.addEventListener('input', e => { volume = e.target.value / 100; });
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(()=>{});
  else document.exitFullscreen().catch(()=>{});
});

// Daily Goal Save
saveGoalBtn.addEventListener('click', () => {
  const val = parseInt(dailyGoalInput.value, 10);
  if (isNaN(val) || val < 5 || val > 600) { alert(t('alertGoalInvalid')); return; }
  stats.dailyGoalMinutes = val;
  saveStats(stats);
  refreshStatsUI();
  updateGardenUI();
  playCoin();
  showToast(t('toastGoalSaved'));
});

resetStatsBtn.addEventListener('click', () => {
  if (confirm(t('confirmResetStats'))) {
    const savedGoal = stats.dailyGoalMinutes;
    stats = { sessions: 0, totalFocusMs: 0, recordMs: 0, dailyFocusMs: 0, dailyDate: new Date().toDateString(), totalSprouts: 0, dailyGoalMinutes: savedGoal };
    saveStats(stats); refreshStatsUI(); updateGardenUI(); playCoin();
    resetTreeToInitial();
  }
});

// Live clock
function updateLiveClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0'), m = String(now.getMinutes()).padStart(2,'0'), s = String(now.getSeconds()).padStart(2,'0');
  liveClock.textContent = `${h}:${m}:${s}`; footerTime.textContent = `${h}:${m}:${s}`;
  const dayNames = { uz: ['Yakshanba','Dushanba','Seshanba','Chorshanba','Payshanba','Juma','Shanba'], ru: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'], en: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'] };
  const monthNames = { uz: ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr'], ru: ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'], en: ['January','February','March','April','May','June','July','August','September','October','November','December'] };
  const dn = dayNames[currentLang] || dayNames.uz, mn = monthNames[currentLang] || monthNames.uz;
  liveDate.textContent = `${dn[now.getDay()]}, ${now.getDate()} ${mn[now.getMonth()]}, ${now.getFullYear()}`;
}

// Keyboard
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  const key = e.key.toLowerCase();
  if (key === ' ' || e.code === 'Space') { e.preventDefault(); if (state.running && !state.paused) pauseTimer(); else if (state.paused) resumeTimer(); else startTimer(); }
  else if (key === 'r') resetTimer();
  else if (key === 's') setMode('stopwatch');
  else if (key === 'p') setMode('pomodoro');
  else if (key === 't') themeToggle.click();
  else if (key === 'f') fullscreenBtn.click();
});

// Toast
let toastTimer = null;
function showToast(msg) {
  let el = document.getElementById('chronosToast');
  if (!el) { el = document.createElement('div'); el.id = 'chronosToast'; document.body.appendChild(el); }
  el.textContent = msg; el.style.opacity = '1'; el.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(-50%) translateY(20px)'; }, 2200);
}

// ============================================================
// THREE.JS SCENE
// ============================================================
let scene, camera, renderer;
let crystalGroup, crystalMesh, crystalWire, crystalInnerLight;
let rings = [], particles, starField, shockwave, burstParticles;
let portalRing, portalInner;
let treeGroup, treeTrunk, treeBranches = [], treeLeaves = [];
let dayNightLights = { ambient: null, point: null, sun: null, treeLight: null };
let leafMaterialDay, leafMaterialNight;
let trunkMaterialDay, trunkMaterialNight;

let currentLeafCount = 0;
const MAX_LEAVES = 120;
let pendingGrowth = 0;

function initThree() {
  const canvas = document.getElementById('three-canvas');
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = false;
  
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a1a2f, 0.015);
  
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 18);
  camera.lookAt(0, 1, 0);

  const ambient = new THREE.AmbientLight(0xffffff, 0.5); scene.add(ambient);
  const point = new THREE.PointLight(0x00ffd5, 1.5, 40); point.position.set(5, 5, 10); scene.add(point);
  const sun = new THREE.PointLight(0xffdd88, 0, 40); sun.position.set(-6, 8, 10); scene.add(sun);
  const treeLight = new THREE.PointLight(0x00ff88, 0.8, 20); treeLight.position.set(-5, 2, 2); scene.add(treeLight);
  dayNightLights = { ambient, point, sun, treeLight };

  createCrystal();
  createTree();
  createParticles();
  createPortal();
  createShockwave();
  createBurstParticles();
  createStars();

  updateThreeSceneTheme(document.body.classList.contains('night'));
  resetTreeToInitial();
}

// ---------- CRYSTAL ----------
function createCrystal() {
  crystalGroup = new THREE.Group();
  crystalGroup.position.set(0, 1, 0);
  scene.add(crystalGroup);

  const crystalGeo = new THREE.OctahedronGeometry(1.6, 1);
  const positions = crystalGeo.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    positions.setY(i, positions.getY(i) * 1.5);
  }
  crystalGeo.computeVertexNormals();
  
  const crystalMat = new THREE.MeshPhongMaterial({
    color: 0x00e6cc, emissive: 0x004d4d, shininess: 100,
    transparent: true, opacity: 0.7, side: THREE.DoubleSide, flatShading: true
  });
  crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
  crystalGroup.add(crystalMesh);

  const edgeGeo = new THREE.EdgesGeometry(crystalGeo);
  const edgeMat = new THREE.LineBasicMaterial({ color: 0x00ffd5, transparent: true, opacity: 0.8, linewidth: 2 });
  crystalWire = new THREE.LineSegments(edgeGeo, edgeMat);
  crystalGroup.add(crystalWire);

  crystalInnerLight = new THREE.PointLight(0x00ffcc, 1.2, 8);
  crystalGroup.add(crystalInnerLight);

  const coreGeo = new THREE.OctahedronGeometry(0.5, 0);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0x00ffd5, transparent: true, opacity: 0.5, wireframe: true });
  const core = new THREE.Mesh(coreGeo, coreMat);
  crystalGroup.add(core);

  for (let i = 0; i < 4; i++) {
    const ringGeo = new THREE.TorusGeometry(2.2 + i * 0.35, 0.04, 16, 80);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x00ffd5, emissive: 0x00ffaa, emissiveIntensity: 1.0, transparent: true, opacity: 0.6
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2 + (i - 1.5) * 0.3;
    ring.rotation.y = i * 0.4;
    ring.userData.baseRotation = { x: ring.rotation.x, y: ring.rotation.y };
    crystalGroup.add(ring);
    rings.push(ring);
  }
}

// ---------- TREE ----------
function createTree() {
  treeGroup = new THREE.Group();
  treeGroup.position.set(-5, -1.5, 0);
  scene.add(treeGroup);

  trunkMaterialDay = new THREE.MeshStandardMaterial({
    color: 0x5a3d2b, roughness: 0.9, metalness: 0.1, emissive: 0x1a0f08, emissiveIntensity: 0.2
  });
  trunkMaterialNight = new THREE.MeshStandardMaterial({
    color: 0x2a1f15, roughness: 0.8, metalness: 0.2, emissive: 0x0a0805, emissiveIntensity: 0.4
  });
  leafMaterialDay = new THREE.MeshStandardMaterial({
    color: 0x2ecc71, emissive: 0x00aa55, emissiveIntensity: 0.2,
    roughness: 0.6, metalness: 0.1, side: THREE.DoubleSide
  });
  leafMaterialNight = new THREE.MeshStandardMaterial({
    color: 0x00ffaa, emissive: 0x00ff88, emissiveIntensity: 0.8,
    roughness: 0.4, metalness: 0.2, side: THREE.DoubleSide
  });

  const trunkGeo = new THREE.CylinderGeometry(0.35, 0.65, 3.5, 8);
  treeTrunk = new THREE.Mesh(trunkGeo, trunkMaterialDay);
  treeTrunk.position.y = 1.75;
  treeGroup.add(treeTrunk);

  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const rootGeo = new THREE.CylinderGeometry(0.08, 0.25, 1.2, 6);
    const root = new THREE.Mesh(rootGeo, trunkMaterialDay);
    root.position.set(Math.cos(angle) * 0.4, 0.2, Math.sin(angle) * 0.4);
    root.rotation.z = Math.cos(angle) * 0.6;
    root.rotation.x = Math.sin(angle) * 0.6;
    treeGroup.add(root);
  }

  const branchData = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2 + 0.3;
    const height = 2.8 + Math.random() * 0.6;
    const length = 1.8 + Math.random() * 0.8;
    const tilt = 0.5 + Math.random() * 0.4;
    branchData.push({ angle, height, length, tilt, radius: 0.12 });
  }
  for (let i = 0; i < 16; i++) {
    const angle = Math.random() * Math.PI * 2;
    const height = 2.2 + Math.random() * 1.5;
    const length = 1.0 + Math.random() * 0.7;
    const tilt = 0.7 + Math.random() * 0.5;
    branchData.push({ angle, height, length, tilt, radius: 0.07 });
  }

  branchData.forEach(bd => {
    const branchGeo = new THREE.CylinderGeometry(bd.radius * 0.5, bd.radius, bd.length, 5);
    const branch = new THREE.Mesh(branchGeo, trunkMaterialDay);
    branch.position.y = bd.height;
    branch.rotation.z = bd.tilt * Math.cos(bd.angle);
    branch.rotation.x = bd.tilt * Math.sin(bd.angle);
    branch.position.x = Math.cos(bd.angle) * (bd.length / 2) * Math.sin(bd.tilt);
    branch.position.z = Math.sin(bd.angle) * (bd.length / 2) * Math.sin(bd.tilt);
    branch.userData = bd;
    treeGroup.add(branch);
    treeBranches.push(branch);
  });

  const leafPositions = [];
  branchData.forEach(bd => {
    const leafCount = 4 + Math.floor(Math.random() * 4);
    for (let j = 0; j < leafCount; j++) {
      const t = 0.5 + Math.random() * 0.5;
      const bx = Math.cos(bd.angle) * bd.length * Math.sin(bd.tilt) * t + (Math.random() - 0.5) * 0.6;
      const by = bd.height + Math.cos(bd.tilt) * bd.length * t + (Math.random() - 0.5) * 0.4;
      const bz = Math.sin(bd.angle) * bd.length * Math.sin(bd.tilt) * t + (Math.random() - 0.5) * 0.6;
      leafPositions.push({ x: bx, y: by, z: bz });
    }
  });

  for (let i = 0; i < 20; i++) {
    leafPositions.push({
      x: (Math.random() - 0.5) * 4,
      y: 3.5 + Math.random() * 2.5,
      z: (Math.random() - 0.5) * 4
    });
  }

  leafPositions.forEach((lp, idx) => {
    if (idx >= MAX_LEAVES) return;
    const size = 0.12 + Math.random() * 0.12;
    const leafGeo = new THREE.SphereGeometry(size, 6, 4);
    leafGeo.scale(1, 0.5, 0.7);
    const leafMat = leafMaterialDay.clone();
    const leaf = new THREE.Mesh(leafGeo, leafMat);
    leaf.position.set(lp.x, lp.y, lp.z);
    leaf.userData.baseScale = 1;
    leaf.userData.idx = idx;
    leaf.scale.set(0, 0, 0);
    treeGroup.add(leaf);
    treeLeaves.push(leaf);
  });

  for (let i = 0; i < 8; i++) {
    const flowerGeo = new THREE.SphereGeometry(0.1, 6, 6);
    const flowerMat = new THREE.MeshBasicMaterial({ color: 0xffcc00, transparent: true, opacity: 0 });
    const flower = new THREE.Mesh(flowerGeo, flowerMat);
    const bd = branchData[i % branchData.length];
    flower.position.set(
      Math.cos(bd.angle) * bd.length * 0.8,
      bd.height + 0.3,
      Math.sin(bd.angle) * bd.length * 0.8
    );
    flower.userData.isFlower = true;
    treeGroup.add(flower);
    treeLeaves.push(flower);
  }
}

function growTree() {
  pendingGrowth += 5;
  updateGardenUI();
}

let growthAnim = 0;
function animateTreeGrowth(dt) {
  if (pendingGrowth > 0 && currentLeafCount < treeLeaves.length) {
    growthAnim += dt;
    if (growthAnim > 0.1) {
      growthAnim = 0;
      for (let i = 0; i < treeLeaves.length; i++) {
        const leaf = treeLeaves[i];
        if (leaf.userData.isFlower) continue;
        if (leaf.scale.x < 0.9) {
          leaf.scale.set(1, 1, 1);
          pendingGrowth--;
          currentLeafCount++;
          break;
        }
      }
      if (pendingGrowth <= 0) pendingGrowth = 0;
    }
  }
}

function resetTreeToInitial() {
  treeLeaves.forEach(leaf => {
    if (leaf.userData.isFlower) return;
    leaf.scale.set(0, 0, 0);
  });
  currentLeafCount = 0;
  const targetCount = Math.min(Math.floor(stats.totalSprouts * 5), treeLeaves.length);
  let count = 0;
  treeLeaves.forEach(leaf => {
    if (leaf.userData.isFlower) return;
    if (count < targetCount) {
      leaf.scale.set(1, 1, 1);
      count++;
      currentLeafCount++;
    }
  });
  const goalReached = stats.dailyFocusMs >= stats.dailyGoalMinutes * 60 * 1000;
  if (goalReached) {
    treeLeaves.forEach(leaf => {
      if (leaf.userData.isFlower) leaf.material.opacity = 1;
    });
  } else {
    treeLeaves.forEach(leaf => {
      if (leaf.userData.isFlower) leaf.material.opacity = 0;
    });
  }
  updateGardenUI();
}

// ---------- OTHER 3D ELEMENTS ----------
function createParticles() {
  const pCount = 500;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount * 3; i += 3) {
    pPos[i] = (Math.random() - 0.5) * 40;
    pPos[i+1] = (Math.random() - 0.5) * 30 + 5;
    pPos[i+2] = (Math.random() - 0.5) * 30;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0x00ffd5, size: 0.1, transparent: true, opacity: 0.6,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);
}

function createStars() {
  const sCount = 800;
  const sGeo = new THREE.BufferGeometry();
  const sPos = new Float32Array(sCount * 3);
  for (let i = 0; i < sCount * 3; i += 3) {
    sPos[i] = (Math.random() - 0.5) * 100;
    sPos[i+1] = (Math.random() - 0.5) * 80;
    sPos[i+2] = -30 - Math.random() * 50;
  }
  sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  const sMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2, transparent: true, opacity: 0, depthWrite: false });
  starField = new THREE.Points(sGeo, sMat);
  scene.add(starField);
}

function createPortal() {
  const portalGeo = new THREE.TorusGeometry(3.8, 0.06, 32, 100);
  const portalMat = new THREE.MeshStandardMaterial({ color: 0x00ffd5, emissive: 0x00b4a0, transparent: true, opacity: 0.4 });
  portalRing = new THREE.Mesh(portalGeo, portalMat);
  portalRing.rotation.x = Math.PI / 2;
  portalRing.position.y = 1;
  scene.add(portalRing);

  const portalInnerGeo = new THREE.TorusGeometry(3.3, 0.03, 16, 100);
  const portalInnerMat = new THREE.MeshBasicMaterial({ color: 0x00ffd5, transparent: true, opacity: 0.25 });
  portalInner = new THREE.Mesh(portalInnerGeo, portalInnerMat);
  portalInner.rotation.x = Math.PI / 2;
  portalInner.position.y = 1;
  scene.add(portalInner);
}

function createShockwave() {
  const swGeo = new THREE.TorusGeometry(1, 0.2, 16, 60);
  const swMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, emissive: 0x00ffd5, transparent: true, opacity: 0,
    metalness: 1, roughness: 0.1
  });
  shockwave = new THREE.Mesh(swGeo, swMat);
  shockwave.position.set(0, 1, 0);
  shockwave.visible = false;
  scene.add(shockwave);
}

function createBurstParticles() {
  const bCount = 200;
  const bGeo = new THREE.BufferGeometry();
  const bPos = new Float32Array(bCount * 3);
  bGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
  const bMat = new THREE.PointsMaterial({
    color: 0x00ffd5, size: 0.15, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  burstParticles = new THREE.Points(bGeo, bMat);
  burstParticles.position.set(0, 1, 0);
  burstParticles.visible = false;
  burstParticles.userData.velocities = [];
  scene.add(burstParticles);
}

// ---------- THEME ----------
function updateThreeSceneTheme(isNight) {
  if (!scene) return;
  if (isNight) {
    scene.fog = new THREE.FogExp2(0x020c1b, 0.02);
    dayNightLights.ambient.intensity = 0.2;
    dayNightLights.ambient.color.setHex(0x224466);
    dayNightLights.point.intensity = 2.0;
    dayNightLights.point.color.setHex(0x00ffd5);
    dayNightLights.sun.intensity = 0;
    dayNightLights.treeLight.intensity = 1.5;
    dayNightLights.treeLight.color.setHex(0x00ffaa);
    
    if (crystalMesh) {
      crystalMesh.material.color.setHex(0x00ffd5);
      crystalMesh.material.emissive.setHex(0x005544);
      crystalMesh.material.emissiveIntensity = 1.2;
      crystalMesh.material.opacity = 0.85;
    }
    if (crystalWire) crystalWire.material.color.setHex(0x00ffd5);
    if (crystalInnerLight) { crystalInnerLight.color.setHex(0x00ffd5); crystalInnerLight.intensity = 2.5; }
    
    rings.forEach(r => {
      r.material.color.setHex(0x00ffd5);
      r.material.emissive.setHex(0x00ffaa);
      r.material.emissiveIntensity = 1.5;
    });
    
    particles.material.color.setHex(0x00ffd5);
    particles.material.opacity = 0.8;
    
    if (starField) starField.material.opacity = 1.0;
    
    treeBranches.forEach(b => { b.material = trunkMaterialNight; });
    if (treeTrunk) treeTrunk.material = trunkMaterialNight;
    treeGroup.children.forEach(child => {
      if (child.geometry && child.geometry.type === 'CylinderGeometry' && child !== treeTrunk) {
        child.material = trunkMaterialNight;
      }
    });
    treeLeaves.forEach(leaf => {
      if (!leaf.userData.isFlower) leaf.material = leafMaterialNight.clone();
    });
    
    if (portalRing) portalRing.material.color.setHex(0x00ffd5);
    if (portalInner) portalInner.material.color.setHex(0x00ffd5);
  } else {
    scene.fog = new THREE.FogExp2(0x7ed4c9, 0.012);
    dayNightLights.ambient.intensity = 0.8;
    dayNightLights.ambient.color.setHex(0xffffff);
    dayNightLights.point.intensity = 0.8;
    dayNightLights.point.color.setHex(0x00c4b4);
    dayNightLights.sun.intensity = 1.5;
    dayNightLights.treeLight.intensity = 0.6;
    dayNightLights.treeLight.color.setHex(0x00ff88);
    
    if (crystalMesh) {
      crystalMesh.material.color.setHex(0x00c4b4);
      crystalMesh.material.emissive.setHex(0x004d4d);
      crystalMesh.material.emissiveIntensity = 0.5;
      crystalMesh.material.opacity = 0.7;
    }
    if (crystalWire) crystalWire.material.color.setHex(0x00e6cc);
    if (crystalInnerLight) { crystalInnerLight.color.setHex(0x00e6cc); crystalInnerLight.intensity = 1.0; }
    
    rings.forEach(r => {
      r.material.color.setHex(0x00b4a0);
      r.material.emissive.setHex(0x008080);
      r.material.emissiveIntensity = 0.8;
    });
    
    particles.material.color.setHex(0x00ddc0);
    particles.material.opacity = 0.5;
    
    if (starField) starField.material.opacity = 0;
    
    treeBranches.forEach(b => { b.material = trunkMaterialDay; });
    if (treeTrunk) treeTrunk.material = trunkMaterialDay;
    treeGroup.children.forEach(child => {
      if (child.geometry && child.geometry.type === 'CylinderGeometry' && child !== treeTrunk) {
        child.material = trunkMaterialDay;
      }
    });
    treeLeaves.forEach(leaf => {
      if (!leaf.userData.isFlower) leaf.material = leafMaterialDay.clone();
    });
    
    if (portalRing) portalRing.material.color.setHex(0x00b4a0);
    if (portalInner) portalInner.material.color.setHex(0x00b4a0);
  }
}

// ---------- ANIMATION LOOP ----------
let lastTime = 0;
function animateThree() {
  requestAnimationFrame(animateThree);
  if (!scene) return;
  
  const now = performance.now();
  const dt = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;
  const t = now * 0.001;

  const intensity = state.threeIntensity || 0.3;
  const speedMult = state.threeSpeedMult || 1;
  const flash = state.threeFlash || 0;

  if (crystalGroup) {
    crystalGroup.rotation.y += 0.005 * speedMult;
    crystalGroup.position.y = 1 + Math.sin(t * 1.2) * 0.15;
    const pulse = 1 + Math.sin(t * 2) * 0.03 + flash * 0.1;
    if (crystalMesh) {
      crystalMesh.scale.setScalar(pulse);
      crystalMesh.material.emissiveIntensity = 0.5 + intensity * 0.8 + flash * 2.0;
    }
    if (crystalWire) {
      crystalWire.scale.setScalar(pulse * 1.02);
      crystalWire.material.opacity = 0.5 + intensity * 0.3 + flash * 0.5;
    }
    if (crystalInnerLight) {
      crystalInnerLight.intensity = 0.8 + intensity * 1.5 + flash * 3.0;
    }
  }

  rings.forEach((ring, i) => {
    ring.rotation.x = ring.userData.baseRotation.x + t * (0.3 + i * 0.15) * speedMult;
    ring.rotation.y = ring.userData.baseRotation.y + t * (0.2 + i * 0.1) * speedMult;
    ring.material.emissiveIntensity = 0.8 + intensity * 0.8 + flash * 1.5;
    ring.material.opacity = 0.4 + intensity * 0.3 + flash * 0.3;
  });

  if (state.portalCurrentScale !== undefined) {
    state.portalCurrentScale += (state.portalTargetScale - state.portalCurrentScale) * 0.05;
  }
  if (portalRing) {
    portalRing.scale.setScalar(state.portalCurrentScale || 1);
    portalRing.rotation.z += 0.003 * speedMult;
    portalRing.material.opacity = 0.25 + intensity * 0.2 + flash * 0.4;
  }
  if (portalInner) {
    portalInner.scale.setScalar((state.portalCurrentScale || 1) * 0.85);
    portalInner.rotation.z -= 0.005 * speedMult;
    portalInner.material.opacity = 0.15 + intensity * 0.15;
  }

  if (treeGroup) {
    treeGroup.rotation.z = Math.sin(t * 0.5) * 0.02;
    treeGroup.rotation.x = Math.cos(t * 0.4) * 0.01;
    
    treeLeaves.forEach((leaf, idx) => {
      if (leaf.userData.isFlower) {
        leaf.rotation.y += 0.02;
        if (stats.dailyFocusMs >= stats.dailyGoalMinutes * 60 * 1000) {
          leaf.material.opacity = Math.min(1, leaf.material.opacity + 0.05);
        }
        return;
      }
      if (leaf.scale.x > 0.9) {
        const s = 1 + Math.sin(t * 2 + idx) * 0.08;
        leaf.scale.setScalar(s);
        if (leaf.material.emissiveIntensity !== undefined) {
          leaf.material.emissiveIntensity = 0.3 + Math.sin(t * 1.5 + idx * 0.5) * 0.15 + intensity * 0.2;
        }
      }
    });
    
    animateTreeGrowth(dt);
  }

  if (shockwave && shockwave.visible) {
    shockwave.scale.x += 0.2;
    shockwave.scale.y += 0.2;
    shockwave.scale.z += 0.2;
    shockwave.material.opacity -= 0.025;
    shockwave.rotation.z += 0.15;
    if (shockwave.material.opacity <= 0) { shockwave.visible = false; }
  }

  if (burstParticles && burstParticles.visible) {
    const pos = burstParticles.geometry.attributes.position.array;
    const vels = burstParticles.userData.velocities;
    for (let i = 0; i < vels.length; i++) {
      pos[i*3] += vels[i].x;
      pos[i*3+1] += vels[i].y;
      pos[i*3+2] += vels[i].z;
      vels[i].x *= 0.97;
      vels[i].y *= 0.97;
      vels[i].z *= 0.97;
    }
    burstParticles.geometry.attributes.position.needsUpdate = true;
    burstParticles.material.opacity -= 0.015;
    if (burstParticles.material.opacity <= 0) { burstParticles.visible = false; }
  }

  if (particles) {
    particles.rotation.y += 0.0002 * speedMult;
    particles.material.opacity = 0.4 + intensity * 0.3;
    particles.material.size = 0.08 + intensity * 0.05;
  }
  if (starField) starField.rotation.y += 0.0001 * speedMult;

  if (dayNightLights.point) {
    dayNightLights.point.intensity = (document.body.classList.contains('night') ? 2.0 : 0.8) + intensity * 0.5 + flash * 3;
  }

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
});

// ---------- BOOT ----------
function boot() {
  initThree();
  lastTime = performance.now();
  animateThree();
  
  refreshStatsUI(); checkDailyReset(); applyLanguage();
  updateGardenUI(); renderCapsules();
  setMode('pomodoro');
  state.threeIntensity = 0.3; state.threeSpeedMult = 1; state.threeFlash = 0;
  state.portalCurrentScale = 1; state.portalTargetScale = 1;
  state.tickInterval = setInterval(tick, 50);
  startBtn.disabled = false; pauseBtn.disabled = true; resumeBtn.disabled = true;
  themeToggle.textContent = document.body.classList.contains('night') ? '☀️' : '🌙';
  document.addEventListener('contextmenu', e => e.preventDefault());
  setInterval(() => { if (state.eventTarget) renderCapsules(); }, 1000);
  setInterval(updateLiveClock, 1000);
  updateLiveClock();
}
boot();