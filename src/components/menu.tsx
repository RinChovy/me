import React from 'react';
import '../public/index.scss';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import store from '../store/index';

class MenuModel extends React.Component<any, any> {
  state = {
    menuModel: store.getState().menuModel,
  };
  handleSubmit = (keyPath: Array<string>) => {
    const pathname = keyPath[0];
    const pathnameT = keyPath[1];
    store.dispatch({
      type: 'TYPE_MENU',
      value: pathnameT,
      value2: pathname,
    });
    this.setState({
      menuModel: pathname,
    });
    this.props.history.push({
      pathname: pathname,
    });
  };
  render() {
    const { SubMenu } = Menu;
    const { Sider } = Layout;
    return (
      <>
        <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={[store.getState().menuModel]}
            defaultOpenKeys={[store.getState().defaultOpenKeys]}
            style={{ height: '100%', borderRight: 0 }}
            onClick={({ keyPath }) => this.handleSubmit(keyPath)}
          >
            <SubMenu key='sub1' icon={<UserOutlined />} title='常用功能一览'>
              <Menu.Item key='/home'>首页 啥也不是</Menu.Item>
              <Menu.Item key='/fromModel'>表单提交</Menu.Item>
              <Menu.Item key='/fromModel2'>表单提交2</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' icon={<LaptopOutlined />} title='不常用功能 2'>
              <Menu.Item key='/shuttleBar'>穿梭栏功能</Menu.Item>
              <Menu.Item key='/shuttleBar2'>离谱自制地图</Menu.Item>
            </SubMenu>
            <SubMenu key='sub3' icon={<NotificationOutlined />} title='table类型'>
              <Menu.Item key='/tableModel'>table里嵌入form</Menu.Item>
              <Menu.Item key='/tableModelJ'>金儿的table（无组件)</Menu.Item>
            </SubMenu>
            <SubMenu key='sub4' icon={<NotificationOutlined />} title='ECharts'>
              <Menu.Item key='/eCharts'>柱状图</Menu.Item>
            </SubMenu>
            <SubMenu key='sub5' icon={<NotificationOutlined />} title='Antv'>
              <Menu.Item key='/antOne'>年度缴费对比(柱状图)</Menu.Item>
              <Menu.Item key='/antTwo'>当年分月收入趋势(双折线图)</Menu.Item>
              <Menu.Item key='/antThree'>月缴费行业排名(横向柱状图)</Menu.Item>
              <Menu.Item key='/antFour'>甘肃地图</Menu.Item>
              <Menu.Item key='/antFive'>宁夏地图</Menu.Item>
              <Menu.Item key='/antSix'>轮播表格</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </>
    );
  }
}
export default MenuModel;
