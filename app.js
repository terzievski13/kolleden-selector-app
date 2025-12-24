// Пожелание: изменете текста по-късно, ако желаете
const WISH_TEXT = `Скъпа мамо, пожелавам ти незабравима Коледа и още по-специална нова година!`;

// Списък с хижи, които може да посетите
// Списък с хижи, които може да посетите, заедно със снимка за визуализация
const HUTS = [
  {
    name: 'Хижа Плевен',
    img: 'hut1.png'
  },
  {
    name: 'Хижа Рай',
    img: 'hut2.png'
  },
  {
    name: 'Хижа Безбог',
    img: 'hut3.png'
  },
  {
    name: 'Хижа Мальовица',
    img: 'hut4.png'
  },
  {
    name: 'Хижа Рилски езера',
    img: 'hut5.png'
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
