import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../Feature/Pizzas/pizzasSlice"

const store = configureStore(
    {
        reducer: {
           menu: menuReducer,
        },
        
    }
)

export default store;