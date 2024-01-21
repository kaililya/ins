import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css';

import styles from './PrivacyPage.module.css';

const PrivacyPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className={styles.privacy}>
      <div className={styles.privacy_container}>
        <div className={styles.privacy_text}>
          <h2 className={`${styles.privacy_title} ${styles.privacy_title_main}`}>Datenschutz</h2>
          <p className={`${styles.privacy_subtitle} ${styles.privacy_subtitle_main}`}>
            Wir freuen uns über Ihr Interesse an unserer Homepage für unser Rechtskataster
            Softwarelösung Compleon. Der Schutz Ihrer Privatsphäre bei der Nutzung unserer Webseiten
            ist uns besonders wichtig. Im Folgenden informieren wir deshalb über die Erhebung und
            den Umgang mit anonymen und personenbezogenen Daten.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          className={styles.privacy_wrapper}>
          <SwiperSlide className={styles.privacy_slide}>
            <div className={styles.privacy_items}>
              <div className={styles.privacy_item}>
                <h4 className={styles.privacy_title}>Nicht-personenbezogene Daten</h4>
                <p className={styles.privacy_subtitle}>
                  Wenn Sie auf unsere Website zugreifen, wird dies automatisch protokolliert.
                  Erhoben werden die IP-Adresse Ihres Providers, ausgewählte Websites, der
                  Browsertyp sowie Datum und Uhrzeit Ihres Besuchs. Ein Bezug der gespeicherten
                  Daten auf Ihre Person ist ausgeschlossen. Sie können also unsere Website ohne
                  Offenlegung Ihrer Identität nutzen.
                </p>
              </div>
              <div className={styles.privacy_item}>
                <h4 className={styles.privacy_title}>Aufbewahrung</h4>
                <p className={styles.privacy_subtitle}>
                  Wir speichern personenbezogene Daten so lange, wie es nötig ist, um eine
                  Dienstleistung auszuführen, die Sie gewünscht oder zu der Sie Ihre Einwilligung
                  erteilt haben.
                </p>
              </div>
              <div className={styles.privacy_item}>
                <h4 className={styles.privacy_title}>Sicherheit</h4>
                <p className={styles.privacy_subtitle}>
                  Auf unserem Server gespeicherte Daten unterliegen einer Reihe von technischen und
                  organisatorischen Sicherheitsmaßnahmen, um Ihre Daten gegen unberechtigte oder
                  unrechtmäßige Löschung oder Veränderung sowie gegen unberechtigte Weitergabe oder
                  Zugriffe ihrer Daten zu schützen.
                </p>
              </div>
              <div className={styles.privacy_item}>
                <h4 className={styles.privacy_title}>Änderung der Datenschutzerklärung</h4>
                <p className={styles.privacy_subtitle}>
                  Wir behalten uns das Recht vor, Änderungen an der vorliegenden
                  Datenschutzerklärung vorzunehmen. Jede Änderung der Datenschutzerklärung wird an
                  dieser Stelle bekannt gegeben. Der aktuelle Stand der Erklärung ist der 10.Oktober
                  2023.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.privacy_slide}>
            <div className={styles.privacy_items}>
              <div className={styles.privacy_item}>
                <h4 className={styles.privacy_title}>Personenbezogene Daten</h4>
                <p className={styles.privacy_subtitle}>
                  Personenbezogene Daten werden auf der Website nur erhoben, wenn Sie uns diese von
                  sich aus für personalisierte Dienste zur Verfügung stellen. Dies ist
                  beispielsweise bei der Registrierung für den Newsletter oder durch das Ausfüllen
                  des Kontaktformulars der Fall.
                </p>
              </div>
              <div className={styles.privacy_item}>
                <h4 className={styles.privacy_title}>Weitergabe</h4>
                <p className={styles.privacy_subtitle}>
                  Ihre personenbezogenen Daten werden vertraulich behandelt und nicht an Dritte
                  überlassen, verkauft oder anderweitig vermarktet, sofern dazu nicht die
                  ausdrückliche Einverständniserklärung des Nutzers vorliegt.
                </p>
              </div>
              <div className={styles.privacy_item}>
                <h4 className={styles.privacy_title}>Kinder</h4>
                <p className={styles.privacy_subtitle}>
                  Wir erheben und verarbeiten auf unserer Webseite keine Informationen von Personen,
                  von denen uns bekannt ist, dass sie unter 13 Jahre alt sind, ohne zuvor die
                  nachprüfbare Zustimmung eines gesetzlichen Vertreters eingeholt zu haben. Auf
                  Anfrage können die gesetzlichen Vertreter die von ihrem Kind gegebenen
                  Informationen einsehen bzw. verlangen, dass sie gelöscht werden.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.privacy_slide}>
            <div className={styles.privacy_items}>
              <div className={styles.privacy_item}>
                <h4 className={styles.privacy_title}>Verwendungszwecke</h4>
                <p className={styles.privacy_subtitle}>
                  Die beim Besuch der Website automatisch erhobenen Daten werden auf unserem Server
                  für Zwecke der Datensicherheit erhoben und außerdem anonymisiert für statistische
                  Zwecke ausgewertet. Die uns von Ihnen freiwillig zur Verfügung gestellten
                  personenbezogenen Daten verwenden wir nur für die Ihnen bei der Erhebung
                  mitgeteilten Zwecke, wie den Bezug unserer schriftlichen Informationen oder die
                  Kontaktaufnahme.
                </p>
              </div>
              <div className={styles.privacy_item}>
                <h4 className={styles.privacy_title}>Verwendungszwecke</h4>
                <p className={styles.privacy_subtitle}>
                  Die beim Besuch der Website automatisch erhobenen Daten werden auf unserem Server
                  für Zwecke der Datensicherheit erhoben und außerdem anonymisiert für statistische
                  Zwecke ausgewertet. Die uns von Ihnen freiwillig zur Verfügung gestellten
                  personenbezogenen Daten verwenden wir nur für die Ihnen bei der Erhebung
                  mitgeteilten Zwecke, wie den Bezug unserer schriftlichen Informationen oder die
                  Kontaktaufnahme.
                </p>
              </div>
              <div className={styles.privacy_item}>
                <h4 className={styles.privacy_title}>Auskunfts- und Widerspruchsrecht</h4>
                <p className={styles.privacy_subtitle}>
                  Sie können jederzeit Auskunft über die von uns über Sie gespeicherten Daten
                  erhalten und haben die Möglichkeit, diese zu berichtigen, wenn Sie Ihrer Meinung
                  nach veraltet sind. Außerdem ist es möglich, Ihre Zustimmung zur Erhebung und
                  Speicherung der personenbezogenen Daten durch die CS Wismar GmbH zu widerrufen.
                  Hierzu genügt ein Schreiben an die im Impressum genannte Adresse
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PrivacyPage;
