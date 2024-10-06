const sectionOfProducts = document.getElementById('productos'); //No se donde esta
const shoppingCartButton = document.getElementById('shopping-cart-btn');


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
    addCartButton.classList.add('btn')

    imgFigure.append(productDescription, productIMG);
    productArticle.append(productName, imgFigure, producPrice, addCartButton);

    return productArticle
}

function toggleCart() {
    const shoppingCart = document.querySelector('.shopping-cart');
    shoppingCart.classList.toggle('hidden')
}

for (const producto of productos) {
    sectionOfProducts.appendChild(generarHTMLProducto(producto))
}

shoppingCartButton.addEventListener('click', toggleCart);
