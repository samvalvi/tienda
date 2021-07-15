import React from 'react'
import AuthImg from '../../img/authentication.svg'

export const RecoverPassword = () => {
    return (
        <main className="l-main">
            <section className="section">
                
                <div className="recover bd-grid">
                    <div className="recover__container">

                        <div className="recover__message-container">
                            <h2 className="recover__message">Actualizar contraseña</h2>
                            <i className='bx bx-x close__icon'></i>
                        </div>

                        <div className="recover__image">
                            <img src={AuthImg} alt="recover code"/>
                            <div className="license__container">
                                <a className="license__message" href="https://storyset.com/online">Illustration by Storyset</a>
                            </div>
                        </div>
                        
                        <div className="dialog__box">
                            <p className="recover__code-message">Ingrese el código recibido.</p>
                        </div>

                        <form action="">
                            <div className="recover__box">
                                <i className='bx bx-key recover__icon'></i>
                                <input type="text" placeholder="código" className="recover__input" />
                            </div>

                            <div className="recover__box">
                                <i className='bx bx-lock-alt recover__icon'></i>
                                <input type="password" placeholder="nueva contraseña" className="recover__input" />
                            </div>

                            <div className="recover__box">
                                <i className='bx bx-lock-alt recover__icon'></i>
                                <input type="password" placeholder="repetir nueva contraseña" className="recover__input" />
                            </div>

                            <a href="#" className="button">Actualizar</a>
                        </form>

                    </div>
                </div>

            </section>
        </main>
    )
}
