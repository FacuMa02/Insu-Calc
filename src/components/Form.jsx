import React from "react"
import Input from "./Input"
import Button from "./Button"

function Form({changeGluc, changeCarb, submitFn}){
    return(
        <div className="w-full flex justify-center">
            <form className="flex flex-col space-y-12 justify-center w-3/4" action="/index.html" method="post"
            onSubmit={submitFn}>
                <Input type="number" placeholder={"Glucosa"} change={changeGluc} icon={"drop.svg"} min="10" max="600"/>
                <div className="inline-table space-x-3">
                <Input type="number" placeholder={"Carbohidratos"} change={changeCarb} icon={"apple.svg"} min="1" max="250"/>
                <a className="text-indigo-700 table-cell align-middle w-1/4" href="https://www.fatsecret.com.ar/Default.aspx?pa=recsh">Alimentos</a>
                </div>
                <Button btnType="submit" btnName="CALCULAR"/>
            </form>
        </div>
    )
}

export default Form
