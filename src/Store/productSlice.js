import { createSlice } from "@reduxjs/toolkit";

let slice=createSlice({
    name:"products",
    initialState:{
        loading:false,
        list:[],
        error:false
    },
    reducers:{
        loadingProducts(state){  
            state.error=false 
            state.loading=true
        },
        loadingFailed(state){
            state.loading=false
            state.error=true
        },
        showProducts(state,action){
            state.loading=false
            state.error=false
            state.list=action.payload
        }

    }
})

export const {showProducts,loadingFailed,loadingProducts}=slice.actions
export default  slice.reducer