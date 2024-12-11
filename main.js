

//-------------------Products-----------------------------------//
const products = [
  {
    id: 0,
    name: 'Blueberry donut',
    price: 10,
    amount: 0,
    rating: 4,
    category: 'berry',
    img: {
      url: 'assets/blueberry donut.jpg',
      width: 200,
      height: 200,
      alt: 'blueberry donut',
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
      url: 'assets/rose donut.jpg',
      width: 200,
      height: 200,
      alt: 'rose donut',
    },
  },

  {
    id: 2,
    name: 'Strawberry donut',
    price: 13,
    amount: 0,
    rating: 2,
    category: 'fruit',
    img: {
      url: 'assets/strawberry donut.jpg',
      width: 200,
      height: 200,
      alt: 'strawberry donut',
    },
  },

  {
    id: 3,
    name: 'Vanilla donut',
    price: 14,
    amount: 0,
    rating: 1.5,
    category: 'filling',
    img: {
      url: 'assets/vanilla donut.jpg',
      width: 450,
      height: 450,
      alt: 'vanilla donut',
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
      url: 'assets/sugar donut.jpg',
      width: 200,
      height: 200,
      alt: 'Sugar donut',
    },
  },

  {
    id: 5,
    name: 'Coconut donut',
    price: 10,
    amount: 0,
    rating: 2.5,
    category: 'filling',
    img: {
      url: 'assets/coconut donut.jpg',
      width: 200,
      height: 200,
      alt: 'Coconut donut',
    },
  },

  {
    id: 6,
    name: 'Chocolate donut',
    price: 15,
    amount: 0,
    rating: 4.5,
    category: 'fruit',
    img: {
      url: 'assets/chocolate donut.jpg',
      width: 200,
      height: 200,
      alt: 'Chocolate donut',
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
      url: 'assets/white chocolate donut.jpg',
      width: 200,
      height: 200,
      alt: 'white chocolate donut',
    },
  },

  {
    id: 8,
    name: 'Apple donut',
    price: 10,
    amount: 0,
    rating: 4.5,
    category: 'fruit',
    img: {
      url: 'assets/apple donut.jpg',
      width: 200,
      height: 200,
      alt: 'apple donut',
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
      url: 'assets/powdered sugar donut.jpg',
      width: 200,
      height: 200,
      alt: 'powdered sugar donut',
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
    productArticle.innerHTML = `<h4>${product.name}</h4>
   <img src='${product.img.url}' class="product-image" alt='${product.img.alt}'/>
  <p class='price'>${product.price} kr</p>
  <p>Rating: ${getRatingHtml(product.rating)}</p>
  <div>
  <button class='decrease' id='decrease-${product.id}'>-</button>
  <input type='number' min="0" value='${product.amount}' id='input-${product.id}'>
  <button class='increase' id='increase-${product.id}'>+</button>
  <button class='add-to-cart'  data-product-image='${product.img.url}', data-product-id='${product.id}', data-product-name ='${product.name}', data-product-value ='${product.amount}' data-product-price='${product.price}'>Add to cart</button>
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
  let productId = Number(e.target.id.replace('increase-', ''));
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

//---------------------------Cart with products---------------------------//

let cart = [];

// Function for adding a product to the cart
function addToCart(productId) {
  const product = products[productId];

  if (product) {
    cart.push(product);
    updateCartDisplay();
  }
}

// A function to calculate the price including discounts
function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.price;
  });

  const totalItems = cart.reduce((total, item) => total + item.amount * item.price, 0);

  document.getElementById('total-price').textContent = `Total sum: ${totalItems}`;

  // We check whether there is a discount on the total amount
  const discount = getDiscount();
  const discountPrice = totalPrice * (1 - discount / 100);
  document.querySelector('.discounted-price').textContent = `Discount: ${discountPrice}`;
  totalPrice = totalPrice - totalPrice * discount;

  return totalPrice;
}

// Function to receive a discount
function getDiscount() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();

  // Check the discount on Mondays until 10:00
  if (currentDay === 1 && currentHour < 10) {
    return 10;
  }
  // Check discount from Friday 15:00 to Monday 03:00
  else if ((currentDay === 5 && currentHour >= 15) || currentDay === 6 || (currentDay === 0 && currentHour < 3)) {
    return 15;
  } else {
    return 0;
  }
}

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsList = document.getElementById('cart-items');
 

  cartItemsList.innerHTML = '';

  // Add each product to the cart
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<img src='${item.img.url}' class="cart-item-image"/>  
        <span class="cart-item-name"> ${item.name} </span> - 
        <span class="cart-item-quantity"> ${item.amount} st.</span> - <span class="cart-item-price"> 
        ${item.price} </span> kr/st.`;

    cartItemsList.appendChild(listItem);
  });
  calculateTotalPrice();
}

// Adding event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const productId = parseInt(this.dataset.productId);
    addToCart(productId);
  });
});

// Event listener for the show cart button
document.getElementById('show-cart-btn').addEventListener('click', function () {
  const cartElement = document.getElementById('cart');

  if (cartElement.style.display === 'none') {
    cartElement.style.display = 'block';
  } else {
    cartElement.style.display = 'none';
  }
});

const closeBtn = document.querySelector('.close-cart');
const cartWindow = document.getElementById('cart');

closeBtn.addEventListener('click', function () {
  cartWindow.style.display = 'none';
});

//--------------------------Facture---------------------------//

const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment-option"]'));
const inputs = [
  document.querySelector('#creditCardNumber'),
  document.querySelector('#creditCardYear'),
  document.querySelector('#creditCardMonth'),
  document.querySelector('#creditCardCvc'),
  document.querySelector('#personalID'),
];

const invoiceOption = document.querySelector('#invoice');
const cardOption = document.querySelector('#card');
const orderBtn = document.querySelector('#orderBtn');

// Default options
let selectedPaymentOption = 'card';

// Regex
const personalIdRegEx = new RegExp(/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/);
const creditCardNumberRegEx = new RegExp(
  /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/
); // MasterCard

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
  const totalPrice = products.reduce((sum, product) => {
    return sum + product.amount * product.price;
  }, 0);

  if (totalPrice > 800) {
    document.querySelector('.payment-factura').disable = true;
  }

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

//Form validation
function validateForm() {
  let valid = true;
  clearErrors();

  const firstName = document.getElementById('first-name').value;
  if (firstName.trim() === '') {
    document.getElementById('first-name-error').textContent = 'Please write your name.';
    valid = false;
  }

  const lastName = document.getElementById('last-name').value;
  if (lastName.trim() === '') {
    document.getElementById('last-name-error').textContent = 'Please write your last name.';
    valid = false;
  }

  const address = document.getElementById('address').value;
  if (address.trim() === '') {
    document.getElementById('address-error').textContent = 'Please write your address.';
    valid = false;
  }

  const postcode = document.getElementById('postcode').value;
  const postcodeRegex = /^[0-9]{5,6}$/;
  if (!postcodeRegex.test(postcode)) {
    document.getElementById('postcode-error').textContent = 'Please write correct postcode.';
    valid = false;
  }

  const region = document.getElementById('region').value;
  if (region.trim() === '') {
    document.getElementById('region-error').textContent = 'Please write your region.';
    valid = false;
  }

  const phone = document.getElementById('phone').value;
  const phoneRegex = /^\+460\d{9}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById('phone-error').textContent = 'Please write your phone.';
    valid = false;
  }

  const email = document.getElementById('email').value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    document.getElementById('email-error').textContent = 'Please write correct email.';
    valid = false;
  }

  if (valid) {
    thankYouMessage();
    return valid;
  }
}
//Add an event to the submit button
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (validateForm(this) == true) {
    thankYouMessage();
  }
});

//Clear the form fields
deleteBtn.addEventListener('click', function () {
  clearForm();
});

clearErrors();

function clearForm() {
  purchaseForm.reset();
}

//We show error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error');
  errorMessages.forEach(error => {
    error.textContent = '';
  });
}

//Notification of successful form filling and delivery date
function thankYouMessage() {
  const sendMessage = document.querySelector('.send-message');
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + 2);
  const deliveryDate = currentDate.toLocaleString('en-En', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  currentDate.toLocaleString('sv-SV', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  sendMessage.innerHTML = `Thank you for your order! You will receive your order on ${deliveryDate}.`;
  sendMessage.style.display = 'block';
  clearForm();
}
