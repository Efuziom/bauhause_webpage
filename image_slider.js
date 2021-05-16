var slideIndex = 0;
var autoSlideCooldown= 10000;
autoSlideInitiated= false;

showSlides(true);

function plusSlides(n) {
    slideIndex+= n;
    showSlides();
}

function currentSlide(n) {
    slideIndex= n;
    showSlides();
}

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");

    /*clear: */
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    /*check if in bound: */
    if (slideIndex > slides.length-1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length-1
    }

    slides[slideIndex].style.display = "block";

    /*re-angage autosliding if not already counting down: */
    if(!autoSlideInitiated){
        autoSlideInitiated= true
        setTimeout(
            ()=>{
                slideIndex+= 1;
                autoSlideInitiated= false;
                showSlides();
            },
            autoSlideCooldown
        )
    }
}