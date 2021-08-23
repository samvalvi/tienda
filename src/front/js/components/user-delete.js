import React from 'react'

import {NavLink} from 'react-router-dom'

const UserDelete = () => {
    return (
        <div className="user__account">
            <h4 className="update__title">Eliminar cuenta</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="clave">Clave</label>
                    <div className="input__field">
                        <input className="input__text" type="password" name="clave"></input>
                    </div>
                </div>

                <div className="button__container">
                    <NavLink to="#" className="edit__button">Actualizar</NavLink>
                </div>
            </form>

        </div>
    )
}

export default UserDelete
