import React from 'react';
import '../../public/index.scss';
import { Form, Input, Button, Checkbox } from 'antd';
import SignModel from './components/signModel';


class Login extends React.Component<any, any> {
    state = {
        isModalVisible: false
    }
    handleSign = () => {
        this.setState({
            isModalVisible: true
        })
    }

    handleIsModalVisible = (e: boolean) => {
        this.setState({
            isModalVisible: e
        })
    }

    onFinish = (values: any) => {
        console.log('Success:', values);
        this.props.history.push({
            pathname: '/home'
        })
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        const { isModalVisible } = this.state;
        return (
            <>
                <div className='LoginDiv'>
                    <Form
                        style={{ marginTop: "24%" }}
                        name="basic"
                        labelCol={{ span: 7 }}
                        wrapperCol={{ span: 13 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={() => this.onFinishFailed('错了呀')}
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

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                            <Button type="ghost" style={{ marginLeft: "30px" }} onClick={this.handleSign}>
                                点击朕注册
                            </Button>
                        </Form.Item>
                    </Form>
                    <SignModel isModalVisibleP={isModalVisible} handleIsModalVisible={this.handleIsModalVisible} />
                </div>
            </>
        )
    }
}
export default Login;