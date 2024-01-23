import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../image/compleon-solutions-logo.png'
import { IoIosArrowDown } from 'react-icons/io';

import logoFooter from '../../image/compleon-solutions-logo-footer_mobile.png'
import { articlesPATH, beratungPATH, datenschutzPATH, faqPATH, funktionenPATH, impressumPATH, kontaktPATH, prozessPATH, unternehmenPATH, wikiPATH } from '../../utils/constants';

function Footer() {

  useEffect(() => {
    if (isCompleon) {
      setIsCompleon(false);
    }
    if (isService) {
      setIsService(false);
    }
    if (isAktuelles) {
      setIsAktuelles(false);
    }
    if (isUberuns) {
      setIsUberuns(false);
    }
  },[])

  const switchClassNameMainLink = ({isActive}) => (isActive ? `${styles.link_main_active} ${styles.link_main}` : `${styles.link_main}`);
  const switchClassNameMinorLink = ({isActive}) => (isActive ? `${styles.link_minor_active} ${styles.link_minor}` : `${styles.link_minor}`);

  const [isCompleon, setIsCompleon] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isAktuelles, setIsAktuelles] = useState(false);
  const [isUberuns, setIsUberuns] = useState(false);


  const handelClickTitleCompleon = () => {
    setIsCompleon(prev => !prev);
    console.log('Compleon ' + `${isCompleon}`);

  };

  const handelClickTitleService = () => {
    setIsService(prev => !prev);
    console.log('Service ' + `${isService}`);
  };

  const handelClickTitleAktuelles = () => {
    setIsAktuelles(prev => !prev);
    console.log('Aktuelles ' + `${isAktuelles}`);
  };

  const handelClickTitleUberuns = () => {
    setIsUberuns(prev => !prev);
    console.log('beruns ' + `${isUberuns}`);
  };

  const handleDerect = () => {
    setIsCompleon(false);
    setIsService(false);
    setIsAktuelles(false);
    setIsUberuns(false);
    console.log('handleDerect');
  }


  return (
    <div className={styles.footer_wrapper} >
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
            onClick={handelClickTitleCompleon}
          />
          <label 
            className={isCompleon ? `${styles.accordion_label}`: `${styles.accordion_label__hidden}`}
            htmlFor="footer1"
            >
            Compleon
          </label>
          <div
            style={{maxHeight: isCompleon && '4000px'}} 
            className={styles.accordion_content}
          >
            <ul className={styles.link_column}>
              <li className={styles.link}>
                <a onClick={handleDerect} className={styles.link_minor} rel="noopener noreferrer" target="_blank" href="http://demo.compelon-solutions.de/">
                  Demo
                </a>
              </li>
              <li className={styles.link}>
                <a onClick={handleDerect} className={styles.link_minor} rel="noopener noreferrer" target="_blank" href="https://app.compleon-solutions.de/user/login">
                  Login
                </a>
              </li>
              <li className={styles.link}>
                <NavLink onClick={handleDerect}  className={switchClassNameMinorLink} to="">
                  Registrierung
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink onClick={handleDerect}  className={switchClassNameMinorLink} to={funktionenPATH}>
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
            onClick={handelClickTitleService}
          />
          <label
            className={isService ? `${styles.accordion_label}`: `${styles.accordion_label__hidden}`}
            htmlFor="footer2">
            Service
          </label>
          <div
            style={{maxHeight: isService && '4000px'}} 
            className={styles.accordion_content}>
            <ul className={styles.link_column}>
              <li className={styles.link}>
                <NavLink onClick={handleDerect} className={switchClassNameMinorLink} to={prozessPATH}>
                  Prozess
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink onClick={handleDerect} className={switchClassNameMinorLink} to={beratungPATH}>
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
            onClick={handelClickTitleAktuelles}
          />
          <label 
            className={isAktuelles ? `${styles.accordion_label}`: `${styles.accordion_label__hidden}`}
            htmlFor="footer3">
            Aktuelles
          </label>
          <div 
            style={{maxHeight: isAktuelles && '4000px'}} 
            className={styles.accordion_content}>
            <ul className={styles.link_column}>
              <li className={styles.link}>
                <NavLink onClick={handleDerect} className={switchClassNameMinorLink} to={articlesPATH}>
                  Fachartikel
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink onClick={handleDerect} className={switchClassNameMinorLink} to={faqPATH}>
                  FAQ
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink onClick={handleDerect} className={switchClassNameMinorLink} to={wikiPATH}>
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
            onClick={handelClickTitleUberuns}
          />
          <label
            className={isUberuns ? `${styles.accordion_label}`: `${styles.accordion_label__hidden}`}
             htmlFor="footer4">
            Über uns
          </label>
          <div 
            style={{maxHeight: isUberuns && '4000px'}} 
            className={styles.accordion_content}>
            <ul className={styles.link_column}>
              <li className={styles.link}>
                <NavLink onClick={handleDerect} className={switchClassNameMinorLink} to={kontaktPATH}>
                  Kontakt
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink onClick={handleDerect} className={switchClassNameMinorLink} to={unternehmenPATH}>
                  Unternehmen
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink onClick={handleDerect} className={switchClassNameMinorLink} to={impressumPATH}>
                  Impressum
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink onClick={handleDerect} className={switchClassNameMinorLink} to={datenschutzPATH}>
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
    </div>
  );
}

export default Footer