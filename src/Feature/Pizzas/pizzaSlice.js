import { createSlice } from "@reduxjs/toolkit";
import { Productos } from "../../Data/Productos.js"

const initialState = {
    list: Productos,
    productCart: {},
    editproductCart: {},
    like: false,
    selectedCarta: Productos ,
    categoria: ['Pizzas', 'Empanadas', 'Hamburguesas', 'Lomos'],
    loading: false,
    error: null,
    count: 1,
    display: true, 
    visual: false,
    tamaño:{},
    tipoSelect: {},
    toppingsSelect: [],
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
            incrementCount: (state) => {
                state.count += 1; // Incrementar el contador global
            },
            decrementCount: (state) => {
                if (state.count > 1) {
                  state.count -= 1; // Decrementar el contador global (con validación)
                }
            },
            newCount: (state, action)=>{
                state.count = action.payload; // Cambiar el contador global a un nuevo valor
            },
            toggleDisplay: (state, action) => {
                state.display = action.payload; // Cambiar el estado de display
            },
            newvisual: (state, action) => {
                state.visual = action.payload; // Cambiar el estado de visual
            },
            setTamaño: (state, action) => {
                state.tamaño = action.payload; // Actualiza el tamaño
              },
            
            editProductCart: (state, action) => {
                state.editproductCart = action.payload;
            },

            setToppingsSelect: (state, action) => {
                state.toppingsSelect = action.payload;
              },
            setTipoSelect: (state, action) => {
                state.tipoSelect =  action.payload // Actualiza el tipo de la categoría específica
              
            },
                
            
    }
})

export const { addMenu, updateMenu, selectedCarta, setLoading, setError, updateProductCart, updateLike, incrementCount, decrementCount, newCount, toggleDisplay, newvisual, setTamaño, editProductCart, setToppingsSelect, setTipoSelect } = pizzas.actions;

export default pizzas.reducer;