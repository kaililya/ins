import React from "react";
import imageError from '../../image/404-page.svg'
import styles from './ErrorPage.module.css'

function ErrorPage() {
  return  (
  <section className={styles.main_container}>
    {/* <div className={styles.image_wraper}></div> */}
    <img src={imageError} className={styles.image}/>
 </section>);
}

export default ErrorPage;
