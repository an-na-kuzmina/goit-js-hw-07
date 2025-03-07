/*
HTML містить список категорій ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>


З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст 
заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
*/

const categories = document.querySelectorAll('li.item');

const categoriesAmount = categories.length;

console.log(`Number of categories: ${categoriesAmount}`);

categories.forEach(category => {
  const title = category.querySelector('h2');
  const list = category.querySelector('ul');
  const items = list.querySelectorAll('li');

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${items.length}`);
});
