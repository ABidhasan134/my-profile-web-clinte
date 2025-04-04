import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import AuthProvider from './context/authProvider.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider>
  </QueryClientProvider>
  </AuthProvider>
  ,
)
