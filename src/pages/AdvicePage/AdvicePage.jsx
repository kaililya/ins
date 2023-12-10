import React from "react";
import styles from './AdvicePage.module.css'

function AdvicePage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.background}>
        <p className={styles.spoiler}>
         BERATUNG
        </p>
        <h2 className={styles.title}>
          Pragmatische Beratung, in einer Zeit voller Wandel.
        </h2>
        <p className={styles.sub_title}>
         Compliance ist ein komplexes Thema, das stetigem Wandel unterliegt. Gut, wenn man einen verlässlichen Partner an seiner Seite hat. Rechtskatastererstellung, Auslegung von Rechtspflichten, monatliche Reportings oder Compliance Audits – wir beraten Sie.
        </p>
      </div>
      <h3 className={styles.title_second}>
        Software plus Beratung – masgeschneidert und akkurat.
      </h3>
      <p className={styles.sub_title_second}>
        Mit unserer Beratung sind Sie jederzeit auf der sicheren Seite. Wir sorgen für Entlastung und Effizienz durch unsere jahrelange Erfahrung. Sie haben Zeit für Ihr Hauptgeschäft.
      </p>
      <ul className={styles.advice_container}>
        <li className={styles.advice_item}>
          <h4 className={styles.advice_title}>Rechtskatastererstellung</h4>
          <div className={styles.figure_direct}></div>
          <p className={styles.advice_sub_title}>Rechtsвыааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааkatastererstellung RechtskatastererstellungRechtskatastererstellungRechtskatastererstellungRechtskatastererstellungRechtskatastererstellungRechtskatastererstellung Rechtskatastererstellung Wir besuchen Sie vor Ort, nehmen alle relevanten Daten auf und legen gemeinsam mit Ihnen die einschlägigen Rechtspflichten von der kommunalen bis zur EU-Ebene für Ihr Unternehmen fest.</p>
        </li>
        <li className={styles.advice_item}>
          <h4 className={styles.advice_title}>Schulung</h4>
          <div className={styles.figure_direct}></div>
          <h4 className={styles.advice_sub_title}>Alle relevanten Mitarbeiter werden im Rahmen einer Ersteinweisung geschult und erhalten Schulungsmaterialien. Diese Materialien – sowie die intuitive Bedienbarkeit von Compleon – ermöglichen es, neue Mitarbeiter intern selbst nachzuschulen.</h4>
        </li>
        <li className={styles.advice_item}>
          <h4 className={styles.advice_title}>Bewertung von Rechtsänderungen</h4>
          <div className={styles.figure_direct}></div>
          <h4 className={styles.advice_sub_title}>Rechtsänderungen sind nicht immer leicht zu verstehen und auf die Organisation anzuwenden. Wir beraten Sie gerne bei der Bewertung der Rechtsänderungen, wenn es darum geht, Maßnahmen für Ihr Unternehmen abzuleiten.</h4>
        </li>
        <li className={styles.advice_item}>
          <h4 className={styles.advice_title}>Übernahme komplexer Compliance-Aufgaben</h4>
          <div className={styles.figure_direct}></div>
          <h4 className={styles.advice_sub_title}>Ob Festlegung von Verantwortlichkeiten, Komplettbewertung von Rechtsänderungen oder regelmäßige Reportings. Wir übernehmen gerne vielfältige Aufgaben rund das Thema Compliance und schaffen Ihnen freie Ressourcen für andere Aufgaben.</h4>
        </li>
        <li className={styles.advice_item}>
          <h4 className={styles.advice_title}>Training – Anwenderschulungvor Ort</h4>
          <div className={styles.figure_direct}></div>
          <h4 className={styles.advice_sub_title}>Damit jeder den Umgang mit Compleon versteht, bieten wir Anwenderschulungen an und weisen in die Funktionalitäten ein. Dabei gehen die Schulungen über die Themen der Softwarenutzung hinaus und betrachten die Grundlagen des Compliancemanagements.</h4>
        </li>
        <li className={styles.advice_item}>
          <h4 className={styles.advice_title}>Compliance-Prfung</h4>
          <div className={styles.figure_direct}></div>
          <h4 className={styles.advice_sub_title}>Die Überprüfung der Einhaltung der bestehenden Rechtspflichten ist in regelmäßigen Abständen notwendig. Compliance-Audits dienen als Nachweis. Wir führen diese bei Ihnen durch und dokumentieren die Durchführung direkt in Compleon.</h4>
        </li>
        <li className={styles.advice_item}>
          <h4 className={styles.advice_title}>Quartals-Reporting</h4>
          <div className={styles.figure_direct}></div>
          <h4 className={styles.advice_sub_title}>Im Rahmen unserer Support-Leistungen bereiten wir Ihnen auf Wunsch die notwendigen Rechtsänderungen in detaillierter Form für regelmäßige interne Meetings vor, z.B. für Umwelt- und Arbeitsschutzausschüsse. Sie sparen Zeit und Aufwand.</h4>
        </li>
        <li className={styles.advice_item}>
          <h4 className={styles.advice_title}>Förderung von Beratungs-und Softwareleistungen</h4>
          <div className={styles.figure_direct}></div>
          <h4 className={styles.advice_sub_title}>Sie sind ein kleines mittelständisches Unternehmen (KMU)? Dann nutzen Sie die Fördermöglichkeiten der BAFA, um Ihre Rechtssicherheit durch uns zu optimieren. Sprechen Sie uns an, wir übernehmen gern die Antragstellung.</h4>
        </li>
      </ul>
    </div>
  )
}

export default AdvicePage;
