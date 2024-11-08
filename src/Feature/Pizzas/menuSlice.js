import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    producto: [],
    cantTotal: 0,
    precioTotal:0,
    selectedPizza: null,
    loading: false,
    error: null,
    iva: 20,
}

const menuses = createSlice(
    {
        name: "menu",
        initialState,
        reducers: {
            addMenu: (state, action) => {
                const { id } = action.payload
                //con el id buscame un elemento que coincida y devolveme su indice
                const i = state.producto.findIndex((producto)=>producto.id === id )
                //si no hay elemento que coincida devuelve -1, entonces:
                if(i === -1) {
                    state.producto.push(action.payload)
                } else {
                    state.producto[i] = action.payload
                }
                
            },
            updatecountMenu: (state, action)=>{
                const { id, countcurrent,  pricecurrent} = action.payload
                const indice = state.producto.findIndex((producto)=> producto.id === id)
                state.producto[indice].count = countcurrent
                state.producto[indice].price = pricecurrent 
            },
            removeProductMenu:(state, action)=>{
                const indice = state.producto.findIndex((producto)=> producto.id === action.payload)
                if(indice!== -1) {
                    state.producto.splice(indice, 1)
                }
            },
            deleteMenu:(state)=>{
                state.producto = []
            },
            selectPizza: (state, action) => {
                state.selectedPizza = action.payload;
            },
            calculateTotal: (state) => {
                let cantTotal = 0
                let precioTotal = 0
                state.producto.forEach((producto) => {
                    cantTotal += producto.count
                    precioTotal += producto.precio * producto.count
                })
                state.cantTotal = cantTotal
                state.precioTotal = precioTotal 
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

export const { addMenu, updatecountMenu,removeProductMenu, deleteMenu, calculateTotal, setLoading, setError } = menuses.actions;

export default menuses.reducer;