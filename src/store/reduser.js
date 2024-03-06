import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    items: [],
    totalPrice: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
        if(state.value > 0){
            state.value -= 1
        } else {
            state.value = 0
        }
    },
    addProductOne: (state, action) => {
        const { name, quantity, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name)
        console.log('existingItem', existingItem)
    
        if (existingItem !== undefined && existingItem !== null) {
            existingItem.quantity += quantity;
            state.totalPrice += cost
        } else {
            state.items.push({ name, quantity, cost });
            state.totalPrice += cost
        }
        console.log(state.items)

      },
    
    removProductOne: (state, action) => {
        const { name, quantity, cost } = action.payload;
        console.log(action.payload)
        const existingItem = state.items.find(item => item.name === name)
        console.log('existingItem', existingItem)
    
        if (existingItem !== undefined && existingItem !== null && existingItem.quantity >1) {
    
            existingItem.quantity -= quantity;
            state.totalPrice -= cost
            // existingItem.cost = existingItem.quantity * cost
        } else {
            state.items = state.items.filter(item => item.name !== name);
            state.totalPrice -= cost
        }
        console.log(state.items)

    },

    addItemToCart: (state, action) => {
    const { name, quantity, cost } = action.payload;
    console.log('action.payload', action.payload)
    const existingItem = state.items.find(item => item.name === name)
    console.log('existingItem', existingItem)

    if (existingItem !== undefined && existingItem !== null) {
        existingItem.quantity += quantity;
        state.totalPrice += cost
    } else {
        state.items.push({ name, quantity, cost });
        state.totalPrice += cost
    }
    console.log(state.items)
    },
    removeItemFromCart: (state, action) => {
        const { name, quantity, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
  
        if (existingItem !== undefined && existingItem !== null) {
          existingItem.quantity -= quantity;
            state.totalPrice -= cost
          // Remove item from the cart if quantity becomes zero or negative
          if (existingItem.quantity <= 0) {
            state.items = state.items.filter(item => item.name !== name);
            state.totalPrice -= cost
          }
        }
    },

    clearCart: (state) => {
        state.items = [];
    },
  },
})

export const { increment, decrement, addItemToCart, removeItemFromCart, addProductOne, removProductOne } = counterSlice.actions

export default counterSlice.reducer
