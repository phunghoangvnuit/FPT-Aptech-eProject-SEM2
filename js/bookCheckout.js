function deleteCartItem(bookId) {
        axios.delete(`http://localhost:8080/api/carts/items/${localStorage.getItem('customerCart')}?bookId=${bookId}`)
            .then(response => {
                console.log('Product removed from cart:', response.data);
            })
            .catch(error => {
                console.error('Error removing product from cart:', error);
            }).finally(() => {
            displayBooksInCart();
            getTotalPrice();
        });
}

function updateItemInCart(key,bookId,bookQuantity) {
    console.log(bookQuantity);
    const cartAddRequest = `http://localhost:8080/api/carts/items/${localStorage.getItem('customerCart')}`
    if(key === 'Enter') {
        axios.put(cartAddRequest, {
            bookId: bookId,
            quantity: bookQuantity
        }).then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log('Error adding to cart:', error.message);
        }).finally(() => {
            displayBooksInCart();
            getTotalPrice();
        });
    }
}

function displayBooksInCart() {
    axios.get(`http://localhost:8080/api/carts/items?uuid=${localStorage.getItem('customerCart')}`)
        .then(response => {
            const cartItems = response.data;
            displayCartItems(cartItems);
            getTotalPrice();
        })
        .catch(error => {
            console.error('Error fetching cart items:', error);
        });
}

function getBookInfobyId(bookId){
    const endpointBookInfo = `http://localhost:8080/api/books/${bookId}`;
    let bookTitle = ""
    let bookPrice;
    axios.get(endpointBookInfo)
        .then(response => {
            // Handle the response data
            bookTitle = response.data.title;
            bookPrice = response.data.price;
            document.querySelector(`.bookIdTitle_${bookId}`).innerHTML = `${bookTitle}`;
            document.querySelector(`.bookIdPrice_${bookId}`).innerHTML = `${bookPrice}`;
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching book details:', error);
            alert('Error fetching book details. Please try again.');
        });
}

function displayCartItems(cartItems) {
    const cartItemList = document.querySelector('.bookCart-body');
    cartItemList.innerHTML = '';
    cartItems.forEach(item => {
        getBookInfobyId(item.bookId);
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            <div class="bookCart-book">
              <img style="width:100px; height:100px;" src="/image/${item.bookId}.jpg">
              <p class="bookCart-bookTitle bookIdTitle_${item.bookId}"></p>
              <p class="bookCart-bookPrice bookIdPrice_${item.bookId}"></p>
              <input class="bookCart-bookQuantity" type="text" value="${item.quantity}" onkeydown="updateItemInCart(event.key, ${item.bookId}, Number(this.value))">
              <i class="bookCart-removeBook fa-solid fa-trash-can" onclick="deleteCartItem(${item.bookId})"></i>
            </div>
        `;
        cartItemList.appendChild(listItem);
    });
}

function getTotalPrice(){
    axios.get(`http://localhost:8080/api/carts/${localStorage.getItem('customerCart')}`)
        .then(response => {
            const cartPrice = response.data.totalPrice;
            document.querySelector('.orderPrice-value').innerHTML = `${cartPrice.toLocaleString()}đ`;
        })
        .catch(error => {
            console.error('Error fetching cart info:', error);
        });
}


/*CHECKOUT*/
function createOrder() {
    const orderDetails = {
        cartUuid: localStorage.getItem('customerCart'),
        destAddress: document.querySelector('.customerAddress-value').value,
        telephone: document.querySelector('.CustomerPhoneNumber-value').value,
        contactEmail: document.querySelector('.CustomerEmail-value').value
    };

    axios.post(`http://localhost:8080/api/orders`, orderDetails)
        .then(response => {
            console.log(response.data);
            localStorage.removeItem('customerCart');
        })
        .catch(error => {
            console.error('Error creating order:', error);
        });
}


/*EXECUTE IN FIRST ==>*/
displayBooksInCart();

