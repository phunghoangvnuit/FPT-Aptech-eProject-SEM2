// main.js

const apiUrl = 'book.json'; // Adjust the path based on your file location

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
            <p>ID: ${book.id}</p>
            <p>Name: ${book.title}</p>
            <p>Original Price: ${book.price}</p>
            <p>Discount Price: ${book.priceDiscout}</p>
            <p>Discount Percent: ${Math.round(((book.price-book.priceDiscout)/book.price)*100)}%</p>
            <hr>
        `;
        booksContainer.appendChild(bookElement);
    });
}
