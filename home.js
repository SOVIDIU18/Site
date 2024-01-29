var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Schimbă imaginea la fiecare 2 secunde (poți ajusta intervalul)
}

// $(document).ready(function(){
//     let currentSlide = 0;
//     const slides = $('.mySlides');

//     function showSlide(n) {
//         slides.eq(currentSlide).hide();
//         currentSlide = (n + slides.length) % slides.length;
//         slides.eq(currentSlide).fadeIn();
//     }

//     setInterval(function() {
//         showSlide(currentSlide + 1);
//     }, 5000); // Schimbă imaginea la fiecare 2 secunde
// });


// $(document).ready(function () {
//     var currentIndex = 0;
//     var slides = $(".mySlides");

//     function showNextSlide() {
//         slides.eq(currentIndex).transition({ opacity: 0 }, 1000, function () {
//             $(this).hide();
//             currentIndex = (currentIndex + 1) % slides.length;
//             slides.eq(currentIndex).show().transition({ opacity: 1 }, 1000);
//         });
//     }

//     setInterval(showNextSlide, 3000); // Schimbă imaginea la fiecare 3 secunde (3000 milisecunde)
// });
