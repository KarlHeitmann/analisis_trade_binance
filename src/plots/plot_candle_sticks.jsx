import React from 'react';
import Plot from 'react-plotly.js';

function PlotCandleSticks(props) {
  const {data, layout} = props
  return <>
    <h1>Plot Candle Sticks</h1>
    <Plot
      data={data}
      layout={layout}
    />

  </>;
};

export default PlotCandleSticks;