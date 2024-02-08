

// Función para generar los tulipanes dinámicamente dependiendo del ancho del dispositivo
function generateTulipan() {
    var flowersContainer = document.getElementById('flowers');
    flowersContainer.innerHTML = ''; // Limpiamos cualquier tulipán existente

    var deviceWidth = window.innerWidth; // Ancho del dispositivo

    var numTulipans = Math.floor(deviceWidth / 120); // Calculamos el número de tulipanes basado en el ancho del dispositivo y el ancho base de cada tulipán

    for (var i = 0; i < numTulipans; i++) {
        var tulipan = document.createElement('div');
        tulipan.classList.add('tulipan');
        tulipan.innerHTML = `
            <div class="tulipan__head">
                <div class="cupula"></div>
                <div class="petalo"></div>
                <div class="petalo"></div>
            </div>
            <div class="tulipan__body">
                <div class="tallo">
                    <div class="leaf"></div>
                    <div class="leaf"></div>
                </div>
            </div>
        `;
        flowersContainer.appendChild(tulipan);
    }
}

// Llamamos a la función al cargar la página y al cambiar el tamaño de la ventana
window.onload = generateTulipan;
window.onresize = generateTulipan;