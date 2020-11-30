import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, Radio } from 'antd';

const ModalView = (props) => {
    const [form] = Form.useForm();

    const {
        visibleModal,
        setVisibleModal,
        userSelected,
        t
    } = props;

    const handleOk = () => {
        setVisibleModal(false)
    }
    const handleCancel = () => {
        setVisibleModal(false)
    }
    const buttonItemLayout = {
        wrapperCol: { span: 14, offset: 4 },
    }
    
    return (
        <Modal
            title={t("information_user")}
            visible={visibleModal}
            // onOk={handleOk}
            className="modal-user-detail"
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    {t("cancel")}
                </Button>,
              ]}
        >
            <Form
                // {...formItemLayout}
                layout="horizontal"
                form={form}
            // initialValues={{ layout: formLayout }}
            // onValuesChange={onFormLayoutChange}
            >

                <Form.Item label={t("name")}>
                    <Input value={userSelected.name} disabled />
                </Form.Item>
                <Form.Item label={t("age")}>
                    <Input value={userSelected.age} disabled />
                </Form.Item>
                <Form.Item label={t("phone")}>
                    <Input value={userSelected.phone} disabled />
                </Form.Item>
                <Form.Item label={t("username")}>
                    <Input value={userSelected.username} disabled />
                </Form.Item>
                <Form.Item label={t("role")}>
                    <Input value={userSelected.role} disabled />
                </Form.Item>
                <Form.Item label={t("gender")}>
                    <Input value={userSelected.gender} disabled />
                </Form.Item>
                <Form.Item label={t("language")}>
                    <Input value={userSelected.lang} disabled />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalView;
