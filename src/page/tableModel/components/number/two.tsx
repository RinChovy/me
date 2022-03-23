import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Input, Divider, Checkbox, Form, DatePicker } from 'antd';

import moment from 'moment';

function Two(props: any) {
  const FormItem = Form.Item;
  const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));
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
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Row gutter={[20, -2]}>
        <Col span={24}>
          <FormItem
            name='one'
            label='缴费模式说明'
            {...labelCol}
            style={{ marginLeft: 20 }}
            rules={[
              {
                required: true,
                message: '请输入缴费模式说明',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <FormItem name='one_or'>
              <Checkbox.Group>
                <Checkbox value='A' onChange={onChange}>
                  直缴
                </Checkbox>
                <Checkbox value='B' onChange={onChange}>
                  汇缴
                </Checkbox>
              </Checkbox.Group>
            </FormItem>
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={24}>
          <FormItem
            name='two'
            label='缴费场景说明'
            {...labelCol}
            style={{ marginLeft: 20 }}
            rules={[
              {
                required: true,
                message: '请输入缴费场景说明',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <Checkbox onChange={onChange}>pc端</Checkbox>
            <Checkbox onChange={onChange}>小程序</Checkbox>
            <Checkbox onChange={onChange}>公众号</Checkbox>
            <Checkbox onChange={onChange}>APP</Checkbox>
            <Input autoComplete='off' />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name='gaKey'
            label='日期'
            rules={[
              {
                required: true,
                message: '请输入日期',
              },
              {
                max: 60,
                message: 'GAKey不能超过60位',
              },
            ]}
          >
            <DatePicker defaultValue={moment(endDate, 'YYYY-MM-DD')} allowClear={false} />
          </FormItem>
        </Col>
      </Row>
    </>
  );
}
export default Two;
