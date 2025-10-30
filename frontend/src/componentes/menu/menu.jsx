import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
      <div className="menu-bar">
        <div className="radio-inputs">
          <label className="radio">
            <NavLink className={({ isActive }) => `name${isActive ? ' active' : ''}`} to="/" end>
              Inicio
            </NavLink>
          </label>
          <label className="radio">
            <NavLink className={({ isActive }) => `name${isActive ? ' active' : ''}`} to="/historia">
              Historia
            </NavLink>
          </label>
          <label className="radio">
            <NavLink className={({ isActive }) => `name${isActive ? ' active' : ''}`} to="/razas">
              Razas
            </NavLink>
          </label>
          <label className="radio">
            <NavLink className={({ isActive }) => `name${isActive ? ' active' : ''}`} to="/creacion-personajes">
              Creación
            </NavLink>
          </label>
          <label className="radio">
            <NavLink className={({ isActive }) => `name${isActive ? ' active' : ''}`} to="/profesiones">
              Profesiones
            </NavLink>
          </label>
          <label className="radio">
            <NavLink className={({ isActive }) => `name${isActive ? ' active' : ''}`} to="/jugadores">
              Jugadores
            </NavLink>
          </label>
          <label className="radio">
            <NavLink className={({ isActive }) => `name${isActive ? ' active' : ''}`} to="/pnj">
              PNJ
            </NavLink>
          </label>
          <label className="radio">
            <NavLink className={({ isActive }) => `name${isActive ? ' active' : ''}`} to="/cronica">
              Crónica
            </NavLink>
          </label>
        </div>
      </div>
      <div className="menu-spacer" />
    </>
  );
};

export default Menu;


