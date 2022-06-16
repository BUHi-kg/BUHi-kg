import React, {useState} from 'react'
import './Header.css'

import { Link } from "react-router-dom";

import Modal from '../Modal/Modal'
import Form from '../Form/Form'
import Logo from '../../images/Logo.png';

function Header() {

  const [isForm, setForm] = useState(false);
  const [isLogin, setLogin] = useState(false);

    const closeForm = () =>{
        setForm(false)
    }
    const openLogin = () =>{
        setLogin(true)
    }
    const closeLogin = () =>{
        setLogin(false)
    }

  return (
    <div className='header'>
        <div className="header_logo">
          <Link to="/"><img src={Logo} /></Link>
        </div>

        <div className="header_right">
            <div className='header_right__navbar'>
              <ul>
                <li>
                  <a href="#services" >Услуги</a>
                </li>
                <li>
                  <a href="#tariffs">Тарифы</a>
                </li>
                <li>
                  <a href="#hawitwark">Как это работает?</a>
                </li>
              </ul>
            </div>

            <div className='btnContainer'>
                    <button className='btnSignIn' onClick={openLogin}>Войти</button>
                    <Link to="/registrationuser"><button className='btnSignUp'>Регестрация</button></Link>
            </div>
        </div>
      
        {isForm && (
            <Modal close={closeForm}>
                <Form />
            </Modal>
        )}
        {isLogin && (
            <Modal close={closeLogin}>
                <Form/>
            </Modal>
        )}
    </div>
  )
}

export default Header