import React from 'react'

import {NavLink} from 'react-router-dom'

const UserPassword = () => {
    return (
        <div className="user-password">
            <div className="user__password-container">
                <h4 className="update__title">Actualizar contraseña</h4>
        
                <form>
                    <div className="group__box">
                        <label htmlFor="nueva__clave">Nueva contraseña</label>
                        <div className="input__container">
                            <input className="input__text" type="text" name="nueva__clave"></input>
                        </div>
                    </div>

                    <div className="group__box">
                        <label htmlFor="repetir__clave">Repetir contraseña</label>
                        <div className="input__container">
                            <input className="input__text" type="text" name="repetir__clave"></input>
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
