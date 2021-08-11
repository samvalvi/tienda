import React, {useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getNewProductsAction } from '../redux/newDucks';

export const Featured = () => {
    //Lee la acción
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewProductsAction());
    },[dispatch]);

    //Devuelve el state
    const productos = useSelector(store => store.newProduct.newProducts);

    return (

        <section className="featured section" id="featured">
            <h2 className="section-title">Nuevo</h2>

            
            <div className="featured__container bd-grid">
            { (productos) ?
                    productos.map((producto, index) => (
                        <div className="product" key={index}>
                            <div className="product__featured">Nuevo</div>
                            <img src={producto.img} alt="candel-img" className="product__img"/>
                            <span className="product__name">{producto.nombre}</span>
                            <span className="product__price">₡{producto.precio}</span>
                            <a href="#" className="button-light">Agregar <i className='bx bx-right-arrow-alt button-icon'></i></a>
                        </div>
                    ))
    
                :
                
                <h3 className="loading__text">Loading...</h3>
                
            }
            </div>
        </section>
    )
}
