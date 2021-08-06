import React from 'react'

import ErrorImg from '../../img/040-error-404-monochrome.svg'
import {Link} from 'react-router-dom'

export function Error404() {
    return (
        <main className="l-main">
             <section className="error section">

                <div className="error__container bd-grid">
                    <div className="not__found-text">
                        <h1>Error 404</h1>
                        <h3>La ruta solicitada no existe.</h3>

                        <div className="button__container">
                            <Link to="/" className="button">Volver</Link>
                        </div>
                    </div>
                    
                    <div className="not__found-image">
                        <img src={ErrorImg} alt="404" className="error__img" />
                    </div>
                </div>

            </section>
        </main>
    )
}
