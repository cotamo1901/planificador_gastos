
import CerrarBtn from "../img/cerrar.svg";


const Modal = ({ setModal,animarModal,setaAnimarModal }) => {
  const ocultarModal = () => {

    setaAnimarModal(false)

    setTimeout(()=>{
        setModal(false)
    },500)
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
