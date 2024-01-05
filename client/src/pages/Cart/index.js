import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { CartContext } from './CartContext';

const CartPage = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

    // Removing an item from the cart using id
    const handleRemoveItem = (itemId) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    };

    // Clearing all cart items
    const handleClearCart = () => {
        setCartItems([]);
    };

    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


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
                    <p>Total: R {total}</p>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default CartPage;