import React from 'react'

import ErrorImg from '../../img/NotFound.svg'
import {NavLink, useHistory} from 'react-router-dom'

export function Error404() {

    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault();
        return history.push('/')
    }

    return (
        <main className="l-main">
             <section className="error section">

                <div className="error__container bd-grid">
                    <div className="not__found-text">
                        <h1>Error 404</h1>
                        <h3>La ruta solicitada no existe.</h3>

                        <div className="button__container">
                            <NavLink to="#" className="button" onClick={(e)=> handleClick(e)}>Volver</NavLink>
                        </div>
                    </div>
                    
                    <div className="not__found-image">
                        <img src={ErrorImg} alt="404" className="error__img" />
                        <NavLink to="https://storyset.com/people"><p className="image__attribution">People illustrations by Storyset</p></NavLink>
                    </div>
                </div>

            </section>
        </main>
    )
}
