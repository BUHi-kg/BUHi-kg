import React from 'react';
import './Faq.css';
import halfcircle from '../../images/HalfCircle.png'
import { Table } from 'antd';



const columns = [
  {
    dataIndex: 'name',
    key: 'name',
  },
  Table.EXPAND_COLUMN,
];


const defaultdata = [
  {
    key: 1,
    name: 'Почему так дешево?',
    description: 'Основные трудоемкие процессы как, формировка первичных документов; расчёт налогов и отчислений, а также формирования и сдача ФНО 910.00 автоматизированно. За счёт автоматизации снижаем стоимость услуги.',
    
  }
];
const data = [
  {
    key: 2,
    name: 'Почему так дорого?',
    description: 'Основные трудоемкие процессы как, формировка первичных документов; расчёт налогов и отчислений, а также формирования и сдача ФНО 910.00 автоматизированно. За счёт автоматизации снижаем стоимость услуги.',
  },
  {
    key: 3,
    name: 'Вы ведёте учёт в 1С?',
    description: 'Основные трудоемкие процессы как, формировка первичных документов; расчёт налогов и отчислений, а также формирования и сдача ФНО 910.00 автоматизированно. За счёт автоматизации снижаем стоимость услуги.',
  },
  {
    key: 4,
    name: 'Порядок и сроки оказания услуг',
    description: 'Основные трудоемкие процессы как, формировка первичных документов; расчёт налогов и отчислений, а также формирования и сдача ФНО 910.00 автоматизированно. За счёт автоматизации снижаем стоимость услуги.',
  },
  {
    key: 5,
    name: 'Срок и способы оплаты',
    description: 'Основные трудоемкие процессы как, формировка первичных документов; расчёт налогов и отчислений, а также формирования и сдача ФНО 910.00 автоматизированно. За счёт автоматизации снижаем стоимость услуги.',
  },
  {
    key: 6,
    name: 'Приостановка и прекращение оказания услуг',
    description: 'Основные трудоемкие процессы как, формировка первичных документов; расчёт налогов и отчислений, а также формирования и сдача ФНО 910.00 автоматизированно. За счёт автоматизации снижаем стоимость услуги.',
  },
];
const Faq = () => (
  <div className='faq' id='faqoustion'>

    <div className='faq_title'>
        <p>Часто задаваемые вопросы</p>
    </div>
    <div className='faq_table__img'>
        <img src={halfcircle} />
    </div>
    
    <div className='faq_table'>
    <Table
        columns={columns}
        dataSource={defaultdata}
        expandable={{
        expandedRowRender: (record) => (
            <p
            className='faq_title__answerone'
            style={{
                margin: 0,
            }}
            >
            {record.description}
            </p>
        ),
        defaultExpandAllRows: true,
        }}
    />
    
      <Table
        columns={columns}
        dataSource={data}
        expandable={{
        expandedRowRender: (record) => (
            <p
            className='faq_title__answerone'
            style={{
                margin: 0,
            }}
            >
            {record.description}
            </p>
        ),
        }}
    />
   
    </div>
  </div>
);

export default Faq;