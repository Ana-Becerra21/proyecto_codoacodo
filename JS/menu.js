(function() {
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');
  
    const addClick = () => {
      listElements.forEach(element => {
        element.addEventListener('click', () => {
          let subMenu = element.querySelector('.menu__nesting');
          let height = 0;
          element.classList.toggle('menu__item--active');
  
          if (subMenu.clientHeight === 0) {
            height = subMenu.scrollHeight;
          }
  
          subMenu.style.height = `${height}px`;
        });
      });
    };
  
    const deleteStyleHeight = () => {
      listElements.forEach(element => {
        let subMenu = element.querySelector('.menu__nesting');
  
        if (subMenu.getAttribute('style')) {
          subMenu.removeAttribute('style');
          element.classList.remove('menu__item--active');
        }
      });
    };
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) {
        deleteStyleHeight();
        if (list.classList.contains('menu__links--show')) {
          list.classList.remove('menu__links--show');
        }
      } else {
        addClick();
      }
    });
  
    if (window.innerWidth <= 800) {
      addClick();
    }
  
    menu.addEventListener('click', () => {
      list.classList.toggle('menu__links--show');
    });
  })();
  


    


