import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Countryo } from "./pages/Countryo";
import { ErrorPage } from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Applayout } from "./components/layout/Applayout";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Applayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "countryo", element: <Countryo /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
