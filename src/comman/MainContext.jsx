import React, { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext();

export default function MainContext({ children }) {

    const [Cart, SetCart] = useState( JSON.parse(localStorage.getItem('cart')) || []);
    const [Wishlist, SetWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);

    console.log(Cart)
    console.log(Wishlist)

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(Cart));
    },[Cart])

    useEffect(() =>{
        localStorage.setItem('wishlist', JSON.stringify(Wishlist));
    },[Wishlist])


    let data = { Cart, SetCart, Wishlist, SetWishlist };

    return (
        <>
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>

        </>
    )
}
