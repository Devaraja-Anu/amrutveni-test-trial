import { createSlice } from "@reduxjs/toolkit";
import { ProductCard } from "@/types/productTypes";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


type productNum = {
   cartItems:ProductCard[],

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
        item => item.id === action.payload.id
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
        (item) => item.id === action.payload.id
      )
      if(state.cartItems[itemIndex].cartQty > 1){
        state.cartItems[itemIndex].cartQty -= 1;
      }
      else if(state.cartItems[itemIndex].cartQty === 1){
          const upDatedCartItems = state.cartItems.filter(
            (item) => item.id != action.payload.id
          );
          state.cartItems = upDatedCartItems;
      }
        
    },
    clearOrder:(state,action) => {
        const upDatedCartItems = state.cartItems.filter(item => item.id != action.payload.id ) 
        state.cartItems = upDatedCartItems;
    },
    clearCart:(state) => {
      state.cartItems = [];
    }
  },
});

export const {addOrder,removeOrder,clearOrder,clearCart} = storeSlice.actions
export default storeSlice.reducer;
