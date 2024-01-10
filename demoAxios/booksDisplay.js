// main.js

const apiUrl = "book.json"; // Adjust the path based on your file location

// Fetch data using Axios
axios.get(apiUrl)
    .then(response => {
        const books = response.data;
        // Update the DOM or perform other actions with the fetched data
        displayBooks(books);
    })
    .catch(error => console.error('Error:', error));

// Example function to display books in the DOM
function displayBooks(books) {
    const booksContainer = document.getElementById('books-container');
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <div class="categories-product">
                <div class="categories-product-top">
                    <img src="${book.img}">
                </div>
            
                <div class="categories-product-bottom">
                    <p class="product-title">${book.title}</p>
                    <div class="rating-container">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                    </div>
                    <p class="product-price">${book.price}đ</p>
                    <button>More Details</button>
                </div>
            </div>
            <hr>
        `;
        booksContainer.appendChild(bookElement);
    });
}
