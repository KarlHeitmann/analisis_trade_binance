import React, {useState} from 'react';
import { Radio } from 'antd';

const TimeFrames = (props) => {
  const [value, setValue] = React.useState(props.tf);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    props.setTf(e.target.value);
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