import React, {FC} from 'react';
import {IMovieWithPoster} from "../../interfaces/IMovieWithPoster";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";
import {Badge} from "reactstrap";
import css from './MovieDetailsComponent.module.css'
interface IProps {
    movie:IMovieWithPoster
}
const MovieDetailsComponent :FC<IProps>= ({movie}) => {

    const {title,posterUrl,overview, genres,release_date} = movie

    return (
            <div className={css.mainContainer}>
               <div> <h1>{title}</h1> </div>
                <div className={css.imgAndInfoContainer}>
                    <div className={css.imgContainer}>
                        <img src={posterUrl} alt={title}/>
                        <div className={css.badgeContainer}>
                            {
                                genres.map((genre) =>
                                    <div>
                                        <Badge className={css.badge} color={'primary'} >
                                            <Link to={`/genres/${genre.id}`}> <span>{genre.name}</span> </Link>
                                        </Badge></div>)

                            }
                        </div>
                    </div>
                    <div className={css.ratingAndIfoContainer}>
                        <h3>Rating:</h3>
                        <StarRatings
                            name='movieRating'
                            rating={movie.vote_average / 2}
                            starRatedColor={'gold'}
                            numberOfStars={5}
                            starDimension={'20px'}
                        />
                        <h3>Release Date: <h5>{release_date}</h5></h3>
                    </div>


                </div>
                <div className={css.description}>

                    <h2>Overview</h2>
                    <p>{overview}</p>
                </div>



            </div>

    );
};

export default MovieDetailsComponent;