import React from 'react'
import './Footer.css'

import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'

import logoFooter from '../../../images/Logo.png'
import whatsApp from '../../../images/whatsapp.png'
import instagram from '../../../images/Instagram.png'
import telegram from '../../../images/Telegram.png'



export default function Footer({linkServices, linkTariffs, linkHowItWorks, linkFAQ}) {
  return (
    <div className='footerConteiner'>

        <div className= 'topOfFooter'>

            <div className='footerLogo'>
                <img src={logoFooter} alt={logoFooter} className="logoFooter"/>
                <h4 className='footerLogoh4'>Бухгалтерия - это просто, потому что есть Buhi</h4>
            </div>
            
            <div>
            <ul className="navbar-footer">
                    <li className="navItemOne">
                        <a className="nav-linkF " href="#services">
                        Услуги
                        </a>
                    </li>
                    <li className="navItemTwo">
                        <a className="nav-linkF " href="#tariffs">
                        Тарифы
                        </a>
                    </li>
                    <li className="navItemThree">
                        <a className="nav-linkF " href="#hawitwark">
                        Как это работает?
                        </a>
                    </li>
                    <li className="navItemFour">
                        <a className="nav-linkF " href="#faqoustion">
                        FAQ
                        </a>
                    </li>
                </ul>
            </div>

            <div className='footerContacts'>
                <h4 className='contscts'><BsTelephone/> +996 (999) 999-999</h4>
                <h4 className='contscts'><AiOutlineMail/> buhi@gmail.com</h4>
                <h4 className='contscts'><MdOutlineLocationOn className='iconlocation'/> г. Бишкек, ул. Исанова 105/3</h4>
            </div>

        </div>

        <div className='messengersContainer'>
            <img src={whatsApp} alt={whatsApp} className='whatsApp'/>
            <img src={instagram} alt={instagram} className='instagram' />
            <img src={telegram} alt={telegram} className='telegram'/>
        </div>

        <h6 className='h6Footer'>2022 © Все права защищены</h6>


    </div>
  )
}
