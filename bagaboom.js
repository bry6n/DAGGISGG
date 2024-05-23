var cartItems =[];
var cartTotal =0;

function showCart() {
    var cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = "block";
}

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    cartTotal += price;

    updateCart();
}

function updateCart() {
    var cartItemsElement = document.getElementById('cart-items');
    var cartTotalElement = document.querySelector('.cart-total');

            
    cartItemsElement.innerHTML = '';

    
    cartItems.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item.name + ' - ₱' + item.price;
        cartItemsElement.appendChild(li);
    });

    cartTotalElement.textContent = '₱' + cartTotal;
}

function checkoutAndClearCart() {
    
    var totalPriceElement = document.querySelector('.cart-total');
    var currentTotal = parseFloat(totalPriceElement.textContent.replace('₱', ''));
    var cartItemsText = cartItems.map(function (item) {
        return item.name + ' - ₱' + item.price;
    }).join('\n');
    var userName = document.getElementById('user-name').value;
    var userAddress = document.getElementById('user-address').value;
    var userNumber = document.getElementById('user-number').value;
    alert('Checkout\n\n' + cartItemsText + '\nTotal: ₱' + currentTotal.toFixed(2) +
    '\nName:' + userName + '\n' +
    'Address: ' + userAddress + '\n' +
    'Phone Number: ' + userNumber);
    document.getElementById('cart-popup').style.display = 'none';
    document.getElementById('cart-items').innerHTML = '';
    document.querySelector('.cart-total').textContent = '₱0';
    console.log('Cart is being cleared...');
    window.location.href = 'thanku.html';

}



function applyDiscount() {
    const discountInput = document.getElementById('discount-code');
    const discountCode = discountInput.value.trim().toLowerCase();

    if (discountCode === 'uunoakonisirarchie') {
        const totalPriceElement = document.querySelector('.cart-total');
        const currentTotal = parseFloat(totalPriceElement.textContent.replace('₱', ''));
        const discountedTotal = currentTotal * 0.80; 
        totalPriceElement.textContent = `₱${discountedTotal.toFixed(2)}`;
        alert('Coupon Applied!, 20% Deducted!');
    } else {
        alert('Invalid discount code. Please try again.');
    }
}

function closeCartPopup() {
    document.getElementById('cart-popup').style.display = 'none';
}