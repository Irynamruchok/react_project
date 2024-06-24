import React, {FC} from 'react';
import {IMovieWithPoster} from "../../interfaces/IMovieWithPoster";
import MovieCardComponent from "../MovieCardComponent/MovieCardComponent";
import css from './SearchResultsComponent.module.css'

interface IProps {
    movies: IMovieWithPoster[]
}

const SearchResultsComponent: FC<IProps> = ({movies}) => {
    return (
        <div className={css.mainContainer}>
            {
                movies &&
                movies.map((movie) => <MovieCardComponent key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export default SearchResultsComponent;