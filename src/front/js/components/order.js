import React, {useEffect} from 'react'

import {NavLink} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {totalItemAction, getPriceAction } from '../redux/bagDucks'

export function Order() {

    const totalItemDispatch = useDispatch();
    const totalPriceDispatch = useDispatch();

    const totalItem = useSelector( state => state.bag.quantity )
    const totalPrice = useSelector( state => state.bag.price )
    const auth = useSelector( state => state.login.auth )

    useEffect(()=> {
        totalItemDispatch(totalItemAction())
        totalPriceDispatch(getPriceAction())
    }, [totalItemDispatch, totalPriceDispatch, totalItem, totalPrice])

    return (
        <div className="order__container">
            <div className="order__details">    
                <div className="order__title">
                    <h3>Detalles de su compra</h3>
                </div>
                <div className="order__products">
                    <p className="quantity__products">Cantidad de productos: {totalItem}</p>
                    <p className="total__products">Total: ₡{totalPrice}</p>
                </div>
                
                <div className="line__container">
                    <div className="line" />
                </div>

                <div className="order__actions">
                    <div className="continue__button">
                        {(auth) ? 
                            <NavLink to="/delivery" className="button__order">Ordenar <i className='bx bx-right-arrow-alt button__order-icon'></i></NavLink>
                            :
                            <NavLink to="/account" className="button__order">Ordenar <i className='bx bx-right-arrow-alt button__order-icon'></i></NavLink>
                        }

                    </div>
                    <div className="cancel__button">
                        <NavLink to="#" className="button__order">Cancelar <i className='bx bx-x button__order-icon'></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}