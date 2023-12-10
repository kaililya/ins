import React from "react";
import styles from './ProccesPage.module.css'

function ProccesPage() {
  return (  
    <>
   <div className={styles.background}>
      <p className={styles.spoiler}>
        Prozess
      </p>
      <h2 className={styles.title}>
        In 4 Schritten  rechts­sicher agieren
      </h2>
      <p className={styles.sub_title}>
        Ihr Unter­nehmen ist so indivi­duell wie die Arbeitswelt. Deshalb erhalten Sie mehr als eine Software: Wir begleiten Sie von Anfang an beim Aufbau eines indivi­du­ellen Rechts­ka­tasters. Sie arbeiten mit einer umfang­reichen Datenbank und erledigen Ihre Compliance-Audits. Auch gern mit unserer Hilfe.
      </p>
    </div>
    <section className={styles.main_container}>
   
    <ul className={styles.process_container}>
      <li className={styles.process_item}>
        <div className={styles.number_curcle}>
          <span>1</span>
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
        <span>2</span>

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
        <span>3</span>

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
           <span>4</span>

        </div>
        <h3 className={styles.process_item_title}>
          Compliance-Prüfung
        </h3>
        <p className={styles.process_item_sub_title}>
          Dokumentieren Sie mit Compleon die Einhaltung von Normen (Compliance Audits). Binden Sie interne oder externe Auditoren mit ein, oder uns. Eine umfassende Unterstützung bieten wir an über UUB Schwan. 
        </p>
      </li>
     </ul>
     <ul className={styles.button_container}>
      <li className={styles.button_container_item}>Prozess im Detail (PDF)</li>
      <li className={styles.button_container_item}>Service-Leistungen</li>
    </ul>
    </section>
    </>
  
  )
}

export default ProccesPage;
