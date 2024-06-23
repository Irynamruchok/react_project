import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/GenreSlice";
import GenresComponent from "../../components/GenresComponent/GenresComponent";
import {Outlet} from "react-router";
import css from './GenresPage.module.css'
const GenresPage = () => {
 const {genres} = useAppSelector(state => state.genre)
    console.log(genres)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(genreActions.getAllGenres())
    },[])
    return (
        <div className={css.mainContainer}>
           <GenresComponent genres={genres}/>
            <Outlet/>
        </div>
    );
};

export default GenresPage;