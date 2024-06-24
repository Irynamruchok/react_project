import React from 'react';
import css from './UserInfoComponent.module.css'

const UserInfoComponent = () => {
    return (
        <div>
            <div className={css.infoCircle}><span>Name</span></div>
        </div>
    );
};

export default UserInfoComponent;