//open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//displays first image in the slideshow on page load
var slideIndex = 1;
showSlides(slideIndex);

//changes the slide when the left/right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//changes slide when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //stores all classname="mySlides" and stores in var array "slides"
    var dots = document.getElementsByClassName("dot"); //stores all classname="dot" & stores in var array "dots"
    if (n > slides.length) {slideIndex = 1}; //if n > length of array "slides", slideIndex set to 1
    if (n < 1) {slideIndex = slides.length}; //if n < 1 slideIndex is set to length of array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //loop takes each item in array "slides" and sets display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    } //loop takes each item in array "dots" and removes "active", removing the active styling
    slides[slideIndex - 1].style.display = "block"; //displays image in slideshow
    dots[slideIndex - 1].className += " active"; //adds the active styling to the dot assoc. with the imgs
}