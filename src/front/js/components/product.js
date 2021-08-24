import React, {useEffect} from 'react'

import {getHomeProductAction} from '../redux/homeDucks'
import { useDispatch, useSelector } from 'react-redux'
import { addItemAction } from '../redux/bagDucks'

import {NavLink} from 'react-router-dom'

export const Product = () => {

    const loadDispatch = useDispatch();
    const buyDispatch = useDispatch();

    useEffect(() => {
        loadDispatch(getHomeProductAction());
    }, [loadDispatch])

    const homeProduct = useSelector(state => state.homeProduct.homeProduct)

    const addToBag = (product_id) => {
        buyDispatch(addItemAction(product_id))
    }

    return (
        <section className="home section" id="home">
            
            <div className="home__container bd-grid">
                {(homeProduct) ?
                    homeProduct.map((item, index) => (
                        <div key={index}>
                            
                            <div className="home__product">
                                <img src={item.img} alt="new-candle" className="home__image"/>
                            </div>

                            <div className="home__data" id="home-data">
                                <h1 className="home__title">{item.nombre}</h1>
                                <h1 className="home__subtitle">Precio: ₡{item.precio}</h1>
                                <h3>Fragancia: {item.esencia}</h3>
                                <p className="home__description">Explore la tienda para encontrar más productos.</p>
                                <NavLink to="#" className="button" onClick={()=> addToBag(item.id)}>Comprar ahora</NavLink>
                            </div>

                        </div>
                    ))

                    :

                    <h3 className="loading__text">Loading...</h3>
                    
                }
            </div>
        </section>
    )
}
