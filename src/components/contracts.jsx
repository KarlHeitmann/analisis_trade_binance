import React, {useEffect, useState} from 'react';
import { Table, Space } from 'antd';

function Contracts(props) {
  const [symbols, setSymbols] = useState([])
  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      render: text => <a>{text}</a>,
    },
  ];

  useEffect(() => {
    fetch('/symbols').then(res => res.json()).then(data => {
      let {symbols} = data;
      symbols = symbols.map((symbol, index) => { return {key: index, symbol: symbol}; });
      setSymbols(symbols)
    });
  }, []);

  return <Table columns={columns} dataSource={symbols} />;
}

export default Contracts;
