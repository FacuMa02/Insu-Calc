import Form from './Form'
import Dosis from './Dose'
import { useState, useEffect } from 'react';
import { crmDB,obtenerConfiguracion } from '../../db/dbConfig';

function Calculator() {

const [glucose, setGlucose] = useState(0);
const [carb, setCarb] = useState(0);
const [dosis, setDosis] = useState(0);

const [configuracion,setConfiguracion] = useState(null);

useEffect(() => {
  async function inicializarDB() {
    try {
      await crmDB();
      
      // Ahora puedes usar la base de datos
      const objConfig = await obtenerConfiguracion();
      
      setConfiguracion(objConfig);



    } catch (error) {
      console.error("Error al inicializar la base de datos:", error);
    }
  }

  inicializarDB();
}, [crmDB]);


function handleClickCalcular(e){
  e.preventDefault();
  const {ratio, glucIdeal, factor} = configuracion;
  calcularDosis(glucose, carb,ratio,glucIdeal,factor);
}

function handleChangeGluc(e){
setGlucose(parseFloat(e.target.value));
}

function handleChangeCarb(e){
setCarb(parseFloat(e.target.value));
}


function calcularDosis(glucosa, carbohidratos,ratio= 1/10, glucIdeal = 90 , factor = 1/30){
  let bolo_comida = carbohidratos * ratio;
  let bolo_correccion = (glucosa - glucIdeal) * factor;
  setDosis(Math.round(bolo_comida + bolo_correccion));
}
  return (
    <div className='my-auto flex flex-col space-y-12 justify-center items-center'> 
      <div id="container-calculate" className="container w-3/4 text-center my-auto text-2xl flex flex-col bg-blurry-material space-y-10 p-5 min-w-fit ">
        <h1 className="text-4xl font-bold">Calculadora de Insulina</h1>
        <Form submitFn={handleClickCalcular} changeGluc={handleChangeGluc} changeCarb={handleChangeCarb} />
      </div>
        <Dosis glucosa={glucose} carbohidratos={carb} dosis={dosis}/> 
    </div>
  )
}

export default Calculator