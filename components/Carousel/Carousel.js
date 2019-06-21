class Carousel {
    constructor(element) {
        this.element = element;
        this.items = document.querySelectorAll(".carousel-item");
        this.currentImage = document.querySelector(".carousel-item[data-image='1']");
        this.currentImageNum= this.currentImage.dataset.image;
        this.lastImage = this.items[this.items.length - 1];


        this.carouselNav = this.element.querySelector(".carousel-nav");
        this.previousBtn = this.carouselNav.querySelector("#prevBtn");
        this.nextBtn = this.carouselNav.querySelector("#nextBtn");

        this.previousBtn.addEventListener("click", () => {
            this.previous();
        });

        this.nextBtn.addEventListener("click", () => {
            this.next();
        });


    }

    previous() {

        //let currentImageNum = this.currentItem.dataset.image;
        this.currentImage.classList.remove("current-carousel-item");


        if(this.currentImageNum > 1) {

            this.currentImageNum--;

            this.currentImage = document.querySelector(`.carousel-item[data-image="${this.currentImageNum}"]`)


        } else {
            
            this.currentImage = this.lastImage;
            this.currentImageNum = this.currentImage.dataset.image
        
            console.log(this.currentImage);

        }

        this.currentImage.classList.add("current-carousel-item");

        console.log(this.currentImageNum)

    }

    next() {

    }
}

const carousel =  document.querySelector(".carousel");
const carouselApp = new Carousel(carousel);

//console.log(carouselApp.displayItem);

// const carouselItems = document.querySelectorAll(".carousel-item");
// const carouselNav =  document.querySelector(".carousel-nav");

// const previousBtn = carouselNav.querySelector("#prevBtn");
// const nextBtn = carouselNav.querySelector("#nextBtn");

//nextBtn.addEventListener()
 