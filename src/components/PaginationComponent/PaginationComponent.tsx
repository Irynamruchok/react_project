import React, {FC} from 'react';
import css from './PaginationComponent.module.css'


interface IProps {
    currentPage: number
    totalPages: number;
    onPageChange: (newPage: number) => void
}

const PaginationComponent: FC<IProps> = ({currentPage, totalPages, onPageChange}) => {

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1)
        }
    }

    return (
        <div className={css.buttonContainer}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
            <span>{currentPage}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default PaginationComponent;