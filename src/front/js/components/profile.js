import React from 'react'

import {NavLink} from 'react-router-dom'

import profileImg from '../../img/Profile-Interface.svg'

export const EditForm = () => {
    return  (
        <main className="l-main">
            <section className="section">
                <h2 className="section-title">Perfil</h2>
           
                <div className="edit bd-grid">
                    <div className="edit__container">

                        <div className="edit__message-container">
                            <h2 className="edit__message">Ajustes</h2>
                            <i className='bx bx-x close__icon'></i>
                        </div>
                        
                        <div className="profile__info">
                            <div className="profile__img">
                                <img src={profileImg} alt="profile-img" />
                                <NavLink to="https://storyset.com/people"><p className="image__attribution">People illustrations by Storyset</p></NavLink>
                            </div>
                            <div className="profile__data">
                                <p>Nombre:</p>
                                <p>Apellido:</p>
                                <p>Email:</p>
                                <p>Provincia:</p>
                            </div>
                        </div>

                        <div className="edit__message-container">
                            <h2 className="edit__message">Actualizar datos personales</h2>
                        </div>

                        <form action="">
                            <div className="box__container">
                                <div className="edit__box">
                                    <i className='bx bx-user edit__icon'></i>
                                    <input type="text" placeholder="primer nombre" className="edit__input" />
                                </div>

                                <div className="edit__box">
                                    <i className='bx bx-user edit__icon'></i>
                                    <input type="text" placeholder="primer apellido" className="edit__input" />
                                </div>

                                <div className="edit__box">
                                    <i className='bx bx-home edit__icon' ></i>
                                    <input type="text" placeholder="provincia" className="edit__input" />
                                </div>
    
                                <div className="edit__box">
                                    <i className='bx bx-at edit__icon'></i>
                                    <input type="text" placeholder="email" className="edit__input" />
                                </div>
                            </div>

                        
                            <NavLink to="#" className="button">Guardar cambios</NavLink>
                        </form>

                        <div className="line__container">
                            <div className="line" />
                        </div>

                        <div className="update__message-container">
                            <h2 className="update__message">Actualizar contraseña</h2>
                        </div>

                        <form action="">
                            <div className="box__container">

                                <div className="update__box">
                                    <i className='bx bx-lock-alt update__icon'></i>
                                    <input type="password" placeholder="contraseña" className="update__input" />
                                </div>

                                <div className="update__box">
                                    <i className='bx bx-lock-alt update__icon'></i>
                                    <input type="password" placeholder="repetir contraseña" className="update__input" />
                                </div>

                            </div>

                            <NavLink to="#" className="button">Guardar cambios</NavLink>
                        </form>

                        <div className="line__container">
                            <div className="line" />
                        </div>

                        <div className="delete__message-container">
                            <h2 className="delete__message">Eliminar cuenta</h2>
                        </div>

                        <form action="">
                            <div className="box__container">
                                <div className="delete__box">
                                    <i className='bx bx-at delete__icon'></i>
                                    <input type="email" placeholder="email" className="delete__input" />
                                </div>

                                <div className="delete__box">
                                    <i className='bx bx-lock-alt delete__icon'></i>
                                    <input type="password" placeholder="contraseña" className="delete__input" />
                                </div>

                                <NavLink to="#" className="button">Eliminar</NavLink>
                            </div>
                        </form>

                    </div>
                    
                </div>
            </section>
        </main>
    )
}
