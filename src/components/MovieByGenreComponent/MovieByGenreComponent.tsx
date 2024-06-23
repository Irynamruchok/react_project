import React, {FC} from 'react';
import {IMovieWithPoster} from "../../interfaces/IMovieWithPoster";
import {useAppSelector} from "../../hooks/reduxHooks";
import {Link} from "react-router-dom";



interface IProps {
    movie: IMovieWithPoster
}
const MovieByGenreComponent :FC<IProps>= ({movie}) => {

    return (
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.posterUrl}/>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieByGenreComponent;