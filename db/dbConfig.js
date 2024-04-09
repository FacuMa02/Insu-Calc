let DB;

export function crmDB() {
  return new Promise((resolve, reject) => {
    let crmDB = window.indexedDB.open("crm", 1);

    crmDB.onerror = () => {
      console.log("Hubo un error al crear la BD");
      reject("Error al crear la BD");
    };

    crmDB.onsuccess = () => {
      DB = crmDB.result;
      resolve();
    };

    crmDB.onupgradeneeded = (e) => {
      const db = e.target.result;

      // Crear la tabla de registros
      const registros = db.createObjectStore("registros", {
        keyPath: "crm",
        autoIncrement: true,
      });

      registros.createIndex("glucosa", "glucosa", { unique: false });
      registros.createIndex("carbohidratos", "carbohidratos", {
        unique: false,
      });
      registros.createIndex("insulina", "insulina", { unique: false });

      // Crear la tabla de configuracion
      const configuracion = db.createObjectStore("configuracion", {
        autoIncrement: true,
      });

      configuracion.createIndex("ratio", "ratio", { unique: false });
      configuracion.createIndex("glucIdeal", "glucIdeal", { unique: false });
      configuracion.createIndex("factor", "factor", { unique: false });
    };
  });
}

export function crearRegistro(gluc, carb, insu) {
  let transaction = DB.transaction(["registros"], "readwrite");

  transaction.oncomplete = function () {
    console.log("Transaccion completada");
  };

  transaction.onerror = function () {
    console.log("Hubo un error en la transaccion");
  };

  const registros = transaction.objectStore("registros");

  const nuevoRegistro = {
    glucosa: gluc,
    carbohidratos: carb,
    insulina: insu,
  };

  registros.add(nuevoRegistro);
}

export function modificarConfiguracion(ratio, glucIdeal, factor) {
  let transaction = DB.transaction(["configuracion"], "readwrite");

  transaction.oncomplete = function () {
    console.log("Configuracion modificada");
  };

  transaction.onerror = function () {
    console.log("Hubo un error en la modificacion de configuracion");
  };

  const configuraciones = transaction.objectStore("configuracion");

  const nuevaConfig = {
    ratio: ratio,
    glucIdeal: glucIdeal,
    factor: factor,
  };

  configuraciones.put(nuevaConfig, 1);
}

export function obtenerRegistros() {
  return new Promise((resolve, reject) => {
    const request = DB.transaction("registros")
      .objectStore("registros")
      .getAll();

    request.onerror = () => {
      console.log("Hubo un error en la transaccion obtenerConfiguracion");
      reject("Error al obtener la configuración");
    };

    request.onsuccess = () => {
      const registro = request.result;
      console.log(registro);
      resolve(registro);
    };
  });
}

export function obtenerConfiguracion() {
  return new Promise((resolve, reject) => {
    const request = DB.transaction("configuracion")
      .objectStore("configuracion")
      .get(1);

    request.onerror = () => {
      console.log("Hubo un error en la transaccion obtenerConfiguracion");
      reject("Error al obtener la configuración");
    };

    request.onsuccess = () => {
      const configuracion = request.result;
      resolve(configuracion);
    };
  });
}
