import React from 'react'

import {NavLink} from 'react-router-dom'

const UserPassword = () => {
    return (
        <div className="user-password">
            <div className="user__password-container">
                <h4 className="update__title">Actualizar contraseña</h4>
        
                <form>
                    <div className="group__box">
                        <div className="input__container">
                            <i className='bx bx-lock-alt login__icon'></i>
                            <input className="input__text" type="text" name="nueva__clave" placeholder="nueva clave"></input>
                        </div>
                    </div>

                    <div className="group__box">
                        <div className="input__container">
                            <i className='bx bx-lock-alt login__icon'></i>
                            <input className="input__text" type="text" name="repetir__clave" placeholder="repetir clave"></input>
                        </div>
                    </div>

                    <div className="button__container">
                        <NavLink to="#" className="edit__button">Actualizar</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserPassword
