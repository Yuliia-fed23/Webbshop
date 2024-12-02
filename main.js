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
  name: 'Blueberry donut',
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
  name: 'Rose donut',
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
  name: 'Strawberry donut',
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
  name: 'Vanilla donut',
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
  name: 'Sugar donut',
  price: 14,
  amount: 0,
  rating: 4, 
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
  name: 'Coconut donut',
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
  name: 'Chocolate donut',
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
  name: 'White chocolate donut',
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
  name: 'Apple donut',
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
  name: 'Powdered sugar donut',
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




//---------------------------Print Products in Html
function displayProducts (products){
  const productsList =document.querySelector('#products-list');
  productsList.innerHTML = '';

  products.forEach(product => {
  const productArticle = document.createElement('article');
  productArticle.classList.add('product');
  productArticle.innerHTML =
   `<h3>${product.name}</h3>
   <img src='${product.img.url}' alt='${product.img.alt}'/>
  <p class='price'>${product.price} kr</p>
  <p>Rating: ${getRatingHtml(product.rating)}</p>
  <div>
  <button class='decrease' id='decrease-${product.id}'>-</button>
  <input type='number' min="0" value='${product.amount}' id='input-${product.id}'>
  <button class='increase' id='increase-${product.id}'>+</button>
  <button class='add-to-cart' data-id ='${product.id}' data-name ='${product.name}' data-price='${product.price}'>Add to card</button>
  </div>`;
  productsList.appendChild(productArticle);
  });
 
}
displayProducts(products);



//Button Sort by price
function sortByPriceInc(){
  const sortedProducts = [...products].sort((a, b) => a.price-b.price);
  displayProducts(sortedProducts);
}

function sortByPriceDec(){
  const sortedProducts = [...products].sort((a, b) => b.price-a.price);
  displayProducts(sortedProducts);
}


//Button Sort by name

function sortByNameInc(){
  const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
  displayProducts(sortedProducts);
}

function sortByNameDec(){
  const sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
  displayProducts(sortedProducts);
}

//Button Sort by rating

function sortByRatingInc(){
  const sortedProducts = [...products].sort((a, b) => a.rating-b.rating);
  displayProducts(sortedProducts);
}

function sortByRatingDec(){
  const sortedProducts = [...products].sort((a, b) => b.rating-a.rating);
  displayProducts(sortedProducts);
}


document.getElementById('sortByPriceInc').addEventListener('click', sortByPriceInc);
document.getElementById('sortByPriceDec').addEventListener('click', sortByPriceDec);
document.getElementById('sortByNameInc').addEventListener('click', sortByNameInc);
document.getElementById('sortByNameDec').addEventListener('click', sortByNameDec);
document.getElementById('sortByRatingInc').addEventListener('click', sortByRatingInc);
document.getElementById('sortByRatingDec').addEventListener('click', sortByRatingDec);


//Total amount

/*

const quantityInput = document.querySelector('input-${product.id}');
const priceElement = document.querySelector('price');
const totalAmount = document.querySelector('totalAmount');
const calculateButton = document.querySelector('calculateBtn');

function calculateTotal() {
  const quantity =parseInt(quantityInput.value);
  const price = parseFloat(priceElement.value);
  const total = quantity * price;
  totalAmount.textContent = total.toFixed(2);
}

calculateButton.addEventListener('click', calculateTotal);*/





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

}



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


//Decrease button


const decreaseButtons = document.querySelectorAll('button.decrease');
decreaseButtons.forEach(button =>{
  button.addEventListener('click', decreaseProductCount);
});

function decreaseProductCount(e) {
  const decreaseProductId = Number(e.target.id.replace('decrease-', ''));
  const decreaseFoundProductIndex = products.findIndex(product => product.id === decreaseProductId);
  console.log('found product', decreaseFoundProductIndex);


  products[decreaseFoundProductIndex].amount -= 1;
  if(products[decreaseFoundProductIndex].amount <= 0) {
   console.log('amount' + ' is 0');
   return;
  }
  
 
  document.querySelector(`#input-${decreaseProductId}`).value = products[decreaseFoundProductIndex].amount;

}


//Basket

let cart = [];
const cartItemsElement = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const checkoutButton = document.getElementById('checkout');

function updateCart() {
  cartItemsElement.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.onclick = () => removeFromCart(item.id);
    li.appendChild(removeButton);

    cartItemsElement.appendChild(li);
    total +=item.price;});
    totalElement.textContent = total;

  }


function addToCart (id, name, price){
  const product = {id, name, price};
  cart.push(product);
  updateCart();
}

function removeFromCart(id){
  cart = cart.filter(item=> item.id !== id);
  updateCart();
}


document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    addToCart(id, name, price)
  });
});

checkoutButton.addEventListener('click', () => {
  if (cart.length ===0){
    alert('Basket is empty');
  }else {
    alert('Order is added');
    cart = [];
    updateCart();
  }
});
  
function showCart(){
  const cartItemsContainer = document.querySelector('cart-items');
  cartItemsContainer.innerHTML = '';
  if (cart.length ===0){
    cartItemsContainer.innerHTML = '<p>Your basket  is empty</p>';
  } else {
    cart.forEach (product => {
      const productElement  = document.createElement('div');
      productElement.innerHTML = `<p>${product.name} - ${product.price}</p>`;
      cartItemsContainer.appendChild(productElement);
    });
  }
  document.querySelector('cart-window').style.display = 'flex';

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