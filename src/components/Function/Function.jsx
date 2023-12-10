import React from "react";
import styles from "./Function.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import networkIcon from "../../image/network-icon.png";
import relatioshipIcon from "../../image/relationship-icon.png";
import warningIcon from "../../image/warning-in-curcle-icon.png";

function Function() {
  return (
    <section className={`${styles.main_container}`}>
      <p className={styles.spoiler}>Funktionen</p>
      <h2 className={styles.title}>Mehr als Excel – software as a service</h2>
      <p className={styles.sub_title}>
        Mit Compleon Solutions steuern Sie die Rechtspflichten, Maßnahmen und
        Verantwortlichkeiten in den Bereichen Energie, Umwelt- und Arbeitsschutz
        für Ihr gesamtes Unternehmen zuverlässig und sicher – jederzeit und von
        überall.
      </p>
      <ul className={styles.function_container}>
        <li className={styles.function_item}>
          <img
            className={styles.function_item_image}
            src={networkIcon}
            alt=""
          />
          <h3 className={styles.function_item_title}>
            Digitales Rechtskataster
          </h3>
          <p className={styles.function_item_sub_title}>
            o Steuern Sie die Rechtspflichten, Maßnahmen und
            Verantwortlichkeiten in den Bereichen Energie, Umwelt- und
            Arbeitsschutz für Ihr gesamtes Unternehmen zuverlässig und sicher
            mit unserer Software Compleon Solutions (on-demand).
          </p>
        </li>
        <li className={styles.function_item}>
          <img
            className={styles.function_item_image}
            src={relatioshipIcon}
            alt=""
          />
          <h3 className={styles.function_item_title}>
            Rechtspflichtenableitung
          </h3>
          <p className={styles.function_item_sub_title}>
            Da sich gesetzliche Pflichten mitunter schwer aus Rechtstexten
            ableiten lassen, stellen wir Ihnen mit Compleon in kurzer,
            prägnanter Form die konkret umzusetzenden Pflichten dar.
            Verantwortliche Personen überblicken schnell, was sie im Betrieb
            umzusetzen haben.
          </p>
        </li>
        <li className={styles.function_item}>
          <img
            className={styles.function_item_image}
            src={warningIcon}
            alt=""
          />
          <h3 className={styles.function_item_title}>
            Prüfung von Gesetzesänderungen mit Erinnerungsfunktion
          </h3>
          <p className={styles.function_item_sub_title}>
            o Wir behalten für Sie alle gesetzlichen Änderungen im Blick und
            nehmen eine Vorbewertung der Relevanz für Ihr Unternehmen vor. Sie
            werden bei Revisionen automatisch per E‑Mail informiert – Sie sparen
            damit Zeit und Aufwand.
          </p>
        </li>
      </ul>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`mySwiper ${styles.wrapper}`}
      >
        <SwiperSlide>
          <li className={` ${styles.function_item__swiper}`}>
            <img
              className={styles.function_item_image}
              src={networkIcon}
              alt=""
            />
            <h3 className={styles.function_item_title}>
              Digitales Rechtskataster
            </h3>
            <p className={styles.function_item_sub_title}>
              o Steuern Sie die Rechtspflichten, Maßnahmen und
              Verantwortlichkeiten in den Bereichen Energie, Umwelt- und
              Arbeitsschutz für Ihr gesamtes Unternehmen zuverlässig und sicher
              mit unserer Software Compleon Solutions (on-demand).
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className={` ${styles.function_item__swiper}`}>
            <img
              className={styles.function_item_image}
              src={relatioshipIcon}
              alt=""
            />
            <h3 className={styles.function_item_title}>
              Rechtspflichtena bleitung
            </h3>
            <p className={styles.function_item_sub_title}>
              Da sich gesetzliche Pflichten mitunter schwer aus Rechtstexten
              ableiten lassen, stellen wir Ihnen mit Compleon in kurzer,
              prägnanter Form die konkret umzusetzenden Pflichten dar.
              Verantwortliche Personen überblicken schnell, was sie im Betrieb
              umzusetzen haben.
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className={` ${styles.function_item__swiper}`}>
            <img
              className={styles.function_item_image}
              src={warningIcon}
              alt=""
            />
            <h3 className={styles.function_item_title}>
              Prüfung von Gesetzesänderungen mit Erinnerungsfunktion
            </h3>
            <p className={styles.function_item_sub_title}>
              o Wir behalten für Sie alle gesetzlichen Änderungen im Blick und
              nehmen eine Vorbewertung der Relevanz für Ihr Unternehmen vor. Sie
              werden bei Revisionen automatisch per E‑Mail informiert – Sie sparen
              damit Zeit und Aufwand.
            </p>
          </li>
        </SwiperSlide>
      </Swiper>

      <div className={styles.button}>Weitere Funktionen</div>
    </section>
  );
}

export default Function;
