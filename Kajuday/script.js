/* =====================================
   LOGIN DETAILS
===================================== */

const VALID_USERNAME = "kajukatli";
const VALID_PASSWORD = "Shagun";

/* =====================================
   PAGE NAVIGATION
===================================== */

function showPage(pageId) {

    document.querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    document.getElementById(pageId)
        .classList.add("active");

}

/* =====================================
   LOGIN
===================================== */

function login(){

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const error =
        document.getElementById("loginError");

    if(
        username === VALID_USERNAME &&
        password === VALID_PASSWORD
    ){

        error.innerText = "";

        const music =
            document.getElementById("birthdayMusic");

        music.volume = 0.5;

        music.play().catch(() => {
            console.log("Autoplay blocked.");
        });

        showPage("welcomePage");

        launchConfetti();

    }else{

        error.innerText =
        "❌ Oops! Wrong Username or Password";

    }

}

/* =====================================
   ENTER KEY SUPPORT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    document
    .getElementById("password")
    .addEventListener("keypress", e => {

        if(e.key === "Enter"){
            login();
        }

    });

});

/* =====================================
   PHOTO GALLERY
===================================== */

const images = [

    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg"

];

let currentImage = 0;

function updateGallery(){

    const image =
        document.getElementById("galleryImage");

    image.style.opacity = 0;

    setTimeout(() => {

        image.src = images[currentImage];

        image.style.opacity = 1;

    }, 250);

}

function nextImage(){

    currentImage++;

    if(currentImage >= images.length){
        currentImage = 0;
    }

    updateGallery();

}

function previousImage(){

    currentImage--;

    if(currentImage < 0){
        currentImage = images.length - 1;
    }

    updateGallery();

}

/* =====================================
   AUTO SLIDESHOW
===================================== */

setInterval(() => {

    const galleryPage =
        document.getElementById("galleryPage");

    if(
        galleryPage.classList.contains("active")
    ){
        nextImage();
    }

}, 4000);

/* =====================================
   CAKE / CANDLES
===================================== */

function blowCandles(){

    const flames =
        document.querySelectorAll(".flame");

    flames.forEach(flame => {

        flame.style.transition = "0.5s";
        flame.style.opacity = "0";
        flame.style.transform = "scale(0)";

    });

    launchConfetti();

    alert(
        "🎂 Wish accepted! Happy Birthday Kaju ❤️"
    );

    
}

/* =====================================
   TYPEWRITER EFFECT
===================================== */

let typewriterStarted = false;

function startTypewriter(){

    if(typewriterStarted) return;

    typewriterStarted = true;

    const box =
        document.getElementById("typewriterBox");

    const originalText =
        box.innerText;

    box.innerText = "";

    let i = 0;

    const typing = setInterval(() => {

        box.innerText += originalText.charAt(i);

        i++;

        if(i >= originalText.length){
            clearInterval(typing);
        }

    }, 35);

}

/* =====================================
   GIFT BOX
===================================== */

function openGift(){

    const giftMessage =
        document.getElementById("giftMessage");

    giftMessage.style.display = "block";

    launchConfetti();

}

/* =====================================
   CONFETTI
===================================== */

function launchConfetti(){

    if(typeof confetti !== "function")
        return;

    confetti({

        particleCount: 150,

        spread: 120,

        origin: {
            y: 0.6
        }

    });

}

/* =====================================
   FIREWORKS
===================================== */

function launchFireworks(){

    if(typeof confetti !== "function")
        return;

    const duration = 4000;

    const end =
        Date.now() + duration;

    const interval =
    setInterval(() => {

        if(Date.now() > end){

            clearInterval(interval);

            return;

        }

        confetti({

            particleCount: 50,

            angle: 60,

            spread: 80,

            origin: {
                x: 0
            }

        });

        confetti({

            particleCount: 50,

            angle: 120,

            spread: 80,

            origin: {
                x: 1
            }

        });

    }, 250);

}

/* =====================================
   EXTRA SPARKLE EFFECT
===================================== */

setInterval(() => {

    const sparkle =
        document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        (12 + Math.random() * 25) + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.opacity = "1";

    sparkle.style.transition =
        "2s ease";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.style.opacity = "0";
        sparkle.style.transform =
        "translateY(-20px)";

    }, 100);

    setTimeout(() => {

        sparkle.remove();

    }, 2200);

}, 800);

/* =====================================
   WELCOME EFFECT
===================================== */

window.onload = () => {

    console.log(
        "🎂 Happy Birthday Kaju ❤️"
    );

};

