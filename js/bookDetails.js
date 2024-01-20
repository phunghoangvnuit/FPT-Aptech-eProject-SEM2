/*Shortcut Paragraph*/
    document.addEventListener("DOMContentLoaded", function() {
    var ellipsisContainers = document.querySelectorAll(".product-title");

    ellipsisContainers.forEach(function(container) {
    var content = container.textContent;

    if (content.length > 45) {
    container.textContent = content.substring(0, 45) + "...";
}
});
});

/*Dropdown-menu*/
    const dropdown = document.querySelectorAll('.dropdown');
    dropdown.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click',() => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
})

    options.forEach(option => {
    option.addEventListener('click', () => {
    selected.innerText = "Filter: " + option.innerText;
    selected.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');
    options.forEach(option => {
    option.classList.remove('active');
});
    option.classList.add('active');
})
})
})

/*Axios bookDetails*/
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('bookId');
function fetchBookDetails(bookId) {
    const endpoint = `http://localhost:8080/api/books/${bookId}`;

    // Send an HTTP GET request to the backend endpoint
    axios.get(endpoint)
        .then(response => {
            // Handle the response data
            const bookDetails = response.data;
            displayBookDetails(bookDetails);
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching book details:', error);
            alert('Error fetching book details. Please try again.');
        });
}

function displayBookDetails(bookDetails) {
    const bookContainer = document.querySelector('.bookDetails-body');

    /*Axios - Get categoryName by categoryId
    const endpointCategory = `http://localhost:8080/api/categories/${bookDetails.categoryId}`;
    let categoryName = '';
    axios.get(endpointCategory)
        .then(response => {
            // Handle the response data
            categoryName = response.data.name;
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching book details:', error);
            alert('Error fetching book details. Please try again.');
        });
     */

    // Update your HTML or manipulate the DOM to display book details
    bookContainer.innerHTML = `
      <div class="bookDetails-left">
        <img src="image/produc-1.jpg">
      </div>
      <div class="bookDetails-right">
        <p class="bookDetails-title">${bookDetails.title}</p>
        <div class="bookDetails-info-container">
          <p class="bookDetails-info">Author: <span>${bookDetails.author}</span></p>
          <p class="bookDetails-info">Category: <span>${bookDetails.categoryId}</span></p>
          <p class="bookDetails-info">In Stock: <span>${bookDetails.inStock}</span></p>
        </div>
        <div class="bookDetails-price">
          <p class="bookDetails-newPrice">${bookDetails.price}đ</p>
          <p class="bookDetails-oldPrice">${bookDetails.oldPrice}</p>
          <p class="bookDetails-changePercent">${Math.round((bookDetails.price - bookDetails.oldPrice)/bookDetails.price)}</p>
        </div>
        <div class="bookDetails-AddToCart">
          <div class="bookDetails-AddToCart-quantity">
            <p>Quantity: </p>
            <input class="bookDetails-AddToCart-quantityInput" type="text" placeholder="1">
          </div>
          <button class="bookDetails-AddToCart-add">
            <p>Add to Cart</p>
            <p href="#" class="fas fa-shopping-cart"></p>
          </button>
        </div>
      </div>
    `;
}
fetchBookDetails(bookId);
