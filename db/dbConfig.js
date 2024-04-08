let DB;

export function crmDB() {
  //crear base de datos version 1.0
  let crmDB = window.indexedDB.open("crm", 1);

  //si hay un error
  crmDB.onerror = () => {
    console.log("Hubo un error al crear la BD");
  };

  //si se creo bien
  crmDB.onsuccess = () => {
    console.log("Base de datos creada");
    DB = crmDB.result;
    const rs = obtenerConfiguracion();
    console.log(rs);
  };

  //Configuracion de la base de datos
  crmDB.onupgradeneeded = (e) => {
    const db = e.target.result;

    //crear la tabla de registros
    const registros = db.createObjectStore("registros", {
      keyPath: "crm",
      autoIncrement: true,
    });

    //definir las columnas
    registros.createIndex("glucosa", "glucosa", { unique: false });
    registros.createIndex("carbohidratos", "carbohidratos", {
      unique: false,
    });
    registros.createIndex("insulina", "insulina", { unique: false });

    //crear la tabla de configuracion
    const configuracion = db.createObjectStore("configuracion", {
      autoIncrement: true,
    });

    configuracion.createIndex("ratio", "ratio", { unique: false });
    configuracion.createIndex("glucIdeal", "glucIdeal", {
      unique: false,
    });
    configuracion.createIndex("factor", "factor", { unique: false });
  };
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

export function obtenerRegistros() {}

export function obtenerConfiguracion() {
  const request = DB.transaction("configuracion")
    .objectStore("configuracion")
    .get(1);

  request.onsuccess = () => {
    const configuracion = request.result;
    return configuracion;
  };

  request.onerror = function () {
    console.log("Hubo un error en la transaccion obtenerCOnfiguracion");
  };
}

crmDB();
