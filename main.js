import './style.scss';
//import javascriptLogo from './javascript.svg';
//import viteLogo from '/vite.svg';
//import { setupCounter } from './counter.js';

function checkScreenSize() {
  let width = window.innerWidth;

  if (width < 768) {
    document.body.classList.add('_mobile');
  } else if (width >= 768 && width < 1024) {
    document.body.classList.add('_tablet');
  } else {
    document.body.classList.add('_desktop');
  }
}

checkScreenSize();

let menuArrow = document.querySelectorAll('.menu_arrow');
if (menuArrow.length > 0) {
  for (let i = 0; i < menuArrow.length; i++) {
    const menuArrowItem = menuArrow[i];
    menuArrowItem.addEventListener('click', function (e) {
      menuArrowItem.parentElement.classList.toggle('_active');
    });
  }
}

const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}

//----------------------------------------------------------------
const products = [
  {
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
      alt: '',
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
      alt: '',
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
      alt: '',
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
      alt: '',
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
      alt: '',
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
      alt: '',
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
      alt: '',
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
      alt: '',
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
      alt: '',
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
      alt: '',
    },
  },
];

function getRatingHtml(rating) {
  const isHalf = String(rating).indexOf('.');
  let html = '';
  for (let i = 0; i < rating; i++) {
    html += `<span>⭐</span>`;
  }
  if (isHalf !== -1) {
    html += `<span>✩</span>`;
  }
  return html;
}

//---------------------------Print Products in Html---------------------------//
function displayProducts(products) {
  const productsList = document.querySelector('#products-list');
  productsList.innerHTML = '';

  products.forEach(product => {
    const productArticle = document.createElement('article');
    productArticle.classList.add('product');
    productArticle.innerHTML = `<h3>${product.name}</h3>
   <img src='${product.img.url}' alt='${product.img.alt}'/>
  <p class='price'>${product.price} kr</p>
  <p>Rating: ${getRatingHtml(product.rating)}</p>
  <div>
  <button class='decrease' id='decrease-${product.id}'>-</button>
  <input type='number' min="0" value='${product.amount}' id='input-${product.id}'>
  <button class='increase' id='increase-${product.id}'>+</button>
  <button class='add-to-card', ${product.name}, ${product.price})' data-id ='${product.id}' data-name ='${product.name}' data-price='${product.price}'>Add to card</button>
  </div>`;
    productsList.appendChild(productArticle);
  });
}
displayProducts(products);

//---------------------------Button sort by price---------------------------//
function sortByPriceInc() {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  displayProducts(sortedProducts);
}

function sortByPriceDec() {
  const sortedProducts = [...products].sort((a, b) => b.price - a.price);
  displayProducts(sortedProducts);
}

//---------------------------Button sort by name---------------------------//

function sortByNameInc() {
  const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
  displayProducts(sortedProducts);
}

function sortByNameDec() {
  const sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
  displayProducts(sortedProducts);
}

//---------------------------Button sort by rating---------------------------//

function sortByRatingInc() {
  const sortedProducts = [...products].sort((a, b) => a.rating - b.rating);
  displayProducts(sortedProducts);
}

function sortByRatingDec() {
  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
  displayProducts(sortedProducts);
}

document.getElementById('sortByPriceInc').addEventListener('click', sortByPriceInc);
document.getElementById('sortByPriceDec').addEventListener('click', sortByPriceDec);
document.getElementById('sortByNameInc').addEventListener('click', sortByNameInc);
document.getElementById('sortByNameDec').addEventListener('click', sortByNameDec);
document.getElementById('sortByRatingInc').addEventListener('click', sortByRatingInc);
document.getElementById('sortByRatingDec').addEventListener('click', sortByRatingDec);





//---------------------------Increase button---------------------------//
const increaseButtons = document.querySelectorAll('button.increase');
increaseButtons.forEach(button => {
  button.addEventListener('click', increaseProductCount);
});

function increaseProductCount(e) {
  const productId = Number(e.target.id.replace('increase-', ''));
  const foundProductIndex = products.findIndex(product => product.id === productId);
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

//---------------------------Decrease button---------------------------//

const decreaseButtons = document.querySelectorAll('button.decrease');
decreaseButtons.forEach(button => {
  button.addEventListener('click', decreaseProductCount);
});

function decreaseProductCount(e) {
  const decreaseProductId = Number(e.target.id.replace('decrease-', ''));
  const decreaseFoundProductIndex = products.findIndex(product => product.id === decreaseProductId);
  console.log('found product', decreaseFoundProductIndex);

  products[decreaseFoundProductIndex].amount -= 1;
  if (products[decreaseFoundProductIndex].amount <= 0) {
    console.log('amount' + ' is 0');
    return;
  }

  document.querySelector(`#input-${decreaseProductId}`).value = products[decreaseFoundProductIndex].amount;
}

//---------------------------Card with products---------------------------//

document.addEventListener('DOMContentLoaded', function () {
  const openCartButton = document.querySelector('.card-button');
  openCartButton.addEventListener('click', openCart);

  const closeCartButton = document.querySelector('.close-card');
  closeCartButton.addEventListener('click', closeCart);

  let card = [];

  function addToCard(id, name, price) {
    const existingItem = card.find(item => item.id === id);
    if (existingItem) {
      existingItem.amount++;
    } else {
      card.push({id, name, price, amount: 1 });
    }
    updateCart();
  }

  function updateCart() {
    const cartItemContainer = document.getElementById('card-items');
    cartItemContainer.innerHTML = '';

    if(card.length <= 0) {
      cartItemContainer.innerHTML = '<p>Your card is empty</p>';
    }

    products.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'card-item';
      itemDiv.innerHTML = `<p>${item.name} x ${item.amount}</p>
    <p>${item.price * item.amount} kr</p>`;
      cartItemContainer.appendChild(itemDiv);
    });
    const totalDiv = document.getElementById('total');
    totalDiv.innerHTML = `Total sum: ${getTotal()} kr`;

    addToCard();
  }

  function getTotal() {
    return products.reduce((total, item) => total + item.price * item.amount, 0);
  }

  function openCart() {
    document.getElementById('card-window').style.display = 'block';
    updateCart();
  }

  function closeCart() {
    document.getElementById('card-window').style.display = 'none';
  }
});



//--------------------------Facture---------------------------//

const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment-option"]'));
const inputs = [
  document.querySelector('#creditCardNumber'),
  document.querySelector('#creditCardYear'),
  document.querySelector('#creditCardMonth'),
  document.querySelector('#creditCardCvc'),
  document.querySelector('#personalID')
];

const invoiceOption = document.querySelector('#invoice');
const cardOption = document.querySelector('#card');
const orderBtn = document.querySelector('#orderBtn');

// Default options
let selectedPaymentOption = 'card';

// Regex
const personalIdRegEx = new RegExp(/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/);
const creditCardNumberRegEx = new RegExp(/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/); // MasterCard

// Add event listeners
inputs.forEach(input => {
  input.addEventListener('focusout', activateOrderButton);
  input.addEventListener('change', activateOrderButton);
});

cardInvoiceRadios.forEach(radioBtn => {
  radioBtn.addEventListener('change', switchPaymentMethod);
});

/**
 * Switches between invoice payment method and
 * card payment method. Toggles their visibility.
 */




function switchPaymentMethod(e) {
  invoiceOption.classList.toggle('hidden');
  cardOption.classList.toggle('hidden');

  selectedPaymentOption = e.target.value;
}

function isPersonalIdNumberValid() {
  return personalIdRegEx.exec('input[name="personal-id"]'.value);
}

/**
 * Activate order button if all fields are
 * correctly filled.
 */


function activateOrderButton() {
  orderBtn.setAttribute('disabled', '');

  if (selectedPaymentOption === 'invoice' && !isPersonalIdNumberValid()) {
    return;
  }
  
  if (selectedPaymentOption === 'card') {
    // Check card number
    if (creditCardNumberRegEx.exec(creditCardNumber.value) === null) {
      console.warn('Credit card number not valid.');
      return;
    }

    // Check card year
    let year = Number(creditCardYear.value);
    const today = new Date();
    const shortYear = Number(String(today.getFullYear()).substring(2));

    if (year > shortYear + 2 || year < shortYear) {
      console.warn('Credit card month not valid.');
      return;
    }

    // Fixa månad, obs. "padStart" med 0
    
    // Check card CVC
    if (creditCardCvc.value.length !== 3) {
      console.warn('CVC not valid.');
      return;
    }
  }

  orderBtn.removeAttribute('disabled');
}

const openCardPayment = document.querySelector('.btn-pay');
openCardPayment.addEventListener('click', btnOpenCartPayment);

const closeCardPayment = document.querySelector('.btn-close-payment');
closeCardPayment.addEventListener('click', btnCloseCardPayment);



function btnOpenCartPayment() {
  document.querySelector('.card-pay').style.display = 'block';
}

function btnCloseCardPayment() {
  document.querySelector('.card-pay').style.display = 'none';
} 




//---------------------------Customer information form ---------------------------//

const submitBtn = document.querySelector('.btn-submit');
const deleteBtn = document.querySelector('.btn-delete');
const purchaseForm = document.getElementById('purchase-form');

function validateForm(){
  let valid = true;
  clearErrors();

  const firstName = document.getElementById('first-name').value;
  if (firstName.trim() === '') {
    document.getElementById('first-name-error').textContent ='Please write your name.';
    valid = false;
  }

  const lastName = document.getElementById('last-name').value;
  if (lastName.trim() === '') {
    document.getElementById('last-name-error').textContent ='Please write your last name.';
    valid = false;
  }

  const address = document.getElementById('address').value;
  if (address.trim() === '') {
    document.getElementById('address-error').textContent ='Please write your address.';
    valid = false;
  }

  const postcode = document.getElementById('postcode').value;
  const postcodeRegex = /^[0-9]{5,6}$/;
   if (!postcodeRegex.test(postcode)) {
    document.getElementById('postcode-error').textContent = 'Please write correct postcode.';
    valid = false;
   }

   const region = document.getElementById('region').value;
   if (region.trim() ==='') {
    document.getElementById('region-error').textContent ='Please write your region.';
    valid = false;
   }

   const phone = document.getElementById('phone').value;
   const phoneRegex = /^\+460\d{9}$/;
   if (!phoneRegex.test(phone)) {
    document.getElementById('phone-error').textContent ='Please write your phone.';
    valid = false;
   }

   const email = document.getElementById('email').value;
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if (!emailRegex.test(email)) {
    document.getElementById('email-error').textContent ='Please write correct email.';
    valid = false;
   }

   if (valid) {
    thankYouMessage(); 
   return valid;
  }

};

submitBtn.addEventListener('click', function(event){
  event.preventDefault();
  if (validateForm(this) == true){
    thankYouMessage();
  }
});

deleteBtn.addEventListener('click', function(){
  clearForm();
});

 clearErrors();


function clearForm() {
 purchaseForm.reset();
};

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error');
  errorMessages.forEach(error => {
    error.textContent= '';
  });
}

function thankYouMessage(){
  const sendMessage = document.querySelector('.send-message');
  const currentDate = new Date();
  
  currentDate.setDate(currentDate.getDate() + 2);
  const deliveryDate = currentDate.toLocaleString ('en-En', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  currentDate.toLocaleString ('sv-SV', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});

  sendMessage.innerHTML = `Thank you for your order! You will receive your order on ${deliveryDate}.`;
  sendMessage.style.display='block';
  clearForm();
}


