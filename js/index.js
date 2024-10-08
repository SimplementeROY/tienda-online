// Seleccionar elementos del DOM
const seccionDeProductos = document.getElementById('productos');
const botonCarritoCompras = document.getElementById('shopping-cart-btn');
const carritoCompras = document.querySelector('.shopping-cart');
const contenedorProductos = document.getElementById('productos');
const listaCarrito = document.getElementById('items-list');
const botonVaciarCarrito = document.getElementById('clear-items-btn');
const botonComprar = document.getElementById('purchase-btn');
const botonShowmore = document.getElementById('show-more');
let productosMostrados = 30;
const botonCerrar = document.getElementById('close-cart-btn');
let carrito = [];
const hamburger = document.querySelector('.hamburger');
const overlay = document.getElementById('overlay')
const closeSidebarButton = document.querySelector('.close-sidebar-btn')

//Mostrar el sidebar al hacer click a la hamburguesa
hamburger.addEventListener('click', openMenu);

//Ocultar el sidebar al hacer click afuera o a la cruz
overlay.addEventListener('click', closeMenu);
closeSidebarButton.addEventListener('click', closeMenu);

// Mostrar/ocultar el carrito al hacer clic en el botón del carrito
botonCarritoCompras.addEventListener('click', cerrarCarrito);
botonCerrar.addEventListener('click', cerrarCarrito)

function cerrarCarrito() {
    carritoCompras.classList.toggle('open');
}

// Función para crear productos en HTML
function crearProductos() {
    contenedorProductos.innerHTML = '';
    productos.slice(0, productosMostrados).forEach(producto => {
        const elementoProducto = document.createElement('article');
        elementoProducto.classList.add('productos');
        elementoProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <figure>
                <figcaption>${producto.descripcion}</figcaption>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </figure>
            <p>${producto.precio} €</p>
            <button class="btn add-to-cart" data-id="${producto.id}">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(elementoProducto);
    });
}

// Función para mostrar los 20 productos restantes
function mostrarMasProductos() {
    productosMostrados += 20; // Incrementar el número de productos a mostrar
    crearProductos();  // Actualizar la visualización de productos
    // Ocultar el botón "Mostrar más" si ya se han mostrado todos los productos
    if (productosMostrados >= productos.length) {
        botonShowmore.style.display = 'none';
    }

}

// Event listener para el botón "Mostrar más"
botonShowmore.addEventListener('click', mostrarMasProductos);

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
        carritoCompras.classList.add('open');
    }
}

// Función para actualizar la visualización del carrito
function actualizarVisualizacionCarrito() {
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('carrito-item');
        li.innerHTML = `
            <div>
                <p>${item.nombre}</p>
                <p>${item.precio.toFixed(2)}€</p>
            </div>
            <div class="item-botonesCarrito">
                <button class="decrementar btn" data-id="${item.id}">-</button>
                <p>${item.cantidad}</p>
                <button class="incrementar btn" data-id="${item.id}">+</button>
                <button class="eliminar btn" data-id="${item.id}"><i data-id="${item.id}" class="fa-regular fa-trash-can"></i></button>
            </div>
        `;
        listaCarrito.appendChild(li);
    });
    const total = calcularTotal();
    document.getElementById('total-price').textContent = `Total: ${total}€`;
    agregarEventosIncrementoDecremento();
    agregarEventosEliminar();
}

// Event listener para añadir productos al carrito
contenedorProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        agregarAlCarrito(idProducto);
    }
});

// Función para vaciar el carrito
botonVaciarCarrito.addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
    } else {
        carrito.forEach(item => {
            const producto = productos.find(p => p.id === item.id);
            if (producto) {
                producto.stock += item.cantidad;
            }
        });
        carrito = [];
        actualizarVisualizacionCarrito();
    }
});

// Calcular total
function calcularTotal() {
    return carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0).toFixed(2);
}
//Funciones agregar o quitar cantidad en el carrito
function agregarEventosIncrementoDecremento() {
    document.querySelectorAll('.incrementar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const idProducto = parseInt(e.target.getAttribute('data-id'));
            incrementarCantidad(idProducto);
        });
    });
    document.querySelectorAll('.decrementar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const idProducto = parseInt(e.target.getAttribute('data-id'));
            disminuirCantidad(idProducto);
        });
    });
}

function incrementarCantidad(idProducto) {
    const productoEnCarrito = carrito.find(item => item.id === idProducto);
    const producto = productos.find(p => p.id === idProducto);
    if (productoEnCarrito && producto.stock > 0) {
        productoEnCarrito.cantidad++;
        producto.stock--;
        actualizarVisualizacionCarrito();
    } else {
        alert('No hay suficiente stock para este producto');
    }
}

function disminuirCantidad(idProducto) {
    const productoEnCarrito = carrito.find(item => item.id === idProducto);
    const producto = productos.find(p => p.id === idProducto);
    if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad--;
        producto.stock++;
    } else {
        carrito = carrito.filter(item => item.id !== idProducto);
        producto.stock += productoEnCarrito.cantidad;
    }
    actualizarVisualizacionCarrito();
}

function eliminarDelCarrito(idProducto) {
    const productoEnCarrito = carrito.find(item => item.id === idProducto);
    const producto = productos.find(p => p.id === idProducto);
    if (producto && productoEnCarrito) {
        producto.stock += productoEnCarrito.cantidad;
    }
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarVisualizacionCarrito();
}

function agregarEventosEliminar() {
    document.querySelectorAll('.eliminar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const idProducto = parseInt(e.target.getAttribute('data-id'));
            eliminarDelCarrito(idProducto);
        });
    });
}

// Función para manejar el proceso de compra
botonComprar.addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('El carrito está vacío. Añade productos antes de realizar la compra.');
    } else {
        alert('¡Gracias por tu compra!');
        carrito = [];
        actualizarVisualizacionCarrito();
    }
});

//Funciones para abrir y cerrar el sidebar
function openMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.style.width = "250px";
    overlay.style.display = "block";
}

function closeMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.style.width = "0";
    overlay.style.display = "none";
}

// Inicialización
crearProductos();