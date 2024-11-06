import { createSlice } from "@reduxjs/toolkit";
import { Productos } from "../../Data/Productos.js"

const initialState = {
    list: Productos,
    ide: null,
    selectedPizza: null,
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
            updateIde:(state, action){
                state.ide = action.payload;
            },
            setLoading: (state, action) => {
                state.loading = action.payload;
            },
            setError: (state, action) => {
                state.error = action.payload;
            },


        },
    }
)

export const { addMenu, updateMenu, setLoading, setError, updateIde } = pizzas.actions;

export default pizzas.reducer;