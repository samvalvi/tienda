import React from 'react'

import newCandle from '../../img/aery-7.png'

export const Product = () => {
    return (
        <section className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__product">
                    <img src={newCandle} alt="new-candle" className="home__img" />
                </div>

                <div className="home__data" id="home-data">
                    <span className="home__new">Producto Nuevo</span>
                    <h1 className="home__title">Nombre del Producto </h1>
                    <h1 className="home__subtitle">Precio ₡</h1>
                    <p className="home__description">Explore la tienda para encontrar más productos.</p>
                    <a href="#" className="button">Comprar ahora</a>
                </div>
            </div>
        </section>
    )
}
