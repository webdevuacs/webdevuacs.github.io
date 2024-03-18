 document.addEventListener("DOMContentLoaded", function () {
   // Sayfa yüklendiğinde overflow-y özelliğini 'hidden' olarak ayarla
   document.body.style.overflowY = "hidden";

   var preloader = document.getElementById("preloader");

   // Opacity'yi 1.5 saniye boyunca sabit tut
  setTimeout(function () {
     var opacity = 1;
    var interval = setInterval(function () {
       opacity -= 0.05; // Her 50ms'de opacity'yi azalt
       preloader.style.opacity = opacity;
      if (opacity <= 0) {
         clearInterval(interval); // Opacity 0'a ulaştığında interval'ı durdur
        preloader.style.zIndex = "-9999";

         // overflow-y özelliğini tekrar 'auto' olarak ayarla
         document.body.style.overflowY = "auto";
       }
     }, 50); // Her 50ms'de güncelle
   }, 4000); // 1.5 saniye sonra opacity azaltmaya başla
 });

 document.addEventListener("DOMContentLoaded", function () {
   var preloaderImg = document.getElementById("preloader").querySelector("img");

   // Sayfa yüklendiğinde preloader resminin opacity'sini 0 olarak ayarla
   preloaderImg.style.opacity = "0";

   // Opacity'yi 2 saniyede 1'e çıkar
   var opacity = 0;
  var fadeInInterval = setInterval(function () {
     opacity += 0.05; // Her 50ms'de opacity'yi arttır (2 saniyede 1'e ulaşmak için)
    preloaderImg.style.opacity = opacity;
     if (opacity >= 1) {
      clearInterval(fadeInInterval); // Opacity 1'e ulaştığında interval'ı durdur

       // Opacity'yi 1 saniyede 0'a düşür
       setTimeout(function () {
        var fadeOutInterval = setInterval(function () {
           opacity -= 0.05; // Her 50ms'de opacity'yi azalt
           preloaderImg.style.opacity = opacity;
           if (opacity <= 0) {
             clearInterval(fadeOutInterval); // Opacity 0'a ulaştığında interval'ı durdur

             // overflow-y özelliğini tekrar 'auto' olarak ayarla
             document.body.style.overflowY = "auto";
           }
         }, 50); // Her 50ms'de güncelle
       }, 1500); // 1 saniye sonra opacity azaltmaya başla
     }
   }, 50); // Her 50ms'de güncelle
 });
