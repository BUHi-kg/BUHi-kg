import React, { useState } from 'react';
import './BlockTitle.css';
import mainimg from '../../images/MainImg.png';
import circles from '../../images/Circles.png';
import trigerline from '../../images/TriggerLine.png'
import Modal from './../Modal/Modal';
import FormFSC from '../FormFSC/FormFSC';

function BlockTitle() {

    const [isFormFSC, setFormFSC] = useState(false);

  const openFormFSC = () =>{
    setFormFSC(true)
}

const closeFormFSC = () =>{
    setFormFSC(false)
}

  return (
    <div className='blocktitle'>
        <div className='blocktitle_article'>
            <h1 className='article_h1'>УДОБНАЯ БУХГАЛТЕРИЯ ДЛЯ ВАШЕГО БИЗНЕСА</h1>
            <h4 className='article_h4'>Выберите способ ведения бухгалтерии и освободите время для решения важных задач</h4>
            <div className='article_btn'>
                <button className='article_btn__first' onClick={openFormFSC}>Оставить заявку</button>
                <button className='article_btn__second'><a href="#tariffs">Тарифы</a></button>
            </div>
        </div>
        <div className="absolute">
            <img src={circles} className='circles'/>
            <img src={trigerline} className='triggerline'/>
        </div>
        <div className="blocktitle_bg">
            <img src={mainimg} />
        </div>
        {isFormFSC && (
            <Modal close={closeFormFSC}>
                <FormFSC/>
            </Modal>

        )}
    </div>
  )
}

export default BlockTitle