import React from 'react';
import './FormFSC.css'


export default function FormFSC() {

  return (
    <div className='formContainer'> 
      <form action="form" className='formRequest'>
        <h1>Оставьте заявку, чтобы получить ответ на свои вопросы</h1>
        <input type="text" name='name' placeholder='Имя'required/>      
        <input type="tel" name="telephone" pattern="^[ 0-9]+$" placeholder='+996' required/>  
        <button type='submit'>Отправить</button>
        <h5>Нажимая на кнопку «Отправить», я соглашаюсь с условиями обработки персональных данных</h5>
      </form>
    </div>
   
  

  );
    }
