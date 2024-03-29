import React from "react"
import Input from "./Input"
import Button from "./Button"

function Form({changeGluc, changeCarb, submitFn}){
    return(
        <div className="w-full">
            <form className="flex flex-col space-y-10 justify-center" action="/index.html" method="post"
            onSubmit={submitFn}>
                <Input placeholder={"Glucosa"} change={changeGluc} icon={"drop.svg"} min="10" max="600"/>
                <Input placeholder={"Carbohidratos"} change={changeCarb} icon={"apple.svg"} min="1" max="250"/>
                <Button btnType="submit" btnName="CALCULAR"/>
            </form>
        </div>
    )
}

export default Form
