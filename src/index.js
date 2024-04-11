import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home';
import Landing from './pages/landing';
import Checkout from './pages/checkout'
import CheckoutSucess from './pages/checkoutSucess'
import Login from './pages/login'
import Register from './pages/register'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/checkout/sucess',
    element: <CheckoutSucess />
  },
  {
    path:"/checkout",
    element: <Checkout/>,
    children: [
      {
        path: 'sucess',
        element: <CheckoutSucess />
      },
      {
        path: ':url/:tarifa/:fecha',
        element: <Checkout/>
      }
    ]
  },
  {
    path: "/conciertos",
    element:<Landing/>,
    children: [
      {
        path: ':url',
        element:<Landing/>,
      }
    ]
  },
  {
    path: "/login",
    element:<Login/>,
  },
  {
    path: '/register',
    element:<Register/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
