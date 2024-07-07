let carrito = [];

function agregarProducto(nombre, precio) {
    let productoExistente = carrito.find((producto) => producto.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    mostrarCarrito();
}

function agregarVariosProductos(nombre, precio, cantidad) {
    let productoExistente = carrito.find((producto) => producto.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, cantidad });
    }

    mostrarCarrito();
}

function eliminarProducto(nombre) {
    carrito = carrito.filter((producto) => producto.nombre !== nombre);
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';

    carrito.forEach((producto) => {
        carritoDiv.innerHTML += `<div>${producto.nombre} - $${producto.precio} - Cantidad: ${producto.cantidad} <button onclick="eliminarProducto('${producto.nombre}')">Eliminar</button></div>`;
    });

    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    if (total){
        carritoDiv.innerHTML += `<div>Total: $${total}</div>
                                <button onclick="comprar()" class="btnComprar">Comprar</button>`;
    } else {
        carritoDiv.innerHTML += `<div></div>`;
    }

}

function comprar() {
    // Aquí podrías agregar la lógica para proceder con la compra (sin pasarela de pago en este ejemplo)
    alert('Gracias por su compra!');
    carrito = [];
    mostrarCarrito();
}

function buscarProductos() {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach((producto) => {
        const nombre = producto.querySelector('h3').innerText.toLowerCase();
        if (nombre.includes(busqueda)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}
