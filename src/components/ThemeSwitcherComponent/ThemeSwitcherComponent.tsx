import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {themeActions} from "../../redux/slices/ThemeSlice";
import css from './ThemeSwitcherComponent.module.css'
const ThemeSwitcherComponent = () => {

const {isDarkMode} = useAppSelector(state => state.theme)
const dispatch = useAppDispatch()
    const toggleTheme = () => {
    dispatch(themeActions.toggleTheme())
    }
    return (
        <div className={css.themeToggleContainer}>
<button onClick={toggleTheme} className={css.toggleButton} >
    <span className={`${css.toggleCircle} ${isDarkMode ? css.toggleCircleDark : ''}`}></span>
</button>
        </div>
    );
};

export default ThemeSwitcherComponent;