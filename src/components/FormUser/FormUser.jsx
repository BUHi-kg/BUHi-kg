import React, { useState } from 'react';
import './FormUser.css';
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





function FormUser() {

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
        <img src={lefthalfCircle} className='lefthalfCircle' />
        <img src={HalfCircle} className='HalfCircle' />

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
                name="inn"
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
                name="phone"
                label="Номер телефона"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input className='input_inn' placeholder='0555-55-55-55' />
              </Form.Item>

              <Form.Item 
                name="radio-group" 
                label="Режим налогооблажения"
              >
                <Radio.Group className='input_radio_nalog'>
                  <Radio value="1">Общий налоговый режим</Radio>
                  <Radio value="2">Единый налог</Radio>
                  <Radio value="3">Патент</Radio>
                  <Radio value="4">Другое</Radio>
                </Radio.Group>
              </Form.Item>


              <Form.Item
                name="slider"
                label="Количество торговых операций"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Slider
                  marks={{
                    1: '1',
                    100: '100',
                  }}
                />
              </Form.Item>


              <Form.Item
                name="amout"
                label="Количество сотрудников">
                <InputNumber min={1} max={100} placeholder={1} className='input_member' />
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
                <Input.Password className='input_password' placeholder='*************' />
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
                <Input.Password className='input_password' placeholder='*************' />
              </Form.Item>


              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" >
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

export default FormUser