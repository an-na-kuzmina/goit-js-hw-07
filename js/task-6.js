/*

Завдання 6

Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

Є input, у який користувач вводить бажану кількість елементів. 
Після натискання на кнопку Create має рендеритися (додаватися в DOM) 
колекція з відповідною кількістю елементів і очищатися значення в інпуті. 
При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. 
Після натискання на кнопку Destroy колекція елементів має очищатися.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Після натискання користувачем на кнопку Create треба провалідувати значення в input, 
воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, 
мають додаватися нові <div> елементи в DOM.

Для рендеру елементів на сторінці створи функцію createBoxes(amount), 
яка приймає один параметр — число, що зберігає кількість елементів для рендеру.


Функція має створювати стільки <div> елементів, скільки вказано в 
параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

Розміри першого <div> елемента мають бути 30px на 30px.
Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
Усі елементи повинні мати випадковий колір фону. 
Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), 
яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  number: document.querySelector('input[type=number]'),
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

refs.createButton.addEventListener('click', handleBoxesCreate);
refs.destroyButton.addEventListener('click', handleBoxesDestroy);

function handleBoxesCreate(event) {
  let number = parseInt(refs.number.value);
  const minValue = parseInt(refs.number.attributes.min.value);
  const maxValue = parseInt(refs.number.attributes.max.value);

  if (number >= minValue && number <= maxValue) {
    createBoxes(number);
  }
  refs.number.value = null;
}

function handleBoxesDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  const boxes = [];
  let initialWidth = 30;
  let initialHeight = 30;
  for (let index = 0; index < amount; index += 1) {
    const boxRandomColor = getRandomHexColor();
    let box = `<div class="js-box" style="background-color:${boxRandomColor};width: ${initialWidth}px; height: ${initialHeight}px"></div>`;
    boxes.push(box);
    initialWidth += 10;
    initialHeight += 10;
  }
  refs.boxesContainer.innerHTML = boxes.join('');
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}
