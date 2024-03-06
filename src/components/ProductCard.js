// import dataJson from '../products.json'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, addItemToCart } from '../store/reduser'
import Button from './Button'

export default function ProductCard({nameProduct, cost}) {  
    const count = useSelector((state) => state.counter.value)
const data = useSelector((state) => state.counter.items)
  const dispatch = useDispatch()
  
    function addToCart(){
        console.log('addToCart product', nameProduct, cost)
        console.log(count)
        dispatch(addItemToCart({name: nameProduct, quantity: 1 , cost: cost}))
        console.log(data)
        dispatch(increment(1))

    }
    return(
       <div className="product-card"> 
          <div className='product-img'>IMG</div>
          <div className='product-name'>{nameProduct}</div>
          <div className="cost">{cost} $$</div>
          <Button onClick={addToCart}>add to Cart</Button>
       </div>
    ) 
   }