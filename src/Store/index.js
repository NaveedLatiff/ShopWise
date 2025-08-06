import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice.js'
import cartReducer from './CartSlice.js'

export let store =configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer
    }
})