import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';

function FormModel(props: any) {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState('');

  const handleOk = () => {
    form.validateFields().then((values) => {
      props.updateValue(values);
      form.resetFields();
      setIsModalVisible(false);
      props.handleTrueOrFalse(false);
    });
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
    props.handleTrueOrFalse(false);
  };

  useEffect(() => {
    setIsModalVisible(props.isTure);
    setValue(props.formValue);
    form.setFieldsValue({
      name: props.formValue,
    });
  }, [form, props.formValue, props.isTure]);

  return (
    <>
      <Form
        style={{ marginTop: '4%' }}
        name='basic'
        form={form}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 13 }}
        initialValues={{ remember: true }}
        onFinish={handleOk}
      >
        <Modal
          title='列表修改'
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button type='primary' htmlType='submit' onClick={handleOk}>
              确定
            </Button>,
            <Button key='back' onClick={handleCancel}>
              取消
            </Button>,
          ]}
        >
          <p>{value}</p>

          <Form.Item label='原来用户名' name='name'>
            <Input disabled />
          </Form.Item>
          <Form.Item
            label='新用户名'
            name='newName'
            rules={[{ required: true, message: '家人们此处填写新名字' }]}
          >
            <Input />
          </Form.Item>
        </Modal>
      </Form>
    </>
  );
}
export default FormModel;
