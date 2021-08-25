import React, {useEffect} from 'react'

import {NavLink} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getNewProductsAction } from '../redux/newDucks';
import { addItemAction } from '../redux/bagDucks';
import { incrementBadgeAction } from '../redux/badgeDucks';

export const Featured = () => {
    //Lee la acción
    const loadDispatch = useDispatch();
    const buyDispatch = useDispatch();
    const badgeDispatch = useDispatch();

    useEffect(() => {
        loadDispatch(getNewProductsAction());
    },[loadDispatch]);

    //Devuelve el state
    const productos = useSelector(store => store.newProduct.newProducts);
    const shopBag = useSelector(store => store.bag.cart);

    const addToBag = (id) => {
        const item = shopBag.find(item => item.id === id);
        if(!item){
            buyDispatch(addItemAction(id));
            badgeDispatch(incrementBadgeAction());
        }
    }

    return (

        <section className="featured section" id="featured">
            <h2 className="section-title">Nuevo</h2>

            
            <div className="featured__container bd-grid">
            { (productos.length > 0) ?
                    productos.map((producto, index) => (
                        <div className="product" key={index}>
                            <div className="product__featured">Nuevo</div>
                            <img src={producto.img} alt="candel-img" className="product__img"/>
                            <span className="product__name">{producto.nombre}</span>
                            <span className="product__fragance">{producto.esencia}</span>
                            <span className="product__price">₡{producto.precio}</span>
                            <NavLink to="#" className="button-light" onClick={()=> addToBag(producto.id)}>Agregar <i className='bx bx-right-arrow-alt button-icon'></i></NavLink>
                        </div>
                    ))
    
                :
                <h3 className="loading__text">Loading...</h3>
                
            }
            </div>
        </section>
    )
}
