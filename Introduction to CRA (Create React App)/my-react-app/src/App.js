import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function incrementCount(){
    setCount(prevalue => prevalue+1);
  }


  return (
    <div className="App">

      <p>{count}</p>
      <button onClick={incrementCount}>Incriment</button>

    </div>
  );
}

export default App;
