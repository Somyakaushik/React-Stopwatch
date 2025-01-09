import React, { useState } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  let [count, setcount] = useState(0);
  let [intv, setintv] = useState(null);
  let [isrunning, setrunning] = useState(false);

  function handlestart() {
    if (isrunning) return;

    const intervalId = setInterval(() => {
      setcount((prevCount) => prevCount + 1);
    }, 1000);

    setintv(intervalId);
    setrunning(true);
  }

  function handlereset() {
    handlestop();
    setcount(0);
  }

  function handlestop() {
    if (!isrunning) return;

    clearInterval(intv);
    setintv(null); 
    setrunning(false); 
  }

  const hours = String(Math.floor(count / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((count % 3600) / 60)).padStart(2, '0');
  const seconds = String(count % 60).padStart(2, '0');
  
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  const startbtn = <button onClick={handlestart}>Start</button>;
  const stopbtn = <button onClick={handlestop}>Stop</button>;

  return (
    <div className="stopwatch-container">
      <div>{formattedTime}</div>
      {isrunning ? stopbtn : startbtn}
      <button onClick={handlereset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
