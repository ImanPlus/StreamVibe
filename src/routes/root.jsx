import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Movies from "./Movies";
import Movie from "./Movie";
import { moviesLoader } from "../loader/moviesLoader";
import { movieLoader } from "../loader/movieLoader";
import { genreLoader } from "../loader/genreLoader";
import ErrorPage from "../layout/ErrorPage";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <Movies />,
        loader: moviesLoader,
      },
      {
        path: "/movies/:movieId",
        element: <Movie />,
        loader: movieLoader,
      },
      {
        path: "/movies/genres/:genreId",
        element: <Movies />,
        loader: genreLoader,
      },
    ],
  },
]);

export default router;
