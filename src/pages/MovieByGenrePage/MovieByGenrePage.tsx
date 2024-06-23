import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesByGenresActions, setCurrentPage} from "../../redux/slices/MovieByGenreSlice";
import MoviesByGenreComponent from "../../components/MoviesByGenreComponent/MoviesByGenreComponent";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

const MovieByGenrePage = () => {
    const [query, setQuery] = useSearchParams({page:'1'})
    const {id:genreId} = useParams<{id:string}>()
    const {moviesByGenres,totalPages, currentPage} = useAppSelector(state => state.movieByGenre)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(moviesByGenresActions.getMoviesByGenres({page: query.get('page' || '1'), genreId}))
        console.log(moviesByGenres)
    },[genreId,query])

    const onPageChange = (newPage: number) => {
        dispatch(setCurrentPage(newPage))
        setQuery({page:newPage.toString()})
    }

    return (
        <div>
           <MoviesByGenreComponent movies={moviesByGenres}/>
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
    );
};

export default MovieByGenrePage;