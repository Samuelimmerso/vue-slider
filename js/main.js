const app = Vue.createApp({

    data() {
        return {

            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],

            // * SETTO IL "CONTATORE" DELL'IMMAGINE ATTIVA
            activeImage: 0,

            autoplayInterval: false,


        }

    },

    // // * RECUPERO GLI ELEMENTI HTML
    // const slidesContainerEl = document.getElementById("slides-container");
    // const thumbsContainerEl = document.getElementById("thumbs-container");
    // const prevButton = document.getElementById("prev");
    // const nextButton = document.getElementById("next");
    // const stopAutoplayButton = document.getElementById("stop-autoplay");
    // const invertiAutoplayButton = document.getElementById("inverti-autoplay");

    methods: {
        nextSlide() {
            if (this.activeImage < 4) {
                this.activeImage++;
            } else {
                this.activeImage = 0;
            }

        },

        backSlide() {
            if (this.activeImage > 0) {
                this.activeImage--;
            } else {
                this.activeImage = 4;
            }

        },

        switchSlide(index) {
            this.activeImage = index;
        },

        autoplay() {
            this.autoplayInterval = setInterval(this.nextSlide, 2000);
            this.autoplayInterval = true;
        },

        stopautoplay() {
            clearInterval(this.autoplayInterval);
        }



    }
});


app.mount('#root');



// // * LEGO IL CLICK DELLE THUMBNAILS AL CAMBIO DELL'IMMAGINE VISUALIZZATA
// const thumbsEl = document.querySelectorAll(".thumb");
// thumbsEl.forEach((thumbEl, index) => {
//     thumbEl.addEventListener("click", function () {
//         const thisIndex = this.getAttribute("data-index");
//         switchToSlide(thisIndex);
//     })
// })

// // * CREO UNA FUNZIONE PER GESTIRE L'AVANZAMENTO DEL CAROSELLO
// const onNextClick = () => {
//     activeImage++;

//     if (activeImage >= slides.length) {
//         activeImage = 0;
//     }

//     // console.log(activeImage);

//     switchToSlide(activeImage);
// }

// // * CREO UNA FUNZIONE PER GESTIRE L'ARRETRAMENTO DEL CAROSELLO
// const onPrevClick = () => {
//     activeImage--;

//     if (activeImage < 0) {
//         activeImage = slides.length - 1;
//     }

//     // console.log(activeImage);

//     switchToSlide(activeImage);
// }

// // * CREO UNA FUNZIONE PER CAMBIARE L'IMMAGINE VISUALIZZATA
// const switchToSlide = (activeIndex) => {
//     const activeSlide = document.querySelector(".slide.active");
//     const allSlides = document.querySelectorAll(".slide");

//     activeSlide.classList.remove("active");
//     allSlides[activeIndex].classList.add("active");
// }

// // * LEGO IL CLICK DEI CONTROLLI ALLE FUNZIONI DI AVANZAMENTO E ARRETRAMENTO
// nextButton.addEventListener("click", onNextClick)
// prevButton.addEventListener("click", onPrevClick)

// // * AUTOPLAY
// let autoplayForward = true;

// const autoplay = setInterval(() => {
//     if (autoplayForward) {
//         onNextClick();
//     } else {
//         onPrevClick();
//     }

// }, 3000);

// // * STOP AUTOPLAY
// stopAutoplayButton.addEventListener("click", () => {
//     clearInterval(autoplay);
// });

// // * INVERTI AUTOPLAY

// invertiAutoplayButton.addEventListener("click", () => {
//     autoplayForward = !autoplayForward;
// });