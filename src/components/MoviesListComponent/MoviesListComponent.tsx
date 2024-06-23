import React, {FC} from 'react';
import {IMovieWithPoster} from "../../interfaces/IMovieWithPoster";
import MovieCardComponent from "../MovieCardComponent/MovieCardComponent";


interface IProps {
    movies:IMovieWithPoster[]
}
const MoviesListComponent:FC<IProps>  = ({movies}) => {
    return (
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
            {movies.map((movie) => <MovieCardComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesListComponent ;