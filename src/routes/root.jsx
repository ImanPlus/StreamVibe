import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Movies from "./Movies";
import Movie from "./Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <h1>Home Page</h1>,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:movieId",
        element: <Movie />,
      },
    ],
  },
]);

export default router;
