import React from "react";
import Button from "./Button";
import { crearRegistro } from "../../db/dbConfig";

function Dosis({glucosa,carbohidratos,dosis}){
    function guardarRegistro(){
        crearRegistro(glucosa,carbohidratos,dosis);
    }
    if(dosis){
        return(
            <div className="flex w-fit text-xl space-y-3 p-3 flex-col items-center self-center bg-blurry-material">
                <p className="font-semibold">Dosis recomendada: </p>
                <p>{dosis} u.</p>
                <Button btnName="GUARDAR" btnType="button" btnFn={guardarRegistro}/>
            </div>
        )
    }
}

export default Dosis;