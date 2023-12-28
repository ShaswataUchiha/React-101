import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./data.js";

const App = () => {

  const [tours, setTour] = useState(data)

  function removeTour(id){
      const newTours = tours.filter(tours => tours.id !== id);
      setTour(newTours)
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTour(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
};

export default App;
