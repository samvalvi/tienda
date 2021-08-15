import React, {useState, useEffect, Fragment} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { deleteItemAction } from '../redux/bagDucks'

export function Bag() {
    const [isEmpty, setIsEmpty] = useState(true)

    const bagState = useSelector( state  => state.bag.cart )

    useEffect(() => {
        if(bagState.length > 0) {
            setIsEmpty(false)
        }
    }, [bagState])

    return (
        <Fragment>
        { (!isEmpty) ?
                bagState.map( (item, index) => (
                    <div className="bag__product" key={index}>
                        <div className="bag__product-img">
                            <img src={item.img} alt="" className="product__img"/>
                        </div>
                        <div className="bag__product-details">
                            
                        </div>
                    </div>
                ))
            :
            <h3 className="loading__text">Su bolsa de compras está vacía.</h3>
        }
        </Fragment>
    )
}
