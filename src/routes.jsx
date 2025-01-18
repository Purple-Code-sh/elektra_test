
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'

const Inicio = lazy(() => import('./pages/inicio/Inicio'));
const Carousel = lazy(() => import('./pages/carousel/Carousel'));
const Empleados = lazy(() => import('./pages/empleados/Empleados'));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/empleados" element={<Empleados />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
