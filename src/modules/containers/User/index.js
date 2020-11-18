import React from 'react';
import { Table, Input, Button } from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons';
const { Column, ColumnGroup } = Table;
import './index.css';
const { Search } = Input;
const data = [
    {
        key: '1',
        name: 'Joe',
        phone: "0941010197",
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim',
        phone: "0968321456",
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe',
        phone: "0963412569",
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sortDirections: ['descend'],
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        defaultSortOrder: 'descend',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
    }
];


const User = () => {
    const onChangeTable = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }
    const onSearch = e => {
        console.log(e);
    };
    return (
        <div className="user-content">
            <div className="user-content-header">
                <Search
                    placeholder="input search text"
                    allowClear
                    onSearch={onSearch}
                    style={{ width: 200}}
                />
                <Button type="primary" icon={<PlusOutlined />} size="medium">
                    Thêm mới
                </Button>
            </div>
            <Table
                dataSource={data}
                columns={columns}
                dataSource={data}
                onChange={onChangeTable}
                className="table-user-container"
            />
        </div>
    );
}

export default User;
