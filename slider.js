function Slider() {
    this.imagesUrls = ['https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg',
        'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
        'https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg',
    ];
    this.currentImageIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImg = null;

    this.start = function (elId) {
        let that = this;

        let elSelector = '#' + elId;
        let el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.prevButton');
        this.showNextBtn = el.querySelector('.nextButton');
        this.slideImg = el.querySelector('.slideImg')

        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e)
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e)
        });


        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    }
    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--;
        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;


        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    }

    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++;
        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }

}




