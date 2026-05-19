 // ════════════════════════════════════════════════════════
  //  ZONA DEL ESTUDIANTE — completa los métodos marcados
  // ════════════════════════════════════════════════════════

    function crearCalculadora() {

      const _historial = []; // CLOSURE — no modifiques esta línea

      return {

        operar(a, op, b, alCalcular) {
          // ✏️ Paso 1: declara "let resultado" y calcula con switch(op)
          let resultado;
          switch (op) {
            case "+":
              resultado = a + b
              break;
            case "-":
              resultado = a - b
              break
            case "*":
              resultado = a * b
              break
            case "/":
              resultado = a / b
            default:
              break;
          }
          // ✏️ Paso 2: guarda en _historial con push()
          _historial.push({ expresion: `${a} ${op} ${b}`, resultado, operacion: op })
          // ✏️ Paso 3: si alCalcular es función, llámala con el resultado
          if (typeof alCalcular === "function") {
            alCalcular(resultado)
          }
          // ✏️ Paso 4: retorna resultado
          return resultado
        },

        obtenerHistorial() {
          // ✏️ Retorna una COPIA del _historial con spread [...array]
          return [..._historial]
        },

        estadisticas() {
          // ✏️ Paso 1: const hist = this.obtenerHistorial()
          const hist = this.obtenerHistorial()
          // ✏️ Paso 2: si !hist.length → return null
          if(!hist.length) return null
          // ✏️ Paso 3: const mayor = hist.reduce(...)
          const mayor = hist.reduce((acc, op) => acc.resultado > op.resultado ? acc : op)
          // ✏️ Paso 4: return { totalOps: hist.length, mayor }
          return { totalOps: hist.length, mayor}
        },

        limpiar() {
          _historial.length = 0; // ya implementado — no modificar
        },
      };
    }

    // Creamos la instancia
    const calc = crearCalculadora();


  // ════════════════════════════════════════════════════════
  //  NO MODIFIQUES LO QUE ESTÁ ABAJO
  // ════════════════════════════════════════════════════════

  function calcular() {
    const a    = parseFloat(document.getElementById("calcA").value);
    const b    = parseFloat(document.getElementById("calcB").value);
    const op   = document.getElementById("calcOp").value;
    const caja = document.getElementById("resultado");

    if (isNaN(a) || isNaN(b)) {
      caja.textContent = "⚠️ Ingresa dos números válidos.";
      caja.className   = "resultado visible error";
      return;
    }

    try {
      let callbackEjecutado = false;

      calc.operar(a, op, b, function(resultado) {
        callbackEjecutado = true;

        if (typeof resultado === "undefined" || isNaN(resultado)) {
          caja.innerHTML = "❌ El resultado está indefinido. Revisa tu <code>switch</code> — ¿retornaste el valor?";
          caja.className = "resultado visible error";
          return;
        }

        const d = document.getElementById("calcDisplay");
        d.textContent = resultado;
        d.classList.add("nuevo");
        setTimeout(() => d.classList.remove("nuevo"), 600);

        let hist = [];
        try { hist = calc.obtenerHistorial() || []; } catch(e) {}

        document.getElementById("calcHistorial").innerHTML =
          hist.map(h => `<div class="entrada">${h.expresion} = <strong>${h.resultado}</strong></div>`).join("");

        caja.innerHTML = `
          ✅ <strong>${a} ${op} ${b} = ${resultado}</strong><br>
          CALLBACK ejecutado ✓ · CLOSURE: ${hist.length} operación(es) guardada(s).
        `;
        caja.className = "resultado visible ok";
      });

      if (!callbackEjecutado) {
        caja.innerHTML = "❌ El callback no se ejecutó. Revisa el Paso 3 — debes llamar a <code>alCalcular(resultado)</code>.";
        caja.className = "resultado visible error";
      }
    } catch(e) {
      caja.innerHTML = `❌ Error: <strong>${e.message}</strong>`;
      caja.className = "resultado visible error";
    }
  }

  function verEstadisticas() {
    const caja = document.getElementById("resultado");
    try {
      const stats = calc.estadisticas();
      if (!stats) {
        caja.textContent = "⚠️ Realiza al menos una operación primero.";
        caja.className   = "resultado visible error";
        return;
      }
      caja.innerHTML = `
        📊 <strong>Estadísticas:</strong><br>
        Total de operaciones: <strong>${stats.totalOps}</strong><br>
        Mayor resultado: <strong>${stats.mayor ? stats.mayor.expresion + " = " + stats.mayor.resultado : "—"}</strong>
      `;
      caja.className = "resultado visible info";
    } catch(e) {
      caja.innerHTML = `❌ Error en estadisticas(): <strong>${e.message}</strong> — revisa que <code>this.obtenerHistorial()</code> esté bien.`;
      caja.className = "resultado visible error";
    }
  }

  function limpiarCalc() {
    calc.limpiar();
    document.getElementById("calcDisplay").textContent  = "0";
    document.getElementById("calcHistorial").innerHTML  = "";
    document.getElementById("resultado").className      = "resultado";
  }