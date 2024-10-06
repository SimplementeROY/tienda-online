// Seleccionar elementos del DOM
const sectionOfProducts = document.getElementById('productos');
const shoppingCartBtn = document.getElementById('shopping-cart-btn');
const shoppingCart = document.querySelector('.shopping-cart');
const productosContainer = document.getElementById('productos');
const cartList = shoppingCart.querySelector('ul');
const emptyCartBtn = shoppingCart.querySelector('button:first-of-type');
const buyBtn = shoppingCart.querySelector('button:last-of-type');

function generarHTMLProducto(producto) {
    const productArticle = document.createElement('article');
    const productName = document.createElement('h3');
    const imgFigure = document.createElement('figure');
    const productIMG = document.createElement('img');
    const productDescription = document.createElement('figcaption');
    const producPrice = document.createElement('p');
    const addCartButton = document.createElement('button');

    //Poner texto en las etiquetas
    productName.textContent = producto.nombre;
    productDescription.textContent = producto.descripcion;
    producPrice.textContent = `${producto.precio}€`;
    addCartButton.textContent = 'Agregar a la cesta'
    //Poner atributos de la etiqueta imagen
    productIMG.setAttribute('src', producto.imagen);
    productIMG.setAttribute('alt', producto.nombre);

    //Poner clases
    productName.classList.add('product-name');
    producPrice.classList.add('product-price');
    productIMG.classList.add('product-image')

    imgFigure.append(productDescription, productIMG);
    productArticle.append(productName, imgFigure, producPrice, addCartButton);

    return productArticle
}

let cart = [];

// Función para mostrar/ocultar el carrito
shoppingCartBtn.addEventListener('click', () => {
    shoppingCart.classList.toggle('hidden');
});

// Función para renderizar productos
function renderProducts() {
    productosContainer.innerHTML = '';
    productos.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}">
            <h3>${product.nombre}</h3>
            <p>${product.descripcion}</p>
            <p>Precio: $${product.precio}</p>
            <button class="add-to-cart" data-id="${product.id}">Añadir al carrito</button>
        `;
        productosContainer.appendChild(productElement);
    });
}

// Función para añadir producto al carrito
function addToCart(productId) {
    const product = productos.find(p => p.id === productId);
    if (product && product.stock > 0) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        product.stock--;
        updateCartDisplay();
    }
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} x${item.quantity} - $${(item.precio * item.quantity).toFixed(2)}`;
        cartList.appendChild(li);
    });
}

// Event listener para añadir productos al carrito
productosContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        addToCart(productId);
    }
});

// Función para vaciar el carrito
emptyCartBtn.addEventListener('click', () => {
    cart.forEach(item => {
        const product = productos.find(p => p.id === item.id);
        if (product) {
            product.stock += item.quantity;
        }
    });
    cart = [];
    updateCartDisplay();
});

// Inicialización
renderProducts();

