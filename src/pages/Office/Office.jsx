import React from 'react'
import Header from '../../components/Header'
import "./Office.css"
import { Link } from 'react-router-dom'
function Office() {
  return (
    <div>
      <Header />
      <div className="office__box">
        <div className="office__window">
          <h2>Заполнить профиль:</h2>
          <form className="office__form">
            <label className='office__label' >
              <p>телефон:</p>
              <input className='office__input' type="text" 
              />
            </label>
            <label className='office__label' >
              <p>город:</p>
              <input className='office__input' type="text" 
              />
            </label>
            <label className='office__label' >
              <p>фио:</p>
              <input className='office__input' type="text" 
              />
            </label>
            <label >
              <p>добавить фото</p>
              <input  type="file" 
              />
            </label>
            <label >
              <p>пол:</p>
              <input type="radio" 
              />
              <p className='office__sex'>Мужчина</p>
               
            </label>
            <label >
              <input type="radio" 
              />
               <p className='office__sex'>Женщина</p>
            </label>
           
          </form>
          <div className="office__skip-buttons">
            <Link to="/registration" className="registration__prev-btn --registration-btn" >prev</Link>
            <Link to="/regestration_secsses"  className="registration__next-btn --registration-btn" >next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Office
