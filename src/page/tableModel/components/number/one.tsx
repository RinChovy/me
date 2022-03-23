import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Input, Divider, Form } from 'antd';

function One(props: any) {
  const FormItem = Form.Item;
  const { Option } = Select;

  const labelCol = {
    labelCol: {
      span: 3,
      //   offset: 1,
    },
    wrapperCol: {
      span: 19,
    },
  };
  useEffect(() => {}, []);

  return (
    <>
      <Row gutter={[20, -2]}>
        <Col span={12}>
          <FormItem
            name='phone'
            label='注册手机号'
            rules={[
              {
                required: true,
                message: '请输入手机号',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name='name'
            label='用户名'
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name='gaKey'
            label='执收单位名称'
            rules={[
              {
                required: true,
                message: '请输入执收单位名称',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name='gaKey'
            label='执收单位编码'
            rules={[
              {
                required: true,
                message: '请输入执收单位编码',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name='gaKey'
            label='联系人电话'
            rules={[
              {
                required: true,
                message: '请输入联系人电话',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name='gaKey'
            label='联系人姓名'
            rules={[
              {
                required: true,
                message: '请输入联系人姓名',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name='gaKey'
            label='联系人邮箱'
            rules={[
              {
                required: true,
                message: '请输入联系人邮箱',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={12}></Col>
        <Col span={24}>
          <FormItem
            name='gaKey'
            label='详细地址'
            {...labelCol}
            style={{ marginLeft: 20 }}
            rules={[
              {
                required: true,
                message: '请输入详细地址',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name='gaKey'
            label='区划'
            rules={[
              {
                required: true,
                message: '请输入区划',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name='mercInStatus'
            label='行业类别'
            rules={[
              {
                required: true,
                message: '请选择行业类别',
              },
            ]}
          >
            <Select placeholder='请选择入金接口状态'>
              <Option value='1'>启用</Option>
              <Option value='0'>停用</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
    </>
  );
}
export default One;
