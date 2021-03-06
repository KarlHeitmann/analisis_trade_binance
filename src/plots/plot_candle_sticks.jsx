import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import {
  Slider
} from 'antd';

var layout = {
  dragmode: 'zoom',
  margin: {
    r: 10,
    t: 25,
    b: 40,
    l: 60
  },
  showlegend: false,
  xaxis: {
    autorange: true,
    domain: [0, 1],
    range: ['2017-01-03 12:00', '2017-02-15 12:00'],
    rangeslider: {range: ['2017-01-03 12:00', '2017-02-15 12:00']},
    title: 'Date',
    type: 'date'
  },
  yaxis: {
    autorange: true,
    domain: [0, 1],
    range: [114.609999778, 137.410004222],
    type: 'linear'
  }
};

let trace_candlestick = {
  // x: ['2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10', '2017-02-13', '2017-02-14', '2017-02-15'],
  // close: [116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004, 135.509995],
  decreasing: {line: {color: '#7F7F7F'}},
  // high: [116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007, 135.089996, 136.270004],
  increasing: {line: {color: '#17BECF'}},
  line: {color: 'rgba(31,119,180,1)'},
  // low: [115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995],
  // open: [115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998, 118.900002, 119.110001, 118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007, 133.080002, 133.470001, 135.520004],
  type: 'candlestick',
  xaxis: 'x',
  yaxis: 'y'
};

function PlotCandleSticks(props) {
  const {data, ta} = props;
  // const {max, setMax} = useState(0)
  const [maxi, setMaxi] = useState(0)
  const [current_values, setCurrentValues] = useState([0, 1000])
  // console.log('data props', data);
  console.log('TA', ta);


  // const trend_ema_fast = ta.trend_ema_fast.slice(current_values[0], current_values[1]);
  // const trend_ema_slow = ta.trend_ema_slow.slice(current_values[0], current_values[1]);
  // console.log("TRACE_TREND YYYYYYY",trace_trends)
  trace_candlestick.close = data.close.slice(current_values[0], current_values[1]);
  trace_candlestick.open = data.open.slice(current_values[0], current_values[1]);
  trace_candlestick.high = data.high.slice(current_values[0], current_values[1]);
  trace_candlestick.low = data.low.slice(current_values[0], current_values[1]);
  trace_candlestick.volume = data.volume.slice(current_values[0], current_values[1]);
  trace_candlestick.x = data.timestamp //.slice(current_values[0], current_values[1]);

  let trace_trends = [trace_candlestick];
  props.seleccion_ta.forEach(selected => {
    let trace_trend = {type: 'scatter'};
    trace_trend.x = data.timestamp;
    console.log('PCS_ta', ta)
    console.log('PCS_selected', selected)
    console.log('PCS_ta[selected]', ta[selected])
    console.log('PCS_Object.keys', Object.keys(ta[selected]))
    trace_trend.y = Object.keys(ta[selected]).map(data => ta[selected][data]);
    trace_trend.y = trace_trend.y.slice(current_values[0], current_values[1]);
    trace_trends.push(trace_trend);
  })

  useEffect(() => {
    const l = trace_candlestick.close
    console.log("TRACE_CANDLESTICK.x", l.length, l)
    setMaxi(trace_candlestick.x)
  }, [])

  const onChange = (rango) => {
    setCurrentValues(rango)
    console.log(rango);
  }
  return <>
    <h1>Plot Candle Sticks</h1>
    <Slider
      range
      defaultValue={[0, 1000]}
      onChange={onChange}
      // max={maxi}
      value={current_values}
      max={1000}
      />
    <Plot
      data={trace_trends}
      // data={[trace_trends]}
      layout={layout}
    />

  </>;
};

export default PlotCandleSticks;