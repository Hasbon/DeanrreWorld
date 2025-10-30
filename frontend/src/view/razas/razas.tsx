import React, { useState, useCallback, useEffect } from "react";
import "./razas.css";

type RazaStats = {
	Razas: string;
	FUERZA: number;
	AGILIDAD: number;
	VELOCIDAD: number;
	RESISTENCIA: number;
	PRECISION: number;
	CALCULO: number;
	RANGO: number;
	REFLEJOS: number;
	INTELIGENCIA: number;
	SABIDURIA: number;
	CONCENTRACION: number;
	VOLUNTAD: number;
};

//

const RAZAS_DATA: RazaStats[] = [
	{ Razas: "SLIME", FUERZA: -5, AGILIDAD: 5, VELOCIDAD: 3, RESISTENCIA: 5, PRECISION: 0, CALCULO: -4, RANGO: 0, REFLEJOS: 4, INTELIGENCIA: -4, SABIDURIA: -2, CONCENTRACION: 0, VOLUNTAD: 3 },
	{ Razas: "ORCO", FUERZA: 5, AGILIDAD: 3, VELOCIDAD: 1, RESISTENCIA: 4, PRECISION: 3, CALCULO: -4, RANGO: -5, REFLEJOS: 2, INTELIGENCIA: -2, SABIDURIA: 1, CONCENTRACION: 1, VOLUNTAD: -4 },
	{ Razas: "GOBLIN", FUERZA: 2, AGILIDAD: 4, VELOCIDAD: 3, RESISTENCIA: -4, PRECISION: 2, CALCULO: 2, RANGO: 2, REFLEJOS: 2, INTELIGENCIA: 3, SABIDURIA: -3, CONCENTRACION: -4, VOLUNTAD: -4 },
	{ Razas: "TRITON", FUERZA: 5, AGILIDAD: -4, VELOCIDAD: -3, RESISTENCIA: 4, PRECISION: 2, CALCULO: 2, RANGO: 1, REFLEJOS: 2, INTELIGENCIA: 2, SABIDURIA: 2, CONCENTRACION: -3, VOLUNTAD: -5 },
	{ Razas: "HUMANO", FUERZA: 3, AGILIDAD: 2, VELOCIDAD: 3, RESISTENCIA: 2, PRECISION: 2, CALCULO: -1, RANGO: 0, REFLEJOS: 2, INTELIGENCIA: 3, SABIDURIA: 3, CONCENTRACION: -8, VOLUNTAD: -6 },
	{ Razas: "ELFO", FUERZA: -3, AGILIDAD: 4, VELOCIDAD: 3, RESISTENCIA: -4, PRECISION: 4, CALCULO: 2, RANGO: 3, REFLEJOS: 2, INTELIGENCIA: -3, SABIDURIA: -3, CONCENTRACION: -2, VOLUNTAD: 2 },
	{ Razas: "ENANO", FUERZA: 6, AGILIDAD: -3, VELOCIDAD: -3, RESISTENCIA: 2, PRECISION: 4, CALCULO: 4, RANGO: -4, REFLEJOS: -3, INTELIGENCIA: -1, SABIDURIA: -1, CONCENTRACION: 2, VOLUNTAD: 2 },
	{ Razas: "DROW", FUERZA: -4, AGILIDAD: 4, VELOCIDAD: 3, RESISTENCIA: -3, PRECISION: 3, CALCULO: -4, RANGO: 2, REFLEJOS: 2, INTELIGENCIA: 2, SABIDURIA: 2, CONCENTRACION: -4, VOLUNTAD: 2 },
	{ Razas: "REPTILIANO", FUERZA: 4, AGILIDAD: 4, VELOCIDAD: 3, RESISTENCIA: 4, PRECISION: -3, CALCULO: -3, RANGO: -3, REFLEJOS: 3, INTELIGENCIA: 1, SABIDURIA: 1, CONCENTRACION: -4, VOLUNTAD: -2 },
	{ Razas: "BESTIA HUMANOIDE", FUERZA: 5, AGILIDAD: 5, VELOCIDAD: 5, RESISTENCIA: 2, PRECISION: -3, CALCULO: -3, RANGO: 1, REFLEJOS: 1, INTELIGENCIA: -3, SABIDURIA: -3, CONCENTRACION: -3, VOLUNTAD: 1 },
	{ Razas: "ELEMENTAL AGUA", FUERZA: -3, AGILIDAD: -3, VELOCIDAD: -4, RESISTENCIA: 2, PRECISION: 2, CALCULO: 2, RANGO: 2, REFLEJOS: -5, INTELIGENCIA: 2, SABIDURIA: 2, CONCENTRACION: 4, VOLUNTAD: 4 },
	{ Razas: "ELEMENTAL AIRE", FUERZA: -5, AGILIDAD: 3, VELOCIDAD: 4, RESISTENCIA: -5, PRECISION: -2, CALCULO: 3, RANGO: 3, REFLEJOS: -3, INTELIGENCIA: 2, SABIDURIA: 2, CONCENTRACION: 2, VOLUNTAD: 1 },
	{ Razas: "ELEMENTAL FUEGO", FUERZA: -4, AGILIDAD: 3, VELOCIDAD: 4, RESISTENCIA: -4, PRECISION: 3, CALCULO: 2, RANGO: -3, REFLEJOS: 2, INTELIGENCIA: 2, SABIDURIA: 2, CONCENTRACION: -4, VOLUNTAD: 2 },
	{ Razas: "ELEMENTAL TIERRA", FUERZA: 6, AGILIDAD: -1, VELOCIDAD: -2, RESISTENCIA: 5, PRECISION: -3, CALCULO: -3, RANGO: 1, REFLEJOS: 0, INTELIGENCIA: -3, SABIDURIA: 4, CONCENTRACION: -3, VOLUNTAD: 4 },
	{ Razas: "HADA", FUERZA: -6, AGILIDAD: 2, VELOCIDAD: 2, RESISTENCIA: -4, PRECISION: 1, CALCULO: 2, RANGO: 1, REFLEJOS: 3, INTELIGENCIA: 0, SABIDURIA: 2, CONCENTRACION: 2, VOLUNTAD: 0 },
	{ Razas: "CAIDO", FUERZA: -3, AGILIDAD: 2, VELOCIDAD: 4, RESISTENCIA: -3, PRECISION: -2, CALCULO: -3, RANGO: 2, REFLEJOS: -2, INTELIGENCIA: 4, SABIDURIA: 3, CONCENTRACION: 1, VOLUNTAD: 2 },
	{ Razas: "NOMUERTO", FUERZA: 1, AGILIDAD: 1, VELOCIDAD: 1, RESISTENCIA: 3, PRECISION: -3, CALCULO: -2, RANGO: 1, REFLEJOS: 0, INTELIGENCIA: 0, SABIDURIA: 1, CONCENTRACION: 1, VOLUNTAD: 1 },
	{ Razas: "VAMPIRO", FUERZA: 3, AGILIDAD: 3, VELOCIDAD: 3, RESISTENCIA: 3, PRECISION: -3, CALCULO: -3, RANGO: -3, REFLEJOS: 2, INTELIGENCIA: -1, SABIDURIA: -1, CONCENTRACION: 0, VOLUNTAD: 2 },
	{ Razas: "HOMBRE BESTIA", FUERZA: 2, AGILIDAD: 2, VELOCIDAD: 1, RESISTENCIA: 0, PRECISION: -1, CALCULO: -2, RANGO: -2, REFLEJOS: 0, INTELIGENCIA: 1, SABIDURIA: 1, CONCENTRACION: 1, VOLUNTAD: 2 },
	{ Razas: "CELESTIAL", FUERZA: 2, AGILIDAD: 4, VELOCIDAD: 3, RESISTENCIA: -2, PRECISION: -3, CALCULO: -2, RANGO: 2, REFLEJOS: 2, INTELIGENCIA: -3, SABIDURIA: 2, CONCENTRACION: -1, VOLUNTAD: 1 },
];

// Mapea nombre de raza a archivo de imagen dentro de /public/imagenesRazas
const RAZA_A_IMAGEN: Record<string, string> = {
	SLIME: "/imagenesRazas/slime.webp",
	ORCO: "/imagenesRazas/orco.webp",
	GOBLIN: "/imagenesRazas/goblin.webp",
	TRITON: "/imagenesRazas/triton.webp",
	HUMANO: "/imagenesRazas/humano.webp",
	ELFO: "/imagenesRazas/elfo.webp",
	ENANO: "/imagenesRazas/enano.webp",
	DROW: "/imagenesRazas/drow.webp",
	REPTILIANO: "/imagenesRazas/reptiliano.webp",
	"BESTIA HUMANOIDE": "/imagenesRazas/bestia humanoide.webp",
	"ELEMENTAL AGUA": "/imagenesRazas/elemental agua.webp",
	"ELEMENTAL AIRE": "/imagenesRazas/elemental aire.webp",
	"ELEMENTAL FUEGO": "/imagenesRazas/elemental fuego.webp",
	"ELEMENTAL TIERRA": "/imagenesRazas/elemental tierra.webp",
	HADA: "/imagenesRazas/hada.webp",
	CAIDO: "/imagenesRazas/caido.webp",
	NOMUERTO: "/imagenesRazas/no muerto.webp", // nombre distinto en imagen
	VAMPIRO: "/imagenesRazas/vampiro.webp",
	"HOMBRE BESTIA": "/imagenesRazas/hombre bestia (1).webp", // con (1) en el nombre
	CELESTIAL: "/imagenesRazas/celestial.webp",
};

const DESCRIPCION_RAZA: Record<string, string> = {
    SLIME: "Los Slimes son entidades gelatinosas con gran adaptabilidad. Absorben rasgos del entorno, resistiendo impactos y filtrándose donde otros no pueden.",
    ORCO: "Fuerza bruta y cultura de combate. Valoran la lealtad al clan, el honor y el liderazgo del más capaz.",
    GOBLIN: "Ingeniosos y veloces, expertos en conseguir recursos y crear artilugios tan improvisados como efectivos.",
    TRITON: "Dominan los reinos acuáticos. Disciplina, estrategia y equilibrio rigen su sociedad.",
    HUMANO: "Versátiles y curiosos, aprenden rápido y prosperan en casi cualquier ámbito.",
    ELFO: "Longevos, elegantes y reservados. Afinidad con la magia sutil y la naturaleza.",
    ENANO: "Maestros artesanos y guerreros tenaces. Lealtad y deber forjados bajo la montaña.",
    DROW: "Gracia letal y magia umbría. Intrigas y disciplina definen su cultura subterránea.",
    REPTILIANO: "Instinto templado por sabiduría fría. Cazadores natos y guardianes de secretos antiguos.",
    "BESTIA HUMANOIDE": "Espíritus indómitos que veneran la fuerza y la libertad en códigos tribales.",
    "ELEMENTAL AGUA": "Adaptabilidad y curación. Fluidez mental y paciencia para modelar el curso de los hechos.",
    "ELEMENTAL AIRE": "Libertad y velocidad. Pensamiento veloz y presencia etérea para explorar y evadir.",
    "ELEMENTAL FUEGO": "Pasión y poder cambiante. Determinación incandescente para superar obstáculos.",
    "ELEMENTAL TIERRA": "Estabilidad y propósito. Pilares inamovibles que protegen y sostienen.",
    HADA: "Magia sutil y travesura. Belleza encantadora que esconde una astucia peligrosa.",
    CAIDO: "Voluntad férrea marcada por cicatrices del alma. Buscan redención o poder en el umbral de la sombra.",
    NOMUERTO: "Fríos y metódicos, desafían el ciclo natural con intelecto estratégico y persistencia.",
    VAMPIRO: "Depredadores nocturnos de porte aristocrático. Carisma, agilidad y mente afilada.",
    "HOMBRE BESTIA": "Instinto y técnica al servicio de la manada. Cazadores y protectores de su territorio.",
    CELESTIAL: "Irradian propósito y luz. Inspiran a aliados y doblegan a enemigos con juramentos antiguos.",
};

type SelectedRaza = { nombre: string; imagen: string; descripcion: string } | null;

function useEscClose(isOpen: boolean, onClose: () => void) {
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);
}

const columnas: Array<keyof RazaStats> = [
	"Razas",
	"FUERZA",
	"AGILIDAD",
	"VELOCIDAD",
	"RESISTENCIA",
	"PRECISION",
	"CALCULO",
	"RANGO",
	"REFLEJOS",
	"INTELIGENCIA",
	"SABIDURIA",
	"CONCENTRACION",
	"VOLUNTAD",
];

type Grupo = "fisico" | "coordinacion" | "mental" | "ninguno";

const COLUMNA_A_GRUPO: Record<keyof RazaStats, Grupo> = {
    Razas: "ninguno",
    FUERZA: "fisico",
    AGILIDAD: "fisico",
    VELOCIDAD: "fisico",
    RESISTENCIA: "fisico",
    PRECISION: "coordinacion",
    CALCULO: "coordinacion",
    RANGO: "coordinacion",
    REFLEJOS: "coordinacion",
    INTELIGENCIA: "mental",
    SABIDURIA: "mental",
    CONCENTRACION: "mental",
    VOLUNTAD: "mental",
};

const Razas = () => {
    const [seleccionada, setSeleccionada] = useState<SelectedRaza>(null);
    const onClose = useCallback(() => setSeleccionada(null), []);
    const abrirModal = useCallback((nombre: string) => {
        const imagen = RAZA_A_IMAGEN[nombre];
        const descripcion = DESCRIPCION_RAZA[nombre] ?? "Descripción no disponible.";
        setSeleccionada({ nombre, imagen, descripcion });
    }, []);
    useEscClose(Boolean(seleccionada), onClose);
    return (
		<div className="razas-page">
			<h2 className="razas-title">Razas y Estadísticas Base</h2>
			
			<div className="razas-table-wrapper">
				<table className="razas-table">
					<thead>
						<tr className="group-row">
							<th className="group-none" aria-hidden="true"></th>
							<th className="group-fisico" colSpan={4}>Físico</th>
							<th className="group-coordinacion" colSpan={4}>Coordinación</th>
							<th className="group-mental" colSpan={4}>Mental</th>
						</tr>
						<tr>
							{columnas.map((col) => {
								const grupo = COLUMNA_A_GRUPO[col];
								const thClass = [
									grupo !== "ninguno" ? `group-${grupo}` : "",
									`col-${col.trim().toLowerCase()}`,
								].filter(Boolean).join(" ");
								return (
									<th key={col} className={thClass}>{col.trim()}</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{RAZAS_DATA.map((fila) => {
							const imgSrc = RAZA_A_IMAGEN[fila.Razas];
							return (
								<tr key={fila.Razas}>
									<td className="raza-cell">
										<div className="raza-cell-content">
                                            {imgSrc && (
                                                <img
                                                    src={imgSrc}
                                                    alt={fila.Razas}
                                                    className="raza-avatar"
                                                    loading="lazy"
                                                    onClick={() => abrirModal(fila.Razas)}
                                                    role="button"
                                                    aria-label={`Ver ${fila.Razas}`}
                                                />
                                            )}
											<span className="raza-name">{fila.Razas}</span>
										</div>
									</td>
									<td className="group-fisico">{fila.FUERZA}</td>
									<td className="group-fisico">{fila.AGILIDAD}</td>
									<td className="group-fisico">{fila.VELOCIDAD}</td>
									<td className="group-fisico">{fila.RESISTENCIA}</td>
									<td className="group-coordinacion">{fila.PRECISION}</td>
									<td className="group-coordinacion">{fila.CALCULO}</td>
									<td className="group-coordinacion">{fila.RANGO}</td>
									<td className="group-coordinacion">{fila.REFLEJOS}</td>
									<td className="group-mental">{fila.INTELIGENCIA}</td>
									<td className="group-mental">{fila.SABIDURIA}</td>
									<td className="group-mental">{fila.CONCENTRACION}</td>
									<td className="group-mental">{fila.VOLUNTAD}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		{seleccionada && (
			<div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
				<div className="modal-content card-dark" onClick={(e) => e.stopPropagation()}>
					<button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
					<div className="modal-body">
						<img src={seleccionada.imagen} alt={seleccionada.nombre} className="modal-image" />
						<div className="modal-text">
							<h3 className="section-title glow">{seleccionada.nombre}</h3>
							<p>{seleccionada.descripcion}</p>
						</div>
					</div>
				</div>
			</div>
		)}
		</div>
	);
};

export default Razas;


