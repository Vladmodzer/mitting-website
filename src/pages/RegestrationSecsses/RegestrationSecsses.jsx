import React from 'react'
import Header from '../../components/Header'
import "./RegestrationSecsses.css"
import { Link } from 'react-router-dom'
function RegestrationSecsses() {
    return (
        <div>
            <Header />
            <div className='RegestrationSecsses__box'>
                <div className='RegestrationSecsses__wrapper'>
                    <div className='RegestrationSecsses__text'>
                    <h2>поздравляю!</h2>
                    <h3>осталось подтвердить почту</h3>
                    </div>
                    <Link className='RegestrationSecsses__link' to="/user-page">ok</Link>
                </div>
            </div>
        </div>
    )
}

export default RegestrationSecsses
