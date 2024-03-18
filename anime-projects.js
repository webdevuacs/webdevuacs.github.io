document.addEventListener("DOMContentLoaded", function () {
  var observer4 = new IntersectionObserver(
    function (entries, observer4) {
      entries.forEach(function (entry) {
        // Element görünür hale geldiğinde
        if (entry.isIntersecting) {
          anime({
            targets: "#bio-port-title-id2",
            easing: "spring(2, 80, 40, 10)",
            translateX: 2100,
            delay: 100,
          });

          anime({
            targets: "#bio-port-top-id",
            easing: "spring(2, 80, 40, 10)",
            translateX: 1100,
            delay: 300,
          });

          observer4.disconnect(); // Bir kere tetiklendikten sonra gözlemleyiciyi durdurabilirsiniz
        }
      });
    },
    { threshold: 0.4 }
  ); // Görünürlük yüzdesi eşiği (50%)

  // İlgili elementi gözlemleyiciye ekle
  var targetElement = document.getElementById("portfolioid");
  observer4.observe(targetElement);
});
