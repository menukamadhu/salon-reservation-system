import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import RegiSalon from "./Pages/RegiSalon";
import RegiClient from "./Pages/RegiClient";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/RegiSalon" element={<RegiSalon/>}/>
      <Route path="/RegiClient" element={<RegiClient/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
