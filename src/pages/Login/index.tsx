import styles from './index.less'
import { Form, Input, Checkbox, Button } from 'antd'
import request from '@/utils/request'
import api from '@/services'

const { login } = api

const Login = () => {
  const onFinish = async (values: any) => {
    const params = { ...values, type: 'account', from: 'web' }
    if (params.autoLogin === undefined) {
      params.autoLogin = false
    }
    // const res = await login(params)
    const res = await request({
      url: '/api/account/login',
      method: 'post',
      data: params,
    })

    console.log('Success:', res)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo.data)
  }
  return (
    // <div className="height-full flex flex-center align-center">
    <div className="height-full flex flex-center align-center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="autoLogin"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
