import React, { useEffect, useState } from "react";
import styles from "./FaqPage.module.css";

function FaqPage() {
  const [activeTab, setActiveTab] = useState("Leistungen & Features");

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <section className={styles.main_container}>
      <div className={styles.wrapper}>
        <div className={styles.category_container}>
          <h2 className={styles.title}>Häufige Fragen</h2>
          <ul className={styles.tabs_container}>
            <li
              className={
                activeTab === "Leistungen & Features"
                  ? `${styles.tab} ${styles.tab__active}`
                  : `${styles.tab}`
              }
              onClick={() => handleTabClick("Leistungen & Features")}
            >
              Leistungen & Features
            </li>
            <li
              className={
                activeTab === "Rechtsgebiete & Compliance-Prüfung"
                  ? `${styles.tab} ${styles.tab__active}`
                  : `${styles.tab}`
              }
              onClick={() =>
                handleTabClick("Rechtsgebiete & Compliance-Prüfung")
              }
            >
              Rechtsgebiete & Compliance-Prüfung
            </li>
            <li
              className={
                activeTab === "Rechtssicherheit & Zuverlässigkeit"
                  ? `${styles.tab} ${styles.tab__active}`
                  : `${styles.tab}`
              }
              onClick={() =>
                handleTabClick("Rechtssicherheit & Zuverlässigkeit")
              }
            >
              Rechtssicherheit & Zuverlässigkeit
            </li>
            <li
              className={
                activeTab === "Hilfe & Support"
                  ? `${styles.tab} ${styles.tab__active}`
                  : `${styles.tab}`
              }
              onClick={() => handleTabClick("Hilfe & Support")}
            >
              Hilfe & Support
            </li>
          </ul>
        </div>
        <div className={styles.content_container}>
          {activeTab !== "Leistungen & Features" && (
            <>
              <h3>Тут будет выпадающий список для других вариантов слева, когда будет API</h3>
              <p>P.S Не стал дублировать длинный код, который все равно удалю</p>
              
            </>
          )}
          {activeTab === "Leistungen & Features" && (
            <ul className={styles.accordion}>
              <li className={styles.accordion_item}>
                <input
                  className={styles.accordion_trigger}
                  type="checkbox"
                  name="accordion"
                  id="1"
                />
                <label className={styles.accordion_label} htmlFor="1">
                  Welche Dienst­leis­tungen sind im Angebot enthalten?
                </label>
                  <div className={styles.accordion_content}>
                    <p className={styles.accordion_text}>
                      Von der Ist-Analy­­se­/Er­stellung Ihres Rechts­ka­tasters,
                      über die Festlegung verant­wort­licher Personen, die
                      Bewertung von Rechts­än­de­rungen und die Durch­führung von
                      Compliance- Audits – wir bieten Ihrem Unter­nehmen hohe
                      recht­liche Sicherheit und umfas­senden Service durch das
                      digitale Rechts
                    </p>
                 </div>
              </li>
              <li className={styles.accordion_item}>
                <input
                  className={styles.accordion_trigger}
                  type="checkbox"
                  name="accordion"
                  id="2"
                />
                <label className={styles.accordion_label} htmlFor="2">
                  Wie viele Lizenzen sind im Angebot enthalten?
                </label>
                <div className={styles.accordion_content}>
                  <p className={styles.accordion_text}>
                    Von der Ist-Analy­­se­/Er­stellung Ihres Rechts­ka­tasters,
                    über die Festlegung verant­wort­licher Personen, die
                    Bewertung von Rechts­än­de­rungen und die Durch­führung von
                    Compliance- Audits – wir bieten Ihrem Unter­nehmen hohe
                    recht­liche Sicherheit und umfas­senden Service durch das
                    digitale RechtsVon der Ist-Analy­­se­/Er­stellung Ihres
                    Rechts­ka­tasters, über die Festlegung verant­wort­licher
                    Personen, die Bewertung von Rechts­än­de­rungen und die
                    Durch­führung von Compliance- Audits – wir bieten Ihrem
                    Unter­nehmen hohe recht­liche Sicherheit und umfas­senden
                    Service durch das digitale Rechts
                  </p>
                </div>
              </li>
              <li className={styles.accordion_item}>
                <input
                  className={styles.accordion_trigger}
                  type="checkbox"
                  name="accordion"
                  id="3"
                />
                <label className={styles.accordion_label} htmlFor="3">
                  Können mehrere Abtei­lungen und Standorte in
                  Compleonabgebildet werden?
                </label>
                <div className={styles.accordion_content}>
                  <p className={styles.accordion_text}>
                    Von der Ist-Analy­­se­/Er­stellung Ihres Rechts­ka­tasters,
                    über dieFestlegung verant­wort­licher Personen, die
                    Bewertung von Rechts­än­de­rungen und die Durch­führung von
                    Compliance- Audits – wir bieten Ihrem Unter­nehmen hohe
                    recht­liche Sicherheit und umfas­senden Service durch das
                    digitale RechtsVon der Ist-Analy­­se­/Er­stellung Ihres
                    Rechts­ka­tasters, über die Festlegung verant­wort­licher
                    Personen, die Bewertung von Rechts­än­de­rungen und die
                    Durch­führung von Compliance- Audits – wir bieten Ihrem
                    Unter­nehmen hohe recht­liche Sicherheit und umfas­senden
                    Service durch das digitale RechtsVon der
                    Ist-Analy­­se­/Er­stellung Ihres Rechts­ka­tasters, über die
                    Festlegung verant­wort­licher Personen, die Bewertung von
                    Rechts­än­de­rungen und die Durch­führung von Compliance-
                    Audits – wir bieten Ihrem Unter­nehmen hohe recht­liche
                    Sicherheit und umfas­senden Service durch das digitale
                    Rechts
                  </p>
                </div>
              </li>
              <li className={styles.accordion_item}>
                <input
                  className={styles.accordion_trigger}
                  type="checkbox"
                  name="accordion"
                  id="4"
                />
                <label className={styles.accordion_label} htmlFor="4">
                  Worin unter­scheiden sich Verant­wort­lich­keiten von Rollen?
                </label>
                <div className={styles.accordion_content}>
                  <p className={styles.accordion_text}>
                    Von der Ist-Analy­­se­/Er­stellung Ihres Rechts­ka­tasters,
                    über die Festlegung verant­wort­licher Personen, die
                    Bewertung von Rechts­än­de­rungen und die Durch­führung von
                    Compliance- Audits – wir bieten Ihrem Unter­nehmen hohe
                    recht­liche Sicherheit und umfas­senden Service durch das
                    digitale Rechts
                  </p>
                </div>
              </li>
              <li className={styles.accordion_item}>
                <input
                  className={styles.accordion_trigger}
                  type="checkbox"
                  name="accordion"
                  id="5"
                />
                <label className={styles.accordion_label} htmlFor="5">
                  Sind weitere Zusatz­funk­tionen geplant?
                </label>
                <div className={styles.accordion_content}>
                  <p className={styles.accordion_text}>
                    Von der Ist-Analy­­se­/Er­stellung Ihres Rechts­ka­tasters,
                    über die Festlegung verant­wort­licher Personen, die
                    Bewertung von Rechts­än­de­rungen und die Durch­führung von
                    Compliance- Audits – wir bieten Ihrem Unter­nehmen hohe
                    recht­liche Sicherheit und umfas­senden Service durch das
                    digitale Rechts
                  </p>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default FaqPage;
