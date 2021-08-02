import React from 'react';
import css from './Forms.module.css'

export const Element = Element => ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={css.control}>
			<div className={css.formControl + " " + (hasError ? css.error : "")}>
				<Element {...input} {...props} />
			</div>
			<div className={css.errorText + " " + (hasError ? css.error : "")}>{hasError && <span> {meta.error} </span>}</div>
		</div>
	);
};