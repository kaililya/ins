import React, { useState } from "react";
import styles from './Input.module.css'
import { NavLink } from "react-router-dom";

function Input({isSubTitle}) {

  const [inputValue, setInputValue] = useState(null);
  const [isPending, setIsPending] = useState(false);
  
  console.log(inputValue)

  
  const switchClassNameMainLink = ({isActive}) => (isActive ? `${styles.link_major_active} ${styles.link_major}` : `${styles.link_major}`);
  const switchClassNameMinorLink = ({isActive}) => (isActive ? `${styles.link_minor_active} ${styles.link_minor}` : `${styles.link_minor}`);

  
  return (  
  <section className={styles.main_container}>
    <h2 className={styles.title}>
      In 4 Schritten  rechts­sicher agieren
    </h2>
    {isSubTitle && (
      <p className={styles.sub_title}>
        Ihr Unter­nehmen ist so indivi­duell wie die Arbeitswelt. Deshalb erhalten Sie mehr als eine Software: Wir begleiten Sie von Anfang an beim Aufbau eines indivi­du­ellen Rechts­ka­tasters. Sie arbeiten mit einer umfang­reichen Datenbank und erledigen Ihre Compliance-Audits. Auch gern mit unserer Hilfe.
      </p>
    )}
    <div className={styles.input_container}>
     <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} className={styles.input} type="text" placeholder="Prüfen Sie hier Ihre Norm" />
     <button
      className={styles.button_sent}
      onClick={() => {setIsPending(prev =>!prev)}}
     >Prüfen
     </button>

     {isPending && (
      <div className={styles.result_container_wrapper}>
        <ul className={styles.links_container}>
          <li className={styles.links_container_columns}>
            <NavLink className={switchClassNameMainLink} href="#">
               Kurzbezeichnung 
            </NavLink>
            <ul className={styles.link_column}>
              <li className={styles.link}>
                <p className={styles.symbol} to=''>
                  BImSchV  
                </p>
                <p className={styles.paragraff} >
                  Diese Verordnung gilt für die Errichtung, die Beschaffenheit und den Betrieb von Feuerungsanlagen, die keiner Genehmigung nach § 4 des Bundes-Immissionsschutzgesetzes bedürfen, mit Ausnahme von Feuerungsanlagen zur 
                </p>
                <NavLink className={styles.nested_link} to=''>
                  Link zur Norm
                </NavLink>
              </li>
              
            </ul>
          </li>
          
        </ul>
      </div>
     )}
    </div>
  </section>
  )
}

export default Input;
