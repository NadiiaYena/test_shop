import Button from "./Button";
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, addProductOne, removProductOne } from '../store/reduser'
import MapApp from "./Map";
import { useJsApiLoader } from "@react-google-maps/api"; 




const API_KEY = process.env.REACT_APP_API_KEY

const selectedLocation = {
    lat: 28.7041,
    lng: 77.1025,
}



export default function Cart() {
const products = useSelector(state => state.counter.items)
const totalPrice = useSelector(state => state.counter.totalPrice)
console.log('totalPrice', totalPrice)
const dispatch = useDispatch()

const [ formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    sum: totalPrice,
    products: products
})
const items = useSelector(state => state.counter.items)

const item = items.map((it, index) => {
console.log(it, index, it.quantity)
function plusItem(){
    console.log('plusItem')
    dispatch(addProductOne({name: it.name, quantity: 1 , cost: it.cost}))
    dispatch(increment(1))
    
}
function minusItem() {
    console.log('plusItem')
    dispatch(removProductOne({name: it.name, quantity: 1 , cost: it.cost}))
    dispatch(decrement(1))

}

return <div key={index} className="item">
            <div className="img"></div>
            <div className="info-block-added">
                <div>{it.name}</div>
                <div>Price: {it.cost* it.quantity}</div>
                <div className="change-item">
                    <div className="plus" onClick={plusItem}>+</div>
                    <div>{it.quantity}</div>
                    <div className="minos" onClick={minusItem}>-</div>
                </div>
            </div>
        </div>
})

function handleInputChange(e) {
    const { id, value } = e.target;
    console.log(id, value )
    setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
}
function doOrder() {
    console.log('doOrder', formData)


    
}
const handleSubmit =(e) => {
    e.preventDefault()
    console.log('handleSubmit')
} 

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

console.log(items)
 return(
    <div className="cart-block"> 
        <div className="cart">

            <form className="form" onSubmit={handleSubmit}>
            <div className="map-block">
                {isLoaded ? <MapApp center={selectedLocation}/> : <h3>Loading</h3>}
            </div>

                <div className="form-item">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={handleInputChange}/>
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={handleInputChange}/>
                </div>
                <div className="form-item">
                    <label htmlFor="phone">Phone:</label>
                    <input type="phone"  id="phone" onChange={handleInputChange}/>
                </div>
                <div className="form-item">
                    <label htmlFor="address">Adress:</label>
                    <input type="text" id="address" onChange={handleInputChange}/>
                </div>
            </form>
            <div className="items">
                <div className="item-cart-added">{item}</div>
            </div>
        </div>
        <div className="total">
            <p>Total price: {totalPrice}</p>
            <Button type="submit" onClick={doOrder}>Summit</Button>
        </div>

    </div>
 ) 
}