import React from 'react'

export const EditForm = () => {
    return  (
        <main className="l-main">
            <section className="account section">
                <h2 className="section-title">Ajustes</h2>
           
                <div className="edit">
                    <div className="edit__container">

                        <div className="edit__message-container">
                            <h2 className="edit__message">Actualizar datos personales</h2>
                            <i className='bx bx-x close__icon'></i>
                        </div>

                        <form action="">
                            <div className="box__container">
                                <div className="edit__box">
                                    <i className='bx bx-user edit__icon'></i>
                                    <input type="text" placeholder="primer nombre" className="edit__input" />
                                </div>

                                <div className="edit__box">
                                    <i className='bx bx-user edit__icon'></i>
                                    <input type="text" placeholder="primer apellido" className="edit__input" />
                                </div>

                                <div className="edit__box">
                                    <i className='bx bx-home edit__icon' ></i>
                                    <input type="text" placeholder="provincia" className="edit__input" />
                                </div>
    
                                <div className="edit__box">
                                    <i className='bx bx-at edit__icon'></i>
                                    <input type="text" placeholder="email" className="edit__input" />
                                </div>
                            </div>

                        
                            <a href="#" className="button">Guardar cambios</a>
                        </form>

                        <div className="line__container">
                            <div className="line" />
                        </div>

                        <div className="update__message-container">
                            <h2 className="update__message">Actualizar contraseña</h2>
                        </div>

                        <form action="">
                            <div className="box__container">

                                <div className="update__box">
                                    <i className='bx bx-lock-alt update__icon'></i>
                                    <input type="password" placeholder="contraseña" className="update__input" />
                                </div>

                                <div className="update__box">
                                    <i className='bx bx-lock-alt update__icon'></i>
                                    <input type="password" placeholder="repetir contraseña" className="update__input" />
                                </div>

                            </div>

                            <a href="#" className="button">Guardar cambios</a>
                        </form>

                        <div className="line__container">
                            <div className="line" />
                        </div>

                        <div className="delete__message-container">
                            <h2 className="delete__message">Eliminar cuenta</h2>
                        </div>

                        <form action="">
                            <div className="box__container">
                                <div className="delete__box">
                                    <i className='bx bx-at delete__icon'></i>
                                    <input type="email" placeholder="email" className="delete__input" />
                                </div>

                                <div className="delete__box">
                                    <i className='bx bx-lock-alt delete__icon'></i>
                                    <input type="password" placeholder="contraseña" className="delete__input" />
                                </div>

                                <a href="#" className="button">Eliminar</a>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </main>
    )
}
