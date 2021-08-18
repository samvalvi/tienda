import React,{useState, useEffect} from 'react';

import {NavLink, Link} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import { logoutUserAction } from '../redux/logoutDucks';

export const Navbar = () => {
    const [active, setActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const data = useSelector(state => state.login.user);

    //Cambia el background del navbar
    const changeBackground = () => {
        if(window.scrollY >= 30){
            setActive(true);
        }
        else{
            setActive(false);
        }
    }
    
    window.addEventListener('scroll', changeBackground)

    //Muestra u oculta el menú
    const Menu = (toggleId) => {
        if(toggleId && !showMenu){
            setShowMenu(true);
        }else{
            setShowMenu(false);
        }
    }

    //Oculta el menú al hacer click en un link del menú
    const LinkAction = (linkId) => {
        if(linkId && showMenu){
            setShowMenu(false)
        }
    }

    useEffect(()=> {
        if(data.status === 'successful'){
            setIsLoggedIn(true);
            setName(data.primer_nombre);
        }
    }, [data])

    const logoutUser = () => {
        dispatch(logoutUserAction())
        setIsLoggedIn(false);
        window.location.pathname = '/account';
    }


    return (

        <header className={(active) ? "l-header scroll-header" : "l-header"} id="header">

            <nav className="nav bd-grid">
                <div className="nav__toggle" id="nav-toggle">
                    <i className={(showMenu) ? 'bx bx-list-ul' : 'bx bx-menu'} id="toggle" onClick={(e)=> Menu(e.target.id)}></i>
                </div>

                <p className="nav__logo">APP__DEVELOP_VELAS</p>

                <div className={(showMenu) ? "nav__menu show" : "nav__menu"} id="nav-menu">
                    {(isLoggedIn) ?
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink exact to="/" className="nav__link" id="nav-link" onClick={(e)=> LinkAction(e.target.id)}>Inicio</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/shop" className="nav__link" id="nav-link" onClick={(e)=> LinkAction(e.target.id)}>Tienda</NavLink>
                            </li>
                            <li className="nav__item dropdown">
                                <NavLink to="#" className="dropdown__link">{name} <i className='bx bx-chevron-down dropdown__icon'></i></NavLink>
                                    
                                <ul className="dropdown__menu">
                                    <li className="dropdown__item">
                                        <NavLink to="/settings" className="nav__link" id="nav-link" onClick={(e)=> LinkAction(e.target.id)}>Ajustes</NavLink>
                                    
                                    </li>
                                </ul>
                            </li>
                            <li className="nav__item"><Link to="#" className="nav__link" onClick={() => logoutUser()}>Cerrar sesión</Link>
                            </li>
                            
                        </ul>
                        :
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink exact to="/" className="nav__link" id="nav-link" onClick={(e)=> LinkAction(e.target.id)}>Inicio</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/shop" className="nav__link" id="nav-link" onClick={(e)=> LinkAction(e.target.id)}>Tienda</NavLink>
                            </li>
                            <li className="nav__item"><NavLink to="/account" className="nav__link" id="nav-link" onClick={(e)=> LinkAction(e.target.id)}>Cuenta</NavLink></li>
                        </ul>
                    }
                </div>

                <div className="nav__shop">
                    <NavLink to="/shopbag" className="nav__link" id="nav-link" ><i className='bx bx-shopping-bag bx-flashing-hover'></i></NavLink>
                </div>
            
            </nav>
        </header>
    )   
}
