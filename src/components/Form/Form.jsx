import React, { useState } from 'react';
import { Card } from 'antd';
import './Form.css';
import Login from '../Form/Login/Login';
import Registration from '../Form/Registration/Registration';


const tabList = [
    {
      key: 'tab1',
      tab: 'Войти',
    },
    {
      key: 'tab2',
      tab: 'Регистрация',
    },
  ];
  const contentList = {
    tab1: <Login/>,
    tab2: <Registration/>,
  };


function Form() {

    const [activeTabKey1, setActiveTabKey1] = useState('tab1');

    const onTab1Change = (key) => {
        setActiveTabKey1(key);
      };


  return (
    <div className='login'>
         <Card
            className='reg-modal'
            style={{
            width: '100%',
            }}
            tabList={tabList}
            activeTabKey={activeTabKey1}
            onTabChange={(key) => {
            onTab1Change(key);
            }}
        >
            {contentList[activeTabKey1]}
        </Card>
    </div>
  )
}

export default Form