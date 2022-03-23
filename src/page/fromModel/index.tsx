import React from 'react';
import '../../public/index.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import Menus from '../../components/menu'


class FromModel extends React.Component<any,any> {
    state = {
        home: true
    }
    render() {
        const { Header, Content} = Layout;
        return (
            <>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                           <span>主页面</span>
                        </Menu>
                    </Header>
                    <Layout>
                        <Menus   history={this.props.history}/>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <div className="formDiv">
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </>
        )
    }
}
export default FromModel;