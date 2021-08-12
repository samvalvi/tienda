import React,{useState, useEffect} from 'react';

import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

export const Navbar = () => {
    const [active, setActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');

    const user = useSelector(state => state.login.logged);
    const username = useSelector(state => state.login.user);

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
        if(user){
            setIsLoggedIn(true);
        }
        if(username) {
            setName(username.primer_nombre);
        }
    }, [user, username])

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
                            <li className="nav__item"><p className="nav__link" id="nav-link" >{name}</p></li>
                            <li className="nav__item dropdown">
                                <NavLink to="#" className="dropdown__link">Ajustes <i className='bx bx-chevron-down dropdown__icon'></i></NavLink>
                                    
                                <ul className="dropdown__menu">
                                    <li className="dropdown__item">
                                        <NavLink to="/settings" className="nav__link" id="nav-link" onClick={(e)=> LinkAction(e.target.id)}>Perfil</NavLink>
                                    
                                    </li>
                                </ul>
                            </li>
                            <li className="nav__item"><NavLink to="#" className="nav__link">Cerrar sesión</NavLink></li>
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
