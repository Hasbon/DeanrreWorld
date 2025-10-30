import React, { useState } from "react";
import "./menu.css";

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
      <div className={`menu-mobile-overlay${open ? " active" : ""}`} onClick={close} />
      <nav className="menu-container1">
        <div className="menu-logo button-container">
          <a className="menu-navlink1" href="/" aria-label="Inicio" />
        </div>

        <button className={`menu-hamburger${open ? " active" : ""}`} onClick={toggle} aria-label="Abrir menú">
          <span />
          <span />
          <span />
        </button>

        <div className="menu-sub-menu">
          <div className="botonInicio"><a className="button" href="/">Inicio</a></div>
          <div className="botonHistoria"><a className="button" href="/historia">Historia</a></div>
          <div className="botonRazas"><a className="button" href="/razas">Razas</a></div>
          <div className="botonCreacion"><a className="button" href="/creacion-personajes">Creación</a></div>
          <div className="botonProfesiones"><a className="button" href="/profesiones">Profesiones</a></div>
          <div className="botonJugadores"><a className="button" href="/jugadores">Jugadores</a></div>
          <div className="botonPnj"><a className="button" href="/pnj">PNJ</a></div>
          <div className="botonCronica"><a className="button" href="/cronica">Crónica</a></div>
        </div>
      </nav>

      <div className={`menu-mobile${open ? " active" : ""}`}>
        <button className={`menu-hamburger${open ? " active" : ""}`} onClick={toggle} aria-label="Cerrar menú">
          <span />
          <span />
          <span />
        </button>
        <div className="menu-sub-menu" onClick={close}>
          <div className="botonInicio button-container"><a className="button" href="/">Inicio</a></div>
          <div className="botonHistoria button-container"><a className="button" href="/historia">Historia</a></div>
          <div className="botonRazas button-container"><a className="button" href="/razas">Razas</a></div>
          <div className="botonCreacion button-container"><a className="button" href="/creacion-personajes">Creación</a></div>
          <div className="botonProfesiones button-container"><a className="button" href="/profesiones">Profesiones</a></div>
          <div className="botonJugadores button-container"><a className="button" href="/jugadores">Jugadores</a></div>
          <div className="botonPnj button-container"><a className="button" href="/pnj">PNJ</a></div>
          <div className="botonCronica button-container"><a className="button" href="/cronica">Crónica</a></div>
        </div>
      </div>

      <div className="menu-spacer" />
    </>
  );
};

export default Menu;


