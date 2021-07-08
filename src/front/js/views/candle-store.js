import React from 'react'

import {Footer} from '../components/footer'

import one from '../../img/aery-1.png'
import two from '../../img/aery-3.png'
import three from '../../img/aery-4.png'
import four from '../../img/aery-5.png'
import five from '../../img/aery-6.png'
import six from '../../img/aery-7.png'
import seven from '../../img/aery-8.png'
import eight from '../../img/aery-9.png'
import nine from '../../img/lafco-1.png'

export const CandleStore = () => {
    return (
        <main className="l-main">
             <section className="shop section" id="shop">
                <h2 className="section-title">Tienda</h2>

                <div className="featured__container bd-grid">

                    <article className="product">
                        <img src={one} alt="" className="product__img-store"/>
                        <span className="product__name">Nombre</span>
                        <span className="product__price">₡ 3,000.00</span>
                        <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>

                    <article className="product">
                        <img src={two} alt="" className="product__img-store"/>
                        <span className="product__name">Nombre</span>
                        <span className="product__price">₡ 6,000.00</span>
                        <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>

                    <article className="product">
                        <img src={three} alt="" className="product__img-store"/>
                        <span className="product__name">Nombre</span>
                        <span className="product__price">₡ 10,500.00</span>
                        <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>

                    <article className="product">
                        <img src={four} alt="" className="product__img-store"/>
                        <span className="product__name">Nombre</span>
                        <span className="product__price">₡ 10,500.00</span>
                        <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>

                    <article className="product">
                        <img src={five} alt="" className="product__img-store"/>
                        <span className="product__name">Nombre</span>
                        <span className="product__price">₡ 10,500.00</span>
                        <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>

                    <article className="product">
                        <img src={six} alt="" className="product__img-store"/>
                        <span className="product__name">Nombre</span>
                        <span className="product__price">₡ 10,500.00</span>
                        <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>

                    <article className="product">
                        <img src={seven} alt="" className="product__img-store"/>
                        <span className="product__name">Nombre</span>
                        <span className="product__price">₡ 10,500.00</span>
                        <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>

                    <article className="product">
                        <img src={eight} alt="" className="product__img-store"/>
                        <span className="product__name">Nombre</span>
                        <span className="product__price">₡ 10,500.00</span>
                        <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>

                    <article className="product">
                        <img src={nine} alt="" className="product__img-store"/>
                        <span className="product__name">Nombre</span>
                        <span className="product__price">₡ 10,500.00</span>
                        <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    )
}
