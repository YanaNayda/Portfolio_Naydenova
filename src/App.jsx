import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
 import { Canvas } from "@react-three/fiber";
import useCustomCursor from '../src/components/CustomCursor';

function App() {
   useCustomCursor();
  return (
    <>
      <style>
        {`
          html, body, *, button, a, input,
          .disabled, a:disabled, input:disabled {
            cursor: url('/blackcircle.svg'), auto;
          }

          button:hover, a:hover, input:hover, .hover:hover {
            cursor: url('/spiral.svg'), auto;
          }

          button:focus, a:focus, input:focus, .focus:focus {
            cursor: url('/spiral.svg'), auto;
          }
        `}
      </style>
    <BrowserRouter>
      <Routes>
 

        <Route index element={<Home/>} />
         <Route path="*" element={<NotFound />} />
         
      </Routes>
       
    </BrowserRouter>
    
       
    </>
  )
}

export default App
