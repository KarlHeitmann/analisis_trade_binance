import React, { useState, useEffect } from 'react';

function Home(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data.candles);
      setCurrentTime(data.time);
      setCandles(data.candles);
    });
  }, []);

  return <>
    <h1>Home</h1>
    <p>The current time is {currentTime}.</p>
    <table>
      {candles.map(candle => <tr>
        <td>{candle}</td>
      </tr>)}
    </table>
  </>;
}

export default Home