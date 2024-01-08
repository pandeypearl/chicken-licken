import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { PRODUCTS } from '../../data/products';
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const CartPage = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(CartContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Your Cart</h2>
            <div>
                {PRODUCTS.filter(product => cartItems[product.id] > 0).map(product => (
                    <CartItem key={product.id} data={product} />
                ))}
            </div>
            {totalAmount > 0 ? (
                <div className='checkout'>
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate('/menu')}>Continue Shopping</button>
                    <button 
                        onClick={() => {
                            checkout(); 
                            navigate('/checkout');
                        }}
                    >
                        {' '}
                        checkout{' '}
                    </button>
                </div>
                ) : (
                    <h2>Your Shopping Cart is Empty</h2>
                )}
        </div>
    );
};

export default CartPage;