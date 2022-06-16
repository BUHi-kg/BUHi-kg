import React from 'react';
import './Questions.css';

import { Form, Input, Button } from 'antd';

import leftHalfCircle from '../../images/lefthalfCircle.png';
import cubes from '../../images/Cubes.png'

function Questions() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='questions'>
      
      <div>
        <img src={leftHalfCircle} className='bg_halfcircle'/>
        <img src={cubes} className='bg_cubes' />
      </div>

      <div className='questions_title'>
          <h2>Остались вопросы?</h2>
        <div className='questions_title__subtitle'>
          <p>Оставьте контакты - поможем решить вашу задачу и проконсультируем по спорным вопросам</p>
        </div>
      </div>

      <div className='questions_inputform'>

        <Form
          name="basic"
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input 
              className='input-name'
              placeholder='Name'
            />
          </Form.Item>

          <Form.Item
            name="tel"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input.Group>
              <Input
                className='input-int-code'
                defaultValue="+(996)"
              />
              <Input
                className='input-phone'
                placeholder="(000)00-00-00"
              />
            </Input.Group>
          </Form.Item>


          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" className='input-submit'>
            Отправить
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}

export default Questions