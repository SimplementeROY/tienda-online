// Seleccionar elementos del DOM
const seccionDeProductos = document.getElementById('productos');
const botonCarritoCompras = document.getElementById('shopping-cart-btn');
const carritoCompras = document.querySelector('.shopping-cart');
const contenedorProductos = document.getElementById('productos');
const listaCarrito = carritoCompras.querySelector('ul');
const botonVaciarCarrito = carritoCompras.querySelector('button:first-of-type');
const botonComprar = carritoCompras.querySelector('button:last-of-type');
let carrito = [];

// Función para mostrar/ocultar el carrito
botonCarritoCompras.addEventListener('click', () => {
    carritoCompras.classList.toggle('hidden');
});

// Función para crear productos en HTML
function crearProductos() {
    contenedorProductos.innerHTML = '';
    productos.forEach(producto => {
        const elementoProducto = document.createElement('div');
        elementoProducto.classList.add('product');
        elementoProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
            <button class="add-to-cart" data-id="${producto.id}">Añadir al carrito</button>
        `;
        contenedorProductos.appendChild(elementoProducto);
    });
}

// Función para añadir producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto && producto.stock > 0) {
        const itemExistente = carrito.find(item => item.id === idProducto);
        if (itemExistente) {
            itemExistente.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        producto.stock--;
        actualizarVisualizacionCarrito();
    }
}

// Función para actualizar la visualización del carrito
function actualizarVisualizacionCarrito() {
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`;
        listaCarrito.appendChild(li);
    });
}

// Event listener para añadir productos al carrito
contenedorProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        agregarAlCarrito(idProducto);
    }
});

// Función para vaciar el carrito
botonVaciarCarrito.addEventListener('click', () => {
    carrito.forEach(item => {
        const producto = productos.find(p => p.id === item.id);
        if (producto) {
            producto.stock += item.cantidad;
        }
    });
    carrito = [];
    actualizarVisualizacionCarrito();
});

// Inicialización
crearProductos();
