function CalcularCostoPedido(cantidad, precio) {
    // Calculamos el total sin descuento
    let totalBase = cantidad * precio;
    return totalBase;
}

function mostrarPedido() {
    // Obtenemos los datos de la pantalla
    let nombre = document.getElementById("nombreCliente").value;
    let cantidad = Number(document.getElementById("cantidadProductos").value);
    let precio = Number(document.getElementById("precioProducto").value);

    // Llamamos a nuestra función
    let costoTotal = CalcularCostoPedido(cantidad, precio);

    // Preguntamos si son más de 10 para el descuento
    if (cantidad > 10) {
        let descuento = costoTotal * 0.20;
        costoTotal = costoTotal - descuento;
        alert("¡Aplicamos tu descuento del 20% por llevar más de 10 productos!");
    }

    // Mostramos el resultado en el HTML
    let mensaje = "Hola " + nombre + ", el total a pagar es: $" + costoTotal;
    document.getElementById("resultadoFinal").innerText = mensaje;
}
