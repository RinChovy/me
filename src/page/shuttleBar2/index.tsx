import React from 'react';
import '../../public/index.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import Menus from '../../components/menu';

class shuttleBar extends React.Component<any, any> {
  state = {
    data: [
      { name: '家人位置一号', value: [300, 800], show: true },
      { name: '家人位置二号', value: [500, 300], show: false },
      { name: '家人位置三号', value: [400, 600], show: false },
    ],
    index: 0,
  };
  componentDidMount() {
    setInterval(this.handleShow, 2000);
  }
  handleShow = () => {
    const { data, index } = this.state;
    let dataindex = 0;
    if (index === 2) {
      data[index].show = false;
      data[0].show = true;
      dataindex = 0;
    } else {
      data[index].show = false;
      data[index + 1].show = true;
      dataindex = index + 1;
    }
    this.setState({
      data,
      index: dataindex,
    });
  };
  render() {
    const { Header } = Layout;
    const { data } = this.state;
    const jiaren = data.map((v, k) => {
      return (
        <div
          className='mapBox'
          style={{
            top: v.value[0] + 'px',
            left: v.value[1] + 'px',
            display: v.show ? 'block' : 'none',
          }}
        >
          <span style={{ fontSize: '100px', color: '#1c5be4', fontWeight: '800' }}>.</span>
          <span style={{ color: '#1c5be4', fontWeight: '800' }}>{v.name}</span>
          <div className='mapBar'>
            <span>总交易额：10(万元){<br />}总交易量：10(万笔)</span>
          </div>
        </div>
      );
    });
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
                <Breadcrumb.Item>首页</Breadcrumb.Item>
              </Breadcrumb>
              <div className='mapBody'>{jiaren}</div>
            </Layout>
          </Layout>
        </Layout>
      </>
    );
  }
}
export default shuttleBar;
