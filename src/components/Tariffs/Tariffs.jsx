import React, { useState } from 'react'

import './Tariffs.css'

import ellipse214 from '../../images/Ellipse214.png'
import ellipse215 from '../../images/Ellipse215.png'
import Modal from './../Modal/Modal';
import FormFSC from '../FormFSC/FormFSC';


export default function Tariffs(){

    const [isFormFSC, setFormFSC] = useState(false);

    const openFormFSC = () =>{
        setFormFSC(true)
    }

    const closeFormFSC = () =>{
        setFormFSC(false)
    }


    return(
        <div id='tariffs'>
            <div className='tariff_img'>
                <img src={ellipse214}/> 
                <img src={ellipse215}/>
                <h1 className='name'>ТАРИФ</h1>
            </div>
        <div className='box'>
            <div className='card'>
                <div className='text'>
                    <h2 className='tariff'>ТАРИФ"НУЛЕВОЙ"</h2>
                    <h2 className='price'>7900 сом</h2>
                    <ul className='ul'>
                        <li>Нет документов</li>
                        <li>1 час консультаций</li>
                        <li>Сдача отчетности</li>
                        <li>Прохождение проверок</li>
                        <li>Расчет налогов и Соцфонда</li>
                    </ul>
                    <button className="button" onClick={openFormFSC}> <h4 className='h'>Купить</h4></button>
                </div>
            </div>
            <div className='card2'>
                <div className='text'>
                    <h2 className='tariff'>ТАРИФ"БАЗОВЫЙ"</h2>
                    <h2 className='price'>11 900 сом</h2>
                    <ul className='ul1'>
                        <li>До 5 документов</li>
                        <li>5 час консультаций</li>
                        <li>Сдача отчетности</li>
                        <li>Прохождение проверок</li>
                        <li>+ расчет налогов и Соцфонда</li>
                        <li>Подготовка счетов</li>
                    </ul>
                    <button className="button" onClick={openFormFSC}> <h4 className='h'>Купить</h4></button>
                </div>
            </div>
            <div className='card'>
                <div className='text'>
                    <h2 className='tariff'>ТАРИФ"ПРЕМИУМ"</h2>
                    <h2 className='price'>21 900 сом</h2>
                    <ul className='ul2'>
                        <li>До 15 документов</li>
                        <li>Неограниченные консультаций</li>
                        <li>Сдача отчетности</li>
                        <li>Прохождение проверок</li>
                        <li>Расчет нологов и Соцфонда</li>
                        <li>Подготовка счетов</li>
                        <li>Получение справок</li>
                    </ul>
                    <button className="button" onClick={openFormFSC}> <h4 className='h'>Купить</h4></button>
                </div>
            </div>
        </div>

        {isFormFSC && (
            <Modal close={closeFormFSC}>
                <FormFSC/>
            </Modal>

        )}
        </div>
    )
}