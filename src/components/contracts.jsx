import React, {useEffect} from 'react';
import { Table } from 'antd';

function Contracts(props) {
  const {symbols, setSymbols, getCandlesSymbol} = props;
  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      render: text => <a onClick={() => {getCandlesSymbol(text)}}>{text}</a>,
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
