import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

import "./css/styles.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
