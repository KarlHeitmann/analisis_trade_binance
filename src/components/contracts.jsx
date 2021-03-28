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
  // useEffect(() => {
  //   fetch('/contracts').then(res => res.json()).then(data => {
  //     console.log(data);
  //   });
  // }, []);

  return <Table columns={columns} dataSource={data} />;
}

export default Contracts;
