import React, { useContext} from 'react';
import { CartContext } from './CartContext';

export const CartItem = (props) => {
    const { id , item, price, image } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);

    return (
        <div>
            <img src={image} alt={item}/>
            <p><strong>{item}</strong></p>
            <p>{price}</p>
            <div className='count-handler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input
                    value={cartItems[id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    );
};
