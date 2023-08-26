//SLIDE SHOW
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
//xxxxxxxxxxxxxxxxEnd of slide show xxxxxxxxxxxxxxxxxxxxxxx

// links and progress 
const allLink = document.querySelectorAll('a');
const progressLoad = document.querySelector('progress');
// allLink.forEach(function() {
//     addEventListener('click', load);
// });

for (let i = 0; i < allLink.length; i++) {
    allLink[i].addEventListener('click', load);
}

function load() {
    let loadingValue = 0;
    progressLoad.style.display = 'inline';
    progressLoad.style.accentColor = 'red';

    function updateProgress() {
        loadingValue++;
        progressLoad.setAttribute('value', `${loadingValue}`);
        if (loadingValue > 99) {
            clearInterval(loadingSet);
            progressLoad.style.display = 'none';
        }
    }

    let loadingSet = setInterval(updateProgress, 5);
}