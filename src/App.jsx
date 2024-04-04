import { BrowserRouter, Routes , Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Registro from "./components/Registros";
import Calculator from "./components/Calculator";


function App() {
  return (
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
              <Route path="/" index element={<Calculator/>}></Route>
              <Route path="/registros" index element={<Registro/>}></Route>
          </Route>
        </Routes>
   </BrowserRouter>
    )
}

export default App

// background-color: #8EC5FC;
// background-image: linear-gradient(65deg, #8EC5FC 0%, #E0C3FC 100%);
