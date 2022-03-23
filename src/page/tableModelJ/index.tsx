import React from 'react';
import { Layout, Menu, Breadcrumb, Table, Button,Modal } from 'antd';
import Menus from '../../components/menu';


interface TableList {
    key: number
    name: string
    age: number
    address: string
}
interface model {
    name: string
    newName: string
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
        list: [{ "key": 0, "name": "金儿1号", "age": 1, "address": "家人们主要是测试" }, { "key": 1, "name": "大锁1号", "age": 1, "address": "家人们主要是测试" }, { "key": 2, "name": "大锁2号", "age": 1, "address": "家人们主要是测试" }, { "key": 3, "name": "大锁3号", "age": 1, "address": "家人们主要是测试" }],
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        isTure: false,//弹出框控制层
        formValue: '',//给弹出层传递的参数
        formKey: 0,//弹出层的key控制状态
        isModalVisible:false
    }
    componentDidMount() {

    }
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
        const { formKey } = this.state
        debugger;
        let list = this.state.list;
        list[list.findIndex(n => n.key === formKey)].name = values.newName
        this.setState({
            list: list
        })
    }
    // 点击事件

    handleForm = (value: TableList) => {
        this.setState({
            isModalVisible: true,
        })

    }
    // 子组件传递过来的显示状态
    handleTrueOrFalse = (e: boolean) => {
        this.setState({
            isTure: e
        })
    }

    handleOk=()=>{

    }
    handleCancel=()=>{

    }
    render() {
        const { loading, selectedRowKeys, isTure, formValue, list } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const { Header } = Layout;
        const columns = [
            {
                title: '产品订单编码',
                dataIndex: 'name',
            },
            {
                title: '返回码',
                dataIndex: 'name',
            },
            {
                title: '错误描述',
                dataIndex: 'name',
            },
            {
                title: '产品订单状态',
                dataIndex: 'name',
            },
            {
                title: '产品订单状态详情',
                dataIndex: 'name',
            },
            {
                title: '操作',
                render: (e: any) => (
                    <>
                        <Button type="primary" onClick={() => this.handleForm(e)}>点击金儿此处</Button>
                    </>

                )
            },
        ];
        // const columns = [
        //     {
        //         title: '姓名',
        //         dataIndex: 'name',
        //     },
        //     {
        //         title: '数字',
        //         dataIndex: 'age',
        //     },
        //     {
        //         title: '描述',
        //         dataIndex: 'address',
        //     },
        //     {
        //         title: '操作',
        //         // dataIndex: 'name',
        //         render: (tag: any) => (
        //             <>
        //                 <button onClick={() => this.handleForm(tag)}>此处为表单</button>
        //             </>

        //         )
        //     },
        // ];
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

                            <Table
                                dataSource={list}
                                columns={columns}
                            />
                        </Layout>
                    </Layout>
                    <Modal 
                        visible={this.state.isModalVisible}
                        title="列表修改"
                        footer={[<Button type="primary" htmlType="submit" onClick={this.handleOk}>
                            确定
                        </Button>, <Button key="back" onClick={this.handleCancel}>
                            取消
                        </Button>]}>
                        <p>父亲是弹出框 请在此填写</p>
                    </Modal>
                </Layout>

            </>
        )
    }
}
export default tableModel;