import React from "react";
import styles from './Process.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { NavLink } from "react-router-dom";
import { prozessPATH } from "../../utils/constants";

function Process() {
  return (
  <section className={styles.main_container}>
    <p className={styles.spoiler}>
      Prozess
    </p>
    <h2 className={styles.title}>
      In 4 Schritten  rechts­sicher agieren
    </h2>
    <p className={styles.sub_title}>
      Ihr Unter­nehmen ist so indivi­duell wie die Arbeitswelt. Deshalb erhalten Sie mehr als eine Software: Wir begleiten Sie von Anfang an beim Aufbau eines indivi­du­ellen Rechts­ka­tasters. Sie arbeiten mit einer umfang­reichen Datenbank und erledigen Ihre Compliance-Audits. Auch gern mit unserer Hilfe.
    </p>
    <ul className={styles.process_container}>
      <li className={styles.process_item}>
        <div className={styles.number_curcle}>
          1
        </div>
        <h3 className={styles.process_item_title}>
          Ist-Analyse
        </h3>
        <p className={styles.process_item_sub_title}>
          Gemeinsam ermitteln und bewerten wir den Ist-Zustand Ihrer Systeme und Dokumente, die Sie bereits für ein Rechtskataster verwenden und integrieren diese in Compleon.
        </p>
      </li>
      <li className={styles.process_item}>
        <div className={styles.number_curcle}>
          2
        </div>
        <h3 className={styles.process_item_title}>
          Aufbau Rechtskataster
        </h3>
        <p className={styles.process_item_sub_title}>
        Wir besuchen Sie vor Ort und legen mit Ihnen die einschlägigen Rechtspflichten für Ihr Unternehmen fest. Sie erhalten Ihr individuelles Rechts- und Normenkataster und eine Ersteinweisung in die Software.
        </p>
      </li>
      <li className={styles.process_item}>
        <div className={styles.number_curcle}>
          3
        </div>
        <h3 className={styles.process_item_title}>
          Pflege Rechtskataster
        </h3>
        <p className={styles.process_item_sub_title}>
           Wir übernehmen das monatliche Screening von Gesetzen und die Vorbewertung der Gesetzesänderungen. Sie werden per E‑Mail informiert und kümmern sich um die relevanten Änderungen und das Maßnahmenmanagement.
        </p>
      </li>
      <li className={styles.process_item}>
        <div className={styles.number_curcle}>
          4
        </div>
        <h3 className={styles.process_item_title}>
          Compliance-Prüfung
        </h3>
        <p className={styles.process_item_sub_title}>
          Dokumentieren Sie mit Compleon die Einhaltung von Normen (Compliance Audits). Binden Sie interne oder externe Auditoren mit ein, oder uns. Eine umfassende Unterstützung bieten wir an über UUB Schwan. 
        </p>
      </li>
    </ul>
    <Swiper
      direction={'horizontal'}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={`mySwiper ${styles.wrapper}`}
      >
      <SwiperSlide className={styles.swiper_slide}>
        <li className={styles.process_item}>
          <div className={styles.number_curcle}>
            1
          </div>
          <h3 className={styles.process_item_title}>
            Ist-Analyse
          </h3>
          <p className={styles.process_item_sub_title}>
            Gemeinsam ermitteln und bewerten wir den Ist-Zustand Ihrer Systeme und Dokumente, die Sie bereits für ein Rechtskataster verwenden und integrieren diese in Compleon.
          </p>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className={styles.process_item}>
          <div className={styles.number_curcle}>
            2
          </div>
          <h3 className={styles.process_item_title}>
            Aufbau Rechtskataster
          </h3>
          <p className={styles.process_item_sub_title}>
            Wir besuchen Sie vor Ort und legen mit Ihnen die einschlägigen Rechtspflichten für Ihr Unternehmen fest. Sie erhalten Ihr individuelles Rechts- und Normenkataster und eine Ersteinweisung in die Software.
          </p>
        </li>
      </SwiperSlide>

      <SwiperSlide>
        <li className={styles.process_item}>
          <div className={styles.number_curcle}>
            3
          </div>
          <h3 className={styles.process_item_title}>
            Pflege Rechtskataster
          </h3>
          <p className={styles.process_item_sub_title}>
           Wir übernehmen das monatliche Screening von Gesetzen und die Vorbewertung der Gesetzesänderungen. Sie werden per E‑Mail informiert und kümmern sich um die relevanten Änderungen und das Maßnahmenmanagement.
          </p>
        </li>
      </SwiperSlide>

      <SwiperSlide>
        <li className={styles.process_item}>
          <div className={styles.number_curcle}>
            4
          </div>
          <h3 className={styles.process_item_title}>
            Compliance-Prüfung
          </h3>
          <p className={styles.process_item_sub_title}>
            Dokumentieren Sie mit Compleon die Einhaltung von Normen (Compliance Audits). Binden Sie interne oder externe Auditoren mit ein, oder uns. Eine umfassende Unterstützung bieten wir an über UUB Schwan.
          </p>
        </li>
      </SwiperSlide>


    </Swiper>
    <ul className={styles.button_container}>
      <li className={styles.button_container_item}>
        <NavLink to={prozessPATH} className={styles.link}>
          Service-Leistungen
        </NavLink>
      </li>
        
    </ul>
  </section>);
}

export default Process;
