import React from 'react'

import DeliveryImg from '../../img/Take-Away.svg'

import {NavLink, useHistory} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'

export const Delivery = () => {

    const history = useHistory()

    return (
        <main className="l-main">
            <section className="section">

                <div className="user__delivery-container bd-grid">
                    <div className="user__delivery">

                        <div className="delivery__message-container">    
                            <h2 className="delivery__message">Entrega</h2>
                            <i className='bx bx-x close__icon' onClick={()=> history.push("/shopbag")}></i>
                        </div>

                        <div className="img__delivery-container">
                            <img src={DeliveryImg} alt="delivery" className="delivery__image"/>
                            <NavLink to="https://storyset.com/people"><p className="image__attribution">People illustrations by Storyset</p></NavLink>
                        </div>

                        <form className="delivery__form">
                            
                            <div className="left__container">
                                    
                                <div className="input__container">
                                    <i className='bx bx-user delivery__icon'></i>
                                    <input className="input__text" type="text" placeholder="nombre"></input>
                                </div>

                                <div className="input__container">
                                    <i className='bx bx-at delivery__icon'></i>
                                    <input className="input__text" type="email" placeholder="correo"></input>
                                </div>
                                
                                <div className="input__container">
                                    <i className='bx bx-map-alt delivery__icon' ></i>
                                    <input className="input__text" type="text" placeholder="provincia"></input>
                                </div>
                                
                                <div className="input__container">
                                    <i className='bx bx-map-pin delivery__icon'></i>
                                    <input className="input__text" type="text" placeholder="direcci??n"></input>
                                </div>
                                
                                <div className="button__container">
                                    <NavLink to="#" className="delivery__button">Confirmar compra</NavLink>
                                </div>

                            </div>

                            <div className="right__container">
                                
                                <div className="input__container">
                                    <i className='bx bx-user delivery__icon'></i>
                                    <input className="input__text" type="text" placeholder="apellido"></input>
                                </div>

                                <div className="input__container">
                                    <i className='bx bx-mobile-alt delivery__icon'></i>
                                    <input className="input__text" type="text" placeholder="tel??fono"></input>
                                </div>

                                <div className="input__container">
                                    <i className='bx bx-map-alt delivery__icon' ></i>
                                    <input className="input__text" type="text" placeholder="cant??n/distrito"></input>
                                </div>
                            
                                <div className="input__container">
                                    <i className='bx bx-credit-card delivery__icon' ></i>
                                    <select className="input__text">
                                        <option className="input__text" defaultValue value="">M??todo de pago</option>
                                        <option className="input__text" value="efectivo">Efectivo</option>
                                        <option className="input__text" value="transferencia">Transferencia</option>
                                    </select>
                                </div>

                                <div className="container__message">
                                    <h5 className="delivery__email-msg">Esta informaci??n ser?? enviada a su correo</h5>
                                </div>

                            </div>
                                                    
                        </form>

                    </div>
                </div>

            </section>
        </main>
   )
}

