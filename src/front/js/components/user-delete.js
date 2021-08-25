import React from 'react'

import {NavLink} from 'react-router-dom'

const UserDelete = () => {
    return (
        <div className="user__account">
            <div className="user__account-container">
                <h4 className="update__title">Eliminar cuenta</h4>

                <form>
                    <div className="group__box">
                        <div className="input__container">
                            <i className='bx bx-key login__icon' ></i>
                            <input className="input__text" type="password" name="clave" placeholder="clave"></input>
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
