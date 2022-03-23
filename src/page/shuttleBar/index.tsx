import React from 'react';
import '../../public/index.scss';
import { Layout, Menu, Breadcrumb, Transfer, Button } from 'antd';
import Menus from '../../components/menu'


class shuttleBar extends React.Component<any, any> {
    state = {
        home: true,
        mockData: [{id:'1',name:'第一波'},{id:'2',name:'第二波'}], //穿梭框数据1
        targetKeys: ['1'], //穿梭框数据2
    }
    componentDidMount() {
        this.getMock();
    }
    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({ mockData, targetKeys });
    };
    handleChange = (targetKeys:any) => {
        this.setState({ targetKeys });
    };
    renderFooter = () => (
        <Button size="small" style={{ float: 'right', margin: 5 }} onClick={this.getMock}>
          reload
        </Button>
      );
    render() {
        const { Header, Content } = Layout;
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
                        <Menus history={this.props.history} />
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
                                <Transfer
                                    dataSource={this.state.mockData}
                                    showSearch
                                    listStyle={{
                                        width: 250,
                                        height: 300,
                                    }}
                                    operations={['去右边', '去左边']}
                                    targetKeys={this.state.targetKeys}
                                    onChange={this.handleChange}
                                    render={item => `${item.id}-${item.name}`}
                                    footer={this.renderFooter}
                                />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </>
        )
    }
}
export default shuttleBar;