import React from 'react'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../image/compleon-solutions-logo.png'
import { IoIosArrowDown } from 'react-icons/io';

import logoFooter from '../../image/compleon-solutions-logo-footer_mobile.png'

function Footer() {

  const switchClassNameMainLink = ({isActive}) => (isActive ? `${styles.link_main_active} ${styles.link_main}` : `${styles.link_main}`);
  const switchClassNameMinorLink = ({isActive}) => (isActive ? `${styles.link_minor_active} ${styles.link_minor}` : `${styles.link_minor}`);

  return (
    <footer className={styles.footer}>
      <ul className={styles.links_container}>
        <li className={styles.links_container_columns}>
          <NavLink className={switchClassNameMainLink} href="#">
            Compleon 
            <IoIosArrowDown className={styles.icon} />
          </NavLink>
          <ul className={styles.link_column}>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to =''>
                Demo ansehen
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to=''>
                Login
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to=''>
                Registrierung
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to=''>
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
              <NavLink className={switchClassNameMinorLink} to=''>
                Prozess
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to=''>
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
              <NavLink className={switchClassNameMinorLink} to=''>
              Fachartikel
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to=''>
              FAQ
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to=''>
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
              <NavLink className={switchClassNameMinorLink} to=''>
                Kontakt
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to=''>
                Unternehmen
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to=''>
                Impressum
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink className={switchClassNameMinorLink} to=''>
                Datenschutz
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>

      <div className={styles.logo_copyright_container}>
        <img className={styles.logo} src={logo} alt="" />
        <img className={styles.logo__mobile} src={logoFooter} alt="" />
        <p className={styles.copyright}>2023. Alle Rechte vorbehalten.</p>
      </div>

    </footer>
  )
}

export default Footer