class Carousel {
    constructor(element) {
        this.element = element;
        this.items = document.querySelectorAll(".carousel-item");
        this.currentImage = document.querySelector(".carousel-item[data-image='1']");
        this.currentImageNum= this.currentImage.dataset.image;
        this.lastImage = this.items[this.items.length - 1];
        this.firstImage =  this.items[0];


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

        this.currentImage.classList.remove("current-carousel-item");

        if(this.currentImageNum > 1) {

            this.currentImageNum--;
            this.currentImage = document.querySelector(`.carousel-item[data-image="${this.currentImageNum}"]`);


        } else {
            
            this.currentImage = this.lastImage;
            this.currentImageNum = this.currentImage.dataset.image    

        }

        this.currentImage.classList.add("current-carousel-item");

    }

    next() {

        this.currentImage.classList.remove("current-carousel-item");

        if(this.currentImageNum < this.lastImage.dataset.image) {

            this.currentImageNum++;
            this.currentImage = document.querySelector(`.carousel-item[data-image="${this.currentImageNum}"]`);

        } else {

            this.currentImage = this.firstImage;
            this.currentImageNum = this.currentImage.dataset.image 

        }

        this.currentImage.classList.add("current-carousel-item");
    }
}

const carousel =  document.querySelector(".carousel");
new Carousel(carousel);


 