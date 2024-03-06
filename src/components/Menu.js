import React from 'react';
import {  NavLink  } from "react-router-dom"
import { useSelector } from 'react-redux'

export default function Menu() {
    const value = useSelector((state) => state.counter.value)
    return (
        <div className='menu-block'>
            <NavLink to="/">Shops</NavLink>
            <NavLink to="/cart">Shopping Cart({value})</NavLink>
        </div>
    )
}