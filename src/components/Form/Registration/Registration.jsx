import React, { useState } from 'react';

import { Link } from 'react-router-dom'
import './Registration.css'

function Registration() {

  return (
    <div className='registration'>
        <p>Выберите  форму регистрации</p>
        <button className='buhilter'>Бухгалтер</button>
        <Link to="/registrationuser"><button className='user' >Клиент</button></Link>
    </div>
  )
}

export default Registration