import React, { useState } from 'react';
import './creacionPersonajes.css';

interface PuntosPequenos {
  fisicas: {
    fuerza: number;
    agilidad: number;
    velocidad: number;
    resistencia: number;
  };
  mentales: {
    inteligencia: number;
    concentracion: number;
    voluntad: number;
    sabiduria: number;
  };
  coordinacion: {
    rango: number;
    calculo: number;
    precision: number;
    reflejos: number;
  };
}

const CreacionPersonajes: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [profesion, setProfesion] = useState('');
  const [raza, setRaza] = useState('');

  // Puntos pequeños (lo que el usuario ingresa)
  const [puntosPequenos, setPuntosPequenos] = useState<PuntosPequenos>({
    fisicas: {
      fuerza: 0,
      agilidad: 0,
      velocidad: 0,
      resistencia: 0
    },
    mentales: {
      inteligencia: 0,
      concentracion: 0,
      voluntad: 0,
      sabiduria: 0
    },
    coordinacion: {
      rango: 0,
      calculo: 0,
      precision: 0,
      reflejos: 0
    }
  });

  // Calcular puntos grandes (estadísticas reales del juego)
  const calcularPuntosGrandes = (puntosPeq: number): number => {
    return Math.floor(puntosPeq / 2);
  };

  const calcularEstadisticas = (): PuntosPequenos => {
    const estadisticas = {} as PuntosPequenos;
    
    // Convertir cada categoría
    (Object.keys(puntosPequenos) as Array<'fisicas' | 'mentales' | 'coordinacion'>).forEach(categoria => {
      estadisticas[categoria] = {} as any;
      Object.keys(puntosPequenos[categoria]).forEach(key => {
        const valor = puntosPequenos[categoria][key as keyof typeof puntosPequenos.fisicas];
        estadisticas[categoria][key as keyof typeof puntosPequenos.fisicas] = calcularPuntosGrandes(valor);
      });
    });

    return estadisticas;
  };

  const estadisticas = calcularEstadisticas();

  // Calcular vida: suma de estadisticas fisicas (numeros grandes) * 4
  const calcularVida = (): number => {
    const sumaFisicas = 
      estadisticas.fisicas.fuerza + 
      estadisticas.fisicas.agilidad + 
      estadisticas.fisicas.velocidad + 
      estadisticas.fisicas.resistencia;
    return sumaFisicas * 4;
  };

  const vida = calcularVida();
  const sumaFisicas = 
    estadisticas.fisicas.fuerza + 
    estadisticas.fisicas.agilidad + 
    estadisticas.fisicas.velocidad + 
    estadisticas.fisicas.resistencia;

  // Calcular energia: suma de estadisticas mentales (numeros grandes) * 4
  const calcularEnergia = (): number => {
    const sumaMentales = 
      estadisticas.mentales.inteligencia + 
      estadisticas.mentales.concentracion + 
      estadisticas.mentales.voluntad + 
      estadisticas.mentales.sabiduria;
    return sumaMentales * 4;
  };

  const energia = calcularEnergia();
  const sumaMentales = 
    estadisticas.mentales.inteligencia + 
    estadisticas.mentales.concentracion + 
    estadisticas.mentales.voluntad + 
    estadisticas.mentales.sabiduria;

  // Calcular iniciativa: suma de estadisticas de coordinacion * 0.4 (redondeado hacia abajo)
  const calcularIniciativa = (): number => {
    const sumaCoordinacion = 
      estadisticas.coordinacion.rango + 
      estadisticas.coordinacion.calculo + 
      estadisticas.coordinacion.precision + 
      estadisticas.coordinacion.reflejos;
    return Math.floor(sumaCoordinacion * 0.4);
  };

  const iniciativa = calcularIniciativa();
  const sumaCoordinacion = 
    estadisticas.coordinacion.rango + 
    estadisticas.coordinacion.calculo + 
    estadisticas.coordinacion.precision + 
    estadisticas.coordinacion.reflejos;

  const handleStatChange = (
    categoria: 'fisicas' | 'mentales' | 'coordinacion',
    stat: string,
    value: number
  ) => {
    setPuntosPequenos(prev => ({
      ...prev,
      [categoria]: {
        ...prev[categoria],
        [stat]: value
      }
    }));
  };

  const calcularAccion = (accion: string, estadistica: string): number => {
    const categoria = obtenerCategoriaEstadistica(estadistica);
    if (!categoria) return 0;
    
    return (estadisticas as any)[categoria][estadistica.toLowerCase()] || 0;
  };

  const obtenerCategoriaEstadistica = (estadistica: string): 'fisicas' | 'mentales' | 'coordinacion' | null => {
    const fisicas = ['fuerza', 'agilidad', 'velocidad', 'resistencia'];
    const mentales = ['inteligencia', 'concentracion', 'voluntad', 'sabiduria'];
    const coordinacion = ['rango', 'calculo', 'precision', 'reflejos'];

    if (fisicas.includes(estadistica.toLowerCase())) return 'fisicas';
    if (mentales.includes(estadistica.toLowerCase())) return 'mentales';
    if (coordinacion.includes(estadistica.toLowerCase())) return 'coordinacion';
    return null;
  };

  const acciones = [
    { accion: 'ACROBACIA', estadistica: 'Agilidad', categoria: 'coordinacion' },
    { accion: 'ARCANO', estadistica: 'Concentracion', categoria: 'mental' },
    { accion: 'ATLETISMO', estadistica: 'Fuerza', categoria: 'fisico' },
    { accion: 'APRENDER', estadistica: 'Sabiduria', categoria: 'mental' },
    { accion: 'BLOQUEO', estadistica: 'Agilidad', categoria: 'coordinacion' },
    { accion: 'CARRERA', estadistica: 'Velocidad', categoria: 'fisico' },
    { accion: 'COMERCIO', estadistica: 'Voluntad', categoria: 'mental' },
    { accion: 'ENGAÑO', estadistica: 'Inteligencia', categoria: 'mental' },
    { accion: 'ESQUIVAR', estadistica: 'Reflejos', categoria: 'coordinacion' },
    { accion: 'HISTORIA', estadistica: 'Sabiduria', categoria: 'mental' },
    { accion: 'INTERPRETACION', estadistica: 'Inteligencia', categoria: 'mental' },
    { accion: 'INVENTAR', estadistica: 'Inteligencia', categoria: 'mental' },
    { accion: 'INTIMIDACION', estadistica: 'Voluntad', categoria: 'mental' },
    { accion: 'INVESTIGACION', estadistica: 'Inteligencia', categoria: 'mental' },
    { accion: 'INMUNIDAD', estadistica: 'Resistencia', categoria: 'fisico' },
    { accion: 'JUEGO DE MANOS', estadistica: 'Agilidad', categoria: 'coordinacion' },
    { accion: 'MEDICINA', estadistica: 'Sabiduria', categoria: 'mental' },
    { accion: 'MONTURA', estadistica: 'Agilidad', categoria: 'coordinacion' },
    { accion: 'PERCEPCION', estadistica: 'Rango', categoria: 'coordinacion' },
    { accion: 'PERSPICACIA', estadistica: 'Concentracion', categoria: 'mental' },
    { accion: 'PERSUACION', estadistica: 'Voluntad', categoria: 'mental' },
    { accion: 'RELIGION', estadistica: 'Sabiduria', categoria: 'mental' },
    { accion: 'RESILIENCIA', estadistica: 'Voluntad', categoria: 'mental' },
    { accion: 'SIGILO', estadistica: 'Agilidad', categoria: 'coordinacion' },
    { accion: 'SUPERVIVENCIA', estadistica: 'Sabiduria', categoria: 'mental' },
    { accion: 'TRATO CON ANIMALES', estadistica: 'Voluntad', categoria: 'mental' },
    { accion: 'TRAYECTORIA', estadistica: 'Calculo', categoria: 'coordinacion' },
    { accion: 'VISION', estadistica: 'Presicion', categoria: 'coordinacion' }
  ];

  return (
    <div className="creacion-personajes-container">
      <div className="creacion-header">
        <h1>Creacion de Personaje</h1>
        <p>Completa la informacion de tu personaje</p>
      </div>

      <div className="creacion-content">
        {/* Informacion Basica */}
        <div className="seccion">
          <h2>Informacion Basica</h2>
          <div className="form-group">
            <label>Nombre del Personaje</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese el nombre"
            />
          </div>
          <div className="form-group">
            <label>Raza</label>
            <select value={raza} onChange={(e) => setRaza(e.target.value)}>
              <option value="">Seleccione una raza</option>
              <option value="HUMANO">Humano</option>
              <option value="ORCO">Orco</option>
              <option value="ELFO">Elfo</option>
            </select>
          </div>
          <div className="form-group">
            <label>Profesion</label>
            <select value={profesion} onChange={(e) => setProfesion(e.target.value)}>
              <option value="">Seleccione una profesion</option>
              <option value="GUERRERO">Guerrero</option>
              <option value="MAGO">Mago</option>
              <option value="LADRON">Ladron</option>
            </select>
          </div>
        </div>

        {/* Estadisticas Fisicas */}
        <div className="seccion">
          <h2>Estadisticas Fisicas</h2>
          <div className="conversion-info">
            <p>* 2 puntos pequeños = 1 punto grande (redondeado hacia abajo)</p>
            <p>* Vida = (Fuerza + Agilidad + Velocidad + Resistencia) × 4</p>
          </div>
          <div className="stats-grid">
            {Object.entries(estadisticas.fisicas).map(([key, value]) => {
              const puntosP = puntosPequenos.fisicas[key as keyof typeof puntosPequenos.fisicas];
              return (
                <div key={key} className="stat-input">
                  <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  <div className="stat-input-container">
                    <input
                      type="number"
                      placeholder="Puntos pequeños"
                      value={puntosP === 0 ? '' : puntosP}
                      onChange={(e) => handleStatChange('fisicas', key, parseInt(e.target.value) || 0)}
                      className="input-pequeños"
                    />
                    <div className="conversion-arrow">→</div>
                    <div className="valor-grande">
                      <span className="label-grande">Valor Real:</span>
                      <span className="numero-grande">{value}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Calculo de Vida */}
          <div className="vida-section">
            <div className="vida-calculo">
              <span className="vida-formula">
                Vida = ({estadisticas.fisicas.fuerza} + {estadisticas.fisicas.agilidad} + {estadisticas.fisicas.velocidad} + {estadisticas.fisicas.resistencia}) × 4
              </span>
              <div className="vida-resultado">
                <span className="vida-label">VIDA TOTAL:</span>
                <span className="vida-numero">{vida}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Estadisticas Mentales */}
        <div className="seccion">
          <h2>Estadisticas Mentales</h2>
          <div className="conversion-info">
            <p>* 2 puntos pequeños = 1 punto grande (redondeado hacia abajo)</p>
            <p>* Energia = (Inteligencia + Concentracion + Voluntad + Sabiduria) × 4</p>
          </div>
          <div className="stats-grid">
            {Object.entries(estadisticas.mentales).map(([key, value]) => {
              const puntosP = puntosPequenos.mentales[key as keyof typeof puntosPequenos.mentales];
              return (
                <div key={key} className="stat-input">
                  <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  <div className="stat-input-container">
                    <input
                      type="number"
                      placeholder="Puntos pequeños"
                      value={puntosP === 0 ? '' : puntosP}
                      onChange={(e) => handleStatChange('mentales', key, parseInt(e.target.value) || 0)}
                      className="input-pequeños"
                    />
                    <div className="conversion-arrow">→</div>
                    <div className="valor-grande">
                      <span className="label-grande">Valor Real:</span>
                      <span className="numero-grande">{value}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Calculo de Energia */}
          <div className="energia-section">
            <div className="energia-calculo">
              <span className="energia-formula">
                Energia = ({estadisticas.mentales.inteligencia} + {estadisticas.mentales.concentracion} + {estadisticas.mentales.voluntad} + {estadisticas.mentales.sabiduria}) × 4
              </span>
              <div className="energia-resultado">
                <span className="energia-label">ENERGIA TOTAL:</span>
                <span className="energia-numero">{energia}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Estadisticas de Coordinacion */}
        <div className="seccion">
          <h2>Estadisticas de Coordinacion</h2>
          <div className="conversion-info">
            <p>* 2 puntos pequeños = 1 punto grande (redondeado hacia abajo)</p>
            <p>* Iniciativa = (Rango + Calculo + Precision + Reflejos) × 0.4 (redondeado hacia abajo)</p>
          </div>
          <div className="stats-grid">
            {Object.entries(estadisticas.coordinacion).map(([key, value]) => {
              const puntosP = puntosPequenos.coordinacion[key as keyof typeof puntosPequenos.coordinacion];
              return (
                <div key={key} className="stat-input">
                  <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  <div className="stat-input-container">
                    <input
                      type="number"
                      placeholder="Puntos pequeños"
                      value={puntosP === 0 ? '' : puntosP}
                      onChange={(e) => handleStatChange('coordinacion', key, parseInt(e.target.value) || 0)}
                      className="input-pequeños"
                    />
                    <div className="conversion-arrow">→</div>
                    <div className="valor-grande">
                      <span className="label-grande">Valor Real:</span>
                      <span className="numero-grande">{value}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Calculo de Iniciativa */}
          <div className="iniciativa-section">
            <div className="iniciativa-calculo">
              <span className="iniciativa-formula">
                Iniciativa = ({estadisticas.coordinacion.rango} + {estadisticas.coordinacion.calculo} + {estadisticas.coordinacion.precision} + {estadisticas.coordinacion.reflejos}) × 0.4
              </span>
              <div className="iniciativa-resultado">
                <span className="iniciativa-label">INICIATIVA TOTAL:</span>
                <span className="iniciativa-numero">{iniciativa}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Acciones y sus valores calculados */}
        <div className="seccion acciones-section">
          <h2>Valores de Acciones</h2>
          <div className="acciones-grid">
            {acciones.map(({ accion, estadistica }) => (
              <div key={accion} className="accion-item">
                <span className="accion-nombre">{accion}</span>
                <span className="accion-value">
                  {calcularAccion(accion, estadistica)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Boton Guardar */}
        <div className="botones-section">
          <button className="btn-guardar">Guardar Personaje</button>
          <button className="btn-cancelar">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default CreacionPersonajes;

