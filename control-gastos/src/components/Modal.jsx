import { useState } from "react"; 
import CerrarBtn from "../img/cerrar.svg";


const Modal = ({ setModal, animarModal, setAnimarModal }) => {

  const [nombre, setNombre] = useState("");


  const ocultarModal = () => {
    setModal(false);

    setTimeout(() => {
      setAnimarModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrarmodal" onClick={ocultarModal} />
      </div>
      <form action="" className={`formulario ${animarModal ? "animar" : ""}`}>
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="añade el Nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="añade la cantidad del Gasto:eje 300"
          />
        </div>
        <div className="campo">
          <label htmlFor="">Categoria</label>
          <select name="" id="categoria">
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
