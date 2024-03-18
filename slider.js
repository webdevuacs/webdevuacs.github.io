function initializeSlider() {
  var sliderElements = document.getElementsByClassName("splide");

  if (sliderElements.length > 0) {
    var splide = new Splide(".splide", {
      type: "loop",
      autoplay: false,
      perMove: 1,
      perPage: 5,
      speed: 1200,
      drag: false,
      breakpoints: {
        768: {
          drag: true,
          perPage: 1,
        },
      },
    });

    splide.mount();
  }
}

initializeSlider();
