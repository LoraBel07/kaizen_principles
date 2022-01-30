import { useState } from 'react';
import { data } from "./data";  
import './App.css';

function App() {
  const [principles, setPrinciple] = useState(0);
  const { id, name, description, image } = data[principles];
  

  const previousPrinciple = () => {
    setPrinciple((principle => {
      principle--;
      if (principle < 0) {
        return data.length - 1;
      }
      return principle;
    }))

  }

  const nextPrinciple = () => {
    setPrinciple((principle =>{
      principle++;
      if (principle > data.length - 1) {
        principle = 0;
      }
      return principle;
    }))
  }

  return (<div>
      <div className="container">
        <h1>カイゼン</h1>
      </div>
      
      {/* <div className="container">
        <p>"Try to do something just a little bit better each day in order to make a large impact in the long run."</p>
      </div> */}
      <div className="container">
        <h2>10 Basic Principles of  K A I Z E N</h2>
      </div>

      <div className="container">
        <img src={image} height="200px" alt="principle"/>
      </div>

      <div className="container">
        <h2>{id}. {name}</h2>
      </div>

      <div className="btn container">
        <button className="pointers" onClick={previousPrinciple}><img src="https://img.icons8.com/ios-filled/30/ffffff/hand-left.png" alt="previous" /></button>
        <button className="pointers" onClick={nextPrinciple}><img src="https://img.icons8.com/ios-filled/30/ffffff/hand-right.png" alt="next" /></button>
      </div>

      <div className="container description">
      <p>{ description }</p>
      </div>
      

    </div>);
}

export default App;
