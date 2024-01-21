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

/* 3> Handle Display CategorySelection */
function displayCategorySelection (categoryId) {
    if(categoryId == 0){
        document.querySelector('.categoryNameDisplay').innerHTML = 'All Categories';
    } else if (categoryId == 1){
        document.querySelector('.categoryNameDisplay').innerHTML = 'Business & Finance';
    } else if (categoryId == 2){
        document.querySelector('.categoryNameDisplay').innerHTML = 'Personal Development';
    } else if (categoryId == 3){
        document.querySelector('.categoryNameDisplay').innerHTML = 'Novel & Fiction';
    } else if (categoryId == 4){
        document.querySelector('.categoryNameDisplay').innerHTML = 'Biography';
    } else if (categoryId == 5){
        document.querySelector('.categoryNameDisplay').innerHTML = 'Education & Reference';
    }

    const categoriesButton = document.querySelectorAll('.categorySelection');
    categoriesButton.forEach((button) => {
        button.classList.remove('activeCategoryButton');
    })
    document.querySelector(`.Id_${categoryId}`).classList.add('activeCategoryButton');
}


/* 4> Add Link To bookDetails */
function redirectToAnotherPage(bookId) {
    window.location.href = `bookDetails.html?bookId=${bookId}`;
}

function redirectToGG() {
    window.location.href = 'https://google.com.vn';
}







/*============ AXIOS ============*/
/* 1>AXIOS - Display Books by Category */
const urlParams = new URLSearchParams(window.location.search);
let categoryId = urlParams.get('category');
const pageSize = 15; // Books per Page
function fetchBooksByCategory() {

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
        displayCategorySelection (categoryId);

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
        displayCategorySelection (categoryId);
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
    <div class="bookCategories-book">
          <div class="bookCategories-book-top" onclick="redirectToAnotherPage(${book.id})">
            <img src="../image/${book.id}.jpg">
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
            <button class="buttonToDetails" onclick="addToCartInCategory(${book.id},${book.inStock})">Add to Cart</button>
          </div>
        </div>
    `;
    bookListContainer.appendChild(bookElement);
});
}

/* 2>AXIOS - Add Book to Cart */
const addToCartInCategory = async (bookId, bookInStock) => {
    if(bookInStock === 0){
        alert('Out of Stock');
        return;
    }

    try {
        const response = await axios.put(`http://localhost:8080/api/carts/${localStorage.getItem('customerCart')}`, {
            bookId: bookId,
            quantity: 1
        });

        console.log(response.data); // Assuming the server sends a success message
    } catch (error) {
        console.error('Error adding to cart:', error.message);
    }
};

/*==> EXECUTE IN FIRST*/ fetchBooksByCategory();
