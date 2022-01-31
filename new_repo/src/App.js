import { useState } from 'react';
import { data, dataTwo } from "./data";  
import './App.css';

function App() {
  const [principles, setPrinciple] = useState(0);
  const { id, name, description, image } = data[principles];

  const [types, setTypes] = useState(dataTwo);
  // const { num, header, meaning, showMore } = dataTwo[types]; ????
  const setShowMore = (num) => {
    const newTypes = [];
    types.forEach(types => {
      if (types.num === num) {
        const changedTypes = { ... types, showMore: !types.showMore};
        newTypes.push(changedTypes);
      } else {
        newTypes.push(types);
      }
    });
    setTypes(newTypes);
  }

  const removeType = (num) => {
    let newTypes = types.filter(types => types.num !== num);
    setTypes(newTypes);
  }


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
        <h1> カイゼン </h1>
      </div>
      
      {/*  */}
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

      <div className='container'>
          <h2>The { types.length } Types of Kaizen.</h2>
      </div> 
      <div className='par container'>
      {types.map((element => {
        const { num, header, meaning, showMore } = element;
        return(
          <div className='parBox' key={num}>
            <div className="header">
              <h3>{num}. {header}</h3>
            </div>
            <div className="container">
            <p>{ showMore ? meaning.substring(0,90) + "..." : meaning }                              
              <button className="show" onClick={() => setShowMore(num)}>{showMore ? "Show more" : "Show less"}</button>
            </p>
            </div>
            <div className="container">
              <button className="btn" onClick={() => removeType(num)}>Remove</button>
            </div>

          </div>
        )
      }))} 
      </div>
      <div className="container">
        <button className="btn" onClick={() => setTypes([])}>Delete all</button>
      </div>



      <div className="container">
        <h4> ⭐ "Try to do something just a little bit better each day in order to make a large impact in the long run." ⭐</h4>
      </div>
    </div>);

      

      


}

export default App;
