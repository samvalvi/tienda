import React from 'react'

export const UpdatePassword = () => {
    return (
        <div className="modal">
            <div className="modal__container">

                <div className="modal__message-container">
                    <h2 className="modal__message">Actualizar contraseña</h2>
                    <i className='bx bx-x close__icon'></i>
                </div>

                <form action="">
                    <div className="modal__box">
                        <i className='bx bx-lock-alt modal__icon'></i>
                        <input type="password" placeholder="contraseña" className="modal__input" />
                    </div>

                    <div className="modal__box">
                        <i className='bx bx-lock-alt modal__icon'></i>
                        <input type="password" placeholder="repetir contraseña" className="modal__input" />
                    </div>

                    <a href="#" className="button">Guardar cambios</a>
                </form>

            </div>
        </div>
    )
}
