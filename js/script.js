//Products
const products = [
    { id: 1, category: "Tops", productType: "Tops", name: "Gael Top", image: "../assets/img/top_1.jpg", price: 68, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 2, category: "Tops", productType: "Tops", name: "Hailee Top", image: "../assets/img/top_2.jpg", price: 129, description: "This is a ruched crewneck tank. It's made with Sinch Smooth — a body-hugging fabric that forms to your shape for a perfect fit. Seamless construction provides a smooth look and an ultra-comfortable feel." },
    { id: 3, category: "Tops", productType: "Tops", name: "Audrina T-shirt", image: "../assets/img/top_3.jpeg", price: 45, description: "This is a crewneck t-shirt with a slim fit. It’s made with a super fine-ribbed fabric that shapes to the body for a cozy, hug-like feel." },
    { id: 4, category: "Tops", productType: "Jackets", name: "Pearl Jacket", image: "../assets/img/jacket_1.jpg", price: 325, description: "This puffer is constructed with innovative fabric from Japan and contains 100% responsibly sourced goose down." },
    { id: 5, category: "Tops", productType: "Jackets", name: "Ivy Faux Leather Jacket", image: "../assets/img/jacket_2.jpg", price: 199, description: "This is a lined shirt jacket with patch pockets, dropped shoulders and a boxy fit. It’s made with our innovative Vegan Leather that looks and feels like the real thing." },
    { id: 6, category: "Tops", productType: "Sweaters", name: "Melrose Sweater", image: "../assets/img/sweater_1.jpg", price: 128, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 7, category: "Tops", productType: "Sweaters", name: "Ellie Sweater", image: "../assets/img/sweater_2.jpeg", price: 98, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 8, category: "Tops", productType: "Sweaters", name: "Lexie Sweater", image: "../assets/img/sweater_3.jpg", price: 165, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 9, category: "Dresses", productType: "Dresses", name: "Megan Mini Dress", image: "../assets/img/dress_1.jpg", price: 229, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 10, category: "Dresses", productType: "Dresses", name: "Serena Dress", image: "../assets/img/dress_2.jpg", price: 175, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 11, category: "Dresses", productType: "Dresses", name: "Tara Dress", image: "../assets/img/dress_3.jpg", price: 138, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 12, category: "Bottoms", productType: "Pants", name: "Lilah Pant", image: "../assets/img/pant_1.jpg", price: 109, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 13, category: "Bottoms", productType: "Pants", name: "Amanda Pant", image: "../assets/img/pant_2.jpg", price: 128, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 14, category: "Bottoms", productType: "Pants", name: "Stevie Faux Leather Pant", image: "../assets/img/pant_3.jpg", price: 152, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 15, category: "Bottoms", productType: "Shorts", name: "Anna Short", image: "../assets/img/short_1.jpeg", price: 89, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 16, category: "Bottoms", productType: "Shorts", name: "Parker Short", image: "../assets/img/short_2.jpg", price: 119, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 17, category: "Bottoms", productType: "Skirts", name: "Maya Skirt", image: "../assets/img/skirt_1.jpg", price: 128, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
    { id: 18, category: "Bottoms", productType: "Skirts", name: "Polly Mini Skirt", image: "../assets/img/skirt_2.jpg", price: 88, description: "This is an off-the-shoulder top with a twist front and double-layer fabric for a supportive fit. It’s made with Contour — luxe, ultra-flattering fabric coveted for its smoothing effect and second-skin feel. Nothing more essential." },
];

//PRODUCTS LS
const saveProductsLS = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
}

const getProductsLS = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
}

//CART LS
const saveCartLS = (products) => {
    localStorage.setItem("cart", JSON.stringify(products));
}

const getCartLS = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

//PRODUCT LS
const getIdProductLS = () => {
    return JSON.parse(localStorage.getItem("product")) || 0;
}

const getIdCategoryLS = () => {
    return JSON.parse(localStorage.getItem("category")) || "All";
}

const totalAmountProducts = () => {
    const cart = getCartLS();

    return cart.length;
}

const subtotalCartProducts = () => {
    const cart = getCartLS();

    return cart.reduce((acumulador, item) => acumulador += item.price, 0);
}

const emptyCart = () => {
    localStorage.removeItem("cart");
    cartUpload();
    uploadButtonCart();
}

//Detailed product information
const showProduct = (id) => {
    localStorage.setItem("product", JSON.stringify(id));
}

const showProductByCategory = (id) => {
    localStorage.setItem("category", JSON.stringify(id));
}

const findProduct = () => {
    const products = getProductsLS();
    const id = getIdProductLS();
    const product = products.find(item => item.id === id);

    return product;
}

//Cart
const productAddCart = () => {
    const product = findProduct();
    const cart = getCartLS();
    cart.push(product);
    saveCartLS(cart);
    uploadButtonCart();
}

const deleteProductCart = (id) => {
    const cart = getCartLS();
    const uploadedCart = cart.filter(item => item.id != id);
    saveCartLS(uploadedCart);
    cartUpload();
    uploadButtonCart();
}

const uploadButtonCart = () => {
    document.getElementById("cartNumber").innerHTML = totalAmountProducts();
}

//Function Products
function productsUpload() {
    const products = getProductsLS();
    const category = getIdCategoryLS();
    const filteredProducts = category === 'All' ? products : products.filter(item => item.category === category);
    let productContent = "";

    for (const product of filteredProducts) {
        productContent += `<div class="product">
        <a href="product.html" onclick="showProduct(${product.id})" class="text-decoration-none">
        <img class="productImage" src="${product.image}" alt="${product.name}">
        <div class="productDetail">
            <h2 class="productTitle">${product.name}</h2>
            <p class="productPrice">$${product.price}</p>
        </div>
        </a>
        </div>`;
    }

    document.getElementById("productsContainer").innerHTML = productContent;
}

saveProductsLS(products);
productsUpload();
uploadButtonCart();