import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

 const [time, setTime] = useState('')

  useEffect(() => {
    fetch('/time').then(response => response.json())
      .then(data => {
      setTime(data.time);
    })
  }, []);

  return (
    <div className="App">
      <h1>Current time from API : {time}</h1>
    </div>
  );
}

export default App;
