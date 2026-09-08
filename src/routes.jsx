import Root from "./components/Root";
import Home from "./components/Home";
import Dev from "./components/Dev";
import Work from "./components/Work";
import Contact from "./components/Contact";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dev",
        element: <Dev />,
      },
    ],
  },
];

export default routes;
