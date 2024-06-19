import React from "react";
import style from "../styles/cart.module.css"
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";


function Cart() {

    const { cartItems, removeItem } = useOutletContext();
    const [ toPay, setToPay ] = useState(0);

    useEffect(() => {
        const totalPrice = Math.round(cartItems.reduce((sum, item) => sum + item.price, 0));
        setToPay(totalPrice);
    }, [cartItems]);

 


    return (
        <div className={style.cartContainer}>
            {cartItems.length === 0 ? (
                <h1>Cart is empty</h1>
                ) : (
                    <div className={style.cartItemsContainer}>
                    <h1>Price to pay {toPay}$</h1>
                    <hr />
                    <div className={style.cartItems}>
                        {cartItems.map((item, index) => (
                            <div key={index} className={style.cartItem}>
                                <div className={style.spanContainer}>
                                    <span className="material-symbols-outlined" onClick={() => removeItem(index)}>close</span>
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.price}$</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            )
            }

        </div>
    )
}

export default Cart;