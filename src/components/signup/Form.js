import React from 'react';
import { Form, Input, Button } from 'antd';
import { PasswordInput } from 'antd-password-input-strength';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
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
  const { onFinish, onFinishFailed, loading } = props;
  console.log(loading);
  return (
    <Form
      {...layout}
      name='basic'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className='login-form'
    >
      <Form.Item
        label='Name'
        name='name'
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='City, State'
        name='location'
        rules={[
          {
            required: true,
            message: 'Please input the location!',
          },
        ]}
      >
        <Input />
      </Form.Item>
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
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            min: 7,
            message: 'Password must have at least 7 characters and should include numbers and symbols',
          },
        ]}
        hasFeedback
      >
        <PasswordInput />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Button type='submit' htmlType='submit' disabled={loading}>
        {loading && <span className='spinner-border spinner-border-sm'></span>}
        Submit
      </Button>
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
