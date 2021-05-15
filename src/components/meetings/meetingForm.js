import React from 'react';
import { Form, Input, Button, AutoComplete } from 'antd';

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
            required: true,
            message: 'Please input event name!',
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
            required: true,
            message: 'Please input the location!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='description'
        name='desc'
        rules={[
          {
            required: true,
            message: 'Please input the description!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='amount of people'
        name='amount'
        rules={[
          {
            required: true,
            message: 'Please input the amount!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='date'
        name='date'
        rules={[
          {
            required: true,
            message: 'Please input the date!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='type of location'
        name='type'
        rules={[
          {
            required: true,
            message: 'Please input the type!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='image URL'
        name='img'
        rules={[
          {
            required: true,
            message: 'Please input the image url!',
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

export const FormWebEdit = (props) => {
  const { onFinish, onFinishFailed, name, location, desc, amount, date, type, img } = props;
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
            message: 'Please input event name!',
          },
        ]}
      >
        <AutoComplete placeholder={name}></AutoComplete>
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
        <AutoComplete placeholder={location}></AutoComplete>
      </Form.Item>

      <Form.Item
        label='description'
        name='desc'
        rules={[
          {
            required: false,
            message: 'Please input the description!',
          },
        ]}
      >
        <AutoComplete placeholder={desc}></AutoComplete>
      </Form.Item>

      <Form.Item
        label='amount of people'
        name='amount'
        rules={[
          {
            required: false,
            message: 'Please input the amount!',
          },
        ]}
      >
        <AutoComplete placeholder={amount}></AutoComplete>
      </Form.Item>

      <Form.Item
        label='date'
        name='date'
        rules={[
          {
            required: false,
            message: 'Please input the date!',
          },
        ]}
      >
        <AutoComplete placeholder={date}></AutoComplete>
      </Form.Item>

      <Form.Item
        label='type of location'
        name='type'
        rules={[
          {
            required: false,
            message: 'Please input the type!',
          },
        ]}
      >
        <AutoComplete placeholder={type}></AutoComplete>
      </Form.Item>

      <Form.Item
        label='image URL'
        name='img'
        rules={[
          {
            required: false,
            message: 'Please input the image url!',
          },
        ]}
      >
        <AutoComplete placeholder={img}></AutoComplete>
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
