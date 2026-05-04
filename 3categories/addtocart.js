const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const book = books.find(b => b.id === id);

if (book) {
    document.getElementById("image").src = book.image;
    document.getElementById("title").innerText = book.title;
    document.getElementById("author").innerText = "By " + book.author;
    document.getElementById("price").innerText = "₹" + book.price;
    document.getElementById("desc").innerText = book.description;
    document.getElementById("category").innerText = book.category;
}

const addtocart = document.getElementById("cart");

addtocart.addEventListener("click", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const quantity = parseInt(document.getElementById("quantity").value);

    const existing = cart.find(item => item.id === book.id);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ id: book.id, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // redirect to cart page
    window.location.href = "../4cart/cart.html";
});

const buyNow = document.getElementById("buy");

buyNow.addEventListener("click", function () {
    const quantity = parseInt(document.getElementById("quantity").value);

    localStorage.setItem("buyNowItem", JSON.stringify({
        id: book.id,
        quantity: quantity
    }));

    window.location.href = "../7checkout/checkout.html";
});