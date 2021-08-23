import React, {useState} from 'react'
import profileImg from '../../img/Profile-Interface.svg'
import UserData from '../components/user-data'

import {NavLink} from 'react-router-dom'

export const EditForm = () => {
    const [selected, setSelected] = useState(false)
    
    return  (
        <main className="l-main">
            <section className="section bd-grid">
                <h2 className="section-title">Mi cuenta</h2>

                <div className="user__settings">
                    <div className="settings__container">

                        <div className="user__info">
                            <div className="user__img">
                                <img src={profileImg} alt="user-img"/>
                            </div>

                            <div className="user__data">
                                <h2>John Doe</h2>
                                <h2>Usuario@email.com</h2>
                            </div>
                        </div>

                        <div className="menu__bar">
                            <ul className="menu">
                                <li  className="menu__item"><NavLink to="#" className="button__light">Datos personales</NavLink></li>
                                <li className="menu__item"><NavLink to="#" className="button__light">Contraseña</NavLink></li>
                                <li className="menu__item"><NavLink to="#" className="button__light">Eliminar cuenta</NavLink></li>
                                <li className="menu__item"><NavLink to="#" className="button__light">Historial de compras</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className="options__container">
                        <UserData />
                    </div>

                </div>
           
            </section>
        </main>
    )
}
