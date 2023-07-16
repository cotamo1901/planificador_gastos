import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("El presupuesto debe ser un numero positivo");
      return;
    }
    setMensaje("");
  };

  return (
    <div className="contenedor-presupuesto sombra">
      <form onSubmit={handlePresupuesto} action="" className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
