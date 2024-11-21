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
    menuArrowItem.addEventListener('click', function() {
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

