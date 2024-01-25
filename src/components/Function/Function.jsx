import React from "react";
import styles from "./Function.module.css";

import { funktionenPATH } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import FunctionSlider from "../FunctionSlider/FunctionSlider";

function Function({ isSpoiler }) {
  return (
    <section className={`${styles.main_container}`}>
      {isSpoiler && (<p className={styles.spoiler}>Funktionen</p>)}
      <h2 className={styles.title}>Mehr als Excel – software as a service</h2>
      <p className={styles.sub_title}>
        Mit Compleon Solutions steuern Sie die Rechtspflichten, Maßnahmen und
        Verantwortlichkeiten in den Bereichen Energie, Umwelt- und Arbeitsschutz
        für Ihr gesamtes Unternehmen zuverlässig und sicher – jederzeit und von
        überall.
      </p>
      <FunctionSlider />

      <NavLink to={funktionenPATH} className={styles.button}>
        Weitere Funktionen
      </NavLink>
    </section>
  );
}

export default Function;
