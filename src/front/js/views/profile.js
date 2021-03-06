import React, {useEffect, useState} from 'react'

import profileImg from '../../img/Profile-Interface.svg'

import UserData from '../components/user-data'
import UserPassword from '../components/user-password'
import UserDelete from '../components/user-delete'
import History from '../components/history'

import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const EditForm = () => {
    const [active, setActive] = useState({
        id: '',
        state: false
    })

    const nombre = useSelector(state => state.login.user.primer_nombre);
    const apellido = useSelector(state => state.login.user.primer_apellido);
    const email = useSelector(state => state.login.user.usuario);


    const handleClick = (id) =>{
        if(id){
            setActive({...active, id: id, state: true})
        }
    }

    const getView = () => {
        switch(active.id){
            case 'perfil': return <UserData/>
            case 'clave': return <UserPassword/>
            case 'cuenta': return <UserDelete/>
            case 'historial': return <History/>
            default: return <UserData/>
        }
    }

    useEffect(() => {
    
    }, [active, nombre, apellido, email])

    
    return  (
        <main className="l-main">
            <section className="section">
                <h2 className="section-title">Mi cuenta</h2>

                <div className="user__settings bd-grid">
                    <div className="settings__container">

                        <div className="user__info">
                            <div className="user__img">
                                <img src={profileImg} alt="user-img" className="profile-img"/>
                            </div>

                            <div className="user__data">
                                <h2>{nombre} {apellido}</h2>
                                <h2>{email}</h2>
                            </div>
                        </div>

                    </div>

                    <div className="options__container">
                        
                        <div className="menu__bar">
                            <ul className="menu">
                                <li  className="menu__item">
                                    <NavLink to="#" id="perfil" className="button__light" onClick={(e) => handleClick(e.target.id)}>
                                        Perfil
                                        {(active.id === "perfil" || active.id === "") ?
                                            
                                            <i className='bx bx-chevron-down button-icon'></i>
                                            :
                                            <i className='bx bx-chevron-right button-icon'></i>
                                        }
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="#" id="clave" className="button__light" onClick={(e) => handleClick(e.target.id)}>
                                        Contrase??a
                                        {(active.id === "clave") ?
                                            
                                            <i className='bx bx-chevron-down button-icon'></i>
                                            :
                                            <i className='bx bx-chevron-right button-icon'></i>
                                        }
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="#" id="cuenta" className="button__light" onClick={(e) => handleClick(e.target.id)}>
                                        Cuenta
                                        {(active.id === "cuenta") ?
                                            
                                            <i className='bx bx-chevron-down button-icon'></i>
                                            :
                                            <i className='bx bx-chevron-right button-icon'></i>
                                        }
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="#" id="historial" className="button__light" onClick={(e) => handleClick(e.target.id)}>
                                        Historial
                                        {(active.id === "historial") ?
                                            
                                            <i className='bx bx-chevron-down button-icon'></i>
                                            :
                                            <i className='bx bx-chevron-right button-icon'></i>
                                        }
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {getView()}
                    </div>

                </div>
           
            </section>
        </main>
    )
}
