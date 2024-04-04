import React from 'react'
import { useState } from 'react';
import Form from './Form'
import Dosis from './Dose'

function Calculator() {
  const [glucose, setGlucose] = useState(0);
  const [carb, setCarb] = useState(0);
  const [dosis, setDosis] = useState(0);
  
  function handleClickCalcular(e){
    e.preventDefault();
    calcularDosis(glucose, carb);
  }

  function handleChangeGluc(e){
    setGlucose(parseFloat(e.target.value));
  }

  function handleChangeCarb(e){
    setCarb(parseFloat(e.target.value));
  }

  function calcularDosis(glucosa, carbohidratos, glucIdeal = 90 , ratio = 1/10, factor=1/30){
    let bolo_comida = carbohidratos * ratio;
    let bolo_correccion = (glucosa - glucIdeal) * factor;
    setDosis(Math.round(bolo_comida + bolo_correccion));
  }

  return (
    <div className='h-screen flex align-center justify-center'>
      <div id="container-calculate" className="container w-3/4 text-center my-auto text-2xl flex flex-col bg-blurry-material space-y-10 p-5 min-w-fit ">
        <h1 className="text-4xl font-bold">Calculadora de Insulina</h1>
        <Form submitFn={handleClickCalcular} changeGluc={handleChangeGluc} changeCarb={handleChangeCarb} />
      </div>
        <Dosis dosis={dosis}/>
    </div>
  )
}

export default Calculator