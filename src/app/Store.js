import { configureStore } from "@reduxjs/toolkit";
import { historialApi } from "../Services/historialApi";


export const store = configureStore({

    reducer: {

        [historialApi.reducerPath]:
        historialApi.reducer

    },

    middleware:(getDefaultMiddleware)=> getDefaultMiddleware()
        .concat(historialApi.middleware)
});