import { BrowserRouter, Routes , Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Registro from "./components/Registros";
import Calculator from "./components/Calculator";
import Configuracion from "./components/Configuracion";
import { NextUIProvider } from "@nextui-org/system";

function App() {

  return (
    <NextUIProvider>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
              <Route path="/" index element={<Calculator  />}></Route>
              <Route path="/registros" index element={<Registro/>}></Route>
              <Route path="/configuracion" index element={<Configuracion/>}></Route>
          </Route>
        </Routes>
   </BrowserRouter>
    </NextUIProvider>
    )
}

export default App;

