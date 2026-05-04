function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
    document.querySelector(".menu-icon i").classList.toggle("fa-xmark");
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;
    cart.forEach(item => {
        count += item.quantity;
    });

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.innerText = count;

        // trigger animation
        // cartCount.classList.remove("cart-bounce");
        // void cartCount.offsetWidth; // restart animation
        // cartCount.classList.add("cart-bounce");
    }
}

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(wishlist) {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function toggleWishlist(bookId, el) {
    let wishlist = getWishlist();

    bookId = String(bookId);

    if (wishlist.includes(bookId)) {
        wishlist = wishlist.filter(id => id !== bookId);
        el.classList.remove("active");
        showToast("Removed from wishlist ❌");
    } else {
        wishlist.push(bookId);
        el.classList.add("active");
        showToast("Added to wishlist ❤️");
    }

    saveWishlist(wishlist);
}

function loadWishlistIcons() {
    const wishlist = getWishlist().map(String);

    document.querySelectorAll(".wishlist-icon").forEach(icon => {
        const id = String(icon.dataset.id);

        if (wishlist.includes(id)) {
            icon.classList.add("active");
        }
    });
}