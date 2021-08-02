import React from 'react';
import preloaderImg from '../../../assets/images/preloader.svg'
import css from './Preloader.module.css';

let Preloader = (props) => {
	return <div className={css.preloader}><img src={preloaderImg} alt="" /></div>
}

export default Preloader;