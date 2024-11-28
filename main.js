import './style.scss';
//import javascriptLogo from './javascript.svg';
//import viteLogo from '/vite.svg';
//import { setupCounter } from './counter.js';

function checkScreenSize() {
  let width = window.innerWidth;

  if (width < 768){
    document.body.classList.add('_mobile');
  } else if (width >= 768 && width < 1024){
    document.body.classList.add('_tablet'); 
  } else {
    document.body.classList.add('_desktop');
  }
}

checkScreenSize();

let menuArrow = document.querySelectorAll('.menu_arrow');
if (menuArrow.length > 0) {
  for (let i = 0; i < menuArrow.length; i++) {
    const menuArrowItem =menuArrow[i];
    menuArrowItem.addEventListener('click', function(e) {
      menuArrowItem.parentElement.classList.toggle('_active');
    });
  }
}



const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length > 0){
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}


//----------------------------------------------------------------
const products = [{
  id: 0,
  name: 'Product 1',
  price: 10,
  amount: 0,
  rating: 4, 
  category: 'sweet',
  img: {
    url: '/assets/blueberry donut.jpg',
    width: 200,
    height: 200,
    alt: ''
  },
},

{
  id: 1,
  name: 'Product 2',
  price: 12,
  amount: 0,
  rating: 3, 
  category: 'sweet',
  img: {
    url: '/assets/rose donut.jpg',
    width: 200,
    height: 200,
    alt: ''
  },
},

{
  id: 2,
  name: 'Product 3',
  price: 13,
  amount: 0,
  rating: 2, 
  category: 'sweet',
  img: {
    url: '/assets/strawberry donut.jpg',
    width: 200,
    height: 200,
    alt: ''
  },
},

{
  id: 3,
  name: 'Product 4',
  price: 14,
  amount: 0,
  rating: 1.5, 
  category: 'sweet',
  img: {
    url: '/assets/vanilla donut.jpg',
    width: 450,
    height: 450,
    alt: ''
  },
},

{
  id: 4,
  name: 'Product 5',
  price: 14,
  amount: 0,
  rating: 5, 
  category: 'sweet',
  img: {
    url: '/assets/sugar donut.jpg',
    width: 200,
    height: 200,
    alt: ''
  },
},

{
  id: 5,
  name: 'Product 6',
  price: 10,
  amount: 0,
  rating: 2.5, 
  category: 'sweet',
  img: {
    url: '/assets/coconut donut.jpg',
    width: 200,
    height: 200,
    alt: ''
  },
},

{
  id: 6,
  name: 'Product 7',
  price: 15,
  amount: 0,
  rating: 4.5, 
  category: 'sweet',
  img: {
    url: '/assets/chocolate donut.jpg',
    width: 200,
    height: 200,
    alt: ''
  },
},

{
  id: 7,
  name: 'Product 8',
  price: 12,
  amount: 0,
  rating: 5, 
  category: 'sweet',
  img: {
    url: '/assets/white chocolate donut.jpg',
    width: 200,
    height: 200,
    alt: ''
  },
},

{
  id: 8,
  name: 'Product 9',
  price: 10,
  amount: 0,
  rating: 4.5, 
  category: 'sweet',
  img: {
    url: '/assets/apple donut.jpg',
    width: 200,
    height: 200,
    alt: ''
  },
},

{
  id: 9,
  name: 'Product 10',
  price: 15,
  amount: 0,
  rating: 4, 
  category: 'sweet',
  img: {
    url: '/assets/powdered sugar donut.jpg',
    width: 200,
    height: 200,
    alt: ''
  },
},




];

function getRatingHtml(rating){
  const isHalf = String(rating).indexOf('.');
  let html ='';
  for (let i = 0; i< rating; i++){
    html +=`<span>⭐</span>`;
  }
  if (isHalf !== -1){
    html += `<span>✩</span>`;
  }
  return html;
}


const productsLisDiv =document.querySelector('#products-list');
console.log(productsLisDiv);

//---------------------------Print Products in Html

products.forEach(product => {
  productsLisDiv.innerHTML += 
  `<article class= "product">
  <h3>${product.name}</h3>
  <img src='${product.img.url}' alt='${product.img.alt}'/>
  <p>${product.price} kr</p>
  <p>Rating: ${getRatingHtml(product.rating)}</p>
  <div>
  <button class='decrease'>-</button>
  <input type='number' min="0" value='${product.amount}' id='input-${product.id}'>
  <button class='increase' id='increase-${product.id}'>+</button>
  </div>

  
  </article>`;
});

//Increase button
const increaseButtons = document.querySelectorAll('button.increase');
increaseButtons.forEach(button =>{
  button.addEventListener('click', increaseProductCount);
});

function increaseProductCount(e) {
  const productId = Number(e.target.id.replace('increase-', ''));
  const foundProductIndex = products.findIndex(product => product.id === productId);
  console.log('found product', foundProductIndex);


  products[foundProductIndex].amount += 1;

  document.querySelector(`#input-${productId}`).value = products[foundProductIndex].amount;

  //Alternativ 2

  /*products.forEach(product => {
    productsLisDiv.innerHTML += 
    `<article class= "product">
    <h3>${product.name}</h3>
    <img src='${product.img.url}' alt='${product.img.alt}'/>
    <p>${product.price} kr</p>
    <p>Rating: ${product.rating}</p>
    <div>
    <button class='decrease'>decrease</button>
    <input type='number' min='0' value='${product.amount}'>
    <button class='increase' id='increase-${product.id}'>increase</button>
    </div>
    </article>`;
  });*/
}

//Decrease button

const decreaseButtons = document.querySelectorAll('button.decrease');
decreaseButtons.forEach(button =>{
  button.addEventListener('click', decreaseProductCount);
});

function decreaseProductCount(e) {
  const decreaseProductId = Number(e.target.id.replace('decrease-', ''));
  const decreaseFoundProductIndex = products.findIndex(product => product.id === decreaseProductId);
  console.log('found product', decreaseFoundProductIndex);

  products[decreaseFoundProductIndex].amount = -1;

  document.querySelector(`#input-${decreaseProductId}`).value = products[decreaseFoundProductIndex].amount;

}
  












/*
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
*/