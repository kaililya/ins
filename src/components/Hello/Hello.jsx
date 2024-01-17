import React, { lazy, Suspense } from "react";
import styles from './Hello.module.css'
import { kontaktPATH, prozessPATH } from "../../utils/constants";
import { NavLink } from "react-router-dom";

const LazyImage = lazy(() => import('../LazyImage/LazyImage')); // Создаем ленивый компонент для изображения


function Hello() {
  return (
    <section className={styles.main_container}>
      <div className={styles.sss}>
        <h2 className={styles.title}>
          Rechts­ka­taster, <br/> so flexibel und unmit­telbar wie die Arbeitswelt.
        </h2>
        <p className={styles.sub_title}>
          Gesetzliche und technische Normen sind mehr als notwendiger Bestandteil von betrieblichen Rechtspflichten im Umwelt‑, Gesundheits, Daten- und Arbeitsschutz: Sie bieten Sicherheit für das <br/> Management.
        </p>
      </div>
        
      <ul className={styles.button_container}>
        <li>
          <NavLink to={kontaktPATH} className={styles.button_container_item}>
            Kostenlos starten
          </NavLink>
        </li>
        <li>
          <NavLink to={prozessPATH} className={styles.button_container_item}>
            Mehr erfahren
          </NavLink>
        </li>
      </ul>
      
      <div className={`${styles.second_column_container} ${styles.second_column_container__mobile}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyImage />
        </Suspense>
      </div>

      <div className={`${styles.second_column_container} ${styles.second_column_container__desktop}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyImage />
        </Suspense>
      </div>
    </section>
  )
}

export default Hello;
