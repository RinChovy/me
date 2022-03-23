import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
// import { Chart, Interval } from 'bizcharts';
import Menus from '../../components/menu';
import Antfive from './components/ant_five.jsx';

class bizCharts extends React.Component<any, any> {
  state = {};
  componentDidMount() {}
  render() {
    const { Header } = Layout;
    return (
      <>
        <Layout>
          <Header className='header'>
            <div className='logo' />
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
              <span>主页面</span>
            </Menu>
          </Header>
          <Layout>
            <Menus history={this.props.history} />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>宁夏地图</Breadcrumb.Item>
              </Breadcrumb>
              <div>
                <Antfive />
              </div>
            </Layout>
          </Layout>
        </Layout>
      </>
    );
  }
}
export default bizCharts;
