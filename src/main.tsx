// React
import React from "react";
import ReactDOM from "react-dom/client";

// Rutas
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.tsx";
import CountryDetail from "./routes/CountryDetail.tsx";

// Estilos CSS
import "./css/index.css";

// Contexto
import RequestData from "./context/RequestData.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/:flagname",
    element: <CountryDetail/>
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RequestData>
      <RouterProvider router={router}/>
    </RequestData>
  </React.StrictMode>
)
