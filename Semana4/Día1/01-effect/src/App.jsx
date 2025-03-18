import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contenido from "./Contenido";
import Info from "./Info";

const App = () => {
 
  return (
    // BrowserRouter funciona como contexto para las rutas
    <BrowserRouter>
      <h1>App</h1>
      {/* Routes envuelve las rutas, solamente pueden ir rutas dentro */}
      <Routes>
        {/* Route es cada ruta, necesita path y element */}
        <Route path='/' element={<Contenido />} />
        <Route path='/textos' element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App