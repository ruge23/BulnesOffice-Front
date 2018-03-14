import Slider from './slider';
import elements from './elements';
import Preloader from '../preloader/preloader';


let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");


let slider = new Slider({
    elements,
    animationFunc: (element) => {

        textContent.classList.add("hide");
        sliderImage.classList.add("hide");

        setTimeout(()=>{
            sliderTitle.innerHTML = element.title; 
            sliderSubTitle.innerHTML = element.subtitle;
            sliderText.innerHTML = element.text;
            sliderImage.src = element.image;

            textContent.classList.remove("hide");
            sliderImage.classList.remove("hide");
        }, 600)
    },
    speed: 5000,
});


slider.play();

leftArrow.addEventListener('click', slider.prev);
rightArrow.addEventListener('click', slider.next);


//-----------precargar imagens
const imagesPath = elements.map(rutas => rutas.image);

Preloader.preloadImages({
    images: imagesPath,
    completed: ()=>{
        document.querySelector(".controls").style.display = "block";
    }
})