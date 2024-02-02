import React from "react";
import styles from "./Contact.module.css";
import avatarFirst from "../../image/avatar_1_optimazed.png";
import avatarSecond from "../../image/avatar_2_optimazed.png";

export default function Contact() {
  return (
    <section className={styles.main_container}>
      <p className={styles.spoiler}>Kontakt</p>
      <h2 className={styles.title}>Sie wünschen eine persön­liche Beratung?</h2>
      <blockquote className={styles.sub_title}>
        <p className={styles.sub_title}>
          “In Compleon Solutions kommt das Beste aus zwei Welten zusammen: Eine
          anwenderfreundliche Software und eine befüllte Rechtsdatenbank, die
          Sicherheit für das Management bietet.“
        </p>
        <cite className={styles.sub_title}>Michael Gunkel, Geschäftsführer der UUB-IT</cite>
      </blockquote>
      <ul className={styles.contact_container}>
        <li className={styles.contact_item}>
          <div className={styles.image_wrapper}>
            <img className={styles.image} src={avatarFirst} alt="avatar" />
          </div>
          <h3 className={styles.contact_item_title}>Thomas Schwan</h3>
        </li>
        <li className={styles.contact_item}>
          <div className={styles.image_wrapper}>
            <img className={styles.image} src={avatarSecond} alt="avatar" />
          </div>
          <h3 className={styles.contact_item_title}>Michael Gunkel</h3>
        </li>
      </ul>
      <ul className={styles.button_container}>
        <li className={styles.button}>
          <a href="tel:0309302981916" className={styles.link}>
          Factsheet holen (PDF)
          </a>
        </li>
        <li className={styles.button}>
          <a href="tel:0309302981916" className={styles.link}>
            T. 030 93 029 819 16
          </a>
        </li>
        <li className={styles.button}>
          <a
            href="mailto:contact@compleon-solutions.de"
            className={styles.link}
          >
            Mail schreiben
          </a>
        </li>
        
      </ul>
    </section>
  );
}

