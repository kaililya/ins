import React, { useEffect, useState } from "react";
import styles from "./Input.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { searchPATH } from "../../utils/constants";
import axios from "axios";
import { fetchLaws } from "../../services/thunks/swagger-thunk";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { setInputValueAction, setIsDerectedToSeachPage } from "../../services/slices/initialSlice";

function Input({ isSubTitle }) {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [isPending, setIsPending] = useState(false);

  const switchClassNameMainLink = ({ isActive }) =>
    isActive
      ? `${styles.link_major_active} ${styles.link_major}`
      : `${styles.link_major}`;
  const switchClassNameMinorLink = ({ isActive }) =>
    isActive
      ? `${styles.link_minor_active} ${styles.link_minor}`
      : `${styles.link_minor}`;
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputValue) {
      dispatch(fetchLaws(inputValue, 1, 10));
      dispatch(setInputValueAction(inputValue));
    }
    
  }, [inputValue]);

  // console.log(inputValue.length);  


  const { getLawsRequest, getLawsRequestSuccess, getLawsRequestFailed } = useSelector((store) => store.swaggerDataReducer);
  const lawsArray = useSelector((store) => store.swaggerDataReducer.lawsData) || [];

  const handleRederect = () => {
    dispatch(setIsDerectedToSeachPage(true));
  }

  return (
    <section className={styles.main_container}>
      <h2 className={styles.title}>In 4 Schritten rechts­sicher agieren</h2>
      {isSubTitle && (
        <p className={styles.sub_title}>
          Ihr Unter­nehmen ist so indivi­duell wie die Arbeitswelt. Deshalb
          erhalten Sie mehr als eine Software: Wir begleiten Sie von Anfang an
          beim Aufbau eines indivi­du­ellen Rechts­ka­tasters. Sie arbeiten mit
          einer umfang­reichen Datenbank und erledigen Ihre Compliance-Audits.
          Auch gern mit unserer Hilfe.
        </p>
      )}

      <div className={styles.input_container}>
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className={styles.input}
          type="text"
          placeholder="Prüfen Sie hier Ihre Norm"
        />
        <button
          className={styles.button_sent}
          onClick={() => {
            navigate(searchPATH);
            handleRederect();
          }}
        >
          Prüfen
        </button>

        {true && (
          <div className={getLawsRequest || (getLawsRequestSuccess && inputValue.length !== 0 ) ? `${styles.result_container_wrapper} ${styles.result_container_wrapper__not_hidden}` : `${styles.result_container_wrapper}`}>
            <ul className={styles.links_container}>
              {getLawsRequestFailed && (
                <h3 className={`${styles.link_major} ${styles.link_major__warning}`}>Die Suche funktioniert nicht. Versuchen Sie es später erneut</h3>
              )}
              {getLawsRequest && 
                <TailSpin color="#292982" radius={"2px"} className={styles.spiner} />
              }
              {(getLawsRequestSuccess && lawsArray.length) === 0 && (
                <h3 className={`${styles.link_major} ${styles.link_major__warning}`}>Kein Gesetz gefunden</h3>
              )}
              {(getLawsRequestSuccess && inputValue.length !== 0 && !getLawsRequest)  &&
                lawsArray.map((law) => (
                  <li className={styles.links_container_columns} key={law.id}>
                    <a  
                      target="_blank"
                      href={law.link1} 
                      className={law?.link1 !== null ? `${styles.link_wrapper}`: `${styles.link_wrapper__no_link}`}
                    >
                      <h3 className={law?.link1 !== null ?  `${styles.link_major}` : `${styles.link_major__no_link}`}>{law.name}</h3>
                      <ul className={styles.link_column}>
                        <li className={styles.link}>
                          <p className={styles.symbol}>
                            {law.shortName}
                          </p>
                          <p className={styles.nested_link}>Link zur Norm</p>
                        </li>
                      </ul>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Input;
