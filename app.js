// Пожелание към мама: това е съобщението, което ще се покаже на втората страница
// Можете да го променяте свободно, текстът е на български език.
const WISH_TEXT = `Мила мамо, благодаря ти! Благодаря за безкрайните усилия, които полагаш за нас! Благодаря ти, всяка вечер в която оставаш до късно, за да се грижиш за семейството ни! Благодаря ти, за всяка сутрин, в която ставаш рано, за да ни нагласиш за училище! Пожелавам ти светли празници с нас и още веднъж благодаря!
Много те обичам, мила мамо!`;

// Списък с хижи, които може да посетите
// Списък с хижи, които може да посетите, заедно със снимка за визуализация
// Списък с хижи, които може да посетите, включващ снимка и описание на български език.
const HUTS = [
  {
    name: 'Безбог',
    img: 'bezbog.jpeg',
    description:
      'Безбог е хижа в Пирин, разположена на около 2240 m надморска височина край бреговете на едноименното езеро. От нея се разкрива прекрасна гледка към върховете Полежан и Безбог, а достъпът е лесен благодарение на лифта от хижа Гоце Делчев.'
  },
  {
    name: 'Мальовица',
    img: 'malyovitsa.jpeg',
    description:
      'Хижа Мальовица е разположена в долината на река Мальовица в Рила планина, на около 1960 m надморска височина. Тя е популярна отправна точка за изкачване на връх Мальовица и предлага уютен подслон сред красиви алпийски околности.'
  },
  {
    name: 'Рилски езера',
    img: 'rilski-ezera.jpeg',
    description:
      'Хижа Рилски езера се намира на 2175 m в Рила, в близост до Седемте рилски езера. До нея се стига с лифт от хижа Пионерска, а оттук започват маршрути към знаменитите езера и връх Рилец.'
  },
  {
    name: 'Рай',
    img: 'rai.jpeg',
    description:
      'Хижа Рай се намира в сърцето на Стара планина, под връх Ботев и до водопада Райското пръскало. От хижата се разкриват впечатляващи панорами и тя е изходен пункт за много туристически маршрути.'
  },
  {
    name: 'Плевен',
    img: 'pleven.jpeg',
    description:
      'Хижа Плевен е уютен планински дом в Стара планина над град Априлци. Тя предлага чудесна гледка към връх Ботев и околните върхове и е отправна точка за редица маршрути в Централния Балкан.'
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
