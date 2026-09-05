import Root from "./Root";
import Home from "./Home";
import App from "./App";
import Work from "./Work";
import Blog from "./Blog";
// import ErrorPage from "./ErrorPage";
// import Products from "./Products";
// import Cart from "./Cart";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/dev",
        element: <App />,
      },
    ],
  },
];

export default routes;
