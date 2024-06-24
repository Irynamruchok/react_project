import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import css from './SearchFormComponent.module.css'
import {useNavigate} from "react-router";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {joiResolver} from "@hookform/resolvers/joi";
import {schema} from "../../validation/searchSchema";


interface IFormInput {
    query: string
}


const SearchFormComponent: FC = () => {

    const {handleSubmit, register, reset, formState: {errors}} = useForm<IFormInput>({
        resolver: joiResolver(schema)
    })

    const navigate = useNavigate()
    const onSubmit = (data: IFormInput) => {
        navigate(`/search/${data.query}`)
        reset();

    }

    return (
        <div>
            <div className={css.searchContainer}>
                <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                    <input className={css.input} {...register('query')} placeholder={"Search movies"}/>
                    <button type={"submit"}><FontAwesomeIcon icon={faSearch} className={css.searchIcon}/></button>
                </form>
            </div>
            {errors.query && <span className={css.error}>{errors.query.message}</span>}
        </div>
    );
};

export default SearchFormComponent;