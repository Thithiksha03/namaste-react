import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state, action) => {
            // mutating the state
            state.items.push(action.payload);
        },

        removeItems : (state) => {
            state.items.pop();
        },
        
        clearCart : (state) => {
            //RTK - either mutate the existing state or return the new state
            state.items.length = 0; //[]
            //OR
            //return {items : []}; //this new object will be replaced inside original state = {items : []} 
        }

    }
});

export const{addItem, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;