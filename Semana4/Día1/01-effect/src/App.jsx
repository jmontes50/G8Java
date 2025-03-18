import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contenido from "./Contenido";
import Info from "./Info";
import Navegacion from "./Navegacion";
import Detalle from "./Detalle";

const App = () => {
 
  return (
    // BrowserRouter funciona como contexto para las rutas
    <BrowserRouter>
      <h1>App</h1>
      <Navegacion />
      {/* Routes envuelve las rutas, solamente pueden ir rutas dentro */}
      <Routes>
        {/* Route es cada ruta, necesita path y element */}
        <Route path='/' element={<Contenido />} />
        <Route path='/textos' element={<Info />} />
        {/* la forma de indicar un parametro es dandole :previos al nombre de lo que deseemos pasar */}
        {/* <Route path='/detalle/:nombre' element={<Detalle />} /> */}
        <Route path='/detalle' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App