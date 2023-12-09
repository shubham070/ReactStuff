import React from "react";
import ReactDOM from "react-dom/client";
import resObj from "./Utils/MockData";
import About from "./components/About";
import ErrorPage from "./components/Error";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Body res={resObj}></Body>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("foodApp"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);

export default AppLayout;
