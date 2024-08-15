// React
import React from "react";
import ReactDOM from "react-dom/client";

// Rutas
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.tsx";
import CountryDetail from "./routes/CountryDetail.tsx";

// Estilos SCSS
import "./scss/index.scss";

// Contexto
import RequestData from "./context/RequestData.tsx";

const router = createBrowserRouter([
  {
    path: "/countries-api/",
    element: <App/>
  },
  {
    path: "/countries-api/:flagname",
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
