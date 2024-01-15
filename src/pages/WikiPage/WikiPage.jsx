import React, { useEffect, useState } from "react";
import WikiContent from "../../components/WikiContent/WikiContent";
import styles from "./WikiPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetWikiThunk } from "../../services/thunks/swagger-thunk";

const WikiContentArray = [
  {
    title: "Wiki",
    subtitle:
      "In diesem Wiki werden alle relevanten Funktionen dokumentiert und für Sie in unserer Webapp bereitgestellt. Folgen Sie dem Inhaltsverzeichnis und schauen Sie sich die Themen an, die für Sie wichtig sind. Falls Sie weitere Fragen oder Anregungen haben, kontaktieren Sie einfach den nächsten UUB Mitarbeiter, mit dem Sie in Kontakt stehen. Wir werden Ihr Anliegen schnellstmöglich bearbeiten und wünschen Ihnen viel Erfolg mit Compleon!",
  },
];

const WikiPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetWikiThunk());
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(2);

  const wikiData =
    useSelector((store) => store.swaggerDataReducer.wikiData) || [];

  if (!wikiData || wikiData.length === 0) {
    return null;
  }

  console.log(wikiData.data.attributes.Categories);

  // const { getArticlesRequest, getArticlesRequestSuccess, getArticlesRequestRequestFailed } =
  //   useSelector((store) => store.swaggerDataReducer);
  return (
    <section className={styles.wiki}>
      <div className={styles.wiki_container}>
        <div className={styles.wiki_text_container}>
          <h4 className={styles.wiki_title}>Die Berechtigungen</h4>
          <p className={styles.wiki_subtitle}>
            die ein Benutzer im Rechtkataster hat, werden über die Rollen im
            System definiert. Jeder Benutzer kann dabei mehrere Rollen besitzen,
            die den Funktionsumfang der Anwendung bestimmen. Die Folgenden
            Rollen legen fest, welche Daten ein Benutzer sehen, erstellen,
            bearbeiten oder sogar löschen kann.
          </p>
        </div>

        {wikiData.data.attributes.Categories.map((item) => (
          <>
            <h4 className={styles.wiki_title}>{item.Category}</h4>
            {item.SubContent.map((item) => (
              <>
              <div key={item.id} className={styles.wiki_inner}>
                <p
                  onClick={() => setActiveIndex(item.id)}
                  className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}
                >
                  {item.Title}
                </p>
              </div>
              {activeIndex === item.id && (
                <div className={styles.wiki_content}>
                    <WikiContent
                      title={item.Title}
                      subtitle={item.Content[0].Body}
                      key={item.id}
                    />
                </div>
              )}
              </>
            ))}
          </>
        ))}
      </div>
    </section>
  );
};

export default WikiPage;















        {/* <div className={styles.wiki_inner}>
          <p
            onClick={() => setActiveIndex(2)}
            className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}>
            Rollen & Berechtigungen
          </p>
        </div>
        {activeIndex === 2 && (
          <div className={styles.wiki_content}>
            {WikiContentArray.map((obj, index) => (
              <WikiContent title={'Rollen & Berechtigungen'} subtitle={obj.subtitle} key={index} />
            ))}
          </div>
        )}

         <div className={styles.wiki_inner}>
          <p
            onClick={() => setActiveIndex(3)}
            className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}>
            Benutzer erstellen
          </p>
        </div>
        {activeIndex === 3 && (
          <div className={styles.wiki_content}>
            {WikiContentArray.map((obj, index) => (
              <WikiContent title={'Benutzer erstellen'} subtitle={obj.subtitle} key={index} />
            ))}
          </div>
        )}

        <h4 className={styles.wiki_title}>Navigation & Suche</h4>
        <div className={styles.wiki_inner}>
          <p
            onClick={() => setActiveIndex(4)}
            className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}>
            Grundlegende Bedienelemente
          </p>
        </div>
        {activeIndex === 4 && (
          <div className={styles.wiki_content}>
            {WikiContentArray.map((obj, index) => (
              <WikiContent
                title={'Grundlegende Bedienelemente'}
                subtitle={obj.subtitle}
                key={index}
              />
            ))}
          </div>
        )}

        <div className={styles.wiki_inner}>
          <p
            onClick={() => setActiveIndex(5)}
            className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}>
            Tabellen
          </p>
        </div>
        {activeIndex === 5 && (
          <div className={styles.wiki_content}>
            {WikiContentArray.map((obj, index) => (
              <WikiContent title={'Tabellen'} subtitle={obj.subtitle} key={index} />
            ))}
          </div>
        )}

        <div className={styles.wiki_inner}>
          <p
            onClick={() => setActiveIndex(6)}
            className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}>
            Tabelleneigenschaften
          </p>
        </div>
        {activeIndex === 6 && (
          <div className={styles.wiki_content}>
            {WikiContentArray.map((obj, index) => (
              <WikiContent title={'Tabelleneigenschaften'} subtitle={obj.subtitle} key={index} />
            ))}
          </div>
        )}

        <div className={styles.wiki_inner}>
          <p
            onClick={() => setActiveIndex(7)}
            className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}>
            Filter & Sortierung
          </p>
        </div>
        {activeIndex === 7 && (
          <div className={styles.wiki_content}>
            {WikiContentArray.map((obj, index) => (
              <WikiContent title={'Filter & Sortierung'} subtitle={obj.subtitle} key={index} />
            ))}
          </div>
        )}

        <h4 className={styles.wiki_title}>Module</h4>
        <div className={styles.wiki_inner}>
          <p
            onClick={() => setActiveIndex(8)}
            className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}>
            Rechtskataster
          </p>
        </div>
        {activeIndex === 8 && (
          <div className={styles.wiki_content}>
            {WikiContentArray.map((obj, index) => (
              <WikiContent title={'Rechtskataster'} subtitle={obj.subtitle} key={index} />
            ))}
          </div>
        )}

        <div className={styles.wiki_inner}>
          <p
            onClick={() => setActiveIndex(9)}
            className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}>
            Revisionsstand
          </p>
        </div>
        {activeIndex === 9 && (
          <div className={styles.wiki_content}>
            {WikiContentArray.map((obj, index) => (
              <WikiContent title={'Revisionsstand'} subtitle={obj.subtitle} key={index} />
            ))}
          </div>
        )} */}

        {/* <div className={styles.wiki_inner}>
          <p
            onClick={() => setActiveIndex(10)}
            className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}>
            Normänderung
          </p>
        </div>
        {activeIndex === 10 && (
          <div className={styles.wiki_content}>
            {WikiContentArray.map((obj, index) => (
              <WikiContent title={'Normänderung'} subtitle={obj.subtitle} key={index} />
            ))}
          </div>
        )}

        <h4 className={styles.wiki_title}>Glossar</h4> */}