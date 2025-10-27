import React, { useState, useEffect } from 'react';
import './profesiones.css';

interface Profesion {
  id: number;
  clase: string;
  d10: string;
  d8: string;
  d6: string;
  d4: string;
}

const Profesiones: React.FC = () => {
  const [profesiones, setProfesiones] = useState<Profesion[]>([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    fetch('/database/Profesiones.json')
      .then(response => response.json())
      .then(data => {
        if (data && data.data) {
          setProfesiones(data.data);
        }
      })
      .catch(error => {
        console.error('Error cargando profesiones:', error);
        // Datos de respaldo
        loadDefaultData();
      });
  }, []);

  const loadDefaultData = () => {
    const defaultData: Profesion[] = [
      { id: 1, clase: 'ASESINO', d10: 'JUEGO DE MANOS', d8: 'SIGILO', d6: 'CARRERA', d4: 'ESQUIVAR' },
      { id: 2, clase: 'CLERIGO', d10: 'MEDICINA', d8: 'ARCANO', d6: 'PERSPICACIA', d4: 'RELIGION' },
      { id: 3, clase: 'GUARDIAN', d10: 'BLOQUEO', d8: 'RESILIENCIA', d6: 'ATLETISMO', d4: 'CARRERA' },
      { id: 4, clase: 'ESPIA', d10: 'ENGAÑO', d8: 'INTERPRETACION', d6: 'INVESTIGACION', d4: 'SIGILO' },
      { id: 5, clase: 'INGENIERO', d10: 'INVENTAR', d8: 'SUPERVIVENCIA', d6: 'COMERCIO', d4: 'INVESTIGACION' },
      { id: 6, clase: 'MAGO', d10: 'ARCANO', d8: 'HISTORIA', d6: 'INVENTAR', d4: 'TRAYECTORIA' },
      { id: 7, clase: 'PIRATA', d10: 'INTIMIDACION', d8: 'ENGAÑO', d6: 'PERSPICACIA', d4: 'JUEGO DE MANOS' },
      { id: 8, clase: 'LADRON', d10: 'JUEGO DE MANOS', d8: 'ACROBACIA', d6: 'SIGILO', d4: 'ATLETISMO' },
      { id: 9, clase: 'DOMADOR BESTIAS', d10: 'TRATO CON ANIMALES', d8: 'SUPERVIVENCIA', d6: 'MONTURA', d4: 'VISION' },
      { id: 10, clase: 'GUERRERO', d10: 'ATLETISMO', d8: 'CARRERA', d6: 'JUEGO DE MANOS', d4: 'INTIMIDACION' },
      { id: 11, clase: 'INVOCADOR', d10: 'ARCANO', d8: 'HISTORIA', d6: 'RESILIENCIA', d4: 'TRATO CON ANIMALES' },
      { id: 12, clase: 'TRAMPERO', d10: 'INVENTAR', d8: 'PERSPICACIA', d6: 'TRAYECTORIA', d4: 'SUPERVIVENCIA' },
      { id: 13, clase: 'BRUJO VUDU', d10: 'INVENTAR', d8: 'ARCANO', d6: 'MEDICINA', d4: 'HISTORIA' },
      { id: 14, clase: 'ILUSIONISTA', d10: 'PERSUACION', d8: 'ENGAÑO', d6: 'ARCANO', d4: 'APRENDER' },
      { id: 15, clase: 'POLITICO', d10: 'PERSUACION', d8: 'PERCEPCION', d6: 'HISTORIA', d4: 'COMERCIO' },
      { id: 16, clase: 'DRUIDA', d10: 'SUPERVIVENCIA', d8: 'TRATO CON ANIMALES', d6: 'CARRERA', d4: 'MONTURA' },
      { id: 17, clase: 'ARQUERO', d10: 'TRAYECTORIA', d8: 'VISION', d6: 'JUEGO DE MANOS', d4: 'ACROBACIA' },
      { id: 18, clase: 'ESPADACHIN', d10: 'JUEGO DE MANOS', d8: 'ESQUIVAR', d6: 'BLOQUEO', d4: 'CARRERA' },
      { id: 19, clase: 'BARDO', d10: 'PERSUACION', d8: 'ARCANO', d6: 'ENGAÑO', d4: 'PERSPICACIA' },
      { id: 20, clase: 'MONJE', d10: 'ACROBACIA', d8: 'JUEGO DE MANOS', d6: 'ESQUIVAR', d4: 'RESILIENCIA' }
    ];
    setProfesiones(defaultData);
  };

  // Filtrar profesiones por nombre
  const profesionesFiltradas = profesiones.filter(profesion =>
    profesion.clase.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="profesiones-container">
      <div className="profesiones-header">
        <h1>Profesiones de Deanrre</h1>
        <p>Selecciona una profesion para tu personaje</p>
        
        <div className="filtro-container">
          <input
            type="text"
            className="filtro-input"
            placeholder="Buscar profesion..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>
      </div>

      <div className="profesiones-grid">
        {profesionesFiltradas.map((profesion) => (
          <div key={profesion.id} className="profesion-card">
            <div className="profesion-header">
              <h2>{profesion.clase}</h2>
            </div>
            
            <div className="profesion-habilidades">
              <div className="habilidad d10">
                <span className="dado">d10</span>
                <span className="habilidad-nombre">{profesion.d10}</span>
              </div>
              <div className="habilidad d8">
                <span className="dado">d8</span>
                <span className="habilidad-nombre">{profesion.d8}</span>
              </div>
              <div className="habilidad d6">
                <span className="dado">d6</span>
                <span className="habilidad-nombre">{profesion.d6}</span>
              </div>
              <div className="habilidad d4">
                <span className="dado">d4</span>
                <span className="habilidad-nombre">{profesion.d4}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {profesionesFiltradas.length === 0 && (
        <div className="no-results">
          <p>No se encontraron profesiones</p>
        </div>
      )}
    </div>
  );
};

export default Profesiones;

