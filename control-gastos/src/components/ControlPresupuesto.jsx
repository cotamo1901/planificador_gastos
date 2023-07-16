import React from "react";

const formatearCantidad = (cantidad) => {

   return cantidad.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
    })
    }

const ControlPresupuesto = ({ presupuesto }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
        </div>
        <div className="contenido-presupuesto">
          <p>
            <span>Presupuesto:</span> {formatearCantidad (presupuesto)}
          </p>
        </div>{" "}
      </div>
  );
};

export default ControlPresupuesto;
