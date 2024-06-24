import React, {FC} from 'react';
import {IGenre} from "../../interfaces/IGenre";
import {Link} from "react-router-dom";

interface IProps {
    genre: IGenre
}

const GenreComponent: FC<IProps> = ({genre}) => {
    return (
        <div>
            <Link to={`/genres/${genre.id}`}>
                {genre.name}
            </Link>
        </div>
    );
};

export default GenreComponent;