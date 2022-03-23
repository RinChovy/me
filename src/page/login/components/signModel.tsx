import { useState, useEffect } from "react";
import { Modal, Form, Input} from 'antd';

function SignModel(props: any) {
    const [form] = Form.useForm();
    const { isModalVisibleP, handleIsModalVisible } = props;
    const [isModalVisible, setIsModalVisible] = useState(false);
    // 确定按钮
    const handleOk = () => {
        form.submit();
    };
    // 取消按钮
    const handleCancel = () => {
        handleIsModalVisible(false);
        setIsModalVisible(false);
    };
    //提交逻辑
    const onFinish = ()=>{
        console.log("没有问题,注册成功");
        handleIsModalVisible(false);
        setIsModalVisible(false);
    }
    // 当父组件的变动值发生改变后
    useEffect(() => {
        setIsModalVisible(isModalVisibleP);
    }, [isModalVisibleP]);

    return (
        <>
            <Modal title="注册" visible={isModalVisible}
                onOk={handleOk} onCancel={handleCancel}
                okText='注册' cancelText='取消'>
                <Form
                    style={{ marginTop: "4%" }}
                    name="basic"
                    form={form}
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 13 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="确认密码"
                        name="password_repeat"
                        rules={[{ required: true, message: '请输入确认密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>


                </Form>
            </Modal>
        </>
    )
}
export default SignModel