import React, { useEffect } from "react";
import styles from './Price.module.css'
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchGetPriceThunk } from "../../services/thunks/swagger-thunk";


function Price() {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchGetPriceThunk());
  // },[])
 
  return (
    <section className={styles.main_container}>
      <p className={styles.spoiler}>
        Preise
      </p>
      <h2 className={styles.title}>
        Jetzt starten.
      </h2>
      <p className={styles.sub_title}>
        Egal wo sie gerade stehen, wir holen sie ab. Ob mittel­stän­di­sches Unter­nehmen oder Konzern – für jeden ein faires Angebot.
      </p>
    </section>
    );
}

export default Price;
