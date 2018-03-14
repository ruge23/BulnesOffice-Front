import { setInterval, setTimeout } from "timers";

//clase para mover los elementos-|iterarlos| (estructura del slider)

export default class Slider{
    constructor({elements, animationFunc, speed}){
        //console.log(elements);
        //console.log(animationFunc);
        //propiedades
        this.elements = elements;
        this.animationFunc = animationFunc;
        
        this.index = 0;
        this.size = elements.length;

        this.speed = speed;

        this.innerPrev = this.innerPrev.bind(this);
        this.innerNext = this.innerNext.bind(this);
        this.stop = this.stop.bind(this);
        
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    innerNext(){
        this.index++;
        if(this.index >= this.size) this.index = 0;
    
        this.animationFunc(this.elements[this.index])
    }

    innerPrev(){
        this.index--;
        if(this.index < 0) this.index = this.size - 1;
        
        this.animationFunc(this.elements[this.index])
    }

    next(){
        this.innerNext();
        if(this.interval){
            this.stop();
            this.play();
        }
    }

    prev(){
        this.innerPrev();
        if(this.interval){
            this.stop();
            this.play();
        }
    }

    play(){
        this.interval = setInterval(this.innerNext , this.speed);
    }

    stop(){
        clearInterval(this.interval)
    }

}

//----funcion de intervalos
    //setInterval(()=>{
    //  slider.prev();
    //}, 1000)
//----------------