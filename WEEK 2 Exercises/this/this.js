
  // ════════════════════════════════════════════════════════
  //  ZONA DEL ESTUDIANTE — completa los métodos marcados
  // ════════════════════════════════════════════════════════

  const galeria = {
    imagenes: [
      { id: 1, emoji: "🌅", nombre: "Amanecer", vistas: 0 },
      { id: 2, emoji: "🌊", nombre: "Océano",   vistas: 0 },
      { id: 3, emoji: "🏔️", nombre: "Montaña",  vistas: 0 },
      { id: 4, emoji: "🌺", nombre: "Flores",   vistas: 0 },
      { id: 5, emoji: "🌃", nombre: "Ciudad",   vistas: 0 },
    ],

    seleccionar(id) {
      // ✏️ Paso 1: busca la imagen con this.imagenes.find()
      const img = this.imagenes.find(p => p.id === id) 
      // ✏️ Paso 2: si no existe, return
      if (!img) return
      // ✏️ Paso 3: img.vistas++
      img.vistas++
      // ✏️ Paso 4: this.renderizar()
      this.renderizar()
    },

    masVista() {
      // ✏️ Usa this.imagenes.reduce() para encontrar la de más vistas
      const maxVistas = Math.max(...this.imagenes.map(i => i.vistas));
      return this.imagenes.find(i => i.vistas === maxVistas);
    },

    // ════════════════════════════════════════════════════
    //  NO MODIFICAR — ya está implementado
    // ════════════════════════════════════════════════════
    renderizar() {
      const maxV = Math.max(...this.imagenes.map(i => i.vistas), 0);
      document.getElementById("galeriaContainer").innerHTML =
        this.imagenes.map(img => {
          const pct = maxV > 0 ? (img.vistas / maxV) * 100 : 0;
          return `
            <div class="galeria-card ${img.vistas > 0 ? "activa" : ""}"
                 onclick="galeria.seleccionar(${img.id})">
              <div class="emoji">${img.emoji}</div>
              <div class="nombre">${img.nombre}</div>
              <div class="vistas">${img.vistas} vista${img.vistas !== 1 ? "s" : ""}</div>
              <div class="barra"><div class="barra-fill" style="width:${pct}%"></div></div>
            </div>`;
        }).join("");
    },
  };

  // Inicializamos la galería al cargar
  galeria.renderizar();

  // ════════════════════════════════════════════════════════
  //  NO MODIFIQUES LO QUE ESTÁ ABAJO
  // ════════════════════════════════════════════════════════

  function verMasVista() {
    const caja  = document.getElementById("resultado");
    const total = galeria.imagenes.reduce((a, i) => a + i.vistas, 0);

    if (!total) {
      caja.textContent = "⚠️ Haz clic en algunas imágenes primero.";
      caja.className   = "resultado visible error";
      return;
    }

    try {
      const m = galeria.masVista();
      if (!m || typeof m.nombre === "undefined") {
        caja.innerHTML = "❌ <code>masVista()</code> no retorna una imagen válida. Revisa tu <code>reduce()</code>.";
        caja.className = "resultado visible error";
        return;
      }
      caja.innerHTML = `🏆 La más vista: <strong>${m.emoji} ${m.nombre}</strong> con <strong>${m.vistas} vista${m.vistas !== 1 ? "s" : ""}</strong>.`;
      caja.className = "resultado visible ok";
    } catch(e) {
      caja.innerHTML = `❌ Error en masVista(): <strong>${e.message}</strong>`;
      caja.className = "resultado visible error";
    }
  }

  function reiniciar() {
    galeria.imagenes.forEach(i => i.vistas = 0);
    galeria.renderizar();
    document.getElementById("resultado").className = "resultado";
  }
