
import './App.css';
import React, { useMemo, useState} from 'react';
function App() {

  const[height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);

  function onWeightChange(event) {
    setWeight(event.target.value)
  }
  function onHeightChange(event) {
    setHeight(event.target.value)
  }


  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
    
  },[weight,height])
  return (
    <main>
      <h1>BMI calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight :{weight}kg</p>
        <input type="range" step='1' min="40" max="200" className='inputslider' onChange={onWeightChange}/>
        <p className="slider-output" >Height:{height}cm</p>
        <input type="range" min="140" max="250" onChange={onHeightChange}/>
        <div className="output-section">
          <p>Your Bmi is</p>
          <p className='output'>{ output}</p>
      </div>
      </div>

      </main>
  );
}

export default App;
