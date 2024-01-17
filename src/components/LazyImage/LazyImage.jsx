import React from "react";
import laptopImageNew from '../../image/laptop_new_2_optimazed.png';
import styles from '../Hello/Hello.module.css';

const LazyImage = () => {
  return <img className={styles.image} src={laptopImageNew} alt="icon" />;
}

export default LazyImage;
