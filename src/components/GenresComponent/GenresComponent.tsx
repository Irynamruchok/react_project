import React, {FC} from 'react';
import {IGenre} from "../../interfaces/IGenre";
import GenreComponent from "../GenreComponent/GenreComponent";
import css from './GenresComponent.module.css'

interface IProps {
    genres:IGenre[]
}
const GenresComponent :FC<IProps>= ({genres}) => {
    return (
        <div className={css.genresContainer}>
            {
                genres &&
                genres.map((genre) => <GenreComponent key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export default GenresComponent;