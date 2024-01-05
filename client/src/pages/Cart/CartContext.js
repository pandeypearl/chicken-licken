import React, { createContext, useContext, useState } from 'react';
import menuData from '../../data/menuData';

// Define the initial state for the cart
const initialState = {
    cart: [],
};

// Create a Context
const CartContext = createContext();

// Define reducer function
const cartReducer= (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};

// Create CarProvider component
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART'});
    };

    return (
        <CartContext.Provider 
            value={{ 
                cart: state.cart,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
           {children}
        </CartContext.Provider>
    );
};

//Create custom hook to use CartContext
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context
};

export { CartProvider, useCart, CartContext };

