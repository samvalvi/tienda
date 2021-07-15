import React from 'react'
import {NavLink} from 'react-router-dom'

import {Footer} from '../components/footer'

export const Account = () => {
    return (
        <main className="l-main">
            <section className="account section">
                <h2 className="section-title">Mi cuenta</h2>
                
                <div className="account__container bd-grid">

                    <div className="login__form">
                        <form action="">
                            <h1 className="login__title">Acceso</h1>
    
                            <div className="login__box">
                                <i className='bx bx-user login__icon'></i>
                                <input type="text" placeholder="email" className="login__input" />
                            </div>
    
                            <div className="login__box">
                                <i className='bx bx-lock-alt login__icon'></i>
                                <input type="password" placeholder="contraseña" className="login__input" />
                            </div>
                            <div className="login__message-container">
                                <p className="login__message">Todos los campos son obligatorios.</p>
                            </div>

                            <a href="#" className="button">Ingresar</a>

                            <NavLink to="/send" className="login__forgot">¿Olvidó su contraseña?</NavLink>
                        </form>
                    </div>


                    <div className="register__form">
                        <form action="">
                            <h1 className="register__title">Registro</h1>
                        
                            <div className="register__message-container">
                                <p className="register__message">Todos los campos son obligatorios.</p>
                            </div>

                            <div className="register__box">
                                <i className='bx bx-user register__icon'></i>
                                <input type="text" placeholder="primer nombre" className="register__input" />
                            </div>

                            <div className="register__box">
                                <i className='bx bx-user register__icon'></i>
                                <input type="text" placeholder="primer apellido" className="register__input" />
                            </div>

                            <div className="register__box">
                                <i className='bx bx-home register__icon'></i>
                                <input type="text" placeholder="provincia" className="register__input" />
                            </div>
    
                            <div className="register__box">
                                <i className='bx bx-at register__icon'></i>
                                <input type="text" placeholder="email" className="register__input" />
                            </div>

                            <div className="register__box">
                                <i className='bx bx-lock-alt register__icon'></i>
                                <input type="password" placeholder="contraseña" className="register__input" />
                            </div>

                            <div className="register__box">
                                <i className='bx bx-lock-alt register__icon'></i>
                                <input type="password" placeholder="repetir contraseña" className="register__input" />
                            </div>

                            <a href="#" className="button">Crear cuenta</a>

                        </form>
                    </div>
                
                </div>
            </section>

            <Footer />
        </main>
    )
}
