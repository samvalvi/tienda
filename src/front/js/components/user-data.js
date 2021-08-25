import React from 'react'

import {NavLink} from 'react-router-dom'

function UserData() {
    return (
        <div className="update__user-info">
            <div className="personal__data">
                <h4 className="update__title">Actualizar datos personales</h4>
            
                <div className="user__data-form">
                    <form>
                        <div className="group__box">
                            <div className="input__container">
                                <i className='bx bx-user login__icon' ></i>
                                <input className="input__text" type="text" name="name" placeholder="primer nombre"/>
                            </div>
                        </div>

                        <div className="group__box">
                            <div className="input__container">
                                <i className='bx bx-user login__icon' ></i>
                                <input className="input__text" type="text" name="lastname" placeholder="primer apellido"></input>
                            </div>
                        </div>

                        <div className="group__box">
                            <div className="input__container">
                                <i className='bx bx-map-alt login__icon' ></i>
                                <input className="input__text" type="text" name="address" placeholder="provincia"/>
                            </div>
                        </div>

                        <div className="group__box">
                            <div className="input__container">
                                <i className='bx bx-at login__icon'></i>
                                <input className="input__text" type="email" name="email" placeholder="correo" />
                            </div>
                        </div>
                
                        <div className="button__container">
                            <NavLink to="#" className="edit__button">Actualizar</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserData
