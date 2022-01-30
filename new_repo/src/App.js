import { useState } from 'react';
import { data } from "./data";  
import './App.css';

function App() {
  const [person, setPerson] = useState(0);
  const { id, name, description, age, image } = data[person];
  // console.log(data[person]);

  return (<div>
      <div className="container">
        <img src={image} width="300px" alt="person"/>
      </div>

      <div className="container">
        <h1>{id} {name}</h1>
      </div>

      <div className="container">
        <h2>{description}</h2>
      </div>

      <div className="container">
        <h2>{age} years old</h2>
      </div>

      <div className="btn container">
        <button>Previos</button>
        <button>Next</button>
      </div>

    </div>);
}

export default App;
