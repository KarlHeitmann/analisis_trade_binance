import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import {data, layout} from './candle_stick_example'
import PlotCandleSticks from '../plots/plot_candle_sticks';

function Home(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [candles, setCandles] = useState({'open': [], 'close': [], 'high': [], 'low': [], 'volume': []});

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
    const response = await fetch('/candles');
    const result = await response.json();
    const {candles} = result;
    console.log(candles)
    setCandles(candles)
    // setCandles(candles.candles);
  }

  console.log(candles);


  return <>
    <h1>Home</h1>
    <button onClick={clickCandles}>Candles</button>
    <p>The current time is {currentTime}.</p>
    <PlotCandleSticks
      data={candles}
      layout={layout}
    />
    <Plot
      data={data}
      layout={layout}
      // data={[
      //   {
      //     y: candles,
      //     type: 'scatter',
      //     mode: 'lines+markers',
      //     marker: {color: 'red'},
      //   },
      // ]}
      // // layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      // layout={ {title: 'A Fancy Plot'} }
    />
    <table>
      {/* {candles.map(candle => <tr>
        <td>{candle}</td>
      </tr>)} */}
    </table>
  </>;
}

export default Home