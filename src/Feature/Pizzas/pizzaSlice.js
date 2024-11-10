import { createSlice } from "@reduxjs/toolkit";
import { Productos } from "../../Data/Productos.js"

const initialState = {
    list: Productos,
    productCart: {},
    like: false,
    selectedCarta: Productos ,
    categoria: ['Pizzas', 'Empanadas', 'Hamburguesas', 'Lomos'],
    loading: false,
    error: null,    
}

const pizzas = createSlice(
    {
        name: "pizza",
        initialState,
        reducers: {
            addPizza: (state, action) => {
                state.list.push(action.payload) 
            },
            updatePizza: (state, action)=>{
                const id = action.payload
                state.list.filter(el => el.id !== id)

            },
            allProductos:(state)=>{
                state.list = Productos;
            },
            updateLike:(state, action)=>{
                state.like = action.payload;
            },
            selectedCarta: (state, action) => {
                if(action.payload === ''){
                    state.selectedCarta = Productos;
                    return;
                }
                state.selectedCarta = action.payload;
            },
            setLoading: (state, action) => {
                state.loading = action.payload;
            },
            setError: (state, action) => {
                state.error = action.payload;
            },
            updateProductCart: (state, action) => {
                state.productCart = action.payload;
            },


        },
    }
)

export const { addMenu, updateMenu, selectedCarta, setLoading, setError, updateProductCart, updateLike } = pizzas.actions;

export default pizzas.reducer;