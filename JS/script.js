//CAROOUSEL

(function(){
let carouselItems = document.querySelectorAll(".carousel-item");
let carouselControls = document.querySelectorAll(".carousel-control");
let activeIndex = 0;

function setActiveItem() {
    for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].classList.remove("active");
        if (i === activeIndex) {
            carouselItems[i].classList.add("active");
        }
    }
}

function setNextItem() {
    activeIndex++;
    if (activeIndex >= carouselItems.length) {
        activeIndex = 0;
    }
    setActiveItem();
}

function setPrevItem() {
    activeIndex--;
    if (activeIndex < 0) {
        activeIndex = carouselItems.length - 1;
    }
    setActiveItem();
}

for (let i = 0; i < carouselControls.length; i++) {
    carouselControls[i].addEventListener("click", function() {
        if (this.classList.contains("carousel-control-prev")) {
            setPrevItem();
        } else if (this.classList.contains("carousel-control-next")) {
            setNextItem();
        }
    });
} 
  
})();

(function(){
    $(document).ready(function() {
        // Configuración del intervalo de tiempo en milisegundos
        const interval = 5000;
    
        // Función para avanzar el carousel
        const carouselSlide = () => {
          const currentSlide = $('.active');
          const nextSlide = currentSlide.next();
    
          // Verificar si estamos en la última diapositiva
          if (nextSlide.length === 0) {
            $('.carousel-slide').first().addClass('active');
          } else {
            nextSlide.addClass('active');
          }
    
          currentSlide.removeClass('active');
        }
    
        // Ejecutar la función del carousel cada cierto intervalo de tiempo
        setInterval(carouselSlide, interval);
      });
   
    })();


