import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 11,
    span: 2,
  },
};

const mobile = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const mobileTail = {
  wrapperCol: {
    offset: 11,
    span: 2,
  },
};

export const FormWeb = (props) => {
  const { onFinish, onFinishFailed } = props;
  return (
    <Form
      {...layout}
      name='basic'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='name'
        name='name'
        rules={[
          {
            required: false,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='location'
        name='location'
        rules={[
          {
            required: false,
            message: 'Please input the location!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Bio'
        name='bio'
        rules={[
          {
            required: false,
            message: 'Please type in your Bio!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Contact Number'
        name='number'
        rules={[
          {
            required: false,
            message: 'Please input your best contact number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type='submit' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export const FormMobile = (props) => {
  const { onFinish, onFinishFailed } = props;
  return (
    <Form
      {...mobile}
      name='basic'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...mobileTail}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
