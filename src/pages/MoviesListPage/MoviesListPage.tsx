import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions, setCurrentPage} from "../../redux/slices/MovieSlice";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import MoviesListComponent from "../../components/MoviesListComponent/MoviesListComponent";


const MoviesListPage = () => {
    const [query, setQuery] = useSearchParams({page:'1'})
    const {movies,currentPage, totalPages} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.getAllMovies(query.get('page') || '1'))

    },[query])

    const onPageChange = (newPage:number) => {
        dispatch(setCurrentPage(newPage))
        setQuery({page: newPage.toString()})
    }

    return (
        <div>
            <div >
                <MoviesListComponent movies={movies}/>
            </div>


            <PaginationComponent currentPage={currentPage}  totalPages={totalPages} onPageChange={onPageChange} />
        </div>
    );
};

export default MoviesListPage;