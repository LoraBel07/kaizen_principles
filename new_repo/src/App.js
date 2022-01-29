import { useState } from 'react';
import { data } from "./data";  
import './App.css';

function App() {
  const [person, setPerson] = useState(0);
  const { id, name, description, age, image } = data[person];
  // console.log(data[person]);

  return (<div>
      <div className="container">
        <img src={image} width="500px" alt="person"/>
      </div>

      <div className="container">
        <h1>{id} {name}</h1>
      </div>

      <div className="container">
        <h2>{description}</h2>
      </div>

      <div className="container">
        <h2>{age}</h2>
      </div>

    </div>);
}

export default App;
