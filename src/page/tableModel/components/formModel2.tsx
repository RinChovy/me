import React, { useState, useEffect } from 'react';
import { Modal, Form, Steps, message, Button, Divider } from 'antd';
import One from './number/one';
import Two from './number/two';

const { Step } = Steps;
const steps = [
  {
    title: '商户基本信息',
    content: '商户基本信息',
  },
  {
    title: '业务意向',
    content: '业务意向',
  },
  {
    title: '商户信息补录',
    content: '商户信息补录',
  },
  {
    title: '提交申请',
    content: '提交申请',
  },
];
function FormModel2(props: any) {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState('');

  const [current, setCurrent] = useState(0);
  const next = () => {
    form.submit();
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const handleOk = (e: any) => {
    console.log(e);
    // form.validateFields().then((values) => {
    //   props.updateValue(values);
    //   form.resetFields();
    //   setIsModalVisible(false);
    //   props.handleTrueOrFalse(false);
    // });
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
          width='1000px'
          footer={
            [
              // <Button type='primary' htmlType='submit' onClick={handleOk}>
              //   确定
              // </Button>,
              // <Button key='back' onClick={handleCancel}>
              //   取消
              // </Button>,
            ]
          }
        >
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Divider />
          <div className='steps-action'>
            {current < steps.length - 1 && (
              <Button type='primary' onClick={() => next()}>
                下一步
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type='primary' onClick={() => message.success('大兄弟提交成功')}>
                提交
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                上一步
              </Button>
            )}
          </div>
          <div className='steps-content'>
            {current === 0 && <One />}
            {current === 1 && <Two />}
          </div>
        </Modal>
      </Form>
    </>
  );
}
export default FormModel2;
