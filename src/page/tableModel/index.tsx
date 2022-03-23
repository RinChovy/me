import React from 'react';
import { Layout, Menu, Breadcrumb, Table, Button } from 'antd';
import Menus from '../../components/menu';
import FormModel from './components/formModel';
import FormModel2 from './components/formModel2';

interface TableList {
  key: number;
  name: string;
  age: number;
  address: string;
}
interface model {
  name: string;
  newName: string;
}
// const data: Array<TableList> = [];
// for (let i = 0; i < 4; i++) {
//     data.push({
//         key: i,
//         name: `大锁${i}号`,
//         age: 1,
//         address: `家人们主要是测试`,
//     });
// }

class tableModel extends React.Component<any, any> {
  state = {
    list: [
      { key: 0, name: '大锁0号', age: 1, address: '家人们主要是测试' },
      { key: 1, name: '大锁1号', age: 1, address: '家人们主要是测试' },
      { key: 2, name: '大锁2号', age: 1, address: '家人们主要是测试' },
      { key: 3, name: '大锁3号', age: 1, address: '家人们主要是测试' },
    ],
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    isTure: false, //弹出框控制层
    isTure2: false, //弹出框2控制层
    formValue: '', //给弹出层传递的参数
    formValue2: '', //给弹出层2传递的参数
    formKey: 0, //弹出层的key控制状态
  };
  componentDidMount() {}
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  onSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  updateValue = (values: model) => {
    const { formKey } = this.state;
    debugger;
    let list = this.state.list;
    list[list.findIndex((n) => n.key === formKey)].name = values.newName;
    this.setState({
      list: list,
    });
  };
  // 点击事件

  handleForm = (value: TableList) => {
    console.log(value);
    this.setState({
      isTure: true,
      formValue: value.name,
      formKey: value.key,
    });
  };
  // 点击事件

  handleForm2 = (value: TableList) => {
    console.log(value);
    this.setState({
      isTure2: true,
    });
  };
  // 子组件传递过来的显示状态
  handleTrueOrFalse = (e: boolean) => {
    this.setState({
      isTure: e,
    });
  };
  // 子组件传递过来的显示状态
  handleTrueOrFalse2 = (e: boolean) => {
    this.setState({
      isTure2: e,
    });
  };
  render() {
    const { loading, selectedRowKeys, isTure, isTure2, formValue, formValue2, list } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const { Header } = Layout;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '数字',
        dataIndex: 'age',
      },
      {
        title: '描述',
        dataIndex: 'address',
      },
      {
        title: '操作',
        dataIndex: 'key',
        render: (tag: any) => (
          <>
            {tag === 1 ? (
              <button onClick={() => this.handleForm(tag)}>此处为表单</button>
            ) : (
              <button onClick={() => this.handleForm2(tag)}>此处为路径</button>
            )}
          </>
        ),
      },
      // {
      //     title: '产品订单状态',
      //     dataIndex: 'productOrderStatus',
      //     render:(e:any)=>(
      //         <>
      //         {e===1?<span>成功</span>:<span>失败</span>}
      //         </>
      //     )
      //   }
    ];
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
                <Breadcrumb.Item>table类型</Breadcrumb.Item>
              </Breadcrumb>
              <div>
                <div style={{ marginBottom: 16 }}>
                  <Button
                    type='primary'
                    onClick={this.start}
                    disabled={!hasSelected}
                    loading={loading}
                  >
                    家人们开始进行
                  </Button>
                  <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                  </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={list} />
              </div>
            </Layout>
          </Layout>
        </Layout>
        <FormModel
          isTure={isTure}
          handleTrueOrFalse={this.handleTrueOrFalse}
          formValue={formValue}
          updateValue={this.updateValue}
        />
        <FormModel2
          isTure={isTure2}
          handleTrueOrFalse={this.handleTrueOrFalse2}
          formValue={formValue2}
        />
      </>
    );
  }
}
export default tableModel;
