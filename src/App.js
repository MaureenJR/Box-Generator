
import './App.css';
import Generator from './conponent/box-generator';
import BoxDisplay from './conponent/display-box';
import { useState } from 'react';


const App = () => {
  const [currentColor, setCurrentColor] = useState([]);

  const newBox = (addColor) => {
    if(addColor === ""){
      alert ("Please, add a color");
    }else{
      setCurrentColor ([...currentColor, addColor])
    }
  }
  return (
    <div className="App">
      <Generator onAddColor={newBox}/>
      <BoxDisplay color={ currentColor }/>
    </div>
  );
}

export default App;
