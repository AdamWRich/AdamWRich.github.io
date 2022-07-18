const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


var myImage = document.getElementById("about__img");
var imageArray = ["img/family/bri.jpeg", "img/family/fam.jpeg"]

var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

setInterval(changeImage,3000);


// Video playback
var vid = document.getElementsByClassName('video_prev');
vid.playbackRate = 2.0;

