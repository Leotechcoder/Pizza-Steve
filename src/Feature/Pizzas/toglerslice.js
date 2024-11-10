import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    click: "false",
}

const toglers = createSlice(
    {
        name: "togler",
        initialState,
        reducers: {// el reducer va a recibir una valor booleano y va a setear el valor inicial de click
            toggleClick: (state, action) => {
                state.click = action.payload;
            },

        },
    }
)

export const { toggleClick } = toglers.actions;

export default toglers.reducer;