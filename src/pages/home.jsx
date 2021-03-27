import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

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
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        },
        {
          x: [1, 2, 3],
          y: [2, 5, 3],
          type: 'bar',
        },
      ]}
      layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
    />
    <table>
      {candles.map(candle => <tr>
        <td>{candle}</td>
      </tr>)}
    </table>
  </>;
}

export default Home