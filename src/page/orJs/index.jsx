import React from 'react';
import '../../public/index.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import Menus from '../../components/menu';

class Orjs extends React.Component {
  state = {
    home: true,
  };
  componentDidMount() {
    document.getElementById('one').addEventListener('click', function () {
      alert('家人们就是说啥呢');
    });
    document.getElementById('two').addEventListener('click', function () {
      alert('家人们就是说啥呢2');
    });
    for (let k = 0; k < document.getElementsByClassName('one').length; k++) {
      document.getElementsByClassName('one')[k].addEventListener('click', function () {
        alert('家人们就是说啥呢' + k);
      });
    }
    console.log(document.getElementById('three').getAttribute('data-id'));
  }
  comeOn = () => {
    // alert(document.querySelectorAll('[name=select]')[0].value);
  };
  render() {
    const { Header, Content } = Layout;
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
              <Content
                className='site-layout-background'
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <button id='one'>原生按钮1</button>
                <div id='two'>原生元素1</div>
                <button className='one'>class按钮</button>
                <button className='one'>class按钮2</button>
                <button className='one'>class按钮3</button>
                <div data-name='wwd'>
                  <button id='three' data-id='123' onClick={this.comeOn()} name='我草'>
                    多样化按钮
                  </button>
                </div>

                <div id='form'>
                  <select name='select'>
                    <option value='11'>1</option>
                    <option value='12'>2</option>
                    <option value='13'>3</option>
                    <option value='14'>4</option>
                  </select>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </>
    );
  }
}
export default Orjs;
