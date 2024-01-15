import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../../data/products';

// Create a Context
export const CartContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    const maxId = Math.max(...PRODUCTS.map(item => item.id));
    for (let i = 1; i <= maxId; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        console.log('Item ID:', itemId);
        console.log('Cart Items before addToCart:', cartItems);
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1 }));
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount }));
    }

    const checkout = () => {
        setCartItems(getDefaultCart());
    }

    useEffect(() => {
        console.log('Cart Items after addToCart:', cartItems);
    }, [cartItems]);

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};