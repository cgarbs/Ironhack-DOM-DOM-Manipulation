// 1: Get the node with the  main title

const mainTitle = document.querySelector('h1')
console.log(mainTitle);

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

const mainTitleText = mainTitle.innerHTML;
console.log(mainTitleText);

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

const fruitItems = document.getElementsByClassName('fruit-item');
console.log(fruitItems);

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

const veggieItems = document.querySelectorAll('.veggie-item');
const list = [...veggieItems].map(elem => console.log(elem.innerHTML));
console.log(list);

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

const veggiesSubtitle = document.querySelector('.list-veggies h2');
console.log(veggiesSubtitle.innerHTML);

// alternative

// const subTitleVeggie = document.querySelctorAll('h2')[1].innerHTML;
// console.log(subTitleVeggie);

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

const fruitSubtitles = document.querySelector('h2');
fruitSubtitles.id = 'fruit-title';
console.log(fruitSubtitles.id)

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

const fruitLi = document.querySelectorAll('.fruits li');
fruitLi[0].className += ' best-fruit';
fruitLi[2].className += ' best-fruit';
console.log(fruitLi[0]);
console.log(fruitLi[2])

// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const veggieList = document.querySelector('.veggies');
veggieList.classList.remove('veggies');
console.log(veggieList);

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies
const veggieLove = document.querySelectorAll('.list-veggies ul li')
veggieLove.forEach(el => el.classList.add('veggie-love'));
console.log(veggieLove);
// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

veggieLove[3].classList.remove('veggie-item');
console.log(veggieLove[3]);
// => ... <li class="veggie-love">Spinach</li>