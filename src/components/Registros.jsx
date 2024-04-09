import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { useEffect, useState } from "react";
import { crmDB, obtenerRegistros } from "../../db/dbConfig";

function Registro() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    async function inicializarDB() {
      try {
        await crmDB();
        console.log("Base de datos inicializada");
        // Ahora puedes usar la base de datos
        const objRegistros = await obtenerRegistros();
        setRegistros(objRegistros);

      } catch (error) {
        console.error("Error al inicializar la base de datos:", error);
      }
    }
  
    inicializarDB();
  }, [crmDB]);


  return (
    <div className='h-screen flex align-center justify-center'>
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        <TableColumn>GLUCOSA</TableColumn>
        <TableColumn>CARBOHIDRATOS</TableColumn>
        <TableColumn>INSULINA</TableColumn>
      </TableHeader>
      <TableBody items={registros}>
        {(registro) => (
          <TableRow key={registros.indexOf(registro)}>
            <TableCell>{registro.glucosa}</TableCell>
            <TableCell>{registro.carbohidratos}</TableCell>
            <TableCell>{registro.insulina}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  )
}

export default Registro
