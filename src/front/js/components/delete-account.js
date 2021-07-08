import React from 'react'

export const DeleteAccount = () => {
    return (
        
        <div className="modal">
            <div className="modal__container">

                <div className="modal__message-container">
                    <h2 className="modal__message">Eliminar cuenta</h2>
                    <i className='bx bx-x close__icon'></i>
                </div>

                <form action="">
                    <div className="modal__box">
                        <i className='bx bx-at modal__icon'></i>
                        <input type="email" placeholder="email" className="modal__input" />
                    </div>

                    <div className="modal__box">
                        <i className='bx bx-lock-alt modal__icon'></i>
                        <input type="password" placeholder="contraseña" className="modal__input" />
                    </div>

                    <a href="#" className="button">Eliminar</a>
                </form>
            </div>
        </div>
        
    )
}
