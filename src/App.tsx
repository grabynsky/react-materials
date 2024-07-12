import React, {FC, useState} from 'react';
import './App.css';
import Cars from "./components/cars/Cars";
import CarForm from "./components/CarForm/CarForm";

const App: FC = () => {

    const [trigger, setTrigger] = useState<boolean>(false)
  return (
    <div className="App">

        <CarForm setTrigger={setTrigger}/>
        <hr/>
        <Cars trigger={trigger}/>

    </div>
  );
}

export default App;
