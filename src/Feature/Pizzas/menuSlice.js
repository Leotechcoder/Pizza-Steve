import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [{
        id: null,
        name: "",
        description:"",
        price: null,
        image: "",
    }],
    selectedPizza: null,
    loading: false,
    error: null,
}

const menuses = createSlice(
    {
        name: "menu",
        initialState,
        reducers: {
            addMenu: (state, action) => {
                state.list.push(action.payload) 
            },
            updateMenu: (state, action)=>{
                const id = action.payload
                state.list.filter(el => el.id !== id)

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

export const { addMenu, updateMenu, setLoading, setError } = menuses.actions;

export default menuses.reducer;