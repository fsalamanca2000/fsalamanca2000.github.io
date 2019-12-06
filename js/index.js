const menu = document.querySelector('.menu')
const burgerButton = document.querySelector('#burger-menu')
const linkP = document.querySelector('#linkPortfolio')
const linkE = document.querySelector('#linkEventos')
const linkC = document.querySelector('#linkContacto')


burgerButton.addEventListener('click', hideShow)
linkP.addEventListener('click', linkHide)
linkE.addEventListener('click', linkHide)
linkC.addEventListener('click', linkHide)

function hideShow(){
  if(menu.classList.contains('is-active')){
    menu.classList.remove('is-active')
  }
  else{
    menu.classList.add('is-active')
  }
}
function linkHide(){
  if(menu.classList.contains('is-active')){
    menu.classList.remove('is-active')
  }
}