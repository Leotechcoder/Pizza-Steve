import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../Feature/Pizzas/menuSlice"
import toglerReducer from "../Feature/Pizzas/toglerslice"
import pizzaReducer from "../Feature/Pizzas/pizzaSlice"

const store = configureStore(
    {
        reducer: {
           menu: menuReducer,
           togler: toglerReducer,
           pizzas: pizzaReducer,
        },
        
    }
)

export default store;