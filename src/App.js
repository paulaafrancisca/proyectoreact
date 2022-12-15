import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage, AutoPage} from "./pages";
import TablaAutoPage from "./pages/TablaAuto";

import TablaUsuarioPage from "./pages/TablaUsuario";

const App=()=>{
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Auto" element={<AutoPage/>}/>
    <Route path="/TablaUsuario" element={<TablaUsuarioPage/>}/>
    <Route path="/TablaAuto" element={<TablaAutoPage/>}/>
    
  </Routes>
  </BrowserRouter>)
}

export default App;

