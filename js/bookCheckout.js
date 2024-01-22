function calculateTotalCart(){
    let productQuantity = document.querySelectorAll('.bookCart-bookQuantity');
    productQuantity.forEach((item) => {
        if(!item.value){
            item.value = 1;
        }
    })

    let totalCart = 0;

    const bookPriceArray = document.querySelectorAll('.bookCart-bookPrice');

    const bookQuantityArray = document.querySelectorAll('.bookCart-bookQuantity');

    for (i = 0; i < bookQuantityArray.length; i++){
        totalCart+=bookPriceArray[i].innerHTML * bookQuantityArray[i].value;
    }

    console.log(totalCart);

    document.querySelector('.orderPrice-value').innerHTML = `${totalCart} đ`;
}

calculateTotalCart();