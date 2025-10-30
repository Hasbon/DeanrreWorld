import React from 'react';
import './styles/App.css';
import Menu from './componentes/menu/menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Razas from './view/razas/razas.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<div className="App-header"><h1>🎲 Deanrre - Mundo de Juego de Rol</h1><p>Bienvenido al mundo de Deanrre</p><p className="subtitle">Sistema de gestión para tu campaña de rol</p></div>} />
          <Route path="/historia" element={<div style={{padding: 16}}><h2>Historia</h2></div>} />
          <Route path="/razas" element={<Razas />} />
          <Route path="/creacion-personajes" element={<div style={{padding: 16}}><h2>Creación de Personajes</h2></div>} />
          <Route path="/profesiones" element={<div style={{padding: 16}}><h2>Profesiones</h2></div>} />
          <Route path="/jugadores" element={<div style={{padding: 16}}><h2>Jugadores</h2></div>} />
          <Route path="/pnj" element={<div style={{padding: 16}}><h2>PNJ</h2></div>} />
          <Route path="/cronica" element={<div style={{padding: 16}}><h2>Crónica</h2></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

