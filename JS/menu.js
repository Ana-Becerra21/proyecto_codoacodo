(function() {
    const menuToggle = document.querySelector('.menu__hamburguer');
    const menuLinks = document.querySelector('.menu__links');
    const menuItems = document.querySelectorAll('.menu__item--show');

    const toggleSubMenu = (element) => {
        const subMenu = element.querySelector('.menu__inside');
        const linkInside = element.querySelector('.menu__link--inside');

        subMenu.classList.toggle('menu__nesting--show');
        linkInside.classList.toggle('menu__link--active');
    };

    const toggleMenu = () => {
        menuToggle.classList.toggle('menu__hamburguer--active');
        menuLinks.classList.toggle('menu__links--show');
    };

    const closeMenu = () => {
        menuToggle.classList.remove('menu__hamburguer--active');
        menuLinks.classList.remove('menu__links--show');
        menuItems.forEach(item => {
            item.classList.remove('menu__item--active');
            const subMenu = item.querySelector('.menu__inside');
            const linkInside = item.querySelector('.menu__link--inside');
            subMenu.classList.remove('menu__nesting--show');
            linkInside.classList.remove('menu__link--active');
        });
    };

    menuToggle.addEventListener('click', () => {
        toggleMenu();
    });

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleSubMenu(item);
        });
    });

    document.addEventListener('click', () => {
        if (menuLinks.classList.contains('menu__links--show')) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            closeMenu();
        }
    });
})();

    


