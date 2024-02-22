import { createSlice } from '@reduxjs/toolkit'
const initialState = JSON.parse( localStorage.getItem('cart'))??[];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const timestampObject = {
                seconds: action.payload.time.seconds,
                nanoseconds: action.payload.time.nanoseconds}
                // console.log(timestampObject)
                action.payload.time= timestampObject
                state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id != action.payload.id);
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer;