document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: ".slidermain-title",
    translateX: 1250,
    easing: "spring(1, 80, 40, 10)",
    delay: 200,
  });

  anime({
    targets: ".slidermain-comment",
    translateX: 1250,
    easing: "spring(1, 80, 40, 10)",
    delay: 400,
  });

  anime({
    targets: "#biomoresliderid",
    translateX: 1250,
    easing: "spring(1, 80, 40, 10)",
    delay: 600,
  });

  // Fonksiyon tanımlama
  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      // Element görünür hale geldiğinde
      if (entry.isIntersecting) {
        anime({
          targets: ".bio-desc",
          translateX: 3800,
          easing: "spring(1, 80, 40, 10)",
          delay: 0,
        });

        anime({
          targets: ".bio-title",
          translateX: 3800,
          easing: "spring(1, 80, 40, 10)",
          delay: 200,
        });

        anime({
          targets: ".bio-contact",
          translateX: 3800,
          easing: "spring(1, 80, 40, 10)",
          delay: 400,
        });

        anime({
          targets: ".bio-more-2",
          translateX: 3800,
          easing: "spring(1, 80, 40, 10)",
          delay: 600,
        });

        observer.disconnect(); // Bir kere tetiklendikten sonra gözlemleyiciyi durdurabilirsiniz
      }
    });
  }

  // threshold değerini ayarlama
  var thresholdValue = 0.3;

  // Eğer ekran genişliği 768 piksel altında ise threshold değerini 0.1 yap
  var mediaQuery = window.matchMedia("(max-width: 768px)");
  if (mediaQuery.matches) {
    thresholdValue = 0.1;
  }

  // Gözlemleyici oluşturma
  var observer = new IntersectionObserver(handleIntersection, {
    threshold: thresholdValue,
  });

  // İlgili elementi gözlemleyiciye ekle
  var targetElement = document.getElementById("bio-scroll");
  observer.observe(targetElement);
})
