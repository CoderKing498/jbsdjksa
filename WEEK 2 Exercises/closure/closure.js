 const saludos = {
    español  : "¡Hola",
    inglés   : "Hello",
    francés  : "Bonjour",
    portugués: "Olá",
    Japones: "Konichiwa",
    Mandarin : "Ni hao",
    Lingala : "Mbote",
    Arabe : "Marhaban"
  };

  function crearSaludo(idioma) {
    return function(nombre)
    {return `${saludos[idioma]}, ${nombre}!`}
  }


  function probar() {
    const idioma = document.getElementById("e1Idioma").value;
    const nombre = document.getElementById("e1Nombre").value.trim();
    const caja   = document.getElementById("resultado");

    if (!nombre) {
      caja.textContent = "⚠️ Escribe un nombre para probar el saludo.";
      caja.className   = "resultado visible error";
      return;
    }

    // Intentamos llamar a la función que el estudiante debió completar
    try {
      const fn = crearSaludo(idioma);

      // Verificamos que crearSaludo retornó una función
      if (typeof fn !== "function") {
        caja.innerHTML = `
          ❌ <strong>crearSaludo()</strong> no está retornando una función.<br>
          Actualmente retorna: <code>${typeof fn}</code><br>
          Revisa el Paso 1 — debes escribir <code>return function(nombre) { ... }</code>
        `;
        caja.className = "resultado visible error";
        return;
      }

      const resultado = fn(nombre);

      // Verificamos que el resultado es un string con el saludo
      if (typeof resultado !== "string" || !resultado.includes(nombre)) {
        caja.innerHTML = `
          ⚠️ La función retorna <code>${resultado}</code>.<br>
          El resultado debería contener el nombre <strong>"${nombre}"</strong>.<br>
          Revisa el Paso 3 — el template literal: <code>\`\${saludos[idioma]}, \${nombre}!\`</code>
        `;
        caja.className = "resultado visible error";
        return;
      }

      caja.innerHTML = `
        ✅ <strong>¡Correcto!</strong><br>
        <code>crearSaludo("${idioma}")("${nombre}")</code> → <strong>"${resultado}"</strong><br><br>
        El closure guarda <code>idioma = "${idioma}"</code> aunque <code>crearSaludo()</code> ya terminó.
      `;
      caja.className = "resultado visible ok";

    } catch (e) {
      caja.innerHTML = `❌ Error al ejecutar tu función: <strong>${e.message}</strong><br>Revisa tu código.`;
      caja.className = "resultado visible error";
    }
  }

  function reiniciar() {
    document.getElementById("e1Nombre").value = "";
    document.getElementById("resultado").className = "resultado";
  }
