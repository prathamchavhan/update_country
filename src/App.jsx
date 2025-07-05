import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import {Applayout} from "./components/layout/Applayout";
import {About} from "./pages/About";
import {Countryo} from "./pages/Countryo";
import {Contact} from "./pages/Contact";
import {ErrorPage} from "./pages/ErrorPage";

const router =createBrowserRouter([
  {
    path :"/",
    element :<Applayout/>,
    errorElement:<ErrorPage />,
   children :[
      {
        path :"/",
        element :<Home/>,

      },
      {
        path :"About",
        element :<About/>,
      },
      {
    path : "contact",
    element:<Contact/>,
      },
       {
    path : "countryo",
    element:<Countryo/>,
  },
    ]
  },

  {
    path :"/",
    element:<Home/>,
  },
  {
    path : "About",
    element:<About/>,
  },
  {
    path : "contact",
    element:<Contact/>,
  },
  {
    path : "country",
    element:<Countryo/>,
  },

]);

export const App =()=>{
  return <RouterProvider router={router}></RouterProvider>;
};
