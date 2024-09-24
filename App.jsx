import React from 'react';
import BarraNavegacion from './components/BarraNavegacion';
import ListaContenedoraProductos from './components/ListaContenedoraProductos';

function App() {
  return (
    <div>
      <BarraNavegacion />
      <ListaContenedoraProductos mensaje="¡Bienvenido a Mi Tienda!" />
    </div>
  );
}

export default App;
