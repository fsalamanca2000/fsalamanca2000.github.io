const ipad = window.matchMedia('screen and (max-width: 767px)')
const menu = document.querySelector('.menu')
const burgerButton = document.querySelector('#burger-menu')
const linkP = document.querySelector('#linkPortfolio')
const linkE = document.querySelector('#linkEventos')
const linkC = document.querySelector('#linkContacto')


ipad.addListener(validation)

function validation(event_size){
  if(event.matches){
    burgerButton.addEventListener('click', hideShow)
    linkP.addEventListener('click', linkHide)
    linkE.addEventListener('click', linkHide)
    linkC.addEventListener('click', linkHide)
  } else{
    burgerButton.removeEventListener('click', hideShow)
    linkP.removeEventListener('click', linkHide)
    linkE.removeEventListener('click', linkHide)
    linkC.removeEventListener('click', linkHide)
  }
  console.log(event_size)
}

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