import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./route/Home.jsx";
import InfoPersonagens from "./route/InfoPersonagens.jsx";
import Contato from "./route/Contato.jsx";
import Ajuada from "./route/Ajuada.jsx";
import ErrorPage from "./route/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "info",
        element: <InfoPersonagens/>
      },
      {
        path: "contato",
        element: <Contato/>,
      },
      {
        path: "ajuda",
        element: <Ajuada/>,
      }
    ]
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
