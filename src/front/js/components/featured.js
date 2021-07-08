import React from 'react'

import favoriteOne from '../../img/favorite-3.png'
import favoriteTwo from '../../img/new-10.png'
import favoriteThree from '../../img/lafco-6.png'

export const Featured = () => {
    return (
        <section className="featured section" id="featured">
            <h2 className="section-title">Favoritos</h2>

            <div className="featured__container bd-grid">

                <article className="product">
                    <div className="product__featured">Favorito</div>
                    <img src={favoriteOne} alt="" className="product__img"/>
                    <span className="product__name">Nombre</span>
                    <span className="product__price">₡ 3,000.00</span>
                    <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>

                <article className="product">
                    <div className="product__featured">Favorito</div>
                    <img src={favoriteThree} alt="" className="product__img"/>
                    <span className="product__name">Nombre</span>
                    <span className="product__price">₡ 6,000.00</span>
                    <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>

                <article className="product">
                    <div className="product__featured">Favorito</div>
                    <img src={favoriteTwo} alt="" className="product__img"/>
                    <span className="product__name">Nombre</span>
                    <span className="product__price">₡ 10,500.00</span>
                    <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                </article>

            </div>
        </section>
    )
}
