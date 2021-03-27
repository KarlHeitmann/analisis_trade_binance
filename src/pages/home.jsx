import React, { useState, useEffect } from 'react';

function Home(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  const clickCandles = async() => {
    // function clickCandles() {
    // fetch('/candles').then(res => res.json()).then(data => {
    //   console.log(data.candles);
    //   setCandles(candles);
    // });
    const candles_raw = await fetch('/candles');
    const candles = await candles_raw.json();
    console.log("CANDLES_RAW", candles_raw);
    console.log("CANDLES_", candles);
    setCandles(candles.candles);

  }

  console.log(candles);

  return <>
    <h1>Home</h1>
    <button onClick={clickCandles}>Candles</button>
    <p>The current time is {currentTime}.</p>
    <table>
      {candles.map(candle => <tr>
        <td>{candle}</td>
      </tr>)}
    </table>
  </>;
}

export default Home