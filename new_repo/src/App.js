import { useState } from 'react';
import { data } from "./data";  
import './App.css';

function App() {
  const [person, setPerson] = useState(0);
  const { id, name, description, newdescription, image } = data[person];
  const [showMore, setShowMore] = useState(false);

  const previousPerson = () => {
    setPerson((person => {
      person--;
      if (person < 0) {
        return data.length - 1;
      }
      return person;
    }))

  }

  const nextPerson = () => {
    setPerson((person =>{
      person++;
      if (person > data.length - 1) {
        person = 0;
      }
      return person;
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
        <img src={image} height="200px" alt="person"/>
      </div>

      <div className="container">
        <h2>{id}. {name}</h2>
      </div>

      {/*  */}

      <div className="btn container">
        <button className="pointers" onClick={previousPerson}><img src="https://img.icons8.com/ios-filled/40/ffffff/hand-left.png" alt="previous" /></button>
        <button className="pointers" onClick={nextPerson}><img src="https://img.icons8.com/ios-filled/40/ffffff/hand-right.png" alt="next" /></button>
      </div>

      <div className="container">
      <p>{showMore ? description : description.substring(0,98) + "..."}
        <button className="show" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
        </p>
      </div>

    </div>);
}

export default App;
