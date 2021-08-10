import React, {useEffect} from 'react'

import {getHomeProductAction} from '../redux/homeDucks'
import { useDispatch, useSelector } from 'react-redux'

import {Link} from 'react-router-dom'

export const Product = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHomeProductAction());
    }, [dispatch])

    const homeProduct = useSelector(state => state.homeProduct.homeProduct)

    return (
        <section className="home section" id="home">
            
            <div className="home__container bd-grid">
                {(homeProduct) ?
                    homeProduct.map((item, index) => (
                        <>
                            
                            <div className="home__product">
                                <img src={item.img} alt="new-candle" className="home__img"/>
                            </div>

                            <div className="home__data" id="home-data">
                                <h1 className="home__title">{item.nombre}</h1>
                                <h1 className="home__subtitle">Precio ₡{item.precio}</h1>
                                <p className="home__description">Explore la tienda para encontrar más productos.</p>
                                <Link to="/shop" className="button">Comprar ahora</Link>
                            </div>

                        </>
                    ))

                    :

                    <h3 className="loading__text">Loading...</h3>
                    
                }
            </div>
        </section>
    )
}
