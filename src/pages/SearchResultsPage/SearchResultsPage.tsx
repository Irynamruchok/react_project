import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {searchMovieActions, setCurrentPage} from "../../redux/slices/SearchMovieSlice";
import {useParams, useSearchParams} from "react-router-dom";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import SearchResultsComponent from "../../components/SearchResultsComponent/SearchResultsComponent";

const SearchResultsPage: FC = () => {

    const [query, setQuery] = useSearchParams({page: '1'})

    const params = useParams<{ name: string }>()

    const {name} = params

    const {movies, currentPage, totalPages} = useAppSelector(
        state => state.searchMovie)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (name) {
            dispatch(searchMovieActions.getSearchMovies(
                {name: name, page: query.get('page') || '1'}))
        }
    }, [name, query])

    const onPageChange = (newPage: number) => {
        dispatch(setCurrentPage(newPage))
        setQuery({page: newPage.toString()})
    }

    return (
        <div>
            {movies.length === 0 ? (
                <h2>Movies not found</h2>
            ) : (
                <div>
                    <h2>Search Results for "{name}"</h2>
                    <SearchResultsComponent movies={movies}/>
                    <PaginationComponent
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}/>
                </div>
            )}
        </div>

    );
};

export default SearchResultsPage;