import React, {useState, useEffect} from 'react'

import {NavLink} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { postUserRegisterAction } from '../redux/registerDucks'
import { userLoginAction } from '../redux/loginDucks'

import {Footer} from '../components/footer'

export const Account = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginClave, setLoginClave] = useState('')
    const [loginMsg, setLoginMsg] = useState('')

    const [registerPrimerNombre, setRegisterPrimerNombre] = useState('')
    const [registerPrimerApellido, setRegisterPrimerApellido] = useState('')
    const [provincia, setProvincia] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerClave, setRegisterClave] = useState('')
    const [repetir_Clave, setRepetir_Clave] = useState('')
    const [registerMsg, setRegisterMsg] = useState('')

    const dispatchRegister = useDispatch()
    const dispatcherLogin = useDispatch()


    const statusRegister = useSelector( (state) => state.registration.status )

    useEffect(() => {
        setRegisterMsg(statusRegister.msg)
    }, [statusRegister])

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        dispatchRegister(postUserRegisterAction( registerPrimerNombre, registerPrimerApellido, provincia, registerEmail, registerClave, repetir_Clave ))
        setRegisterPrimerNombre('')
        setRegisterPrimerApellido('')
        setProvincia('')
        setRegisterEmail('')
        setRegisterClave('')
        setRepetir_Clave('')
    }

    const statusLogin = useSelector( (state) => state.login.user )
    const auth = useSelector( (state) => state.login.auth )
    const msgLogin = useSelector( (state) => state.login.msg )

    useEffect(() => {
        setLoginMsg(msgLogin)
    },[msgLogin])

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        dispatcherLogin(userLoginAction( loginEmail, loginClave ))
    }

    useEffect(() => {

    }, [auth])

    return (
        <main className="l-main">
            <section className="account section">
                <h2 className="section-title">Mi cuenta</h2>
                
                <div className="account__container bd-grid">
                    
                    <div className="login__form">
                        <form method="post">
                            <h1 className="login__title">Acceso</h1>
                            {
                                (loginMsg) ? <p className="login__error">{loginMsg}</p> : null
                            }
                            <div className="login__box">
                                <i className='bx bx-user login__icon'></i>
                                <input type="text" placeholder="email" className="login__input" onChange={(e) => setLoginEmail(e.target.value)} value={loginEmail}/>
                            </div>
    
                            <div className="login__box">
                                <i className='bx bx-lock-alt login__icon'></i>
                                <input type="password" placeholder="contraseña" className="login__input" onChange={(e) => setLoginClave(e.target.value)} value={loginClave} />
                            </div>
                            <div className="login__message-container">
                                <p className="login__message">*Todos los campos son obligatorios.</p>
                            </div>

                            <NavLink to="#" className="button" onClick={e => handleSubmitLogin(e)}>Ingresar</NavLink>

                            <NavLink to="/send-code" className="login__forgot" >¿Olvidó su contraseña?</NavLink>
                        </form>
                        {(auth) ? <Redirect to="/" /> : null}
                    </div>


                    <div className="register__form">
                        <form method="post" >
                            <h1 className="register__title">Registro</h1>
                        
                            <div className="register__message-container">
                                <p className="register__message">*Todos los campos son obligatorios.</p>
                            </div>

                            <div className="register__box">
                                <i className='bx bx-user register__icon'></i>
                                <input type="text" placeholder="primer nombre" className="register__input" onChange={(e)=> setRegisterPrimerNombre(e.target.value)} value={registerPrimerNombre} required />
                            </div>

                            <div className="register__box">
                                <i className='bx bx-user register__icon'></i>
                                <input type="text" placeholder="primer apellido" className="register__input" onChange={(e)=> setRegisterPrimerApellido(e.target.value)} value={registerPrimerApellido}/>
                            </div>

                            <div className="register__box">
                                <i className='bx bx-home register__icon'></i>
                                <input type="text" placeholder="provincia" className="register__input" onChange={(e)=> setProvincia(e.target.value)} value={provincia} />
                            </div>
    
                            <div className="register__box">
                                <i className='bx bx-at register__icon'></i>
                                <input type="text" placeholder="email" className="register__input" onChange={(e)=> setRegisterEmail(e.target.value)} value={registerEmail} />
                            </div>

                            <div className="register__box">
                                <i className='bx bx-lock-alt register__icon'></i>
                                <input type="password" placeholder="contraseña" className="register__input" onChange={(e)=> setRegisterClave(e.target.value)} value={registerClave} />
                            </div>

                            <div className="register__box">
                                <i className='bx bx-lock-alt register__icon'></i>
                                <input type="password" placeholder="repetir contraseña" className="register__input" onChange={(e)=> setRepetir_Clave(e.target.value)} value={repetir_Clave} />
                            </div>
                            
                            {
                                (registerMsg) ? <p className="register__error">{registerMsg}</p> : null
                            }

                            <NavLink to="#" className="button" onClick={e => handleSubmitRegister(e)}>Crear cuenta</NavLink>

                        </form>
                    </div>
                
                </div>
            </section>

            <Footer />
        </main>
    )
}
