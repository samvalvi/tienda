import React from 'react'

import {NavLink} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

export function Order() {

    const dispatch = useDispatch()

    const totalItem = useSelector( state => state.bag.cart )

    return (
        <div className="order__container">
            <div className="order__details">    
                <div className="order__title">
                    <h3>Detalles de su compra</h3>
                </div>
                <div className="order__products">
                    <p className="quantity__products">Cantidad de productos:</p>
                    <p className="total__products">Total:</p>
                </div>
                
                <div className="line__container">
                    <div className="line" />
                </div>

                <div className="order__actions">
                    <div className="continue__button">
                        <NavLink to="#" className="button__order">Continuar</NavLink>
                    </div>
                    <div className="cancel__button">
                        <NavLink to="#" className="button__order">Cancelar</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}