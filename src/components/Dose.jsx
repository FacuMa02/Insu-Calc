import React from "react";
import Button from "./Button";

function Dosis({dosis}){
    if(dosis){
        return(
            <div className="flex w-fit text-xl space-y-3 p-3 m-5 flex-col justify-center items-center bg-blurry-material">
                <p className="font-semibold">Dosis recomendada: </p>
                <p>{dosis} u.</p>
                <Button btnName="GUARDAR" btnType="button" btnFn={()=>{window.alert("Guardado")}}/>
            </div>
        )
    }
}

export default Dosis;