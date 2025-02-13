import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import theme from "./theme";
import {ChakraProvider} from "@chakra-ui/react";
import {couponsApi} from "./services/Coupons.ts";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {[couponsApi.reducerPath]: couponsApi.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(couponsApi.middleware)
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <App/>
            </ChakraProvider>
        </Provider>
    </StrictMode>,
)
