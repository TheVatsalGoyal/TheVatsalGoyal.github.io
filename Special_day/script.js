/* ===================================
   LOGIN DETAILS
=================================== */

const VALID_USERNAME = "Vrinda";
const VALID_PASSWORD = "All You Need Is Love";

/* ===================================
   PAGE NAVIGATION
=================================== */

function showPage(pageId){

    document
    .querySelectorAll(".page")
    .forEach(page => {
        page.classList.remove("active");
    });

    document
    .getElementById(pageId)
    .classList.add("active");

    if(pageId === "letterPage"){
        startTypewriter();
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

/* ===================================
   LOGIN
=================================== */

function login(){

    const username =
        document
        .getElementById("username")
        .value
        .trim();

    const password =
        document
        .getElementById("password")
        .value
        .trim();

    const error =
        document
        .getElementById("loginError");

    if(
        username === VALID_USERNAME &&
        password === VALID_PASSWORD
    ){

        error.innerText = "";

        showPage("coverPage");

        createHeartBurst();

    }
    else{

        error.innerText =
        "❌ Wrong Username or Password";

    }

}

/* ===================================
   ENTER KEY LOGIN
=================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

    document
    .getElementById("password")
    .addEventListener(
        "keypress",
        function(e){

            if(e.key === "Enter"){
                login();
            }

        }
    );

});

/* ===================================
   LETTER TYPEWRITER
=================================== */

let typewriterStarted = false;

function startTypewriter(){

    if(typewriterStarted)
        return;

    typewriterStarted = true;

    const element =
        document.getElementById("letterText");

    const originalText =
        element.innerText;

    element.innerText = "";

    let index = 0;

    const timer =
    setInterval(() => {

        element.innerText +=
        originalText.charAt(index);

        index++;

        if(index >= originalText.length){

            clearInterval(timer);

        }

    }, 30);

}

/* ===================================
   GIFT BOX
=================================== */

function openGift(){

    const gift =
        document
        .getElementById("giftMessage");

    gift.style.display = "block";

    gift.style.animation =
    "fadeIn 1s ease";

    createHeartBurst();

}

/* ===================================
   HEART BURST
=================================== */

function createHeartBurst(){

    for(let i=0;i<25;i++){

        const heart =
        document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position =
        "fixed";

        heart.style.left =
        (45 + Math.random()*10) + "%";

        heart.style.top =
        (45 + Math.random()*10) + "%";

        heart.style.fontSize =
        (16 + Math.random()*20) + "px";

        heart.style.pointerEvents =
        "none";

        heart.style.zIndex = "9999";

        heart.style.transition =
        "2s ease-out";

        document.body
        .appendChild(heart);

        setTimeout(() => {

            const x =
            (Math.random()-0.5)*400;

            const y =
            (Math.random()-0.5)*400;

            heart.style.transform =
            `translate(${x}px, ${y}px)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}

/* ===================================
   RANDOM FRIENDSHIP NOTES
=================================== */

const friendshipNotes = [

"🌷 You're one of the nicest people I know.",

"💖 Thank you for every conversation.",

"🌸 Life is better with friends like you.",

"✨ You make ordinary days special.",

"🌷 Thank you for being yourself.",

"💌 Some friendships become memories forever.",

"🌸 You deserve all the happiness today."

];

function showRandomNote(){

    const note =

    friendshipNotes[
        Math.floor(
            Math.random()
            *
            friendshipNotes.length
        )
    ];

    alert(note);

}

/* ===================================
   FLOATING HEARTS
=================================== */

setInterval(() => {

    const heart =
    document.createElement("span");

    heart.innerHTML =

    Math.random() > 0.5
    ? "💖"
    : "🌸";

    heart.style.position =
    "fixed";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.bottom =
    "-50px";

    heart.style.fontSize =
    (15 + Math.random()*20)
    + "px";

    heart.style.pointerEvents =
    "none";

    heart.style.zIndex = "999";

    heart.style.transition =
    "10s linear";

    document.body
    .appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
        "translateY(-120vh)";

        heart.style.opacity =
        "0";

    },100);

    setTimeout(() => {

        heart.remove();

    },10000);

},1200);

/* ===================================
   SIMPLE FADE ANIMATION
=================================== */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes fadeIn{

    from{
        opacity:0;
        transform:translateY(20px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }

}

`;

document.head.appendChild(style);

/* ===================================
   STARTUP MESSAGE
=================================== */

window.onload = () => {

    console.log(
        "🌷 Happy Birthday Herbal Tea 🌷"
    );

};

function blowCandles(){

    const flames =
    document.querySelectorAll(".flame");

    flames.forEach(flame => {

        flame.style.opacity = "0";

        flame.style.transform =
        "scale(0)";

    });

    createHeartBurst();

    setTimeout(() => {

        document.getElementById(
        "wishMessage"
             ).innerHTML =
                            "🎂 Wish accepted! May all your dreams come true 🌷";

    },500);

}