import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/MovieSlice";
import MovieDetailsComponent from "../../components/MovieDetailsComponent/MovieDetailsComponent";

const MovieDetailsPage = () => {

    const {id} = useParams<{ id: string }>()

    const {movieById} = useAppSelector(
        state => state.movie)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getMovieById(id))
        }
    }, [id])

    return (
        <div>
            {
                movieById &&
                <MovieDetailsComponent movie={movieById}/>
            }
        </div>
    );
};

export default MovieDetailsPage;