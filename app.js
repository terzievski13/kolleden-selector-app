// Пожелание: изменете текста по-късно, ако желаете
const WISH_TEXT = `Скъпа мамо, пожелавам ти незабравима Коледа и още по-специална нова година!`;

// Списък с хижи, които може да посетите
// Списък с хижи, които може да посетите, заедно със снимка за визуализация
const HUTS = [
  {
    name: 'Безбог',
    img: 'bezbog.jpeg'
  },
  {
    name: 'Мальовица',
    img: 'malyovitsa.jpeg'
  },
  {
    name: 'Рилски езера',
    img: 'rilski-ezera.jpeg'
  },
  {
    name: 'Рай',
    img: 'rai.jpeg'
  },
  {
    name: 'Плевен',
    img: 'pleven.jpeg'
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
