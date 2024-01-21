/*============ DOM =============*/
/* 1>Auto Shortcut Paragraph */
document.addEventListener("DOMContentLoaded", function() {
    var ellipsisContainers = document.querySelectorAll(".bookCategories-bookTitle");

    ellipsisContainers.forEach(function(container) {
        var content = container.textContent;

        if (content.length > 45) {
            container.textContent = content.substring(0, 45) + "...";
        }
    });
});

/* 2>DropMenu Interactive */
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

/* 3> Handle Display CategoryName */
function changeCategory(categorySelectionId,categorySelectionName) {
    document.querySelector('.categoryNameDisplay').innerHTML = `${categorySelectionName}`;

    const allCategoryButton = document.querySelectorAll('.categorySelection');
    allCategoryButton.forEach((categoryButton)=>{
        categoryButton.classList.remove('activeCategoryButton')
    })

    document.querySelector(`.Id_${categorySelectionId}`).classList.add('activeCategoryButton');

    fetchBooksByCategory(categorySelectionId);
}

/* 4> Add link to bookDetails */
function redirectToAnotherPage(bookId) {
    window.location.href = `bookDetails.html?bookId=${bookId}`;
}








/*============ AXIOS ============*/
/* 1>AXIOS - Display Books by Category */
const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get('category');
const pageSize = 15; // Books per Page
function fetchBooksByCategory(categoryId) {

    if(categoryId == 0){
        const booksByCategoryEndpoint = `http://localhost:8080/api/books?size=${pageSize}`;

        axios.get(booksByCategoryEndpoint)
            .then(response => {
                const books = response.data.content;
                displayBookList(books);
            })
            .catch(error => {
                console.error('Error fetching books by category:', error);
                alert('Error fetching books by category. Please try again.');
            });
    } else {
        const booksByCategoryEndpoint = `http://localhost:8080/api/books?category=${categoryId}&size=${pageSize}`;

        axios.get(booksByCategoryEndpoint)
            .then(response => {
                const books = response.data.content;
                displayBookList(books);
            })
            .catch(error => {
                console.error('Error fetching books by category:', error);
                alert('Error fetching books by category. Please try again.');
            });
    }
}
function displayBookList(bookList) {

    const bookListContainer = document.querySelector('.bookCategories-book-container');

    // Clear existing content
    bookListContainer.innerHTML = '';

    // Loop through the book list and display each book
    bookList.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `
    <div class="bookCategories-book" onclick="redirectToAnotherPage(${book.id})">
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
            <a class="buttonToDetails">Add to Cart</a>
          </div>
        </div>
    `;
    bookListContainer.appendChild(bookElement);
});
}

/*==> EXECUTE IN FIRST*/ fetchBooksByCategory(categoryId);