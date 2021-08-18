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
    const shopBag = useSelector(state => state.bag.cart)

    const addItem = (id) => {
        const item = shopBag.find(item => item.id === id)
        if(!item){
            addItemDispatch(addItemAction(id))
        }
    }

    return (
        <main className="l-main bd-grid">
             <section className="shop section" id="shop">
                <h2 className="section-title">Tienda</h2>
                
                <div className="featured__container bd-grid">

                {(products.length > 0) ?
                    products.map((producto, index) => (

                        <div className="product" key={index}>
                            <img src={producto.img} alt="" className="product__img"/>
                            <span className="product__name">{producto.nombre}</span>
                            <span className="product__fragance">{producto.esencia}</span>
                            <span className="product__price">₡{producto.precio}</span>
                            <NavLink to="#" className="button-light" onClick={() => addItem(producto.id)} >Agregar <i className='bx bx-right-arrow-alt button-icon'></i></NavLink>
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
