/*==== LOADER ====*/
/*Quand la page a fini de charger, on ajoute a loader la classe fondu-out*/
const loader = document.querySelector('.loader-container');

window.addEventListener('load', () => {
    loader.classList.add('fondu-out');
})

/*==== MENU SHOW AND HIDDEN ====*/
/* nav-menu = id de la classe nav__menu */
/* nav-toggle = id de l'icone d'app (pour ouvrir le menu) */
/* nav-close = id de l'icone de croix (pour fermer le menu) */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*==== MENU SHOW ====*/
/* Si on clique sur l'icone d'app alors on ajoute a nav-menu la classe show-menu (qui est styliser dans le css) */
/* Valide si la constante existe */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*==== MENU HIDDEN ====*/
/* Si on clique sur l'icone de croix alors on retire a nav-menu la classe show-menu */
/* Valide si la constante existe */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==== REMOVE MENU MOBILE ====*/
/* Quand on clique sur un des nav__link, cela enleve la classe show-menu a nav-menu */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==== Ouvrir/Fermer les Competences/Skills ====*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
});

/*==== HOME ====*/
/*Animation texte*/
var typed = new Typed(".input__home", {
    strings:["Etudiant en BTS SIO.", "en 2ème année." ,"Developpeur Web."],
    typeSpeed: 50,
    backSpeed: 70,
    loop: true
});
/*==== CONTACT ====*/
/*Animation message*/
var typed1 = new Typed(".contact__input-animation", {
    strings:["Besoin d'un renseignement ?", "Vous avez un projet à développer ?", "Contactez-moi !"],
    typeSpeed: 30,
    backSpeed: 40,
    attr: 'placeholder',
    bindInputFocusEvents : true,
    showCursor: false,
    loop: true
});

/*==== QUALIFICATIONS/PARCOURS ====*/
const tabs= document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==== DIPLOMES MODAL ====*/
const modalViews = document.querySelectorAll('.diplomes__modal'),
      modalBtns = document.querySelectorAll('.diplomes__button'),
      modalCloses = document.querySelectorAll('.diplomes__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==== SWIPER PROJET ====*/
let swiper = new Swiper('.projet__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*==== SCROLL SECTIONS ACTIVE LINK ====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==== CHANGE BACKGROUND HEADER ====*/
/*Mettre de l'ombrage derriere la nav bar quand en Y on est au dessus de 80*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==== SCROLL UP PROGRESS CIRCLE====*//*Bouton pour remonter rapidement la page*/
let calcScrollValue = () => {
    let scrollProgress = document.getElementById('progress');
    let progressValue = document.getElementById('progress-value');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(pos>250){
        scrollProgress.style.display = 'grid';
    } else{
        scrollProgress.style.display = 'none';
    }
    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(var(--first-color) ${scrollValue}%, var(--body-color) ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/*==== DARK LIGHT THEME ====*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})