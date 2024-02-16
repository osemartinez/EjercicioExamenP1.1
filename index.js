function calcularDescuento() {
    var productos = document.getElementsByClassName('product-input');
    var subtotal = 0;

    for (var i = 0; i < productos.length; i++) {
        if (!productos[i].value || isNaN(parseFloat(productos[i].value))) {
            alert('Por favor ingrese un valor numérico para todos los productos.');
            return;
        }
        subtotal += parseFloat(productos[i].value);
    }

    var discountLabel = document.getElementById('discount');
    var totalInput = document.getElementById('total');

    if (subtotal < 1000) {
        discountLabel.value = 'Descuento 0%';
        totalInput.value = subtotal.toFixed(2);

    } else if (subtotal >= 1000 && subtotal < 5000) {
        discountLabel.value = 'Descuento 10%';
        totalInput.value = (subtotal * 0.9).toFixed(2);


    } else if (subtotal >= 5000 && subtotal < 9000) {
        discountLabel.value = 'Descuento 20%';
        totalInput.value = (subtotal * 0.8).toFixed(2);


    } else if (subtotal >= 9000 && subtotal < 13000) {
        discountLabel.value = 'Descuento 30%';
        totalInput.value = (subtotal * 0.7).toFixed(2);

        
    } else {
        discountLabel.value = 'Descuento 40%';
        totalInput.value = (subtotal * 0.6).toFixed(2);
    }

    document.getElementById('subtotal').value = subtotal.toFixed(2);
}

function limpiarFormulario() {
    document.getElementById('discount-form').reset();
}
