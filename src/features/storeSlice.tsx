import { createSlice } from "@reduxjs/toolkit";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


type productNum = {
   cartItems:Datum[],

}

const initialState: productNum = {
  cartItems: []
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addOrder: (state,action) => {
      const itemIndex = state.cartItems.findIndex(
        item => item.uuid === action.payload.uuid
      )
      if( itemIndex >= 0){
        state.cartItems[itemIndex].cartQty += 1
        
      }
      else{
        const tempProduct = {...action.payload,cartQty:1}
         state.cartItems.push(tempProduct);
      }
    },
    removeOrder: (state,action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.uuid === action.payload.uuid
      )
      if(state.cartItems[itemIndex].cartQty > 1){
        state.cartItems[itemIndex].cartQty -= 1;
      }
      else if(state.cartItems[itemIndex].cartQty === 1){
          const upDatedCartItems = state.cartItems.filter(
            (item) => item.uuid != action.payload.uuid
          );
          state.cartItems = upDatedCartItems;
      }
        
    },
    clearOrder:(state,action) => {
        const upDatedCartItems = state.cartItems.filter(item => item.uuid != action.payload.uuid ) 
        state.cartItems = upDatedCartItems;
    },
    clearCart:(state) => {
      state.cartItems = [];
    }
  },
});

export const {addOrder,removeOrder,clearOrder,clearCart} = storeSlice.actions
export default storeSlice.reducer;
