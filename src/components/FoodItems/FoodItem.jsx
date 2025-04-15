import React, { useContext } from 'react'
import './FoodItem.css'
import add from '../../assets/add.svg'
import rating from '../../assets/rating.svg'
import plus from '../../assets/plus_green.svg'
import minus from '../../assets/minus_red.svg'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({ id, name, image, price, description, category }) => {

    const { cartItems, addCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className="food-item-img" src={image} />
                {
                    !cartItems[id]
                        ? <img className='add' onClick={() => addCart(id)} src={add} alt="" />
                        : <div className='food-item-counter'>
                            <img onClick={() => removeFromCart(id)} src={minus} alt="" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addCart(id)} src={plus} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name">
                    <p>{name}</p>
                    <img src={rating} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem