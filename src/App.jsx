import React, { useEffect } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [showImage, setShowImage] = React.useState(false);
  
  const handleCountUp = ()=>{
    setCount(count+1);
  }

  const handleCountDown = ()=>{
    setCount(count-1);
  }

  useEffect(function(){
    if(count === 10){
      setShowImage(true);
    }else{
      setShowImage(false);
    }
  },[count]);

  return (
    <div className="App">
      <h1>Counter Sederhana</h1>
      <p>{count}</p>
      <div>
        <button onClick={handleCountUp}>+</button>
        <button onClick={handleCountDown}>-</button>
      </div>
      

      {showImage && (
        <div>
          <img src="https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg"/>
        </div>
      )}
    </div>
  );
}

export default App;
