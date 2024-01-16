import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [carState, setCarState] = useState(false);

  const encenderApagar = () => {
    setCarState((prevValue) => !prevValue); //con prevValue el estado arranca el el ultimo estado
  };

  return (
    <div className="App">
      <Header />
      <h3>El carro esta: {carState ? "Enecendido" : "Apagado"} </h3>
      <button onClick={encenderApagar}>Encender/Apagar</button>
    </div>
  );
}

export default App;

// ? significa si es falso y : significa si no es verdadero o viceversa
// el booleam si se cambia falso; el estado inicial es apagado, si es true el estado inicial es encendido
