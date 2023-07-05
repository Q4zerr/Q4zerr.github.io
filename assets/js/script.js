/*NAVBAR*/
var navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', function(){
    if(this.classList.contains('active')){
        this.classList.remove('active');
        this.classList.add('not-active');
    }
    else{
        this.classList.remove('not-active');
        this.classList.add('active');
    }
});

const navBar = document.querySelector('.nav');


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollThreshold = windowHeight * 0.1;
  
    if (scrollPosition > scrollThreshold) {
      navBar.classList.add('active');
    } else {
      navBar.classList.remove('active');
    }
});
/*NAVBAR*/
/*SERVICE*/
const slides = document.querySelectorAll('.swiper .slide');
const slideContainer = document.querySelector('.swiper');

slides.forEach((slide) => {
  slide.addEventListener('mouseover', () => {
    slides.forEach((s) => s.classList.remove('active'));
    slide.classList.add('active');
  });

  slide.addEventListener('mouseout', () => {
    slide.classList.remove('active');
    slides[1].classList.add('active');
  });
});

slideContainer.addEventListener('mouseleave', () => {
  slides[1].classList.add('active');
});
/*SERVICE*/
/*ACHIEVEMENT*/
const swiper = new Swiper('.swiper', {
    // Parameters
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        1550: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1850: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
});
/*ACHIEVEMENT*/
/*CONTACT FORM*/
const inputs = document.querySelectorAll('.input input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.trim() === '') {
        input.classList.remove('not-empty');
      } else {
        input.classList.add('not-empty');
      }
    });
});
/*CONTACT FORM*/