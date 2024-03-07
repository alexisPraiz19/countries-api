import React from "react";
import ReactDOM from "react-dom/client";

// Estilos SCSS
import "./scss/index.scss";

// Rutas
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.tsx";
import CountryDetail from "./routes/CountryDetail.tsx";

// Contexto
import RequestData from "./context/RequestData.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/flag/:flagname",
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
