import React, { useEffect, useState } from 'react';
import { Table, Input, Button, Tooltip, Popconfirm, message } from 'antd';
import api from '@api';
import {
    PlusOutlined,
    DeleteTwoTone,
    EyeTwoTone,
    EditTwoTone
} from '@ant-design/icons';
import './index.css';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

// const data = [
//     {
//         key: '1',
//         name: 'Joe',
//         phone: "0941010197",
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim',
//         phone: "0968321456",
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'Joe',
//         phone: "0963412569",
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];


const User = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            align: 'center',
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
            align: 'center',
            defaultSortOrder: 'descend',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            align: 'center',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            align: 'center',
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
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            align: 'center',
            dataIndex: '',
            key: 'x',
            render: () => (
                <div className="user-action">
                    <Tooltip placement="top" title={"Delete"}>
                        <Popconfirm
                            title="Bạn có chắc chắn muốn xóa?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button shape="circle" icon={<DeleteTwoTone twoToneColor="red" />} size="small" />
                        </Popconfirm>
                    </Tooltip>
                    <Tooltip placement="top" title={"View"}>
                        <Button shape="circle" icon={<EyeTwoTone twoToneColor="green" />} size="small" />
                    </Tooltip>
                    <Tooltip placement="top" title={"Edit"}>
                        <Button shape="circle" icon={<EditTwoTone />} size="small" />
                    </Tooltip>
                </div>
            ),
        }
    ];

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () => {
        console.log('fetch')
        setLoading(true)
        api.get('/users').then((res) => {
            setData(res.data)
            setLoading(false)
        })
    }

    const handleAddUser = () => {
        api.get('/users', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }).then((response) => {
            console.log(response,'response')
        })
    }

    const onChangeTable = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }

    const onSearch = e => {
        console.log(e);
    };

    const confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
    }

    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    }
    return (
        <div className="user-content">
            <div className="user-content-header">
                <Search
                    placeholder="Tìm kiếm"
                    maxLength={30}
                    className="input-search-user"
                    allowClear
                    onSearch={onSearch}
                    style={{ width: 200 }}
                />
                <Button type="primary" size="medium" onClick={handleAddUser}>
                    Thêm mới
                </Button>
            </div>
            <Table
                bordered
                dataSource={data}
                columns={columns}
                loading={loading}
                dataSource={data}
                onChange={onChangeTable}
                className="table-user-container"
            />
        </div>
    );
}

export default User;
