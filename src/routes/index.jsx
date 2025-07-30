import { createBrowserRouter, Route } from "react-router";
import Home from "../pages/Home";
import CountryDetails from "../pages/CountryDetails";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "country-details/:code",
        element: <CountryDetails />,
      },
      {
        path:'error',
        element:<ErrorPage/>
      }
    ],
  },
]);

export default routes;
