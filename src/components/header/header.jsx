import styles from "./Header.module.css";
import styles2 from "../Footer/Footer.module.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userSquare from "../../image/user-square.png";
import { articlesPATH, beratungPATH, faqPATH, funktionenPATH, kontaktPATH, prozessPATH, searchPATH, unternehmenPATH, wikiPATH } from "../../utils/constants";

const Header = () => {
  const switchClassNameMainLink = ({ isActive }) =>
    isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`;
  const switchClassNameMinorLink = ({ isActive }) =>
    isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`;

  const [isBurger, setIsBurger] = useState(false);

  const switchClassName = ({ isActive }) =>
    isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`;

  const handleOpenMenu = () => {
    setIsBurger((prev) => !prev);
  };

  const handleRoute = () => {
    if (isBurger) {
      setIsBurger(false);
    } else {
    }
  };

  return (
    <header
      className={isBurger ? `${styles.header_burger}` : `${styles.header}`}
    >
      <div className={styles.header_wrapper}>
        <NavLink to="/" className={styles.fff} onClick={handleRoute}>
          <svg viewBox="0 0 333 68" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M229.839 46.7815C229.149 46.7868 228.459 46.7322 227.778 46.6184C225.361 46.239 223.134 45.0836 221.432 43.3266L247.337 27.8613C246.247 24.6154 244.288 21.7301 241.674 19.5187C239.06 17.3072 235.89 15.8541 232.508 15.317C222.722 13.686 213.424 20.0916 211.6 30.9603C209.777 41.829 215.901 50.8888 226.014 52.5791C227.193 52.7906 228.389 52.9047 229.587 52.9202C229.913 52.9202 230.24 52.9202 230.551 52.9202C233.005 52.8913 235.416 52.2707 237.58 51.1112C239.701 50.0809 241.605 48.6511 243.185 46.9001C244.807 45.1031 246.075 43.0152 246.922 40.7466H240.175C239.165 42.5983 237.668 44.1391 235.847 45.2026C234.026 46.2662 231.948 46.8121 229.839 46.7815ZM218.288 31.8203C219.504 24.5992 225.406 20.3881 231.737 21.4409C234.68 21.9382 237.328 23.5266 239.151 25.8892L218.392 38.3445C217.889 36.2015 217.864 33.9742 218.318 31.8203H218.288Z" fill="#282882" /><path d="M22.2423 46.7519C15.4212 46.7519 10.5576 41.1025 10.5576 33.9703C10.5576 26.8382 15.2878 21.2481 22.4202 21.2481C27.2987 21.2481 30.5313 23.7837 32.548 27.9948H39.9621C38.8134 24.1944 36.4521 20.8746 33.239 18.5425C30.0258 16.2104 26.1375 14.9942 22.1681 15.0798C11.6548 15.0798 3.81066 23.5168 3.81066 34.3559C3.79106 36.7873 4.25356 39.1985 5.17142 41.4501C6.08929 43.7018 7.44432 45.7491 9.1582 47.474C10.8721 49.1988 12.9108 50.5669 15.1566 51.4992C17.4024 52.4314 19.8107 52.9094 22.2423 52.9054C26.1619 52.9338 29.988 51.7091 33.1624 49.4097C36.3367 47.1104 38.6932 43.8569 39.888 40.1239H32.37C31.5309 42.1094 30.1195 43.8001 28.3158 44.9805C26.5121 46.1609 24.3978 46.7776 22.2423 46.7519ZM64.0879 15.0798C53.0556 15.0798 44.4848 23.1906 44.4848 34.1038C44.4848 44.2163 53.5004 52.8461 63.6133 52.8461C68.6612 52.9389 73.5439 51.0479 77.2123 47.5793C80.8807 44.1107 83.0418 39.3414 83.2312 34.2966C83.2629 31.7705 82.7899 29.2634 81.84 26.9225C80.8901 24.5816 79.4824 22.4538 77.6995 20.664C75.9165 18.8742 73.7941 17.4584 71.4568 16.4994C69.1194 15.5405 66.6142 15.0579 64.0879 15.0798ZM63.643 46.7519C60.2609 46.7361 57.0235 45.3775 54.6431 42.975C52.2627 40.5724 50.9342 37.3227 50.9499 33.9407C50.9657 30.5587 52.3243 27.3214 54.727 24.9411C57.1296 22.5608 60.3795 21.2324 63.7616 21.2481C65.4363 21.2559 67.093 21.5935 68.6372 22.2415C70.1814 22.8896 71.5829 23.8354 72.7616 25.025C73.9402 26.2146 74.873 27.6248 75.5067 29.1749C76.1403 30.725 76.4625 32.3847 76.4547 34.0593C76.4469 35.7339 76.1093 37.3906 75.4613 38.9347C74.8132 40.4789 73.8673 41.8802 72.6777 43.0589C71.488 44.2375 70.0778 45.1702 68.5276 45.8039C66.9775 46.4375 65.3177 46.7596 63.643 46.7519ZM129.822 15.0798C124.113 15.0798 120.539 17.0371 117.959 21.1147C116.15 17.3485 111.479 15.0798 106.808 15.0798C104.81 14.9599 102.813 15.3421 101 16.1916C99.1868 17.0411 97.6153 18.3309 96.4285 19.9433H96.384V16.0584H90.1561V52.0009H96.903V31.8203C96.903 24.7475 99.8686 21.2481 105.8 21.2481C110.664 21.2481 113.97 24.0358 113.97 31.1086V52.0009H120.717V31.761C120.717 24.5547 123.312 21.2481 129.288 21.2481C134.923 21.2481 137.785 25.0737 137.785 31.8945V52.0009H144.532V30.2041C144.487 20.9219 139.164 15.0798 129.822 15.0798ZM172.186 15.0798C169.685 15.0232 167.209 15.5867 164.979 16.7199C162.748 17.8532 160.833 19.5209 159.404 21.5744H159.271V16.0584H153.117V64.0113H159.864V46.8112H159.998C162.326 50.7109 167.189 52.9054 172.646 52.9054C175.053 52.9076 177.437 52.4309 179.659 51.5031C181.88 50.5752 183.894 49.2147 185.585 47.5009C187.275 45.787 188.608 43.754 189.505 41.5201C190.402 39.2863 190.846 36.8963 190.811 34.4893C190.811 23.3833 182.893 15.0798 172.186 15.0798ZM172.008 46.7519C170.363 46.7311 168.738 46.382 167.228 45.7251C165.719 45.0681 164.357 44.1166 163.22 42.9261C162.083 41.7357 161.196 40.3304 160.609 38.7926C160.023 37.2547 159.749 35.6153 159.805 33.9703C159.805 27.283 164.995 21.2481 171.667 21.2481C175.007 21.3374 178.177 22.735 180.496 25.1396C182.815 27.5442 184.096 30.7635 184.064 34.1038C184.107 35.7269 183.829 37.3427 183.246 38.858C182.663 40.3734 181.786 41.7586 180.666 42.934C179.546 44.1094 178.204 45.0518 176.718 45.707C175.232 46.3622 173.632 46.7173 172.008 46.7519ZM197.617 3.98866V52.0009H204.379V3.98866H197.617ZM271.358 15.0798C260.326 15.0798 251.696 23.1906 251.696 34.1631C251.696 44.2756 260.712 52.9054 270.839 52.9054C275.902 53.0057 280.801 51.1101 284.478 47.628C288.154 44.1459 290.313 39.3571 290.487 34.2966C290.521 31.7712 290.049 29.2645 289.101 26.9236C288.153 24.5828 286.747 22.4549 284.965 20.6649C283.183 18.8748 281.062 17.4587 278.725 16.4997C276.389 15.5406 273.884 15.0579 271.358 15.0798ZM270.899 46.7519C267.517 46.7342 264.28 45.3737 261.901 42.9697C259.522 40.5658 258.195 37.3153 258.213 33.9333C258.231 30.5513 259.591 27.3148 261.995 24.9359C264.399 22.557 267.65 21.2304 271.032 21.2481C272.707 21.2569 274.363 21.5954 275.907 22.2444C277.451 22.8933 278.852 23.8399 280.03 25.0303C281.208 26.2206 282.14 27.6312 282.773 29.1817C283.405 30.7322 283.727 32.3921 283.718 34.0667C283.709 35.7413 283.371 37.3978 282.722 38.9416C282.073 40.4853 281.126 41.8862 279.936 43.0641C278.745 44.242 277.334 45.174 275.784 45.8067C274.233 46.4395 272.573 46.7606 270.899 46.7519ZM314.242 15.0798C312.233 14.9814 310.23 15.3664 308.401 16.2023C306.571 17.0383 304.969 18.3008 303.729 19.884H303.595V16.0584H297.308V52.0009H304.055V32.3393C304.055 25.5927 307.628 21.2481 313.53 21.2481C319.432 21.2481 322.427 24.8216 322.427 32.4134V52.0009H329.174V30.4562C329.263 20.5364 322.902 15.0798 314.272 15.0798H314.242Z" fill="#282882"/>
          </svg>
        </NavLink>
        <nav
          className={
            isBurger
              ? `${styles.nav_container} ${styles.nav_container_burger}`
              : `${styles.nav_container}`
          }
        >
          <ul className={styles.nav_list}>
            <li className={`${styles.nav_item} ${styles.nav_item_dropdown}`}>
              <div className={`${styles2.links_container_columns} ${styles.links_container_columns__header}`}>
                <NavLink className={switchClassNameMainLink} to="#">
                  Software
                </NavLink>
                <ul
                  className={`${styles2.link_column} ${styles.link_column__header}`}
                >
                  <li className={`${styles2.link} ${styles.link__header}`}>
                    <NavLink className={switchClassNameMinorLink} to={funktionenPATH} onClick={handleRoute}>
                      Funktionen
                    </NavLink>
                  </li>
                  <li className={`${styles2.link} ${styles.link__header}`}>
                    <NavLink className={switchClassNameMinorLink} to={searchPATH} onClick={handleRoute}>
                      Normsuche
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className={styles.header__inner}>
                <p className={styles.header__hover}>Software</p>
                <ul className={styles.header__lists}>
                  <li className={styles.header__list}>
                    <NavLink to={funktionenPATH} className={styles.header__link} onClick={handleRoute}>
                      Funktionen
                    </NavLink>
                  </li>
                  <li className={styles.header__list}>
                    <NavLink to={searchPATH} className={styles.header__link} onClick={handleRoute}>
                       Normsuche
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li className={`${styles.nav_item} ${styles.nav_item_dropdown}`}>
              <div
                className={`${styles2.links_container_columns} ${styles.links_container_columns__header}`}
              >
                <NavLink className={switchClassNameMainLink} to="" >
                  Service
                </NavLink>
                <ul
                  className={`${styles2.link_column} ${styles.link_column__header}`}
                >
                  <li className={`${styles2.link} ${styles.link__header}`}>
                    <NavLink className={styles.link} to={prozessPATH} onClick={handleRoute}>
                      Prozess
                    </NavLink>
                  </li>
                  <li className={`${styles2.link} ${styles.link__header}`}>
                    <NavLink className={switchClassNameMinorLink} to={beratungPATH} onClick={handleRoute}>
                      Beratung
                    </NavLink>
                  </li>
                  <li className={`${styles2.link} ${styles.link__header}`}>
                    <NavLink className={switchClassNameMinorLink} to={unternehmenPATH} onClick={handleRoute}>
                      Unternehmen
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className={styles.header__inner}>
                <p className={styles.header__hover}>Service</p>
                <ul className={styles.header__lists}>
                  <li className={styles.header__list}>
                    <NavLink to={prozessPATH} className={styles.header__link} onClick={handleRoute}>
                     Prozess
                    </NavLink>
                  </li>
                  <li className={styles.header__list}>
                    <NavLink to={beratungPATH} className={styles.header__link} onClick={handleRoute}>
                      Beratung
                    </NavLink>
                  </li>
                  <li className={styles.header__list}>
                    <NavLink to={unternehmenPATH} className={styles.header__link} onClick={handleRoute}>
                      Unternehmen
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li className={`${styles.nav_item} ${styles.nav_item_dropdown}`}>
              <div
                className={`${styles2.links_container_columns} ${styles.links_container_columns__header}`}
              >
                <NavLink className={switchClassNameMainLink} to="" >
                  Aktuelles
                </NavLink>
                <ul
                  className={`${styles2.link_column} ${styles.link_column__header}`}
                >
                  <li className={`${styles2.link} ${styles.link__header}`}>
                    <NavLink className={switchClassNameMinorLink} to={articlesPATH} onClick={handleRoute}>
                      Fachartikel
                    </NavLink>
                  </li>
                  <li className={`${styles2.link} ${styles.link__header}`}>
                    <NavLink className={switchClassNameMinorLink} to={faqPATH} onClick={handleRoute}>
                      FAQ
                    </NavLink>
                  </li>
                  <li className={`${styles2.link} ${styles.link__header}`}>
                    <NavLink className={switchClassNameMinorLink} to={wikiPATH} onClick={handleRoute}>
                      Wiki
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className={styles.header__inner}>
                <p className={styles.header__hover}>Aktuelles</p>
                <ul className={styles.header__lists}>
                  <li className={styles.header__list}>
                    <NavLink to={articlesPATH} className={styles.header__link} onClick={handleRoute}>
                      Fachartikel
                    </NavLink>
                  </li>
                  <li className={styles.header__list}>
                    <NavLink to={faqPATH} className={styles.header__link} onClick={handleRoute}>
                      FAQ
                    </NavLink>
                  </li>
                  <li className={styles.header__list}>
                    <NavLink to={wikiPATH} className={styles.header__link} onClick={handleRoute}>
                      Wiki
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div
            className={`${styles.right_nav_container} ${styles.right_nav_container__mobile}`}
          >
            <NavLink style={{ textDecoration: "none" }} to={kontaktPATH}>
              <button className={styles.button_contact} onClick={handleRoute}>Kontakt</button>
            </NavLink>
            <Link
              to={'http://app.compleon-solutions.de'}
            >
              <img
                className={styles.right_nav_image}
                src={userSquare}
                alt="icon"
              />
            </Link>
          </div>
        </nav>

        <div className={styles.right_nav_container}>
          <NavLink style={{ textDecoration: "none" }} to={kontaktPATH}>
            <button className={styles.button_contact} onClick={handleRoute}>Kontakt</button>
          </NavLink>
          <Link
            to={"http://app.compleon-solutions.de"}
            // state={{ background: location }}
          >
            <img
              className={styles.right_nav_image}
              src={userSquare}
              alt="icon"
            />
          </Link>
        </div>
        <button
          className={
            isBurger
              ? `${styles.burger_icon} ${styles.burger_icon_active}`
              : `${styles.burger_icon}`
          }
          onClick={handleOpenMenu}
        >
          <span className={styles.burger_span}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
