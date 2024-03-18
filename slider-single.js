function initializeSlider() {
  var sliderElements = document.getElementsByClassName("splide");

  if (sliderElements.length > 0) {
    var splide = new Splide(".splide", {
      type: "slider",
      autoplay: false,
      perMove: 1,
      perPage: 1,
      speed: 1200,
      drag: false,
      pagination: true,
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

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) { // Sağ ok tuşunun keyCode'u 39
    document.querySelector('.single .splide__arrow--next').click(); // Sağ ok tuşuna basıldığında .single .splide__arrow--next elemanına tıkla
  }
  
  if (event.keyCode === 37) { // Sol ok tuşunun keyCode'u 37
    document.querySelector('.single .splide__arrow--prev').click(); // Sol ok tuşuna basıldığında .single .splide__arrow--prev elemanına tıkla
  }
});

initializeSlider();
