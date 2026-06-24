// Search functionality
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-icon");

searchBtn.addEventListener("click", () => {
    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter something to search!");
    } else {
        alert(`Searching for: ${searchText}`);
    }
});

// Cart counter
let cartCount = 0;

const cart = document.querySelector(".nav-cart");

cart.addEventListener("click", (e) => {
    e.preventDefault();
    cartCount++;
    cart.innerHTML = `
        <a href="#">
            <i class="fa-solid fa-cart-shopping"></i>
            Cart (${cartCount})
        </a>
    `;
});

// "See More" buttons
const seeMoreButtons = document.querySelectorAll(".box p:last-child");

seeMoreButtons.forEach(button => {
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
        alert("More products coming soon!");
    });
});

// Smooth scroll to top
const backToTop = document.querySelector(".back a");

backToTop.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});