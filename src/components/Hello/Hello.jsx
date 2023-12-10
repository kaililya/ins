import React from "react";
import styles from './Hello.module.css'
import laptopImage from '../../image/laptop.png'

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
        <li className={styles.button_container_item}>Kostenlos starten</li>
        <li className={styles.button_container_item}>Mehr erfahren</li>
      </ul>
      <div className={`${styles.second_column_container} ${styles.second_column_container__mobile}`}>
        <img className={styles.image} src={laptopImage} alt="" />
      </div>

      <div className={`${styles.second_column_container} ${styles.second_column_container__desktop}`}>
        <img className={styles.image} src={laptopImage} alt="" />
      </div>
    </section>
  )
}

export default Hello;
