// Seleccionar elementos del DOM
const contenedorProductos = document.getElementById('productos');
const botonCarritoCompras = document.getElementById('shopping-cart-btn');
const carritoCompras = document.querySelector('.shopping-cart');
const listaCarrito = document.getElementById('items-list');
const botonVaciarCarrito = document.getElementById('clear-items-btn');
const botonComprar = document.getElementById('purchase-btn');
const botonCerrar = document.querySelector('.close-btn');
let carrito = [];

// Función para mostrar/ocultar el carrito
botonCarritoCompras.addEventListener('click', () => {
    carritoCompras.classList.toggle('hidden');
});

botonCerrar.addEventListener('click', () => {
    carritoCompras.classList.toggle('hidden');
});

// Función para crear productos en HTML
function crearProductos() {
    contenedorProductos.innerHTML = '';
    productos.forEach(producto => {
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

        carritoCompras.classList.remove('hidden');

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
                <p>${(item.precio * item.cantidad).toFixed(2)} €</p>
            </div>
            <div class="item-botonesCarrito">
                <button class="btn decrementar" data-id="${item.id}">-</button>
                <p>${item.cantidad}</p>
                <button class="btn incrementar" data-id="${item.id}">+</button>
                <button class="btn eliminar" data-id="${item.id}"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
        listaCarrito.appendChild(li);
    });
    // Actualizar el precio total
    const total = calcularTotal();
    document.getElementById('total-price').textContent = `Total: ${total} €`;

    // Agregar eventos para los botones después de actualizar el carrito
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

// Inicialización
crearProductos();


//Calcular total
function calcularTotal() {
    let total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    return total.toFixed(2); // Formato a 2 decimales
}

function agregarEventosIncrementoDecremento() {
    // Botones de incrementar cantidad
    document.querySelectorAll('.incrementar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const idProducto = parseInt(e.target.getAttribute('data-id'));
            incrementarCantidad(idProducto);
        });
    });

    // Botones de disminuir cantidad
    document.querySelectorAll('.decrementar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const idProducto = parseInt(e.target.getAttribute('data-id'));
            disminuirCantidad(idProducto);
        });
    });
}
function incrementarCantidad(idProducto) {
    const productoEnCarrito = carrito.find(item => item.id === idProducto);
    const producto = productos.find(p => p.id === idProducto);  // Buscar el producto original en el array 'productos'

    // Verificar que el producto existe y tiene stock disponible
    if (productoEnCarrito && producto.stock > 0) {
        productoEnCarrito.cantidad++;  // Aumentar la cantidad en el carrito
        producto.stock--;  // Reducir el stock del producto
        actualizarVisualizacionCarrito();  // Actualizar la visualización del carrito
    } else {
        alert('No hay suficiente stock para este producto');
    }
}


function disminuirCantidad(idProducto) {
    const productoEnCarrito = carrito.find(item => item.id === idProducto);
    if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad--;
    } else {
        // Si la cantidad llega a 0, lo removemos del carrito
        carrito = carrito.filter(item => item.id !== idProducto);
    }
    actualizarVisualizacionCarrito();
}

function eliminarDelCarrito(idProducto) {
    // Eliminar el producto del carrito
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarVisualizacionCarrito();
}
function agregarEventosEliminar() {
    // Botones de eliminar
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
        carrito = []; // Vaciar el carrito tras la compra
        actualizarVisualizacionCarrito();
    }
});