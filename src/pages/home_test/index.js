import './index.scss'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { Table, Divider, Tag } from 'antd';
// 壳组件
import Shell from 'Root/components/shell'
import Meta from 'Root/components/meta'
import PostsList from 'Root/components/posts/list'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const columns = [
      {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
      },
      { title: 'Column 1', dataIndex: 'address', key: '1' },
      { title: 'Column 2', dataIndex: 'address', key: '2' },
      { title: 'Column 3', dataIndex: 'address', key: '3' },
      { title: 'Column 4', dataIndex: 'address', key: '4' },
      { title: 'Column 5', dataIndex: 'address', key: '5' },
      { title: 'Column 6', dataIndex: 'address', key: '6' },
      { title: 'Column 7', dataIndex: 'address', key: '7' },
      { title: 'Column 8', dataIndex: 'address', key: '8' },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
      },
    ];
    
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
      },
    ];
    
    return (
      <div styleName="preferential-container">
        <Table columns={columns} dataSource={data} scroll={{ x: 1300 }}/>
      </div>
    )
  }
}
