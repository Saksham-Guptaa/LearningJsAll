import React , {useState} from "react";
import Tours from "./component/Tours";
import data from "./data";
const App = () => {
  const [tours , setTours] = useState(data)
  function removeTours(id) {
    const newTour = tours.filter(tour => tour.id != id)
    setTours(newTour)
  }
  if(tours.length === 0) {return(
    <div className="refresh">
      <h2>No tours left</h2>
      <button onClick={() => setTours(data)}>Refresh</button>

    </div>
  );}
  return (
    <div>
      <Tours tours = {tours} removeTours = {removeTours} />
    </div>
  );
};

export default App;
