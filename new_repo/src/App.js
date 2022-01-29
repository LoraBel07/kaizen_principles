import { useState } from 'react';
import { data } from "./data";  
import './App.css';

function App() {
  const [person, setPerson] = useState(0);
  const { id, name, description, age, image } = data[person];
  console.log(data[person]);

  return (
    <div className="App">
      <h1>TEST</h1>
    </div>
  );
}

export default App;
