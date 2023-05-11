/*(function(){
const menuLinks = document.querySelector('.menu__links');
const hamburgerMenu = document.querySelector('.menu__hamburguer');
const menuItems = document.querySelectorAll('.menu__item');

hamburgerMenu.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuLinks.classList.remove('active');
  });
});


// Seleccionar elementos del DOM
const menuBtn = document.querySelector('.menu__img');


// Agregar evento de click al botón del menú hamburguesa
menuBtn.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});
    
   

    
        
})();


(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
           element.addEventListener('click', ()=>{
            
            let submenu =element.children[1];
            element.classList.toggle('menu__item--active');

           });
        }); 
    }
    
    addClick();
        
})();*/



