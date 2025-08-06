import { createSelector, createSlice } from "@reduxjs/toolkit";

let slice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem(state,action){
            let existingItem=state.findIndex(x=>x.id==action.payload.id)
            if(existingItem!=-1){
                state[existingItem].quantity+=1
            }
            else{
                state.push(action.payload)
            }
        },
        delItem(state,action){

            let existingItem=state.findIndex(x=>x.id==action.payload.id)
            if(existingItem!=-1){
                if(state[existingItem].quantity>1){

                    state[existingItem].quantity-=1
                }
                else{
                    state.splice(existingItem,1)
                }
            }
        }
    }
})

export let getCartItems=createSelector(
    [state=>state.products,(state)=>state.cart],
    (products,cart)=>{
        return cart.map((cartItem)=>{
            let item=products.list.find(x=>x.id==cartItem.id)
            return {...item,quantity:cartItem.quantity}
        })
    }
)


export const {addItem,delItem}=slice.actions
export default slice.reducer
