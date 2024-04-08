import React from 'react'
import Button from './Button'
import Input from './Input'
import { useState } from 'react'
import { modificarConfiguracion } from '../../db/dbConfig'

//glucosa, carbohidratos, glucIdeal = 90 , ratio = 1/10, factor=1/30

function Configuracion() {
  const [ratio, setRatio] = useState(0);
  const [glucIdeal, setGlucIdeal] = useState(0);
  const [factor, setFactor] = useState(0);

  function handleChangeRatio(e){
    setRatio(parseFloat(e.target.value));
  }

  function handleChangeGlucIdeal(e){
    setGlucIdeal(parseFloat(e.target.value));
  }

  function handleChangeFactor(e){
    setFactor(parseFloat(e.target.value)); 
  }

  function handleClickGuardar(e){
    e.preventDefault();
    modificarConfiguracion(ratio,glucIdeal,factor);
  }


  return (
    <div className='h-screen flex align-center justify-center'>
        <div id="container-calculate" className="container w-1/2 text-center my-auto text-2xl flex flex-col bg-blurry-material space-y-10 p-10 min-w-fit ">
            <Input icon={"config.svg"} change={handleChangeRatio} type="number" placeholder="Ratio de insulina"/>
            <Input icon={"config.svg"} change={handleChangeGlucIdeal} type="number" placeholder="Valor ideal de glucemia"/>
            <Input icon={"config.svg"} change={handleChangeFactor} type="number" placeholder="Factor de sensibilidad"/>
            <Button btnName="GUARDAR" btnFn={handleClickGuardar}/>
        </div>
    </div>
  )
}

export default Configuracion