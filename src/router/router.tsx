import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import MoviesListPage from "../pages/MoviesListPage/MoviesListPage";
import GenresPage from "../pages/GenresPage/GenresPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import MovieByGenrePage from "../pages/MovieByGenrePage/MovieByGenrePage";
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'/movies'} replace/>
            },
            {
                path: '/movies',
                element: <MoviesListPage/>
            },
            {
                path: '/movies/:id',
                element: <MovieDetailsPage/>
            },
            {
                path: '/search/:name',
                element: <SearchResultsPage/>
            },
            {
                path: '/genres',
                element: <GenresPage/>,
                children: [
                    {
                        path: ':id',
                        element: <MovieByGenrePage/>
                    }
                ]
            }
        ]
    }
])

export {
    router
}