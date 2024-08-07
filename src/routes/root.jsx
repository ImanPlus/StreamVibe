import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Movies from "./Movies";
import Movie from "./Movie";
import { moviesLoader } from "../loader/moviesLoader";

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
        loader: moviesLoader,
      },
      {
        path: "/movies/:movieId",
        element: <Movie />,
      },
      {
        path: "/movies/genres/:genreId",
        element: <Movies />,
        loader: moviesLoader,
      },
    ],
  },
]);

export default router;
