import { useState } from "react";

const App = () => {
  // noor use...
  //state usestate

  const [state, setstate] = useState("");


  const handleinputchange = (event) => { 
   setstate(event.target.value);
    console.long(state);
   };
  return (
    <div className="App">
      <h1>Hola soy vianey esta es una nota</h1>
      <label>
        imput de prueba
      <input 
      id="pruebaID" 
      name="prueba" 
      type="text" 
      onChange= {handleinputchange}
      value={state}
      />
      </label>

    </div>
  );
};

export default App;
