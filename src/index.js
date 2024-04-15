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
import LandingProximamente from './pages/landingProximamente'
import { HelmetProvider } from 'react-helmet-async';
import LandingPromociones from './pages/landingPromociones';
import Profile from './pages/profile';
import { Provider } from 'react-redux';
import { store, persistore } from './redux/store'; // Importa el store y el persistor de Redux Persist
import { PersistGate } from 'redux-persist/integration/react';

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
    ]
  },
  {
    path: "/promocion-de-descuento-2024",
    element:<LandingPromociones/>,
    children: [
      {
        path: ':url',
        element:<LandingPromociones/>,
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
    path: "/hoteles",
    element:<Landing/>,
    children: [
      {
        path: ':url',
        element:<Landing/>,
      }
    ]
  },
  {
    path: "/tours",
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
  },
  {
    path: "/sesion",
    element:<Profile/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
           <Provider store={store}>
        <PersistGate persistor={persistore}> 
        <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
