// Función: MostrarPresentación()

// EL usuario hace click en el botón 

function mostrarPresentacion(){
    
    const name = document.getElementById("inputName").value.trim();

    const AgePrompt = document.getElementById("inputAge").value;

    const age = Number(AgePrompt);

    const caja = document.getElementById("resultadoPresentacion");

    if (!name || !age ){
        caja.textContent = "Please, complete your name and age.";
        caja.className = "resultado visible error";
        return;
    }

    const isAdult = age >= 18;

    const mensaje = `
    Name: ${name}
    Age: ${age} years old
    Mayor de edad: ${isAdult}
    Type of "name": ${typeof name}
    Type of "age": ${typeof age}
    Type of "isMayordeEdad": ${typeof isAdult}
   `

   caja.textContent = mensaje;
   caja.className = "resultado visible ok";
}

// Función: detectarTipo
// Detecta el tipo de dato de lo que el usuario escribe

function detectarTipo(){

    const valueText = document.getElementById("inputValue").value.trim();
    const caja = document.getElementById("resultadoTipo");

    if(!valueText){
        caja.textContent = "Escribe un valor para analizar";
        caja.className = "resultado visible error";
    }
    

    let valueReal;
    let typeDetect;

    try{
        valueReal = eval(valueText);
        tipoDetect = typeof valueReal;

    } catch (e){
        valueReal = valueText;
        typeDetect = "string";
    }

    caja.innerHTML = `
    <strong>Valor ingresado:</strong> ${valueText}<br>
    <strong>Tipo detectado:</strong>
    <span class "badge badge-${typeDetect}">${typeDetect}</span><br>
    <strong>Es truthy:</strong> ${Boolean(valueReal)}
    `;
    caja.className = "resultado visible info";
}

function calcularDescuento(){
    const precioOriginal = Number(document.getElementById("inputPrecio").value);
    const porcentaje = Number(document.getElementById("inputDescuento").value);
    const caja = document.getElementById("resultadoDescuento");

    if (!precioOriginal || precioOriginal <= 0){
        caja.textContent = "Ingresa un precio válido mayor a 0.";
        caja.className = "resultado visible error";
    }
    if (porcentaje < 0 || porcentaje > 100 ){
        caja.textContent = "Ingresa un precio válido mayor a 0. ";
        caja.className = "resultado visible error";
        return;
    }

    const valorDescuento = precioOriginal * (porcentaje / 100);

    const precioFinal = precioOriginal - valorDescuento;

    caja.innerHTML = `
    Precio original = <strong>$${precioOriginal.toLocaleString("es-CO")}</strong><br>
    Descuento (${porcentaje}): <strong>-$${valorDescuento.toLocaleString("es-CO")}</strong><br>
    Precio final = <strong>$${precioFinal.toLocaleString("es-CO")}</strong>
    `;
    caja.className = "resultado visible ok"
}
