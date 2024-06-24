import React, {FC} from 'react';
import {IMovieWithPoster} from "../../interfaces/IMovieWithPoster";
import css from './MovieCardComponent.module.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";


interface IProps {
    movie: IMovieWithPoster
}

const MovieCardComponent: FC<IProps> = ({movie}) => {
    return (
        <div className={css.mainContainer}>
            <Link to={`/movies/${movie.id}`}>
                <div className={css.imageContainer}>
                    <img style={{width: '200px'}} src={movie.posterUrl} alt={movie.title}/>
                    <div className={css.overlay}>
                        <div className={css.overlayContent}>
                            <FontAwesomeIcon icon={faPlay} className={css.icon}/>
                            <div className={css.text}>Watch movie</div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className={css.starRating}>
                <StarRatings
                    name='movieRating'
                    rating={movie.vote_average / 2}
                    starRatedColor={'gold'}
                    numberOfStars={5}
                    starDimension={'20px'}
                />
            </div>

            <Link to={`/movies/${movie.id}`}> {movie.title} </Link>

        </div>
    );
};

export default MovieCardComponent;