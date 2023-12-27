import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    // Retrieving cart items from local storage on component mount
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    //Updating local storage whenever the cartItems state changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    });

    // Removing an item from the cart using id
    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    // Clearing all cart items
    const handleClearCart = () => {
        setCartItems([]);
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <div>
                                <p>{item.name}</p>
                                <p>R {item.price}</p>
                                <p>{item.quantity}</p>
                                <span>
                                    <FontAwesomeIcon 
                                        icon={faTrash} 
                                        onClick={() => handleRemoveItem(item.id)}
                                    />
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <>
                    <p>Total: R {cartItems.reduce((total, item) => total = item.price * item.quantity, 0)}</p>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default CartPage