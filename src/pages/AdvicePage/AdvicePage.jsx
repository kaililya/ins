import React, { useEffect } from "react";
import styles from "./AdvicePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetBeratungThunk } from "../../services/thunks/swagger-thunk";
import { TailSpin } from "react-loader-spinner";
import { BiSolidError } from "react-icons/bi";

// TODO
// вернутс к advice_item заданию динаминых падингов


function AdvicePage({ isSpoiler }) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchGetBeratungThunk());
  }, []);

  const {
    getBeratungRequest,
    getBeratungRequestFailed,
  } = useSelector((store) => store.swaggerDataReducer);

  const beratungData =
    useSelector((store) => store.swaggerDataReducer.beratungData) || [];

  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper}>
        <div className={styles.background}>
        {isSpoiler && (<p className={styles.spoiler}>BERATUNG</p>)}
          <h2 className={styles.title}>
            Pragmatische Beratung, in einer Zeit voller Wandel.
          </h2>
          <p className={styles.sub_title}>
            Compliance ist ein komplexes Thema, das stetigem Wandel unterliegt.
            Gut, wenn man einen verlässlichen Partner an seiner Seite hat.
            Rechtskatastererstellung, Auslegung von Rechtspflichten, monatliche
            Reportings oder Compliance Audits – wir beraten Sie.
          </p>
        </div>
        <h3 className={styles.title_second}>
          SOFTWARE PLUS BERATUNG - Individuell UND AKKURAT.
        </h3>
        {/* <span className={`${styles.title_second} ${styles.title_second__no_uper}`}>SS</span> */}
        <p className={styles.sub_title_second}>
          Mit unserer Beratung sind Sie jederzeit auf der sicheren Seite. Wir
          sorgen für Entlastung und Effizienz durch unsere jahrelange Erfahrung.
          Sie haben Zeit für Ihr Hauptgeschäft.
        </p>
        {!getBeratungRequest &&
          (getBeratungRequestFailed || beratungData.length === 0) && (
            <div className={styles.failed_container}>
              <BiSolidError className={styles.error_sign} size={80} />
              <h3
                className={`${styles.advice_title} ${styles.advice_title__warning}`}
              >
                An dieser Stelle wurde noch kein Content generiert. Bei Fragen zum Inhalt wenden Sie sich bitte per Kontaktformular an uns. Vielen Dank.
              </h3>
            </div>
          )}
        {getBeratungRequest && (
          <div className={styles.spiner}>
            <TailSpin
              color="#292982"
              radius={"3px"}
              width={100}
              height={100}
              wrapperClass={styles.spiner}
            />
          </div>
        )}
        <ul className={styles.advice_container}>
          {beratungData.map((advice) => (
            <li key={advice.id} className={styles.advice_item}>
              <h4 className={styles.advice_title}>
                {advice.attributes.Title}
              </h4>
              <div className={styles.figure_direct} />
              <p className={styles.advice_sub_title}>
                {advice.attributes.Description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdvicePage;
