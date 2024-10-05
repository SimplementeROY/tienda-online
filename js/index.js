// Variables globales
let carrito = [];

// Función para mostrar productos
function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos');
    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: ${producto.precio}€</p>
            <p>Stock: ${producto.stock}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        contenedorProductos.appendChild(divProducto);
    });
}

// Función para agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto && producto.stock > 0) {
        const itemEnCarrito = carrito.find(item => item.id === id);
        if (itemEnCarrito) {
            itemEnCarrito.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        producto.stock--;
        actualizarCarrito();
        actualizarProductos();
    } else {
        alert('Lo siento, este producto está agotado.');
    }
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.nombre} - Cantidad: ${item.cantidad} - Precio: ${item.precio * item.cantidad}€
            <button onclick="aumentarCantidad(${item.id})">+</button>
            <button onclick="disminuirCantidad(${item.id})">-</button>
            <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;
        listaCarrito.appendChild(li);
        total += item.precio * item.cantidad;
    });
    document.getElementById('totalCarrito').textContent = total;
}

// Función para aumentar cantidad
function aumentarCantidad(id) {
    const item = carrito.find(i => i.id === id);
    const producto = productos.find(p => p.id === id);
    if (item && producto.stock > 0) {
        item.cantidad++;
        producto.stock--;
        actualizarCarrito();
        actualizarProductos();
    }
}

// Función para disminuir cantidad
function disminuirCantidad(id) {
    const item = carrito.find(i => i.id === id);
    const producto = productos.find(p => p.id === id);
    if (item && item.cantidad > 1) {
        item.cantidad--;
        producto.stock++;
        actualizarCarrito();
        actualizarProductos();
    } else if (item && item.cantidad === 1) {
        eliminarDelCarrito(id);
    }
}

// Función para eliminar del carrito
function eliminarDelCarrito(id) {
    const index = carrito.findIndex(i => i.id === id);
    const item = carrito[index];
    const producto = productos.find(p => p.id === id);
    producto.stock += item.cantidad;
    carrito.splice(index, 1);
    actualizarCarrito();
    actualizarProductos();
}

// Función para actualizar productos
function actualizarProductos() {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';
    mostrarProductos();
}

// Función para mostrar/ocultar carrito
function toggleCarrito() {
    const carrito = document.getElementById('carrito');
    carrito.classList.toggle('oculto');
}

// Función para finalizar compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega productos antes de finalizar la compra.');
    } else {
        alert('¡Gracias por tu compra!');
        carrito = [];
        actualizarCarrito();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    document.getElementById('verCarrito').addEventListener('click', toggleCarrito);
    document.getElementById('finalizarCompra').addEventListener('click', finalizarCompra);
});