import React, {useEffect, useState} from 'react';
import { Table, Space } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
  },
  {
    key: '2',
    name: 'Jim Green',
  },
  {
    key: '3',
    name: 'Joe Black',
  },
];

function Contracts(props) {
  const [symbols, setSymbols] = useState([])
  useEffect(() => {
    fetch('/symbols').then(res => res.json()).then(data => {
      const {symbols} = data;
      // symbols = symbols.map((symbol, i) => {"key": i, "name": symbol})
      const ss = symbols.map((currElement, index) => {
        console.log("The current iteration is: " + index);
        console.log("The current element is: " + currElement);
        console.log("\n");
        return {key: index, name: currElement}; //equivalent to list[index]
      });
      console.log("symbols", symbols);
      console.log("ss", ss);
      setSymbols(ss)
    });
  }, []);

  return <Table columns={columns} dataSource={symbols} />;
}

export default Contracts;
