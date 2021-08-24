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
                            <label htmlFor="name">Primer nombre</label>
                            <div className="input__container">
                                <input className="input__text" type="text" name="name" />
                            </div>
                        </div>

                        <div className="group__box">
                            <label htmlFor="lastname">Primer apellido</label>
                            <div className="input__container">
                                <input className="input__text" type="text" name="lastname" />
                            </div>
                        </div>

                        <div className="group__box">
                            <label htmlFor="address">Provincia</label>
                            <div className="input__container">
                                <input className="input__text" type="text" name="address" />
                            </div>
                        </div>

                        <div className="group__box">
                            <label htmlFor="email">Email</label>
                            <div className="input__container">
                                <input className="input__text" type="email" name="email" />
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
