// Пожелание към мама: това е съобщението, което ще се покаже на втората страница
// Можете да го променяте свободно, текстът е на български език.
const WISH_TEXT = `Мила мамо, благодаря ти! Благодаря за безкрайните усилия, които полагаш за нас! Благодаря ти, всяка вечер в която оставаш до късно, за да се грижиш за семейството ни! Благодаря ти, за всяка сутрин, в която ставаш рано, за да ни нагласиш за училище! Пожелавам ти светли празници с нас и още веднъж благодаря!
Много те обичам, мила мамо!`;

// Списък с хижи, които може да посетите
// Списък с хижи, които може да посетите, заедно със снимка за визуализация
const HUTS = [
  {
    name: 'Безбог',
    img: 'bezbog.jpeg',
    description: 'Безбог е хижа в Пирин, разположена до едноименния връх и езеро.'
  },
  {
    name: 'Мальовица',
    img: 'malyovitsa.jpeg',
    description: 'Мальовица е хижа под връх Мальовица в Рила, известна с алпийските си маршрути.'
  },
  {
    name: 'Рилски езера',
    img: 'rilski-ezera.jpeg',
    description: 'Рилски езера е хижа в Рила, близо до Седемте рилски езера.'
  },
  {
    name: 'Рай',
    img: 'rai.jpeg',
    description: 'Рай е хижа в Стара планина, разположена в подножието на връх Ботев.'
  },
  {
    name: 'Плевен',
    img: 'pleven.jpeg',
    description: 'Плевен е хижа в Стара планина, над град Тетевен.'
  }
];

// Избрана хижа се пази тук
let selectedHut = null;

/**
 * Избира дадена хижа и актуализира визуалния списък.
 * @param {string} hut
 */
function selectHut(hutName) {
  selectedHut = hutName;
  // Подчертаване на избраната хижа
  document.querySelectorAll('#hutList li').forEach((li) => {
    li.classList.toggle('selected', li.dataset.hutName === hutName);
  });
}

/**
 * Initialize a snowfall effect. Creates a container and populates it
 * with small snowflake elements that fall down the screen. The number
 * of flakes and their sizes, positions, durations and delays are
 * randomized for a natural look.
 */
function initSnow() {
    const existing = document.querySelector('.snowflakes');
    if (existing) return; // avoid duplicates
    const snowContainer = document.createElement('div');
    snowContainer.className = 'snowflakes';
    document.body.appendChild(snowContainer);
    const flakeCount = 50;
    for (let i = 0; i < flakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        const size = Math.random() * 4 + 2; // 2-6 pixels
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}%`;
        // Randomize the duration between 5 and 10 seconds
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        // Randomize the delay to stagger the flakes
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowContainer.appendChild(snowflake);
    }
}

/**
 * Play a simple Christmas tune using the Web Audio API. The melody array
 * contains frequencies (in Hz) and durations (in seconds) for a portion
 * of the "Jingle Bells" melody. A flag on the window ensures the song
 * plays only once per page load. Browsers require the audio context
 * to be started within a user gesture, so call this from a click handler.
 */
function playSong() {
    if (window.__songPlaying) {
        return;
    }
    window.__songPlaying = true;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    const melody = [
        { freq: 659, duration: 0.4 }, // E5
        { freq: 659, duration: 0.4 }, // E5
        { freq: 659, duration: 0.8 }, // E5
        { freq: 659, duration: 0.4 }, // E5
        { freq: 659, duration: 0.4 }, // E5
        { freq: 659, duration: 0.8 }, // E5
        { freq: 659, duration: 0.4 }, // E5
        { freq: 783, duration: 0.4 }, // G5
        { freq: 523, duration: 0.4 }, // C5
        { freq: 587, duration: 0.4 }, // D5
        { freq: 659, duration: 0.8 }, // E5
        { freq: 698, duration: 0.4 }, // F5
        { freq: 698, duration: 0.4 }, // F5
        { freq: 698, duration: 0.4 }, // F5
        { freq: 698, duration: 0.4 }, // F5
        { freq: 698, duration: 0.4 }, // F5
        { freq: 659, duration: 0.4 }, // E5
        { freq: 659, duration: 0.4 }, // E5
        { freq: 659, duration: 0.4 }, // E5
        { freq: 659, duration: 0.4 }, // E5
        { freq: 587, duration: 0.4 }, // D5
        { freq: 587, duration: 0.4 }, // D5
        { freq: 659, duration: 0.4 }, // E5
        { freq: 587, duration: 0.4 }, // D5
        { freq: 783, duration: 0.8 }  // G5
    ];
    let currentTime = audioCtx.currentTime;
    melody.forEach((note) => {
        const oscillator = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        oscillator.connect(gain);
        gain.connect(audioCtx.destination);
        oscillator.frequency.value = note.freq;
        oscillator.type = 'square';
        // Envelope for smoother sound
        gain.gain.setValueAtTime(0.0001, currentTime);
        gain.gain.linearRampToValueAtTime(0.5, currentTime + 0.05);
        gain.gain.linearRampToValueAtTime(0.0001, currentTime + note.duration);
        oscillator.start(currentTime);
        oscillator.stop(currentTime + note.duration + 0.05);
        currentTime += note.duration + 0.05;
    });
}

// Initialize snowflakes when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initSnow();
});
