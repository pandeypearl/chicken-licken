import React, { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';

const CartItem = ({ itemId, quantity, itemName, itemPrice, itemImage}) => {
    const { removeFromCart, updateCartItemCount } = useContext(CartContext);

    const handleQuantityChange = (newQuantity) => {
        updateCartItemCount(newQuantity, itemId)
    }

    return (
        <div className='cart-item'>
            <img src={itemImage} alt={itemName} />
            <div className='cart-item-info'>
                <h3>{itemName}</h3>
                <p>Price: R {itemPrice}</p>
                <div className='quantity-control'>
                    <FontAwesomeIcon
                        icon={faMinusCircle}
                        onClick={() => handleQuantityChange(Math.max(0, quantity - 1))}
                    />
                    <span>{quantity}</span>
                    <FontAwesomeIcon
                        icon={faPlusCircle}
                        onClick={() => handleQuantityChange(quantity + 1)}
                    />
                </div>
            </div>
            <div className='remove-btn' onClick={() => removeFromCart(itemId)}>
                Remove
            </div>
        </div>
    );
};

export default CartItem;
