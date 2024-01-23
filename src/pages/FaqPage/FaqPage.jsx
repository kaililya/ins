import React, { useEffect, useMemo, useState } from "react";
import styles from "./FaqPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetFaqThunk } from "../../services/thunks/swagger-thunk";
import { TailSpin } from "react-loader-spinner";
import { BiSolidError } from "react-icons/bi";

function FaqPage() {
  const dispatch = useDispatch();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);    
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchGetFaqThunk())
  }, []); 


  function firstTab() {
    const faqArray = faqData?.attributes?.FAQData;
    let currentTab
    if(!faqArray) {
      return null
    } else {
      currentTab = faqArray[0]['Title'];
    }
    setActiveTab(faqArray[0]['Title'])
    return currentTab;
  }
  const { faqData } = useSelector((store) => store.swaggerDataReducer)

  const { getFaqRequest,
    getFaqRequestFailed} =
    useSelector((store) => store.swaggerDataReducer);
  
  useEffect(() => {
    firstTab()
  },[faqData]
  )

  const [activeTab, setActiveTab] = useState('');
  console.log(activeTab);


  if (!faqData || faqData.length === 0) {
    return  (
      <div className={styles.spiner}>
        <TailSpin
          color="#292982"
          radius={"3px"}
          width={100}
          height={100}
          wrapperClass={styles.spiner}
        />
      </div>
    )
  }
  
  const dataFilteredByTitle = faqData.attributes.FAQData.filter(
    (item) => item.Title === activeTab
  )
  return (
    <section className={styles.main_container}>
      {!getFaqRequest &&
       (getFaqRequestFailed || faqData.length === 0) && (
          <div className={styles.failed_container}>
            <BiSolidError className={styles.error_sign} size={80} />
            <h3
              className={`${styles.advice_title} ${styles.advice_title__warning}`}
            >
             Die Liste der Fragen und Antworten konnte nicht abgerufen werden. Laden Sie die Seite neu oder besuchen Sie sie später
            </h3>
          </div>
        )}
      <div className={styles.wrapper}>
        <div className={styles.category_container}>
          <h2 className={styles.title}>Häufige Fragen</h2>
          <ul className={styles.tabs_container}>
            {faqData.attributes.FAQData.map((item, id) => (
              <li
                key={id}
                className={
                  activeTab === item.Title
                    ? `${styles.tab} ${styles.tab__active}`
                    : `${styles.tab}`
                }
                onClick={() => handleTabClick(item.Title)}
              >
                {item.Title}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content_container}>
          <ul className={styles.accordion}>
            {dataFilteredByTitle.map((item) => {
              return item.Content.map(item => (
              <li
                key={item.id} 
                className={styles.accordion_item}>
                <input
                  className={styles.accordion_trigger}
                  type="checkbox"
                  name="accordion"
                  id={item.id}
                />
                {/* {console.log(item.Content)} */}
                <label 
                  className={styles.accordion_label}
                  htmlFor={item.id}
                >
                  {JSON.stringify(item.Question)}
                </label>
                <div className={styles.accordion_content}>
                  <p className={styles.accordion_text}>
                   {JSON.stringify(item.Answer)}
                  </p>
                </div>
              </li>
              )) 
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FaqPage;


// {activeTab !== "Leistungen & Features" && (
//   <>
//     <h3>Тут будет выпадающий список для других вариантов слева, когда будет API</h3>
//     <p>P.S Не стал дублировать длинный код, который все равно удалю</p>
    
//   </>
// )}

 {/* <li
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
            </li> */}



                          {/* <li className={styles.accordion_item}>
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
              </li> */}


            //   <li className={styles.accordion_item}>
            //   <input
            //     className={styles.accordion_trigger}
            //     type="checkbox"
            //     name="accordion"
            //     id="2"
            //   />
            //   <label className={styles.accordion_label} htmlFor="2">
            //     Wie viele Lizenzen sind im Angebot enthalten?
            //   </label>
            //   <div className={styles.accordion_content}>
            //     <p className={styles.accordion_text}>
            //       Von der Ist-Analy­­se­/Er­stellung Ihres Rechts­ka­tasters,
            //       über die Festlegung verant­wort­licher Personen, die Bewertung
            //       von Rechts­än­de­rungen und die Durch­führung von Compliance-
            //       Audits – wir bieten Ihrem Unter­nehmen hohe recht­liche
            //       Sicherheit und umfas­senden Service durch das digitale
            //       RechtsVon der Ist-Analy­­se­/Er­stellung Ihres
            //       Rechts­ka­tasters, über die Festlegung verant­wort­licher
            //       Personen, die Bewertung von Rechts­än­de­rungen und die
            //       Durch­führung von Compliance- Audits – wir bieten Ihrem
            //       Unter­nehmen hohe recht­liche Sicherheit und umfas­senden
            //       Service durch das digitale Rechts
            //     </p>
            //   </div>
            // </li>

          //   <li
          //   className={
          //     activeTab === "Leistungen & Features"
          //       ? `${styles.tab} ${styles.tab__active}`
          //       : `${styles.tab}`
          //   }
          //   onClick={() => handleTabClick("Leistungen & Features")}
          // >
          //   Leistungen & Features
          // </li>