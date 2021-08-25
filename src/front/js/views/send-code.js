import React from 'react'

import {NavLink, useHistory} from 'react-router-dom'

import ForgotPass from '../../img/ForgotPassword.svg'

export const SendCode = () => {

    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault();
        return history.push("/reset-password")
    }

    return (
        <main className="l-main">
            <section className="section">
                
                <div className="send__code bd-grid">
                    <div className="send__code-container">
                        
                        <div className="send__message-container">
                            <h2 className="send__code-message">Recuperar contraseña</h2>
                            <i className='bx bx-x close__icon' onClick={() => history.push("/account")}></i>
                        </div>

                        <div className="send__code-image">
                            <img src={ForgotPass} alt="send code" className="send__code-img"/>
                            <NavLink to="https://storyset.com/people" className="image__attribution">People illustrations by Storyset</NavLink>
                        </div>

                        <div className="dialog__box">
                            <p className="send__message">Se enviará un código a su email.</p>
                        </div>

                        <form action="">
                            <div className="send__code-box">
                                <i className='bx bx-at send__code-icon'></i>
                                <input type="email" placeholder="email" className="send__code-input" />
                            </div>

                            <NavLink to="#" className="button" onClick={(e) => handleClick(e)}>Enviar email</NavLink>
                        </form>

                    </div>
                </div>

            </section>
        </main>
    )
}
