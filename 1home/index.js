const bestsellers = books.filter(book => book.bestseller);
const bestsellerContainer = document.querySelector(".book-container");

bestsellers.forEach(book => {
    bestsellerContainer.innerHTML += `
            <div class="book-card">
                <img src=${book.image} alt="Book" onclick="openProduct('book.id')">
                <h3 onclick="openProduct('book.id')"> ${book.title}</h3>
                <p>₹${book.price}</p>
                <button>Add to Cart</button>
            </div>
            `;
});

function openProduct(id) {
    window.location.href = `../3categories/bookdetails.html?id=${id}`;
}