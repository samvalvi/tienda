import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getShopProductsAction } from '../redux/shopDucks'
import { addItemAction } from '../redux/bagDucks'

import {Footer} from '../components/footer'

export const CandleStore = () => {
    const dispatch = useDispatch();
    const addItemDispatch = useDispatch();

    useEffect(() => {
        dispatch(getShopProductsAction());
    }, [dispatch])

    const products = useSelector(state => state.shopProducts.shopProducts);

    const addItem = (id) => {
        addItemDispatch(addItemAction(id));
    }

    return (
        <main className="l-main">
             <section className="shop section" id="shop">
                <h2 className="section-title">Tienda</h2>
                
                <div className="featured__container bd-grid">

                {(products) ?
                    products.map((product, index) => (

                        <div className="product" key={index}>
                            <img src={product.img} alt="" className="product__img"/>
                            <span className="product__name">{product.nombre}</span>
                            <span className="product__price">₡{product.precio}</span>
                            <NavLink to="#" className="button-light" onClick={() => addItem(product.id)} >Agregar <i className='bx bx-right-arrow-alt button-icon'></i></NavLink>
                        </div>
                    
                    ))
                    :

                    
                    <h3 className="loading__text">Loading...</h3>
                    
                }
                </div>
            </section>

            <Footer />
        </main>
    )
}
