import React from "react";
import ReactDOM from "react-dom/client";
import resObj from "./Utils/MockData";
import About from "./components/About";
import ErrorPage from "./components/Error";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("foodApp"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);

export default AppLayout;
