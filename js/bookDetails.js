/*============ DOM =============*/

/*============ AXIOS ============*/
/* 1>AXIOS - Display Book Details */
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
function getCategoryNamebyId(categoryId){
    const endpointCategoryName = `http://localhost:8080/api/categories/${categoryId}`;
    let categoryName = '';
    axios.get(endpointCategoryName)
        .then(response => {
            // Handle the response data
            categoryName = response.data.name;
            document.querySelector('.bookCategoryName').innerHTML = `${categoryName}`;
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching book details:', error);
            alert('Error fetching book details. Please try again.');
        });
}

function displayBookDetails(bookDetails) {
    const bookContainer = document.querySelector('.bookDetails-body');
    const categoryName = getCategoryNamebyId(bookDetails.categoryId);

    bookContainer.innerHTML = `
      <div class="bookDetails-left">
        <img src="../image/${bookDetails.bookId}.jpg">
      </div>
      <div class="bookDetails-right">
        <p class="bookDetails-title">${bookDetails.title}</p>
        <div class="bookDetails-info-container">
          <p class="bookDetails-info">Author: <span>${bookDetails.author}</span></p>
          <p class="bookDetails-info">Category: <span class="bookCategoryName"></span></p>
          <p class="bookDetails-info">In Stock: <span>${bookDetails.inStock}</span></p>
        </div>
        <div class="bookDetails-price">
          <p class="bookDetails-newPrice">${(bookDetails.price).toLocaleString()}đ</p>
          <p class="bookDetails-oldPrice">${(bookDetails.oldPrice).toLocaleString()}đ</p>
          <p class="bookDetails-changePercent">${Math.round(((bookDetails.oldPrice - bookDetails.price)/bookDetails.price)*100)}%</p>
        </div>
        <div class="bookDetails-AddToCart">
          <div class="bookDetails-AddToCart-quantity">
            <p>Quantity: </p>
            <input class="bookDetails-AddToCart-quantityInput" type="text" placeholder="1">
          </div>
          <button class="bookDetails-AddToCart-add" onclick="checkAndUpdateCart(${bookDetails.bookId},${bookDetails.inStock})">
            <p>Add to Cart</p>
            <p class="fas fa-shopping-cart"></p>
          </button>
        </div>
      </div>
    `;

    getCategoryNamebyId(bookDetails.categoryId);
}

/* 2>AXIOS - Add Book to Cart */
function addItemToCart(bookId, quantityInput){
    const cartAddRequest = `http://localhost:8080/api/carts/${localStorage.getItem('customerCart')}`
    axios.put(cartAddRequest, {
        bookId: bookId,
        quantity: quantityInput
    }).then(response=>{
        console.log(response.data);
    }).catch(error=>{
        console.log('Error adding to cart:', error.message);
    })
}

function updateItemInCart(bookId, bookQuantity, quantityInput) {
    const cartAddRequest = `http://localhost:8080/api/carts/items/${localStorage.getItem('customerCart')}`
    axios.put(cartAddRequest, {
        bookId: bookId,
        quantity: bookQuantity + quantityInput
    }).then(response=>{
        console.log(response.data);
    }).catch(error=>{
        console.log('Error adding to cart:', error.message);
    })
}

function checkAndUpdateCart(bookId,bookInStock){
    const quantityInput = Number(document.querySelector('.bookDetails-AddToCart-quantityInput').value);

    if(quantityInput > bookInStock) {
        alert('Not enough book instock!');
        return;
    }

    const cartItemStatus = `http://localhost:8080/api/carts/items/${localStorage.getItem('customerCart')}?bookId=${bookId}`;

    axios.get(cartItemStatus)
        .then(response => {
            const bookQuantity = response.data.quantity;
            updateItemInCart(bookId, bookQuantity, quantityInput);
        })
        .catch(error => {
            if (error.response.data.errorCode == 404) {
                console.log('Check Result: Item not in cart!');
                addItemToCart(bookId,quantityInput);
            }
        });
}

/*==> EXECUTE IN FIRST*/ fetchBookDetails(bookId);
