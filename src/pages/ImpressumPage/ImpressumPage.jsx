import React, { useEffect } from 'react';
import styles from './ImpressumPage.module.css';

const ImpressumPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className={styles.imprint}>
      <div className={styles.imprint_container}>
        <div className={styles.imprint_text}>
          <h2 className={`${styles.imprint_title} ${styles.imprint_title_main}`}>Impressum</h2>
          <p className={`${styles.imprint_subtitle} ${styles.imprint_subtitle_big}`}>
            Angaben gem. § 5 TMG
          </p>
        </div>

        <div className={styles.imprint_items}>
          <div className={styles.imprint_item}>
            <h6 className={styles.imprint_title}>Betreiber und Kontakt:</h6>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>
                Umwelt- und Unternehmensberatung 
              </p>
              <p className={styles.imprint_subtitle}>
                Schwan GmbH (UUB)
              </p>
            </div>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>Heinrich-Mann-Allee 18-19</p>
              <p className={styles.imprint_subtitle}>14473 Potsdam</p>
            </div>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>Telefonnummer: 030930298190</p>
              <p className={styles.imprint_subtitle}>Fax: 030930298191</p>
              <p className={styles.imprint_subtitle}>E-Mail-Adresse: info@uub-schwan.de</p>
            </div>
          </div>

          <div className={styles.imprint_item}>
            <h6 className={styles.imprint_title}>Vertretung:</h6>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>
                Umwelt- und Unternehmensberatung Schwan GmbH (UUB) wird vertreten durch die
                Geschäftsführer: Dr. Anke Schwan und Thomas Schwan
              </p>
            </div>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>Datenschutzbeauftragter</p>
            </div>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>Tobias Neitzel</p>
            </div>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>datenschutz@uub-schwan.de</p>
            </div>
          </div>

          <div className={styles.imprint_item}>
            <h6 className={styles.imprint_title}>Gerichtsort</h6>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>Amtsgericht Potsdam</p>
            </div>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>
                Berufshaftlichtversicherung:
              </p>
              <p className={styles.imprint_subtitle}>
                Wir sind bei der folgender Versicherung
                berufshaftpflichtversichert: HDI Versicherung AG Neumarkt 15 66117 Saarbrücken
                Berufshaftlicht gültig für (Land): Deutschland
              </p>
            </div>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>Umsatzsteuer-ID:</p>
              <p className={styles.imprint_subtitle}>DE309879826</p>
            </div>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>Handelsreister: HRB 29605 P</p>
              <p className={styles.imprint_subtitle}>Steuerenummer: 046/121/09457</p>
            </div>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>
                Verantwortlicher für journalistisch-redaktionelle Inhalte gem. § 55 II RstV:
              </p>
              <p className={styles.imprint_subtitle}>Thomas Schwan</p>
            </div>
            <div className={styles.imprint_inner}>
              <p className={styles.imprint_subtitle}>Rechtlicher Hinweis</p>
            </div>
          </div>

          <div className={styles.imprint_item}>
            <h6 className={`${styles.imprint_title} ${styles.imprint_title_big}`}>Die Umwelt</h6>
            <div className={styles.imprint_inner}>
              <p className={`${styles.imprint_subtitle} ${styles.imprint_subtitle_big}`}>
                - und Unternehmensberatung Schwan GmbH sorgt für ein kontinuierliches Update aller
                auf ihrer Website enthaltenen Informationen. Das Unternehmen kann jedoch nicht für
                die Aktualität und Richtigkeit garantieren oder haftbar gemacht werden. Die Umwelt-
                und Unternehmensberatung Schwan GmbH behält sich vor, Änderungen oder Ergänzungen
                der bereitgestellten Informationen ohne Ankündigung vorzunehmen.
              </p>
            </div>
          </div>

          <div className={styles.imprint_item}>
            <h6 className={`${styles.imprint_title} ${styles.imprint_title_big}`}>
              Haftungsausschluss
            </h6>
            <div className={styles.imprint_inner}>
            <p className={`${styles.imprint_subtitle} ${styles.imprint_subtitle_big}`}>
                Die Umwelt- und Unternehmensberatung Schwan GmbH hat auf diesen Seiten Links zu
                anderen Seiten im Internet gelegt. Für all diese Links gilt: Die Umwelt- und
                Unternehmensberatung Schwan GmbH hat keinen Einfluss auf die Gestaltung und die
                Inhalte der gelinkten Seiten und distanziert sich hiermit ausdrücklich von allen
                Inhalten aller gelinkten Seiten auf dieser Homepage.
              </p>
            </div>
          </div>

          <div className={styles.imprint_item}>
            <h6 className={`${styles.imprint_title} ${styles.imprint_title_big}`}>Copyright</h6>
            <div className={styles.imprint_inner}>
            <p className={`${styles.imprint_subtitle} ${styles.imprint_subtitle_big}`}>
                Der Inhalt der Umwelt- und Unternehmensberatung Schwan GmbH Website ist
                urheberrechtlich geschützt. Die Vervielfältigung von Informationen oder Daten,
                insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial, bedarf der
                vorherigen Zustimmung der Umwelt- und Unternehmensberatung Schwan GmbH.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;
