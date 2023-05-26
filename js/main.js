// Variables
var carrito = []; // Array para almacenar los productos en el carrito

// Lista de productos
var productos = [
    { nombre: "Producto 1", precio: 1000 },
    { nombre: "Producto 2", precio: 2250 },
    { nombre: "Producto 3", precio: 1980 },
    { nombre: "Producto 4", precio: 4480 },
    { nombre: "Producto 5", precio: 8745 },
    { nombre: "Producto 6", precio: 23000 },
    { nombre: "Producto 7", precio: 8800 },
    { nombre: "Producto 8", precio: 7640 },
    { nombre: "Producto 9", precio: 13900 },
    { nombre: "Producto 10", precio: 8480 }
];

// Objeto Producto
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Función para agregar un producto al carrito
function agregarProducto() {
    var seleccion = prompt("Ingrese el número del producto que desea agregar:\n" + listarProductos());

    var indiceProducto = parseInt(seleccion) - 1;

    if (indiceProducto >= 0 && indiceProducto < productos.length) {
        var producto = new Producto(productos[indiceProducto].nombre, productos[indiceProducto].precio);
        carrito.push(producto);
        alert("Producto agregado al carrito.");
    } else {
        alert("Selección inválida.");
    }
}

// Función para mostrar el carrito
function mostrarCarrito() {
    var total = 0;
    var mensaje = "Carrito de Compras:\n";

    if (carrito.length === 0) {
        mensaje += "El carrito está vacío.";
    } else {
        for (var i = 0; i < carrito.length; i++) {
            var producto = carrito[i];
            mensaje += producto.nombre + " - Precio: $" + producto.precio.toFixed(2) + "\n";
            total += producto.precio;
        }

        mensaje += "Total: $" + total.toFixed(2);
    }

    alert(mensaje);
}

// Función para listar los productos disponibles
function listarProductos() {
    var lista = "";
    for (var i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i].nombre + " - Precio: $" + productos[i].precio.toFixed(2) + "\n";
    }
    return lista;
}// Variables
var carrito = []; // Array para almacenar los productos en el carrito

// Lista de productos
var productos = [
    { nombre: "Producto 1", precio: 1000 },
    { nombre: "Producto 2", precio: 2250 },
    { nombre: "Producto 3", precio: 1980 },
    { nombre: "Producto 4", precio: 4480 },
    { nombre: "Producto 5", precio: 8745 },
    { nombre: "Producto 6", precio: 23000 },
    { nombre: "Producto 7", precio: 8800 },
    { nombre: "Producto 8", precio: 7640 },
    { nombre: "Producto 9", precio: 13900 },
    { nombre: "Producto 10", precio: 8480 }
];

// Objeto Producto
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Función para agregar un producto al carrito
function agregarProducto() {
    var seleccion = prompt("Ingrese el número del producto que desea agregar:\n" + listarProductos());

    var indiceProducto = parseInt(seleccion) - 1;

    if (indiceProducto >= 0 && indiceProducto < productos.length) {
        var producto = new Producto(productos[indiceProducto].nombre, productos[indiceProducto].precio);
        carrito.push(producto);
        alert("Producto agregado al carrito.");
    } else {
        alert("Selección inválida.");
    }
}

// Función para mostrar el carrito
function mostrarCarrito() {
    var total = 0;
    var mensaje = "Carrito de Compras:\n";

    if (carrito.length === 0) {
        mensaje += "El carrito está vacío.";
    } else {
        for (var i = 0; i < carrito.length; i++) {
            var producto = carrito[i];
            mensaje += producto.nombre + " - Precio: $" + producto.precio.toFixed(2) + "\n";
            total += producto.precio;
        }

        mensaje += "Total: $" + total.toFixed(2);
    }

    alert(mensaje);
}

// Función para listar los productos disponibles
function listarProductos() {
    var lista = "";
    for (var i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i].nombre + " - Precio: $" + productos[i].precio.toFixed(2) + "\n";
    }
    return lista;
}// Variables
var carrito = []; // Array para almacenar los productos en el carrito

// Lista de productos
var productos = [
    { nombre: "Producto 1", precio: 1000 },
    { nombre: "Producto 2", precio: 2250 },
    { nombre: "Producto 3", precio: 1980 },
    { nombre: "Producto 4", precio: 4480 },
    { nombre: "Producto 5", precio: 8745 },
    { nombre: "Producto 6", precio: 23000 },
    { nombre: "Producto 7", precio: 8800 },
    { nombre: "Producto 8", precio: 7640 },
    { nombre: "Producto 9", precio: 13900 },
    { nombre: "Producto 10", precio: 8480 }
];

// Objeto Producto
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Función para agregar un producto al carrito
function agregarProducto() {
    var seleccion = prompt("Ingrese el número del producto que desea agregar:\n" + listarProductos());

    var indiceProducto = parseInt(seleccion) - 1;

    if (indiceProducto >= 0 && indiceProducto < productos.length) {
        var producto = new Producto(productos[indiceProducto].nombre, productos[indiceProducto].precio);
        carrito.push(producto);
        alert("Producto agregado al carrito.");
    } else {
        alert("Selección inválida.");
    }
}

// Función para mostrar el carrito
function mostrarCarrito() {
    var total = 0;
    var mensaje = "Carrito de Compras:\n";

    if (carrito.length === 0) {
        mensaje += "El carrito está vacío.";
    } else {
        for (var i = 0; i < carrito.length; i++) {
            var producto = carrito[i];
            mensaje += producto.nombre + " - Precio: $" + producto.precio.toFixed(2) + "\n";
            total += producto.precio;
        }

        mensaje += "Total: $" + total.toFixed(2);
    }

    alert(mensaje);
}

// Función para listar los productos disponibles
function listarProductos() {
    var lista = "";
    for (var i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i].nombre + " - Precio: $" + productos[i].precio.toFixed(2) + "\n";
    }
    return lista;
}// Variables
var carrito = []; // Array para almacenar los productos en el carrito

// Lista de productos
var productos = [
    { nombre: "Producto 1", precio: 1000 },
    { nombre: "Producto 2", precio: 2250 },
    { nombre: "Producto 3", precio: 1980 },
    { nombre: "Producto 4", precio: 4480 },
    { nombre: "Producto 5", precio: 8745 },
    { nombre: "Producto 6", precio: 23000 },
    { nombre: "Producto 7", precio: 8800 },
    { nombre: "Producto 8", precio: 7640 },
    { nombre: "Producto 9", precio: 13900 },
    { nombre: "Producto 10", precio: 8480 }
];

// Objeto Producto
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Función para agregar un producto al carrito
function agregarProducto() {
    var seleccion = prompt("Ingrese el número del producto que desea agregar:\n" + listarProductos());

    var indiceProducto = parseInt(seleccion) - 1;

    if (indiceProducto >= 0 && indiceProducto < productos.length) {
        var producto = new Producto(productos[indiceProducto].nombre, productos[indiceProducto].precio);
        carrito.push(producto);
        alert("Producto agregado al carrito.");
    } else {
        alert("Selección inválida.");
    }
}

// Función para mostrar el carrito
function mostrarCarrito() {
    var total = 0;
    var mensaje = "Carrito de Compras:\n";

    if (carrito.length === 0) {
        mensaje += "El carrito está vacío.";
    } else {
        for (var i = 0; i < carrito.length; i++) {
            var producto = carrito[i];
            mensaje += producto.nombre + " - Precio: $" + producto.precio.toFixed(2) + "\n";
            total += producto.precio;
        }

        mensaje += "Total: $" + total.toFixed(2);
    }

    alert(mensaje);
}

// Función para listar los productos disponibles
function listarProductos() {
    var lista = "";
    for (var i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i].nombre + " - Precio: $" + productos[i].precio.toFixed(2) + "\n";
    }
    return lista;
}