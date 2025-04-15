import React, { createContext, useEffect } from 'react'
import { food_list } from '../assets/menuImage'
import { useState } from 'react'

export const StoreContext = createContext(null)

const StoreContextProvider = (prop) => {

    const [cartItems, setcartItems] = useState({});

    const addCart = (itemId) => {
        if (!cartItems[itemId]) {
            setcartItems(prev => ({ ...prev, [itemId]: 1 }));
        } else {
            setcartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeFromCart = (itemId) => {
        setcartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // Try to find the item in food_list by matching IDs as strings
                const itemInfo = food_list.find(
                    (product) => String(product.id) === String(item)
                );

                if (itemInfo && itemInfo.price) {
                    totalAmount += itemInfo.price * cartItems[item];
                } else {
                    console.warn(`Item not found or missing price for itemId: ${item}`);
                }
            }
        }
        return totalAmount;
    };


    const contextValue = {
        food_list,
        cartItems,
        setcartItems,
        addCart,
        removeFromCart,
        getTotalCartAmount
    }
    return <StoreContext.Provider value={contextValue}>
        {prop.children}
    </StoreContext.Provider>
}

export default StoreContextProvider