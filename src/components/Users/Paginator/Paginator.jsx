import React, { useState } from 'react';
import css from './Paginator.module.css'
import leftArrow from '../../../assets/images/leftarrow.svg';
import rightArrow from '../../../assets/images/rightarrow1.svg';


let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5 }) => {

	let pageCount = Math.ceil(totalItemsCount / pageSize);

	let totalPages = [];

	for (let i = 1; i <= pageCount; i++) {
		totalPages.push(i);
	}

	const portionCount = Math.ceil(pageCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;
	console.log(portionNumber)
	return (
		<div className={css.pagination}>

			{
				portionNumber > 1 &&
				<button className={css.pag} onClick={() => { setPortionNumber(portionNumber - 1) }}><img src={leftArrow} className={css.arrows} /></button>
			}

			{
				totalPages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(p => {
						return (<span key={p} className={currentPage === p ? css.selected + ' ' + css.page : css.page}
							onClick={() => { onPageChanged(p, portionNumber) }} > {p} </span>)
					})
			}

			{
				portionCount > portionNumber &&
				<button className={css.pag} onClick={() => { setPortionNumber(portionNumber + 1); console.log(portionNumber) }}>
					<img src={rightArrow} className={css.arrows} /></button>
			}
		</div>
	)
}

export default Paginator;