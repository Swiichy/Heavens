//Modal Gestion
const outils = document.getElementById("outils");
const outilsModal = document.querySelector(".content-outils__modal");
const closeModal = document.querySelector(".close__modal");
const firstActive = document.querySelector(".first-active");
const modalFirst = document.querySelector(".outils__modal-main-first");
const secondActive = document.querySelector(".second-active");
const modalSecond = document.querySelector(".outils__modal-main-second");
const thirdActive = document.querySelector(".third-active");
const modalThird = document.querySelector(".outils__modal-main-third");

//Visibility modal
outils.addEventListener("click", () => {
    outilsModal.classList.toggle('outils-visible');
});

//Close modal 
closeModal.addEventListener("click", () => {
    outilsModal.classList.toggle('outils-visible');
});

firstActive.addEventListener("click", () => {
    modalSecond.classList.remove("modal-active");
    modalThird.classList.remove("modal-active");
    secondActive.style.color = "white";
    secondActive.style.textDecoration = "none";
    thirdActive.style.color = "white";
    modalFirst.classList.add('modal-active');
    if (modalFirst.classList.contains('modal-active')) {
        firstActive.style.color = "#8FA800";
        firstActive.style.textDecoration = "underline";
    }
});

secondActive.addEventListener("click", () => {
    modalFirst.classList.remove('modal-active');
    modalThird.classList.remove('modal-active');
    firstActive.style.color = 'white';
    firstActive.style.textDecoration = 'none';
    thirdActive.style.color = 'white';
    modalSecond.classList.add('modal-active');
    if (modalSecond.classList.contains('modal-active')) {
        secondActive.style.color = '#8FA800';
        secondActive.style.textDecoration = 'underline';
    }
});

thirdActive.addEventListener("click", () => {
    modalFirst.classList.remove('modal-active');
    modalSecond.classList.remove('modal-active');
    firstActive.style.color = 'white';
    firstActive.style.textDecoration = 'none';
    secondActive.style.color = 'white';
    secondActive.style.textDecoration = 'none';
    modalThird.classList.add('modal-active');
    if (modalThird.classList.contains('modal-active')) {
        thirdActive.style.color = '#8FA800';
    }
});










