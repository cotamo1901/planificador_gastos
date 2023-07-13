import React from "react";

const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto sombra">
      <form action="" className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            type="text"
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
          />
        </div>
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
