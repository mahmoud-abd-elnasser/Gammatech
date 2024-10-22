"use strict"

// document.addEventListener("DOMContentLoaded", function() {
//     const brandsScroller = document.querySelector(".brands-flex");

//     // Check if the element exists to avoid errors
//     if (brandsScroller) {
//         const brandsInner = Array.from(brandsScroller.children);

//         brandsInner.forEach((brandI) => {
//             const dupl = brandI.cloneNode(true);
//             brandsScroller.appendChild(dupl);
//         });
//     } else {
//         console.error("Element with class '.brands-flex' not found");
//     }

// let cardCon = document.querySelectorAll('.card');
// let cartSrc = cartImg.getAttribute('src');
// console.log(cartImg)



// document.querySelectorAll(".add-cart").forEach(function (cartButton, index) {
//     // Check for the existing cart items
//     if (localStorage.getItem(`cartItem${index}`)) {
//         cartButton.classList.add("active");
//         cartButton.style.backgroundColor = "red";
//         cartButton.innerHTML = "Remove from Cart";
//     }

//     cartButton.addEventListener("click", function () {
//         const card = cartButton.closest(".card"); // Get the closest parent card element
//         const imgSrc = card.querySelector(".cart-img").src; // Get image src
//         const cartDet1 = card.querySelector(".cart-det1").innerText; // Get the cart-det1 text
//         const cartDet2 = card.querySelector(".cart-det2").innerText; // Get the cart-det2 text
//         const card_2 = cartButton.closest(".card-2"); // Get the closest parent card element
//         const imgSrc_2 = card_2.querySelector(".cart-img").src; // Get image src
//         const cartDet1_2 = card_2.querySelector(".cart-det1").innerText; // Get the cart-det1 text
//         const cartDet2_2 = card_2.querySelector(".cart-det2").innerText; // Get the cart-det2 text
//         const card_7 = cartButton.closest(".card-7"); // Get the closest parent card element
//         const imgSrc_7 = card_7.querySelector(".cart-img").src; // Get image src
//         const cartDet1_7 = card_7.querySelector(".cart-det1").innerText; // Get the cart-det1 text
//         const cartDet2_7 = card_7.querySelector(".cart-det2").innerText; // Get the cart-det2 text

//         if (cartButton.classList.contains("active")) {
//             // Remove item from cart
//             cartButton.classList.remove("active");
//             cartButton.style.backgroundColor = "#5b798e";
//             cartButton.innerHTML = "Add to Cart";

//             // Remove from localStorage
//             localStorage.removeItem(`cartItem${index}`);
//         } else {
//             // Add item to cart
//             cartButton.classList.add("active");
//             cartButton.style.backgroundColor = "red";
//             cartButton.innerHTML = "Remove from Cart";

//             // Create an object to store the item details
//             const cartItem = {
//                 imgSrc: imgSrc,
//                 cartDet1: cartDet1,
//                 cartDet2: cartDet2,
//             };
//             const cartItem2 = {
//                 imgSrc: imgSrc_2,
//                 cartDet1: cartDet1_2,
//                 cartDet2: cartDet2_2,
//             };
//             const cartItem7 = {
//                 imgSrc: imgSrc_7,
//                 cartDet1: cartDet1_7,
//                 cartDet2: cartDet2_7,
//             };

//             // Save the item to localStorage
//             localStorage.setItem(`cartItem${index}`, JSON.stringify(cartItem));
//             localStorage.setItem(`cartItem${index}`, JSON.stringify(cartItem2));
//             localStorage.setItem(`cartItem${index}`, JSON.stringify(cartItem7));
//         }
//     });
// });






function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.classList.contains("d-none")) {
        dropdownMenu.classList.remove("d-none");
        dropdownMenu.classList.add("d-block");
    } else {
        dropdownMenu.classList.remove("d-block");
        dropdownMenu.classList.add("d-none");
    }
}










var scrollButtonr = document.getElementById('scroll-r');
var scrollButtonl = document.getElementById('scroll-l');
var scrollContainer = document.getElementById('scroll-sec');




let currentTranslate = 0;
const maxTranslate = 1550;
const minTranslate = 0;


scrollContainer.style.transition = "transform 0.4s ease-in-out";
scrollButtonr.addEventListener('click', function () {
    currentTranslate -= 135;

    if (currentTranslate < -maxTranslate) {
        currentTranslate = -maxTranslate;
    }

    scrollContainer.style.transform = `translateX(${currentTranslate}px)`;

    if (currentTranslate <= -maxTranslate) {
        scrollButtonr.style.display = 'none';
    }

    if (currentTranslate < 0) {
        scrollButtonl.style.display = 'block';
    }
});

scrollButtonl.addEventListener('click', function () {
    currentTranslate += 135;
    if (currentTranslate > minTranslate) {
        currentTranslate = minTranslate;
    }

    scrollContainer.style.transform = `translateX(${currentTranslate}px)`;

    if (currentTranslate >= minTranslate) {
        scrollButtonl.style.display = 'none';
    }

    if (currentTranslate > -maxTranslate) {
        scrollButtonr.style.display = 'block';
    }
});














saleBtnn.addEventListener("click", function () {
    featBtn.style.borderRadius = '0px';

    saleBtnn.style.borderBottom = '3px solid #5b798e';

    if (featuredn.classList.contains("d-block") || bestn.classList.contains("d-block")) {
        salen.classList.remove("d-none");
        salen.classList.add("d-block");

        featuredn.classList.add("d-none");
        bestn.classList.add("d-none");

        featBtnn.style.borderBottom = 'none';
        bestBtnn.style.borderBottom = 'none';
    }
});

featBtnn.addEventListener("click", function () {
    featBtn.style.borderRadius = '0'
    featBtnn.style.borderBottom = ' #5b798e solid 3px';
    if (salen.classList.contains("d-block") || bestn.classList.contains("d-block")) {
        featuredn.classList.remove("d-none");
        featuredn.classList.add("d-block");
        salen.classList.add("d-none");
        bestn.classList.add("d-none");
        saleBtnn.style.borderBottom = 'none';
        bestBtnn.style.borderBottom = 'none';
    }
});
bestBtnn.addEventListener("click", function () {
    featBtn.style.borderRadius = '0'
    bestBtnn.style.borderBottom = ' #5b798e solid 3px';
    if (salen.classList.contains("d-block") || featuredn.classList.contains("d-block")) {
        bestn.classList.remove("d-none");
        bestn.classList.add("d-block");
        salen.classList.add("d-none");
        featuredn.classList.add("d-none");
        saleBtnn.style.borderBottom = 'none';
        featBtnn.style.borderBottom = 'none';
    }
});













let targetDate;
const savedTargetDate = localStorage.getItem('targetDate');

if (savedTargetDate) {
    targetDate = new Date(savedTargetDate);
} else {
    targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 16);
    localStorage.setItem('targetDate', targetDate);
}

function updateCountdowns() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElements = document.querySelectorAll('.countdown');
    countdownElements.forEach(element => {
        element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElements.forEach(element => {
            element.innerHTML = "Countdown finished!";
        });
    }
}
const countdownInterval = setInterval(updateCountdowns, 1000);





//  // Cart functionality
let cartButtons = document.querySelectorAll(".add-cart");
var i = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0; // Retrieve cart count from localStorage
document.getElementById('cart-number').innerHTML = i; // Display the cart count

cartButtons.forEach(function (cartButton, index) {
    // Check the stored cart state
    if (localStorage.getItem(`cartActive${index}`) === 'true') {
        cartButton.classList.add("active");
        cartButton.style.backgroundColor = "red";
        cartButton.innerHTML = "Remove from Cart";
    }

    cartButton.addEventListener("click", function () {
        if (cartButton.classList.contains("active")) {
            i--;
            localStorage.setItem('cartCount', i);
            document.getElementById('cart-number').innerHTML = i;
            cartButton.style.backgroundColor = "#5b798e";
            cartButton.innerHTML = "Add to Cart";
            cartButton.classList.remove("active");
            localStorage.removeItem('imgsrc');
            localStorage.setItem(`cartActive${index}`, 'false'); // Update the button state in localStorage
        } else {
            i++;
            let cartImg = document.querySelector('.cart-img').getAttribute('src');
            localStorage.setItem('cartCount', i);
            localStorage.setItem('imgsrc', cartImg);
            document.getElementById('cart-number').innerHTML = i;
            cartButton.style.backgroundColor = "red";
            cartButton.innerHTML = "Remove from Cart";
            cartButton.classList.add("active");
            localStorage.setItem(`cartActive${index}`, 'true'); // Save the button state to localStorage
        }
    });
});























// Wishlist functionality
let wishButtons = document.querySelectorAll(".wish-card");
var j = localStorage.getItem('wishCount') ? parseInt(localStorage.getItem('wishCount')) : 0; // Retrieve wishlist count from localStorage
document.getElementById('wish-number').innerHTML = j; // Display the wishlist count

wishButtons.forEach(function (wishButton, index) {
    // Check the stored wishlist state
    if (localStorage.getItem(`wishActive${index}`) === 'true') {
        wishButton.classList.add("active");
        wishButton.innerHTML = `
            <i class="fa-solid fa-heart fs-6" style="color: #f33;"></i>
            <i class="fa-regular fa-heart fs-6 d-none"></i>`;
    }

    wishButton.addEventListener("click", function () {
        if (!wishButton.classList.contains("active")) {
            j++;
            localStorage.setItem('wishCount', j);
            document.getElementById('wish-number').innerHTML = j;
            wishButton.innerHTML = `
                <i class="fa-solid fa-heart fs-6" style="color: #f33;"></i>
                <i class="fa-regular fa-heart fs-6 d-none"></i>`;
            wishButton.classList.add("active");
            localStorage.setItem(`wishActive${index}`, 'true'); // Save the button state to localStorage
        } else {
            j--;
            localStorage.setItem('wishCount', j);
            document.getElementById('wish-number').innerHTML = j;
            wishButton.innerHTML = `
                <i class="fa-solid fa-heart fs-6 d-none"></i>
                <i class="fa-regular fa-heart fs-6" style="color: #5b798e;"></i>`;
            wishButton.classList.remove("active");
            localStorage.setItem(`wishActive${index}`, 'false'); // Update the button state in localStorage
        }
    });
});











saleBtn.addEventListener("click", function () {
    saleBtn.style.borderBottom = ' #5b798e solid 3px'
    featBtn.style.borderRadius = '0'
    if (featured.classList.contains("d-block") || best.classList.contains("d-block")) {
        sale.classList.remove("d-none");
        sale.classList.add("d-block");
        featured.classList.add("d-none");
        best.classList.add("d-none");
        featBtn.style.borderBottom = 'none'
        bestBtn.style.borderBottom = 'none'

    }
})
featBtn.addEventListener("click", function () {
    featBtn.style.borderBottom = ' #5b798e solid 3px'
    featBtn.style.borderRadius = '0'

    if (sale.classList.contains("d-block") || best.classList.contains("d-block")) {
        featured.classList.remove("d-none");
        featured.classList.add("d-block");
        sale.classList.add("d-none");
        best.classList.add("d-none");
        saleBtn.style.borderBottom = 'none'
        bestBtn.style.borderBottom = 'none'

    }
})
bestBtn.addEventListener("click", function () {
    bestBtn.style.borderBottom = ' #5b798e solid 3px'
    featBtn.style.borderRadius = '0'
    if (sale.classList.contains("d-block") || featured.classList.contains("d-block")) {
        best.classList.remove("d-none");
        best.classList.add("d-block");
        sale.classList.add("d-none");
        featured.classList.add("d-none");
        saleBtn.style.borderBottom = 'none'
        featBtn.style.borderBottom = 'none'

    }
})









let lapCaro = document.querySelector('#lap_caro');
if (lapCaro.classList.contains('active')) {
    lapCaro.classList.remove('d-none');
} else {
    lapCaro.classList.add('d-none');
}



// });









const brandContainer = document.getElementById('brand-container');
const brandItems = Array.from(brandContainer.children);

// Duplicate the brand items to simulate an infinite scroll
brandItems.forEach((item) => {
    const clone = item.cloneNode(true);
    brandContainer.appendChild(clone);
});

let scrollAmount = 0;
const scrollSpeed = 2; // Adjust this value to change the speed of scrolling

function infiniteScroll() {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= brandContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset to the start of the original content
    }
    brandContainer.scrollLeft = scrollAmount;
    requestAnimationFrame(infiniteScroll); // Use requestAnimationFrame for smooth animation
}

// Start the infinite scrolling
infiniteScroll();










// // Select the button and the first section
// const scrollToTopBtn = document.getElementById('scrollToTopBtn');
// const firstSection = document.getElementById('head');

// // Add scroll event listener to show the button when the user scrolls past the first page
// window.addEventListener('scroll', function() {
//     if (window.scrollY > window.innerHeight) { // Check if the user has scrolled past the first page
//         scrollToTopBtn.style.display = 'block'; // Show the button
//     } else {
//         scrollToTopBtn.style.display = 'none'; // Hide the button if the user is at the top
//     }
// });

// // Add click event listener to scroll to the first section when the button is clicked
// scrollToTopBtn.addEventListener('click', function() {
//     firstSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the first section
// });



