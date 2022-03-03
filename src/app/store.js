import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/query'
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,

    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(cryptoNewsApi.middleware),
})