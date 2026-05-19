
  const productos = [
    { nombre: "Laptop",  precio: 3500000, disponible: true  },
    { nombre: "Mouse",   precio:   85000, disponible: true  },
    { nombre: "Monitor", precio: 1200000, disponible: false },
    { nombre: "Teclado", precio:  150000, disponible: true  },
    { nombre: "Webcam",  precio:  250000, disponible: false },
  ];

  
  function obtenerDisponibles() {
    // ✏️ Completa el callback de filter
    return productos.filter(p => p.disponible);
  }

  function obtenerNombres() {
    // ✏️ Completa el callback de map
    return productos.map(p => p.nombre);
  }

  function obtenerTotal() {
    const disponibles = productos.filter(p => p.disponible);
    // ✏️ Completa el callback de reduce
    return disponibles.reduce((acc , p) => acc + p.precio, 0);
  }

  function probarFilter() {
    const caja = document.getElementById("resFilter");
    try {
      const r = obtenerDisponibles();
      if (!Array.isArray(r)) { caja.innerHTML = "❌ El resultado debe ser un array. ¿Usaste <code>.filter()</code>?"; caja.className = "resultado visible error"; return; }
      if (r.length !== 3) { caja.innerHTML = `❌ Se esperaban 3 productos, tu resultado tiene <strong>${r.length}</strong>.<br>Revisa tu callback — debe retornar <code>true</code> para los disponibles.`; caja.className = "resultado visible error"; return; }
      caja.innerHTML = `✅ <strong>¡Correcto!</strong> filter devolvió ${r.length} productos disponibles:<pre>${JSON.stringify(r.map(p => p.nombre), null, 2)}</pre>`;
      caja.className = "resultado visible ok";
    } catch(e) { caja.innerHTML = `❌ Error: <strong>${e.message}</strong>`; caja.className = "resultado visible error"; }
  }

  function probarMap() {
    const caja = document.getElementById("resMap");
    try {
      const r = obtenerNombres();
      if (!Array.isArray(r)) { caja.innerHTML = "❌ El resultado debe ser un array. ¿Usaste <code>.map()</code>?"; caja.className = "resultado visible error"; return; }
      if (r.length !== 5) { caja.innerHTML = `❌ map debe devolver el <strong>mismo número de elementos</strong> que el array original (5). Tu resultado tiene ${r.length}.`; caja.className = "resultado visible error"; return; }
      if (typeof r[0] !== "string") { caja.innerHTML = "❌ El callback debe retornar el <strong>nombre</strong> de cada producto (un string), no el objeto completo."; caja.className = "resultado visible error"; return; }
      caja.innerHTML = `✅ <strong>¡Correcto!</strong> map transformó ${productos.length} objetos en ${r.length} strings:<pre>${JSON.stringify(r, null, 2)}</pre>`;
      caja.className = "resultado visible ok";
    } catch(e) { caja.innerHTML = `❌ Error: <strong>${e.message}</strong>`; caja.className = "resultado visible error"; }
  }

  function probarReduce() {
    const caja = document.getElementById("resReduce");
    try {
      const r = obtenerTotal();
      if (typeof r !== "number") { caja.innerHTML = "❌ El resultado debe ser un número. ¿Usaste <code>.reduce()</code> correctamente?"; caja.className = "resultado visible error"; return; }
      if (r !== 3735000) { caja.innerHTML = `❌ El total esperado es <strong>$3.735.000</strong>, tu resultado es <strong>$${r.toLocaleString("es-CO")}</strong>.<br>Revisa: ¿filtraste los disponibles primero? ¿acumulas <code>acc + p.precio</code>?`; caja.className = "resultado visible error"; return; }
      caja.innerHTML = `✅ <strong>¡Correcto!</strong> reduce acumuló los precios de los 3 disponibles:<br>Total: <strong>$${r.toLocaleString("es-CO")}</strong>`;
      caja.className = "resultado visible ok";
    } catch(e) { caja.innerHTML = `❌ Error: <strong>${e.message}</strong>`; caja.className = "resultado visible error"; }
  }