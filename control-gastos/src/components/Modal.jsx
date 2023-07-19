
import CerrarBtn from "../img/cerrar.svg";


const Modal = ({ setModal,animarModal }) => {
  const ocultarModal = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrarmodal" onClick={ocultarModal} />
      </div>
      <form action="" className={`formulario ${animarModal ? "animar":""}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  );
};

export default Modal;
