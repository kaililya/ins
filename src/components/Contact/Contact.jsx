import React from "react";
import styles from './Contact.module.css'
import avatarFirst from '../../image/avatar_1.png'
import avatarSecond from '../../image/avatar_2.png'


function Contact() {
  return (
    <section className={styles.main_container}>
      <p className={styles.spoiler}>
        Kontakt
      </p>
      <h2 className={styles.title}>
       Sie wünschen eine persön­liche Beratung?
      </h2>
      <p className={styles.sub_title}>
        In Compleon Solutions kommt das Beste aus zwei Welten zusammen: Eine anwenderfreundliche Software und eine befüllte Rechtsdatenbank, die Sicherheit für das Management bietet.“Michael Gunkel, Geschäftsführer der UUB-IT
      </p>
      <ul className={styles.contact_container}>
        <li className={styles.contact_item}>
          <div className={styles.image_wrapper}>
            <img className={styles.image} src={avatarFirst} alt="" />
          </div>
          <h3 className={styles.contact_item_title}>Thomas Schwan</h3>
        </li>
        <li className={styles.contact_item}>
          <div className={styles.image_wrapper}>
            <img className={styles.image} src={avatarSecond} alt="" />
          </div>
          <h3 className={styles.contact_item_title}>Michael Gunkel</h3>
        </li>
      </ul>
      <ul className={styles.button_container}>
        <li className={styles.button}>
          Factsheet holen (PDF)
        </li>
        <li className={styles.button}>
          T. 030 93 029 819 16
        </li>
        <li className={styles.button}>
          Mail schreiben
        </li>
      </ul>
    </section>
  );
}

export default Contact;
