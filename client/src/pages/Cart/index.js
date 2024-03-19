import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { PRODUCTS } from '../../data/products';
import CartItem from './CartItem';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const CartPage = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(CartContext);
    // const totalAmount = getTotalCartAmount();
    // const navigate = useNavigate();

    return (
        <div className='cart-container'>
            <h2>Your Cart</h2>
            {Object.entries(cartItems).map(([itemId, quantity]) => {
                // Assuming PRODUCTS is accessible in this scope
                const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));

                if (quantity > 0 && itemInfo) {
                    return (
                        <CartItem
                            key={itemId}
                            itemId={itemId}
                            quantity={quantity}
                            itemName={itemInfo.item}
                            itemPrice={itemInfo.price}
                            itemImage={itemInfo.image}
                        />
                    );
                }
                return null;
            })}
            <div className='cart-total'>
                <h3>Total: R {getTotalCartAmount()}</h3>
            </div>
            <button onClick={checkout}>Checkout</button>
        </div>
    );
};

export default CartPage;