import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        console.log(123);
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);
    const addToCart = (product) => {
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
        let newCartItems;
        if (existingProductIndex >= 0) {
            newCartItems = [...cartItems];
            newCartItems[existingProductIndex].quantity += 1;
        } else {
            newCartItems = [...cartItems, { ...product, quantity: 1 }];
        }

        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};