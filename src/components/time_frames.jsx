import React, {useState} from 'react';
import { Radio } from 'antd';

const TimeFrames = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const time_frames = ["1m", "5m", "1h", "1d"]

  return (
    <Radio.Group onChange={onChange} value={value}>
      {
        time_frames.map(tf => <Radio value={tf}>{tf}</Radio>)
      }
    </Radio.Group>
  );
};

export default TimeFrames