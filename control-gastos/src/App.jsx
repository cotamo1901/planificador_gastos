import { useState } from "react";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import { generarId } from "./helper";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]); // [{nombre,cantidad,categoria}

  const handeNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    gasto.id = generarId();
    gasto.fecha =Date.now();
    setGastos([...gastos, gasto]);

    setModal(false);

    setTimeout(() => {
      setAnimarModal(false);
    }, 500);
  };
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
          <>
          <main>

          <ListadoGastos gastos={gastos}
          />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="nuevo gasto"
              onClick={handeNuevoGasto}
            />
          </div>
          </>
        )}

        {modal && (
          <Modal
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            guardarGasto={guardarGasto}
          />
        )}
      </div>
    </>
  );
}

export default App;
