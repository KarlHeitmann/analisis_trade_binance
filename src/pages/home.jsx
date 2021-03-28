import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd'
import PlotCandleSticks from '../plots/plot_candle_sticks';
import Contracts from '../components/contracts';

function Home(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [candles, setCandles] = useState({'open': [], 'close': [], 'high': [], 'low': [], 'volume': []});
  const [symbols, setSymbols] = useState([])
  const [ta, setTa] = useState({})

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  const clickStart = async() => {
    const response = await fetch('/start');
    const result = await response.json();
  }

  const getCandlesSymbol = async(symbol) => {
    const tf = '1m'
    const response = await fetch(`/candles/${symbol}/${tf}`);
    const result = await response.json();
    const {candles} = result;
    console.log("RAW CANDLES", result);
    setCandles(candles);
    setTa(result.df);
  }

  return <>
    <h1>Home</h1>
    <Button onClick={clickStart}>START</Button>
    <p>The current time is {currentTime}.</p>
    <Row>
      <Col span={18}>
        <PlotCandleSticks
          data={candles}
          ta={ta}
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