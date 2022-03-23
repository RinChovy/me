import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
// import { Chart, Interval } from 'bizcharts';
import Menus from '../../components/menu';
import ECharts2 from './components/echarts';


// interface list{
//     id:number|string;
//     name:string;
//     else:string
// }
// const a = function jairen(app:list){
//     app.id=20;
//     app.name='金儿'
// }

class bizCharts extends React.Component<any, any> {
    state = {

    }
    componentDidMount() {

    }
    render() {

        const { Header } = Layout;
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
                                <Breadcrumb.Item>table类型</Breadcrumb.Item>
                            </Breadcrumb>
                            <div>
                              <ECharts2/>
                            </div>
                        </Layout>
                    </Layout>
                </Layout>

            </>
        )
    }
}
export default bizCharts;