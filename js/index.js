// -------------------- Selección de Elementos del DOM --------------------
// Selección de elementos relacionados con los productos
const seccionDeProductos = document.getElementById('productos');
const contenedorProductos = document.getElementById('productos');
const botonShowmore = document.getElementById('show-more');
let productosMostrados = 30;

// Selección de elementos relacionados con el carrito de compras
const botonCarritoCompras = document.getElementById('shopping-cart-btn');
const carritoCompras = document.querySelector('.shopping-cart');
const listaCarrito = document.getElementById('items-list');
const botonVaciarCarrito = document.getElementById('clear-items-btn');
const botonComprar = document.getElementById('purchase-btn');
const botonCerrar = document.getElementById('close-cart-btn');
let carrito = [];

// Selección de elementos relacionados con el menú lateral (sidebar)
const hamburger = document.querySelector('.hamburger');
const overlay = document.getElementById('overlay');
const closeSidebarButton = document.querySelector('.close-sidebar-btn');

// -------------------- Manejo del Sidebar --------------------
// Función para abrir el menú lateral (sidebar)
function openMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "250px";
    overlay.style.display = "block";
}

// Función para cerrar el menú lateral (sidebar)
function closeMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0";
    overlay.style.display = "none";
}

// Event listeners para abrir y cerrar el sidebar
hamburger.addEventListener('click', openMenu);
overlay.addEventListener('click', closeMenu);
closeSidebarButton.addEventListener('click', closeMenu);

// -------------------- Manejo del Carrito de Compras --------------------
// Función para abrir/cerrar el carrito
function cerrarCarrito() {
    carritoCompras.classList.toggle('open');
}

// Event listeners para mostrar/ocultar el carrito
botonCarritoCompras.addEventListener('click', cerrarCarrito);
botonCerrar.addEventListener('click', cerrarCarrito);

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

// Event listener para añadir productos al carrito al hacer click
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

// Función para calcular el total del carrito
function calcularTotal() {
    return carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0).toFixed(2);
}

// -------------------- Funciones de Incrementar/Decrementar/Eliminar --------------------
// Función para manejar los eventos de incrementar y decrementar cantidad
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

// Función para incrementar la cantidad de un producto en el carrito
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

// Función para disminuir la cantidad de un producto en el carrito
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

// Función para eliminar un producto del carrito
function eliminarDelCarrito(idProducto) {
    const productoEnCarrito = carrito.find(item => item.id === idProducto);
    const producto = productos.find(p => p.id === idProducto);
    if (producto && productoEnCarrito) {
        producto.stock += productoEnCarrito.cantidad;
    }
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarVisualizacionCarrito();
}

// Función para manejar los eventos de eliminar productos del carrito
function agregarEventosEliminar() {
    document.querySelectorAll('.eliminar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const idProducto = parseInt(e.target.getAttribute('data-id'));
            eliminarDelCarrito(idProducto);
        });
    });
}

// -------------------- Manejo del Proceso de Compra --------------------
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

// -------------------- Funciones de Productos --------------------
// Función para crear productos en el HTML
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

// Función para mostrar más productos
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

// -------------------- Inicialización --------------------
// Crear productos al cargar la página
crearProductos();
