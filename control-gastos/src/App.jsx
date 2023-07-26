import { useState } from "react";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Header from "./components/Header";
import Modal from "./components/Modal";


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)



  const handeNuevoGasto =() =>{
setModal(true)

setTimeout(()=>{
setAnimarModal(true)

},500)
  }
  return (
    <>
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
        {isValidPresupuesto && (
          <div className="nuevo-gasto">
            <img src={IconoNuevoGasto} alt="nuevo gasto" onClick={handeNuevoGasto} />

          </div>
        )}

        {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        />}
      </div>
    </>
  );
}

export default App;
