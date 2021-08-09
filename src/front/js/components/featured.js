import React, {useEffect, useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {getProductsAction} from "../redux/productDucks"

export const Featured = () => {
    const [result, setResult] = useState(true);

    //Lee la acción
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsAction());
    },[dispatch]);

    if(!dispatch) {
        setResult(false);
    }

    //Devuelve el state
    const productos = useSelector(store => store.product.products);
    console.log(productos);

    return (

        <section className="featured section" id="featured">
            <h2 className="section-title">Nuevo</h2>

            { (result) ?
                <div className="featured__container bd-grid">
                       {productos.map((producto, index) => (
                            <div className="product" key={index}>
                                <div className="product__featured">Nuevo</div>
                                <img src={producto.imagen} alt="" className="product__img"/>
                                <span className="product__name">{producto.nombre}</span>
                                <span className="product__price">₡{producto.precio}</span>
                                <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                            </div>
                        ))}
                </div>
                :
                <div className="featured__container bd-grid">
                    <h3 className="loading__text">Loading...</h3>
                </div>
            }
        </section>
    )
}
