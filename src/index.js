import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout';
import UserList from './components/UserList';
import About from './components/About';
import Profile from './components/Profile';
import User from './components/User';
import ErrorPage from './components/ErrorPage';



const router = createBrowserRouter([
{
  path:'/',
  element:<Layout/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:'/',
      element:<UserList/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/user/:id',
      element:<User/>
    },
  ]
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
  </React.StrictMode>
);

