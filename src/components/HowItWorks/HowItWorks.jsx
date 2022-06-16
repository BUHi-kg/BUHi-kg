import React from 'react';
import './HowItWorks.css';
import ellipse216 from '../../images/Ellipse216.png'
import ellipse217 from '../../images/Ellipse217.png'
import circle from '../../images/Circle.png'
import one from '../../images/1.png'
import two from '../../images/2.png'
import tree from '../../images/3.png'
import four from '../../images/4.png'

function HowItWorks() {
  return (
    <div className='howitworks'id="hawitwark" >
        <div className='howitworks_title'>
            <img src={ellipse216} />
            <img src={ellipse217} />
            <h2>Как это работает?</h2>
        </div>

        <div className='howitworks_grid'>
            <div className='howitworks_grid__1'>
                <div className='howitworks_grid__1__img'>
                    <img src={circle} />
                </div>
                <p>Всего 4 шага для успешного сотрудничества!</p>
            </div>
            <div className='howitworks_grid__2 grid'>
                <img src={one} />
                <div className='grid_title'>
                    <h5>Вы оставляете заявку на сайте</h5>
                    <p>Оставляете заявку на сайте или по телефону, менеджеры уточняют детали и оглашают цены. Заключаем договор</p>
                </div>
            </div>
            <div className='howitworks_grid__3 grid'>
                <img src={two} />   
                <div className='grid_title'>
                    <h5>Производим расчет</h5>
                    <p>Оставляете заявку на сайте или по телефону, менеджеры уточняют детали и оглашают цены. Заключаем договор</p>
                </div>
            </div>
            <div className='howitworks_grid__4 grid'>
                <img src={tree} />
                <div className='grid_title'>
                    <h5>Оплата услуги</h5>
                    <p>Оставляете заявку на сайте или по телефону, менеджеры уточняют детали и оглашают цены. Заключаем договор</p>
                </div>
            </div>
            <div className='howitworks_grid__5 grid'>
                <img src={four} />
                <div className='grid_title'>
                    <h5>Выполняем работу</h5>
                    <p>Сотрудники компании выполняют все необходимые действия для своевременного исполнения контракта</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks