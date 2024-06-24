import React from 'react';
import {Link} from "react-router-dom";
import SearchFormComponent from "../SearchFormComponent/SearchFormComponent";
import ThemeSwitcherComponent from "../ThemeSwitcherComponent/ThemeSwitcherComponent";
import UserInfoComponent from "../UserInfoComponent/UserInfoComponent";
import css from './HeaderComponent.module.css'

const HeaderComponent = () => {
    return (
        <div className={css.mainContainer}>
            <SearchFormComponent/>
            <div><Link to={''}>Movies</Link></div>
            <div><Link to={'/genres'}>Genres</Link></div>

            <ThemeSwitcherComponent/>
            <UserInfoComponent/>
        </div>
    );
};

export default HeaderComponent;