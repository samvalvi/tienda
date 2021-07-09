import React from 'react'

export const SendCode = () => {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__message-container">
                    <h2 className="modal__message">Recuperar contraseña</h2>
                    <i className='bx bx-x close__icon'></i>
                </div>

                <div className="dialog__box">
                    <p className="modal__message">Se enviará un código y un link a su email.</p>
                </div>

                <form action="">
                    <div className="modal__box">
                        <i className='bx bx-at modal__icon'></i>
                        <input type="email" placeholder="email" className="modal__input" />
                    </div>

                    <a href="#" className="button">Enviar email</a>
                </form>
            </div>
        </div>
    )
}
