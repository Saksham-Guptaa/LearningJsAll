import "./App.css";
import React , { useState } from "react";
function App() {
  // const number = "0";
  // const [Number , setNumber] = useState(number);

  // setNumber() = {

  // }
  const [count , setCount] = useState(0);
  function subtractNumber() {
    if(count != 0){
      setCount(count-1)
    }
    else{
      console.log("number is equal to 0 cannot suvtract further")
    }
  }
  function addNumber() {
    setCount(count+1)
  }
  function resethandler() {
    setCount(0)
  }
  
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center flex-col gap-10 items-center bg-red-400">
        <div className="color-black font-extrabold text-[30px]">Increament and Decrement</div>
        <div className="flex bg-white justify-center gap-10 py-3 text-[25px] rounded-lg px-3 flex-row">
          <button className="border-r-2 w-20 text-center"  onClick={subtractNumber}>-</button>
          <div className="text-black">{count}</div>
          <button className="border-l-2 w-20 text-center" onClick={addNumber}>+</button>
        </div>
        <div>
          <button onClick={resethandler} className="bg-blue-500 p-3 rounded-lg">
            Reset
          </button>
        </div>
    </div>
  );
}

export default App;
