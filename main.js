// MOBILE HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const lines = document.querySelectorAll("#hamburger div");
const mobileNav = document.querySelector(".mobile-links");
const links = document.querySelectorAll(".mobile-links li a");

const handleHamburger = () => {
  lines.forEach((line) => {
    line.classList.toggle("show");
  });
  hamburger.classList.toggle("show");
  mobileNav.classList.toggle("show");
};

links.forEach((link) => {
  link.addEventListener("click", () => {
    lines.forEach((line) => {
      line.classList.remove("show");
    });
    hamburger.classList.remove("show");
    mobileNav.classList.remove("show");
  });
});

hamburger.addEventListener("click", handleHamburger);

// NAPREDUJ SECTION LOGIKA ***************************************** //

const sliderCards = document.querySelectorAll(".slider-right__card");
const sliderGreenLines = document.querySelectorAll(".slider-green__line");
const sliderDescs = document.querySelectorAll(".slider-card__content-desc");
const sliderLeftImages = document.querySelectorAll(".slider-left__box-img");
const sliderImagesBoxes = document.querySelectorAll(".slider-right__img");
const sliderImages = document.querySelectorAll(".slider__img");

let sliderIndex = 0;
let sliderCancelled = false;
let mySliderTimeout;

sliderCards.forEach((sliderCard, indexNumber) => {
  sliderCard.addEventListener("click", () => {
    sliderIndex = indexNumber;
    if (sliderCancelled == true) {
      sliderCancelled = false;
    } else {
      sliderCancelled = true;
    }
    clearTimeout(mySliderTimeout);
    sliderAnimation(sliderCancelled);
  });
});

const sliderAnimation = (sliderCancelled) => {
  if (sliderCancelled) {
    if (sliderIndex === sliderCards.length) {
      sliderIndex = 0;
    }
    sliderCards.forEach((sliderCard) => {
      sliderCard.classList.remove("slider-active-right__card");
    });
    sliderGreenLines.forEach((sliderGreenLine) => {
      sliderGreenLine.classList.remove("slider-active-green__line");
    });
    sliderLeftImages.forEach((sliderLeftImage) => {
      sliderLeftImage.classList.remove("slider-active__img");
    });
    sliderDescs.forEach((sliderDesc) => {
      sliderDesc.classList.remove("slider-active__desc");
    });
    sliderImagesBoxes.forEach((sliderImagesBox) => {
      sliderImagesBox.classList.remove("slider-active-right__img");
    });
    sliderImages.forEach((sliderImage) => {
      sliderImage.classList.remove("slider-card-active__img");
    });

    sliderCards[sliderIndex].classList.add("slider-active-right__card");
    sliderGreenLines[sliderIndex].classList.add("slider-active-green__line");
    sliderLeftImages[sliderIndex].classList.add("slider-active__img");
    sliderDescs[sliderIndex].classList.add("slider-active__desc");
    sliderImagesBoxes[sliderIndex].classList.add("slider-active-right__img");
    sliderImages[sliderIndex].classList.add("slider-card-active__img");

    sliderIndex = sliderIndex + 1;

    mySliderTimeout = setTimeout(sliderAnimation, 10000);
  }
  if (!sliderCancelled) {
    if (sliderIndex === sliderCards.length) {
      sliderIndex = 0;
    }
    sliderCards.forEach((sliderCard) => {
      sliderCard.classList.remove("slider-active-right__card");
    });
    sliderGreenLines.forEach((sliderGreenLine) => {
      sliderGreenLine.classList.remove("slider-active-green__line");
    });
    sliderLeftImages.forEach((sliderLeftImage) => {
      sliderLeftImage.classList.remove("slider-active__img");
    });
    sliderDescs.forEach((sliderDesc) => {
      sliderDesc.classList.remove("slider-active__desc");
    });
    sliderImagesBoxes.forEach((sliderImagesBox) => {
      sliderImagesBox.classList.remove("slider-active-right__img");
    });
    sliderImages.forEach((sliderImage) => {
      sliderImage.classList.remove("slider-card-active__img");
    });

    sliderCards[sliderIndex].classList.add("slider-active-right__card");
    sliderGreenLines[sliderIndex].classList.add("slider-active-green__line");
    sliderLeftImages[sliderIndex].classList.add("slider-active__img");
    sliderDescs[sliderIndex].classList.add("slider-active__desc");
    sliderImagesBoxes[sliderIndex].classList.add("slider-active-right__img");
    sliderImages[sliderIndex].classList.add("slider-card-active__img");

    sliderIndex = sliderIndex + 1;

    mySliderTimeout = setTimeout(sliderAnimation, 10000);
  }
};
sliderAnimation(sliderCancelled);

// FAQ SECTION LOGIKA -------------------------------------------- //
const pitanja = document.querySelectorAll(".pitanja-box__flex");
const pitanjaBox = document.querySelectorAll(".pitanja-box");
const plusevi = document.querySelectorAll("#plus");
const minusi = document.querySelectorAll("#minus");
const opisi = document.querySelectorAll(".pitanja-box__text");

pitanja.forEach((pitanje, index) => {
  pitanje.addEventListener("click", () => {
    pitanjaBox[index].classList.toggle("style");
    opisi[index].classList.toggle("visible");
    plusevi[index].classList.toggle("hidden");
    minusi[index].classList.toggle("hidden");
  });
});

// AUTOMATSKI MJENJANJE COPYRIGHT GODINE
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
