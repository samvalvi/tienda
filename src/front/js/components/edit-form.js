import React from 'react'

export const EditForm = () => {
    return (
           
            <div className="modal">
                <div className="modal__container">

                    <div className="modal__message-container">
                        <h2 className="modal__message">Actualizar datos personales</h2>
                        <i className='bx bx-x close__icon'></i>
                    </div>

                    <form action="">

                        <div className="modal__box">
                            <i className='bx bx-user modal__icon'></i>
                            <input type="text" placeholder="primer nombre" className="modal__input" />
                        </div>

                        <div className="modal__box">
                            <i className='bx bx-user modal__icon'></i>
                            <input type="text" placeholder="primer apellido" className="modal__input" />
                        </div>

                        <div className="modal__box">
                            <i className='bx bx-home modal__icon' ></i>
                            <input type="text" placeholder="provincia" className="modal__input" />
                        </div>

                        <div className="modal__box">
                            <i className='bx bx-phone modal__icon'></i>
                            <input type="text" placeholder="teléfono" className="modal__input" />
                        </div>
    
                        <div className="modal__box">
                            <i className='bx bx-at modal__icon'></i>
                            <input type="text" placeholder="email" className="modal__input" />
                        </div>

                        <a href="#" className="button">Guardar cambios</a>

                    </form>

                </div>
            </div>
    )
}
