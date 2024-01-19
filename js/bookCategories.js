/*Shortcut Paragraph*/
document.addEventListener("DOMContentLoaded", function() {
    var ellipsisContainers = document.querySelectorAll(".bookCategories-bookTitle");

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

// Function to fetch and display book list
function fetchBookList() {
    const endpoint = 'http://localhost:8080/api/books';

    // Send an HTTP GET request to the backend endpoint
    axios.get(endpoint)
    .then(response => {
    // Handle the response data
    const bookList = response.data.content;
    displayBookList(bookList);
})
    .catch(error => {
    // Handle errors
    console.error('Error fetching book list:', error);
    alert('Error fetching book list. Please try again.');
});
}

function changeCategoryNameDisplay(categorySelection) {
    document.querySelector('.categoryNameDisplay').innerHTML = `${categorySelection}`;
}

// Function to display book list on the frontend
function displayBookList(bookList) {
    const bookListContainer = document.querySelector('.bookCategories-book-container');

    // Clear existing content
    bookListContainer.innerHTML = '';

    // Loop through the book list and display each book
    bookList.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `
    <div class="bookCategories-book">
          <div class="bookCategories-book-top">
            <img src="../image/produc-1.jpg">
          </div>

          <div class="bookCategories-book-bottom">
            <p class="bookCategories-bookTitle">${book.title}</p>
            <div class="rating-container">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star-half-stroke"></i>
            </div>
            <p class="bookCategories-bookPrice">${book.price} <span style="text-transform: none;">đ</span></p>
            <a class="buttonToDetails" href="#">More Details</a>
          </div>
        </div>
    `;
    bookListContainer.appendChild(bookElement);
});
}

fetchBookList();
