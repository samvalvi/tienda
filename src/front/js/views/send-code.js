import React from 'react'

import ForgotPass from '../../img/forgot-password.svg'

export const SendCode = () => {
    return (
        <main className="l-main">
            <section className="section">
                
                <div className="send__code bd-grid">
                    <div className="send__code-container">
                        
                        <div className="send__message-container">
                            <h2 className="send__code-message">Recuperar contraseña</h2>
                            <i className='bx bx-x close__icon'></i>
                        </div>

                        <div className="send__code-image">
                            <img src={ForgotPass} alt="send code"/>
                            <div className="license__container">
                                <a className="license__message" href="https://storyset.com/online">Illustration by Storyset</a>
                            </div>
                        </div>

                        <div className="dialog__box">
                            <p className="send__message">Se enviará un código a su email.</p>
                        </div>

                        <form action="">
                            <div className="send__code-box">
                                <i className='bx bx-at send__code-icon'></i>
                                <input type="email" placeholder="email" className="send__code-input" />
                            </div>

                            <a href="#" className="button">Enviar email</a>
                        </form>

                    </div>
                </div>

            </section>
        </main>
    )
}
