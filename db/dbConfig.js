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
  };

  //Configuracion de la base de datos
  crmDB.onupgradeneeded = (e) => {
    const db = e.target.result;

    //crear la tabla
    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    //definir las columnas
    objectStore.createIndex("glucosa", "glucosa", { unique: false });
    objectStore.createIndex("carbohidratos", "carbohidratos", {
      unique: false,
    });
    objectStore.createIndex("insulina", "insulina", { unique: false });

    console.log("Columnas creadas");
  };
}

export function crearRegistro(gluc, carb, insu) {
  let transaction = DB.transaction(["crm"], "readwrite");

  transaction.oncomplete = function () {
    console.log("Transaccion completada");
  };

  transaction.onerror = function () {
    console.log("Hubo un error en la transaccion");
  };

  const objectStore = transaction.objectStore("crm");

  const nuevoRegistro = {
    glucosa: gluc,
    carbohidratos: carb,
    insulina: insu,
  };

  const peticion = objectStore.add(nuevoRegistro);
}
crmDB();
