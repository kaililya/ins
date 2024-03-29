import React, { useEffect, useState } from "react";
import styles from "./Input.module.css";
import { useNavigate } from "react-router-dom";
import { searchPATH } from "../../utils/constants";
import { fetchLaws } from "../../services/thunks/swagger-thunk";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import {
  setInputValueAction,
  setIsDerectedToSeachPage,
} from "../../services/slices/initialSlice";

function Input({ isSubTitle }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
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

  const { getLawsRequest, getLawsRequestSuccess, getLawsRequestFailed } =
    useSelector((store) => store.swaggerDataReducer);
  const lawsArray =
    useSelector((store) => store.swaggerDataReducer.lawsData) || [];

  const handleRederect = () => {
    dispatch(setIsDerectedToSeachPage(true));
  };

  return (
    <section className={styles.main_container}>
      <h2 className={styles.title}>Ihre Normen in unserem Kataster</h2>
      {isSubTitle && (
        <p className={styles.sub_title}>
          Unser Normenticker hält Sie über die Änderungen zu den wichtigsten
          Normen auf dem Laufenden. Auf Wunsch können auch spezifische Normen
          integriert werden - Sprechen Sie uns an!
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
          <div
            className={
              getLawsRequest ||
              (getLawsRequestSuccess && inputValue.length !== 0)
                ? `${styles.result_container_wrapper} ${styles.result_container_wrapper__not_hidden}`
                : `${styles.result_container_wrapper}`
            }
          >
            <ul className={styles.links_container}>
              {getLawsRequestFailed && (
                <h3
                  className={`${styles.link_major} ${styles.link_major__warning}`}
                >
An dieser Stelle wurde noch kein Content generiert. Bei Fragen zum Inhalt wenden Sie sich bitte per Kontaktformular an uns. Vielen Dank.
                </h3>
              )}
              {getLawsRequest && (
                <div className={styles.spiner}>
                  <TailSpin
                    color="#292982"
                    radius={"2px"}
                    className={styles.spiner}
                  />
                </div>
              )}
              {(getLawsRequestSuccess && lawsArray.length) === 0 && (
                <h3
                  className={`${styles.link_major} ${styles.link_major__warning}`}
                >
                  Kein Gesetz gefunden
                </h3>
              )}
              {getLawsRequestSuccess &&
                inputValue.length !== 0 &&
                !getLawsRequest &&
                lawsArray.map((law) => (
                  <li className={styles.links_container_columns} key={law.id}>
                    <a
                      target="_blank"
                      href={law.link1}
                      className={
                        law?.link1 !== null
                          ? `${styles.link_wrapper}`
                          : `${styles.link_wrapper__no_link}`
                      }
                    >
                      <input
                        className={styles.accordion_trigger}
                        type="checkbox"
                        name="accordion"
                        id={law.id}
                      />
                      <label
                        className={
                          law?.link1 !== null
                            ? `${styles.link_major} ${styles.accordion_label}`
                            : `${styles.link_major__no_link} ${styles.accordion_label}`
                        }
                        htmlFor={law.id}
                      >
                        {law.name}
                      </label>
                      <div className={styles.accordion_content}>
                        <ul className={styles.link_column}>
                          <li className={styles.link}>
                            <p className={styles.symbol}>{law.shortName}</p>
                            <p
                              className={
                                law?.link1 !== null
                                  ? `${styles.nested_link}`
                                  : `${styles.nested_link__no_link}`
                              }
                            >
                              Link zur Norm
                            </p>
                          </li>
                        </ul>
                        {/* <p className={styles.accordion_text}>
                          
                          {item.Answer}
                        </p> */}
                      </div>
                      {/* <h3
                        className={
                          law?.link1 !== null
                            ? `${styles.link_major}`
                            : `${styles.link_major__no_link}`
                        }
                      >
                        {law.name}
                      </h3> */}
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
