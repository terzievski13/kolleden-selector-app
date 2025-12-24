// Пожелание: изменете текста по-късно, ако желаете
const WISH_TEXT = `Скъпа мамо, пожелавам ти незабравима Коледа и още по-специална нова година!`;

// Списък с хижи, които може да посетите
const HUTS = [
  'Хижа Вихрен',
  'Хижа Рай',
  'Хижа Амбарица',
  'Хижа Мальовица',
  'Хижа Узана'
];

// Избрана хижа се пази тук
let selectedHut = null;

/**
 * Избира дадена хижа и актуализира визуалния списък.
 * @param {string} hut
 */
function selectHut(hut) {
  selectedHut = hut;
  // Подчертаване на избраната хижа
  document.querySelectorAll('#hutList li').forEach((li) => {
    li.classList.toggle('selected', li.textContent === hut);
  });
}
