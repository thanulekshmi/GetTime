import React, { useState } from "react";

function App() {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  setInterval(updateTime, 1000);
  function updateTime() {
    setTimer(new Date().toLocaleTimeString());
  }
  return (
    <div className="container">
      <h1>{timer}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
