import { useState } from "react";
import Form from "./components/Form";

function App() {
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
    <div id="main-container" className="h-screen w-screen mx-auto px-4 flex flex-col justify-center items-center min-w-600 bg-gradient-1">
      <div id="container-calculate" className="container w-3/4 text-center my-auto text-2xl flex flex-col bg-blurry-material space-y-10 p-5 rounded-lg min-w-fit ">
        <h1 className="text-4xl font-bold">Calculadora de Insulina</h1>
        <Form submitFn={handleClickCalcular} changeGluc={handleChangeGluc} changeCarb={handleChangeCarb} />
        <p><span className="font-semibold">Dosis recomendada : </span>{dosis? dosis + " u": "Ingrese datos"}</p>
      </div>
      <footer className="p-2">
        <p>@Facundo Maidana. Todos los derehos reservados</p>
      </footer>
    </div>
  )
}

export default App

// background-color: #8EC5FC;
// background-image: linear-gradient(65deg, #8EC5FC 0%, #E0C3FC 100%);
