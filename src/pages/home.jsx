import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd'
import PlotCandleSticks from '../plots/plot_candle_sticks';
import Contracts from '../components/contracts';

function Home(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [candles, setCandles] = useState({'open': [], 'close': [], 'high': [], 'low': [], 'volume': []});
  const [symbols, setSymbols] = useState([])

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  const clickStart = async() => {
    const response = await fetch('/start');
    const result = await response.json();
    console.log("RAW CANDLES", result)
  }

  const getCandlesSymbol = async(symbol) => {
    console.log(symbol);
  }

  const clickCandles = async() => {
    // function clickCandles() {
    // fetch('/candles').then(res => res.json()).then(data => {
    //   console.log(data.candles);
    //   setCandles(candles);
    // });
    const response = await fetch('/candles');
    const result = await response.json();
    const {candles} = result;
    console.log("RAW CANDLES", candles)
    setCandles(candles)
    // setCandles(candles.candles);
  }

  console.log(candles);


  return <>
    <h1>Home</h1>
    <Button onClick={clickCandles}>Candles</Button>
    <Button onClick={clickStart}>START</Button>
    <p>The current time is {currentTime}.</p>
    <Row>
      <Col span={18}>
        <PlotCandleSticks
          data={candles}
        />
      </Col>
      <Col span={4}>
        <Contracts
          getCandlesSymbol={getCandlesSymbol}
          setSymbols={setSymbols}
          symbols={symbols}
        />
      </Col>
    </Row>
  </>;
}

export default Home