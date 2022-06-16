import React from 'react'
import './Login.css';
import 'antd/dist/antd.css'
import { Button, Form, Input } from 'antd';



function Login() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                className='loginform'
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label=""
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '',
                        },
                    ]}
                >
                    <Input placeholder='Электронная почта' className='loginform_email'/>
                </Form.Item>

                <Form.Item
                    label=""
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '',
                        },
                    ]}
                >
                    <Input.Password placeholder='Пароль' className='loginform_password'/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login