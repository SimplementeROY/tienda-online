const sectionOfProducts = document.getElementById('section'); //No se donde esta
const shoppingCartButton = document.getElementById('shopping-cart');


function generarHTMLProducto(producto) {
    const productArticle = document.createElement('article');
    const productName = document.createElement('h3');
    const imgFigure = document.createElement('figure');
    const productIMG = document.createElement('img');
    const productDescription = document.createElement('figcaption')
    const producPrice = document.createElement('p')
    const addCartButton = document.createElement('button');

    //Poner texto en las etiquetas
    productName.textContent = producto.nombre;
    productDescription.textContent = producto.descripcion;
    producPrice.textContent = `${producto.precio}€`
    //Poner la imagen
    productIMG.setAttribute('src', producto.imagen);
    productIMG.setAttribute('alt', producto.nombre);

    imgFigure.append(productIMG, productDescription);
    productArticle.append(productName, imgFigure, producPrice, addCartButton);

    return productArticle
}

for (const producto of productos) {
    generarHTMLProducto(producto)
}

