import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Home from './pages/home';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data.candles)
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <Home />
  );
}


export default App;
