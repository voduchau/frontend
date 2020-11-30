import React, { useEffect, useState } from 'react';
import { Table, Input, Button, Tooltip, Popconfirm, message, Modal } from 'antd';
import api from '@api';
import {
    PlusOutlined,
    DeleteTwoTone,
    EyeTwoTone,
    EditTwoTone
} from '@ant-design/icons';
import './index.css';
import ModalView from './ModalView';
import { useTranslation } from 'react-i18next';

const { Search } = Input;
const { Column, ColumnGroup } = Table;

const User = () => {
    const { t, i18n } = useTranslation();

    const [data, setData] = useState([]);
    const [userSelected, setUserSelected] = useState({});
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [pagination, setpagination] = useState({current: 1, pageSize: 8});
    
    //modal
    const [visibleModal, setVisibleModal] = useState(false);

    const columns = [
        {
            title: t("name"),
            dataIndex: 'name',
            align: 'center',
            fixed: 'left',
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
            title: t("phone"),
            dataIndex: 'phone',
            align: 'center',
            defaultSortOrder: 'descend',
        },
        {
            title: t("age"),
            dataIndex: 'age',
            align: 'center',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: t("username"),
            dataIndex: 'username',
            align: 'center',
        },
        {
            title: t("role"),
            dataIndex: 'role',
            align: 'center',
        },
        {
            title: t("gender"),
            dataIndex: 'gender',
            align: 'center',
        },
        {
            title: t("address"),
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
            title: t("action"),
            align: 'center',
            dataIndex: '',
            key: 'x',
            fixed: 'right',
            render: (record) => (
                <div className="user-action">
                    <Tooltip placement="top" title={t("delete")}>
                        <Popconfirm
                            title={t("confirm_delete")}
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText={t("yes")}
                            cancelText={t("no")}
                        >
                            <Button shape="circle" icon={<DeleteTwoTone twoToneColor="red" />} size="small" />
                        </Popconfirm>
                    </Tooltip>
                    <Tooltip placement="top" title={t("view")}>
                        <Button 
                            shape="circle" 
                            onClick={() => handleViewUser(record)}
                            icon={<EyeTwoTone twoToneColor="green" />} 
                            size="small" 
                        />
                    </Tooltip>
                    <Tooltip placement="top" title={t("edit")}>
                        <Button 
                            shape="circle" 
                            icon={<EditTwoTone />} 
                            size="small" 
                        />
                    </Tooltip>
                </div>
            ),
        }
    ];

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () => {
        setLoading(true);
        api.get('/users').then((res) => {
            setData(res.data)
            setLoading(false)
        })
    }

    const handleAddUser = () => {}

    const handleViewUser = (record) => {
        setVisibleModal(true);
        setUserSelected(record)
    }

    const onChangeTable = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
        setpagination(pagination.current)
    }

    const handleSearchUser = e => {
        setLoading(true);
        setSearch(e)
        api.get('/users/search',{
            params: { 
                search: e
            }
        }).then((res) => {
            setData(res.data)
            setLoading(false)
        })
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
        <>
            <div className="user-content-header">
                <Search
                    placeholder={t("search")}
                    maxLength={30}
                    className="input-search-user"
                    allowClear
                    onSearch={handleSearchUser}
                    style={{ width: 200 }}
                />
                <Button type="primary" size="medium" onClick={handleAddUser}>
                    Thêm mới
                </Button>
            </div>
            <Table
                bordered
                rowKey={record => record.key}
                dataSource={data}
                columns={columns}
                pagination={pagination}
                loading={loading}
                dataSource={data}
                onChange={onChangeTable}
                className="table-user-container"
                scroll={{ x: 800, y: document.body.offsetHeight - 250}}
            />
            <ModalView 
                visibleModal={visibleModal} 
                setVisibleModal={setVisibleModal} 
                userSelected={userSelected}
                t={t}
            />
        </>
    );
}

export default User;
