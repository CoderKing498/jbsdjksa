function clasificarEdad(){

    const edad = Number(document.getElementById("inputEdad").value);

    const caja = document.getElementById("resultadoEdad");

    if(!edad || isNaN(edad) || edad <= 0){
        box.textContent = "Please, enter a valid number";
        box.className = "resultado visible error";
        return;
    }

    let mensaje;
    let clase;

    if (edad< 0 || edad > 120){
        mensaje = "Age out of range (0/120)"
        clase = "resultado visible error"
    } else if (edad <= 11){
        mensaje = `🧒 At ${edad} years old you are a child`
        clase = "resultado visible info"
    } else if (edad <= 17){
        mensaje = `🧑 At ${edad} years old you are a teenager`
        clase = "resultado visible warning"
    }  else if (edad <= 64){
        mensaje = `🧑‍💼 At ${edad} years old you are an adult ✅`
        clase = "resultado visible ok"
    } else {
        mensaje = `👴 At ${edad} years old you are a senior citizen`
        clase = "resultado visible info"
    }

    box.textContent = mensaje;
    box.className = clase;
}