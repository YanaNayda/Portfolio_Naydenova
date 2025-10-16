import { StrictMode, use } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useGLTF } from '@react-three/drei';
import { GLTFLoader, MeshoptDecoder } from 'three-stdlib';  
 

// Настройка MeshoptDecoder
GLTFLoader.prototype.setMeshoptDecoder = async function () {
  await MeshoptDecoder.ready;
  return MeshoptDecoder;
};

// Настройка Draco-декодера
useGLTF.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

// Предзагрузка моделей
 
useGLTF.preload('/models/68c8604461035c30823dc86c.glb');
useGLTF.preload('/models/68c8604461035c30823dc86cThankful.glb');
useGLTF.preload('/models/68c8604461035c30823dc86cCopy.glb');
useGLTF.preload('/models/Room6.glb');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
