import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "../Routes/PrivateRoute"
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'/instructors',
          element:<AllInstructors></AllInstructors>,
      },
      {
        path:'/classes',
        element:<Classes></Classes>,
    },
    {
      path:'/login',
      element:<Login></Login>,
  },
  
 
  {
    path: 'signup',
    element: <SignUp></SignUp>
  },
 
    
      ]
    },

    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
      children:[
        {
          path: 'mycart', 
          element: <MyCart></MyCart>
        },
        {
          path: 'allusers', 
          element: <AllUsers></AllUsers>
        },
        {
          path: 'addclass', 
          element: <AddClass></AddClass>
        },
      
      ]
  },
  ]);