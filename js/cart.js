function cartUpload() {
    const cart = getCartLS();
    let productContent = "";

    if (totalAmountProducts() > 0) {
        productContent = `<button class="emptyCartButton" onclick="emptyCart()">Empty your Bag</button>`

        for (const product of cart) {
            productContent += `<div class="cartContainer">
                <div class="productsCart">
                    <div class="productCart">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="productNameCart">
                            <small>Item</small>
                            <h3>${product.name}</h3>
                        </div>
                        <div class="productQuantityCart">
                            <small>Quantity</small>
                            <p>1</p>
                        </div>
                        <div class="productPriceCart">
                            <small>Price</small>
                            <p>$${product.price}</p>
                        </div>
                        <button class="deleteProductCart d-flex justify-content-end" onclick="deleteProductCart(${product.id})" title="Remove Item"><img src="../assets/img/x.svg" alt="Delete product icon"></button>
                    </div>
                </div>
            </div>`;
        }
        productContent += `<div class="orderSummaryCart">
        <p class="textOrderSummary">Order Summary</p>
        <div class="subtotalCart">
            <p>Subtotal</p>
            <p class="text-end">${subtotalCartProducts()}</p>
        </div>
        <div class="shippingCart">
            <p>Shipping</p>
            <p class="text-end">$0</p>
        </div>
        <div class="totalCart">
            <p>Estimated Total</p>
            <p id="totalCart" class="text-end">${subtotalCartProducts()}</p>
        </div>
        <button class="checkoutCart">Checkout</button>
    </div>`;
    } else {
        productContent = `<p class="emptyCart">You haven't put any items in your bag.</p>`;
    }
    document.getElementById("cartContainer").innerHTML = productContent;
}
cartUpload();
uploadButtonCart();