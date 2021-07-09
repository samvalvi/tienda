import React,{useState, useEffect} from 'react';

import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    const [active, setActive] = useState(false);

    //Muestra el menu
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    
        if(toggle && nav)toggle.addEventListener('click', ()=> nav.classList.toggle('show'))
    }

    //Cambia el color del navbar
    const changeBackground = () => {
        if(window.scrollY >= 30){
            setActive(true);
        }
        else{
            setActive(false);
        }
    }
    
    window.addEventListener('scroll', changeBackground)

    useEffect(()=> {
        showMenu('nav-toggle', 'nav-menu')

        //Remueve el menu
        const navLink = document.querySelectorAll('.nav__link'),
        navMenu = document.getElementById('nav-menu')

        function linkAction(){ 
            navMenu.classList.remove('show')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))

    }, [])

    return (

        <header className={(active) ? "l-header scroll-header" : "l-header"} id="header">
            <nav className="nav bd-grid">
                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu' ></i>
                </div>

                <p className="nav__logo">APP__DEVELOP_VELAS</p>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><NavLink exact to="/" className="nav__link" id="nav-link">Inicio</NavLink></li>
                        <li className="nav__item"><NavLink to="/shop" className="nav__link">Tienda</NavLink></li>
                        <li className="nav__item"><NavLink to="/account" className="nav__link">Cuenta</NavLink></li>
                        <li className="nav__item dropdown">
                            <NavLink to="#" className="dropdown__link">Ajustes <i className='bx bx-chevron-down dropdown__icon'></i></NavLink>
                                    
                            <ul className="dropdown__menu">
                                <li className="dropdown__item"><NavLink to="#" className="modal__link">Perfil</NavLink></li>
                                <li className="dropdown__item"><NavLink to="#" className="modal__link">Contraseña</NavLink></li>
                                <li className="dropdown__item"><NavLink to="#" className="modal__link">Cuenta</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav__item"><NavLink to="#" className="nav__link">Cerrar sesión</NavLink></li>
                    </ul>
                </div>

                <div className="nav__shop">
                    <i className='bx bx-shopping-bag bx-flashing-hover'></i>
                </div>
            
            </nav>
        </header>
    )   
}
