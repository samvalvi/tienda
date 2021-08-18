import React from 'react'

import {NavLink, useHistory} from 'react-router-dom'

import AuthImg from '../../img/Password.svg'

export const RecoverPassword = () => {

    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault();
        return history.push("/account")
    }

    return (
        <main className="l-main">
            <section className="section">
                
                <div className="recover bd-grid">
                    <div className="recover__container">

                        <div className="recover__message-container">
                            <h2 className="recover__message">Actualizar contraseña</h2>
                            <i className='bx bx-x close__icon' onClick={()=> {history.push("/account")}}></i>
                        </div>

                        <div className="recover__image">
                            <img src={AuthImg} alt="recover code"/>
                            <NavLink to="https://storyset.com/people"><p className="image__attribution">People illustrations by Storyset</p></NavLink>
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

                            <NavLink to="#" className="button" onClick={(e)=> handleClick(e)}>Actualizar</NavLink>
                        </form>

                    </div>
                </div>

            </section>
        </main>
    )
}
