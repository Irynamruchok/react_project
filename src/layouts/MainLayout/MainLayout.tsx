import React from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {Outlet} from "react-router";
import {useAppSelector} from "../../hooks/reduxHooks";
import css from './MainLayout.module.css'

const MainLayout = () => {

    const {isDarkMode} = useAppSelector(state => state.theme)

    return (

            <div className={` ${isDarkMode ? css.darkTheme : css.lightTheme}`}>
                <div className={css.mainLayout} >
                <div className={css.mainContainer}>
                    <HeaderComponent/>
                    <Outlet/>
                </div>
            </div>
        </div>


    );
};

export default MainLayout;