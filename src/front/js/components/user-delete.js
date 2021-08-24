import React from 'react'

import {NavLink} from 'react-router-dom'

const UserDelete = () => {
    return (
        <div className="user__account">
            <div className="user__account-container">
                <h4 className="update__title">Eliminar cuenta</h4>

                <form>
                    <div className="group__box">
                        <label htmlFor="clave">Clave</label>
                        <div className="input__container">
                            <input className="input__text" type="password" name="clave"></input>
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

export default UserDelete
