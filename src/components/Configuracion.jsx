import React from 'react'
import Button from './Button'
import Input from './Input'

//glucosa, carbohidratos, glucIdeal = 90 , ratio = 1/10, factor=1/30

function Configuracion() {
  return (
    <div className='h-screen flex align-center justify-center'>
        <div id="container-calculate" className="container w-1/2 text-center my-auto text-2xl flex flex-col bg-blurry-material space-y-10 p-10 min-w-fit ">
            <Input icon={"config.svg"} type="text" placeholder="Ratio de insulina"/>
            <Input icon={"config.svg"} type="text" placeholder="Valor ideal de glucemia"/>
            <Input icon={"config.svg"} type="text" placeholder="Factor de sensibilidad"/>
            <Button btnName="GUARDAR"/>
        </div>
    </div>
  )
}

export default Configuracion