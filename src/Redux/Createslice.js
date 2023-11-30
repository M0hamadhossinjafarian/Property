import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token:null,
    list:[],
}

const authSlices=createSlice({
    name:'authSlices',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.token=action.payload
        },
        logout:(state)=>{

            state.token=null
        },
        addItems:(state,action)=>{
            let addElement=false
            if(state.list.length===0){
                let product=action.payload
                product.quantity=1
                addElement=true
                state.list.push(product)
            }else{
                state.list=state.list.map((e)=>{
                    if(e.id===action.payload.id){
                        addElement=true
                        e.quantity=e.quantity+1
                        return e
                    }else{
                       return e 
                    }
                })
            }
            if(!addElement){
                let product=action.payload
                product.quantity=1
                addElement=true
                state.list.push(product)  
    
              }
        },
        removeItems:(state,action)=>{
            state.list=state.list.filter((e)=>{
                if(e.id===action.payload){
                    if(e.quantity>1){
                        e.quantity=e.quantity-1
                        return true
                    }else{
                        return false
                    }
                }else{
                    return true
                }
            })
        }
    }
})
export default authSlices.reducer
export const {login,logout,addItems,removeItems}=authSlices.actions