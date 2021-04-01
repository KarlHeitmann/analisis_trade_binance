import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd'
import PlotCandleSticks from '../plots/plot_candle_sticks';
import Contracts from '../components/contracts';
import TimeFrames from '../components/time_frames';

function Home(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [candles, setCandles] = useState({'open': [], 'close': [], 'high': [], 'low': [], 'volume': []});
  const [symbols, setSymbols] = useState([])
  const [symbol, setSymbol] = useState()
  const [tf, setTf] = useState("1m")
  const [ta, setTa] = useState({trend_ema_fast: [], trend_ema_slow: []})

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
    const response = await fetch(`/candles/${symbol}/${tf}`);
    const result = await response.json();
    const {candles} = result;
    console.log("RAW CANDLES", result);
    setCandles(candles);
    setSymbol(symbol);
    setTa(result.df);
  }

  const analizar = async() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ candles })
    };
    // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
    //     .then(response => response.json())
    //     .then(data => this.setState({ postId: data.id }));
    const response = await fetch(`/ta`, requestOptions);
    console.log("B", response)

    // const result = await response.json();
    // console.log("A")
    // console.log(result);
  }

  return <>
    <Row>
      <Col span={7}>
        <h1>Home</h1>
        <p>The current time is {currentTime}.</p>
      </Col>
      <Col span={7}>
        <Button onClick={clickStart}>START</Button>
        <Button onClick={analizar}>ANALIZAR</Button>
      </Col>
      <Col span={7}>
        <TimeFrames
          tf={tf}
          setTf={setTf}
        />
      </Col>
    </Row>
    <Row>
      <Col span={18}>
        <PlotCandleSticks
          seleccion_ta={['trend_ema_fast', 'trend_ema_slow']}
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