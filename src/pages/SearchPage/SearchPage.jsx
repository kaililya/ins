import React, { useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaws } from "../../services/thunks/swagger-thunk";
import { setIsDerectedToSeachPage } from "../../services/slices/initialSlice";
import { TailSpin } from "react-loader-spinner";


function SearchPage({ isSubTitle }) {
  const dispatch = useDispatch();
  const { inputValue: prevInput, isDerectedToSeachPage } = useSelector((store) => store.swaggerDataReducer);

  const [inputValue, setInputValue] = useState(prevInput); 

  const { getLawsRequest, getLawsRequestSuccess, getLawsRequestFailed } = useSelector((store) => store.swaggerDataReducer);

  const lawsArray = useSelector((store) => store.swaggerDataReducer.lawsData) || [];

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isDerectedToSeachPage) {
      dispatch(fetchLaws(prevInput, 1, 10));
      dispatch(setIsDerectedToSeachPage(false));
    }
  }, []); 



  const switchClassNameMainLink = ({ isActive }) =>
    isActive
      ? `${styles.link_major_active} ${styles.link_major}`
      : `${styles.link_major}`;
  const switchClassNameMinorLink = ({ isActive }) =>
    isActive
      ? `${styles.link_minor_active} ${styles.link_minor}`
      : `${styles.link_minor}`;
      
 
  const handleSearch = (e) => {
    e.preventDefault()
    if (inputValue) {
      dispatch(fetchLaws(inputValue, 1, 10));
    }
  }

  return (
    <section className={styles.main_section}>
      <div className={styles.main_container}>
        <h2 className={styles.title}>Ihre Normen in unserem Kataster</h2>
        {isSubTitle && (
          <p className={styles.sub_title}>
            Ihr Unter­nehmen ist so indivi­duell wie die Arbeitswelt. Deshalb
            erhalten Sie mehr als eine Software: Wir begleiten Sie von Anfang an
            beim Aufbau eines indivi­du­ellen Rechts­ka­tasters. Sie arbeiten
            mit einer umfang­reichen Datenbank und erledigen Ihre
            Compliance-Audits. Auch gern mit unserer Hilfe.
          </p>
        )}
        <form className={styles.input_container}>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className={styles.input}
            type="text"
            placeholder="Prüfen Sie hier Ihre Norm"
          />
          <button type="submit" className={styles.button_sent} onClick={handleSearch}>
            Prüfen
          </button>
        </form>
      </div>

      <div className={styles.result_container_wrapper}>
        {getLawsRequest && (
          <TailSpin color="#292982" radius={"2px"} className={styles.spiner} />
        )}
        {(getLawsRequestSuccess && lawsArray.length) === 0 && (
          <h3 className={`${styles.link_major}`}>Kein Gesetz gefunden</h3>
        )}
        {getLawsRequestFailed && (
          <h3 className={`${styles.link_major} ${styles.link_major__warning}`}>An dieser Stelle wurde noch kein Content generiert. Bei Fragen zum Inhalt wenden Sie sich bitte per Kontaktformular an uns. Vielen Dank.</h3>
        )}
        {!getLawsRequest && (
          <ul className={styles.links_container}>
          {lawsArray.map((law) => (
            <li className={styles.links_container_columns} key={law.id}>
              <a 
                className={law?.link1 !== null ? `${styles.links_container_columns__link}` : `${styles.links_container_columns__link__no_link}`}
                href={law.link1}
                target="_blank"
              >
                <h3 className={law?.link1 !== null ?  `${styles.link_major}` : `${styles.link_major__no_link}`}>
                  {law.shortName}
                </h3>
                <ul className={styles.link_column}>
                  <li className={styles.link}>
                    <p className={styles.paragraff}>{law.name}</p>
                    {/* <p className={styles.paragraff}>
                    </p> */}
                    {/* <p className={styles.nested_link}>Link zur Norm</p> */}
                  </li>
                </ul>
              </a>
            </li>
          ))}
        </ul>
        )}
        
      </div>
    </section>
  );
}

export default SearchPage;
