import React, {useEffect} from 'react'

import {NavLink} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {totalItemAction} from '../redux/bagDucks'

export function Order() {

    const dispatch = useDispatch()

    const totalItem = useSelector( state => state.bag.quantity )

    useEffect(()=> {
        dispatch(totalItemAction())
    }, [dispatch, totalItem])

    return (
        <div className="order__container">
            <div className="order__details">    
                <div className="order__title">
                    <h3>Detalles de su compra</h3>
                </div>
                <div className="order__products">
                    <p className="quantity__products">Cantidad de productos: {totalItem}</p>
                    <p className="total__products">Total: ₡</p>
                </div>
                
                <div className="line__container">
                    <div className="line" />
                </div>

                <div className="order__actions">
                    <div className="continue__button">
                        <NavLink to="/delivery" className="button__order">Ordenar <i className='bx bx-right-arrow-alt button__order-icon'></i></NavLink>
                    </div>
                    <div className="cancel__button">
                        <NavLink to="#" className="button__order">Cancelar <i className='bx bx-x button__order-icon'></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}