import React, { useState } from 'react';
import './RegForm.css';
import Logo from '../../images/Logo.png'
import lefthalfCircle from '../../images/lefthalfCircle.png'
import HalfCircle from '../../images/rightHalfCircle.png'
import { Link } from 'react-router-dom'
import {
    Button,
    Radio,
    Form,
    Input,
    InputNumber,
    Select,
    Slider,
} from 'antd';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 40,
        },
        sm: {
            span: 30,
        },
    },
    wrapperCol: {
        xs: {
            span: 40,
        },
        sm: {
            span: 30,
        },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};





function RegForm() {
    const [value, setValue] = useState(1);
    const [form] = Form.useForm();

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };



    return (
        <div className='reg-form'>
            <div className="reg">
                <Link to="/"><img src={Logo} className="reg_logo" /></Link>
                <img src={lefthalfCircle} className='lefthalfCircle'/>
                <img src={HalfCircle} className='HalfCircle'/>

                <div className="form">
                    <div className="form_title">
                        <h2>Данные о вашей компании</h2>
                        <p>Правовая форма</p>
                    </div>

                    <div className="form_choose">
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>ОсОО</Radio>
                            <Radio value={2}>ИП</Radio>
                        </Radio.Group>
                    </div>

                    <div className="form_items">
                        <Form
                            className='form_items__input'
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                residence: ['zhejiang', 'hangzhou', 'xihu'],
                                prefix: '86',
                            }}
                            scrollToFirstError
                        >


                            <Form.Item
                                name="companyname"
                                label="Название компании"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Input className='input_company' placeholder='Осоо “Примавера”' />
                            </Form.Item>

                            <Form.Item
                                name="nickname"
                                label="ИНН"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Input className='input_inn' placeholder='12345678910111' />
                            </Form.Item>

                            <Form.Item
                                name="tel"
                                label="Номер телефона"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Input.Group className='input_tel_group'>
                                    <Input
                                        className='input_tel_code'
                                        defaultValue="+(996)"
                                    />
                                    <Input
                                        className='input_tel_phone'
                                        placeholder="(000)00-00-00"
                                    />
                                </Input.Group>
                            </Form.Item>

                            <Form.Item
                                name="tel"
                                label="Режим налогооблажения"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Radio.Group
                                    onChange={onChange}
                                    value={value}
                                    className='input_radio_nalog'
                                >
                                    <Radio className='input_radio_select' value={1}>Общий налоговый режим</Radio>
                                    <Radio className='input_radio_select' value={2}>Единый налог</Radio>
                                    <Radio className='input_radio_select' value={3}>Патент</Radio>
                                    <Radio className='input_radio_select' value={4}>Другое</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="Количество торговых операций"
                            >
                                <Slider defaultValue={1} />

                                <div className='onetosto'>
                                    <p>1</p>
                                    <p>100</p>
                                </div>
                            </Form.Item>


                            <Form.Item label="Количество сотрудников">
                                <InputNumber min={1} max={100} placeholder={1} className='input_member'/>
                            </Form.Item>


                            <Form.Item
                                name="email"
                                label="Введите электронную почту"
                                rules={[
                                    {
                                        type: 'email',
                                        message: '',
                                    },
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Input className='input_email' placeholder='sample@buhi.kg' />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Придумайте пароль"
                                rules={[
                                    {
                                        required: true,
                                        message: "",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password  className='input_password' placeholder='*************'/>
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Повторите  пароль"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: "",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(new Error(''));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password className='input_password' placeholder='*************'/>
                            </Form.Item>


                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegForm