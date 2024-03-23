import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// QUERY CLIENT
const client = new QueryClient({
    // change the network mode to offline first
    defaultOptions: {
        queries: {
            networkMode: 'offlineFirst', //fetch data offline
        },
        mutations: {
            networkMode: 'offlineFirst', //fetch data offline
        },
    },
})
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={client}>
                <App />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
)
