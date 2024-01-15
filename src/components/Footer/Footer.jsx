import React from 'react'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../image/compleon-solutions-logo.png'
import { IoIosArrowDown } from 'react-icons/io';

import logoFooter from '../../image/compleon-solutions-logo-footer_mobile.png'
import { articlesPATH, beratungPATH, datenschutzPATH, faqPATH, funktionenPATH, impressumPATH, kontaktPATH, prozessPATH, unternehmenPATH, wikiPATH } from '../../utils/constants';

function Footer() {

  const switchClassNameMainLink = ({isActive}) => (isActive ? `${styles.link_main_active} ${styles.link_main}` : `${styles.link_main}`);
  const switchClassNameMinorLink = ({isActive}) => (isActive ? `${styles.link_minor_active} ${styles.link_minor}` : `${styles.link_minor}`);

  return (
    <footer className={styles.footer}>
      <ul className={styles.links_container}>
        <li className={styles.links_container_columns}>
          <NavLink className={switchClassNameMainLink} href="">
            Compleon
            <IoIosArrowDown className={styles.icon} />
          </NavLink>
          <ul className={styles.link_column}>
            <li className={styles.link}>
             <a className={styles.link_minor} rel="noopener noreferrer" target="_blank" href="http://demo.compelon-solutions.de/">
                Demo
              </a>
            </li>
            <li className={styles.link}>
              <a className={styles.link_minor} rel="noopener noreferrer" target="_blank" href="https://app.compleon-solutions.de/user/login">
                Login
              </a>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={kontaktPATH}>
                Registrierung
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={funktionenPATH}>
                Preise
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={styles.links_container_columns}>
          <NavLink className={switchClassNameMainLink} href="#">
            Service
            <IoIosArrowDown className={styles.icon} />
          </NavLink>
          <ul className={styles.link_column}>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={prozessPATH}>
                Prozess
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={beratungPATH}>
                Beratung
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={styles.links_container_columns}>
          <NavLink className={switchClassNameMainLink} href="#">
            Aktuelles
            <IoIosArrowDown className={styles.icon} />
          </NavLink>
          <ul className={styles.link_column}>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={articlesPATH}>
                Fachartikel
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={faqPATH}>
                FAQ
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={wikiPATH}>
                Wiki
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={styles.links_container_columns}>
          <NavLink className={switchClassNameMainLink} href="#">
               Über uns
            <IoIosArrowDown className={styles.icon} />
          </NavLink>
          <ul className={styles.link_column}>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={kontaktPATH}>
                Kontakt
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={unternehmenPATH}>
                Unternehmen
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={impressumPATH}>
                Impressum
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to={datenschutzPATH}>
                Datenschutz
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>


      <ul className={styles.accordion}>
        <li className={styles.accordion_item}>
          <input
            className={styles.accordion_trigger}
            type="checkbox"
            name="accordion"
            id="footer1"
          />
          <label className={styles.accordion_label} htmlFor="footer1">
            Compleon
          </label>
          <div className={styles.accordion_content}>
            <ul className={styles.link_column}>
              <li className={styles.link}>
                <a className={styles.link_minor} rel="noopener noreferrer" target="_blank" href="http://demo.compelon-solutions.de/">
                  Demo
                </a>
              </li>
              <li className={styles.link}>
                <a className={styles.link_minor} rel="noopener noreferrer" target="_blank" href="https://app.compleon-solutions.de/user/login">
                  Login
                </a>
              </li>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to="">
                  Registrierung
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to={funktionenPATH}>
                  Preise
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.accordion_item}>
          <input
            className={styles.accordion_trigger}
            type="checkbox"
            name="accordion"
            id="footer2"
          />
          <label className={styles.accordion_label} htmlFor="footer2">
            Service
          </label>
          <div className={styles.accordion_content}>
            <ul className={styles.link_column}>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to={prozessPATH}>
                  Prozess
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to={beratungPATH}>
                  Beratung
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.accordion_item}>
          <input
            className={styles.accordion_trigger}
            type="checkbox"
            name="accordion"
            id="footer3"
          />
          <label className={styles.accordion_label} htmlFor="footer3">
            Aktuelles
          </label>
          <div className={styles.accordion_content}>
            <ul className={styles.link_column}>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to={articlesPATH}>
                  Fachartikel
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to={faqPATH}>
                  FAQ
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to={wikiPATH}>
                  Wiki
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.accordion_item}>
          <input
            className={styles.accordion_trigger}
            type="checkbox"
            name="accordion"
            id="footer4"
          />
          <label className={styles.accordion_label} htmlFor="footer4">
            Über uns
          </label>
          <div className={styles.accordion_content}>
            <ul className={styles.link_column}>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to={kontaktPATH}>
                  Kontakt
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to={unternehmenPATH}>
                  Unternehmen
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to={impressumPATH}>
                  Impressum
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink className={switchClassNameMinorLink} to={datenschutzPATH}>
                  Datenschutz
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div className={styles.logo_copyright_container}>
        <img className={styles.logo} src={logo} alt="logo" />
        <img className={styles.logo__mobile} src={logoFooter} alt="logo" />
        <p className={styles.copyright}>2023. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

export default Footer