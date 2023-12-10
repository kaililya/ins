import React from "react";
import styles from './FirmPage.module.css'
import targetIcon from '../../image/target-icon.png'
import consultingIcon from '../../image/consulting-icon.png'
import devopsIcon from '../../image/devops-icon.png'


function FirmPage() {
  return (
    <section className={styles.main_container}>
      <div className={styles.direction_container}>
        <div className={styles.direction_item}>
          <img className={styles.image} src={targetIcon} alt="" />
          <h3 className={styles.title}>Zwei Unternehmen – ein gemeinsames Ziel.</h3>
          <p className={styles.text}>Wir unterstützen unsere Kunden als zuverlässiger Partner in den Bereichen Qualität, Gesundheit, Sicherheit und Umweltschutz (Quality, Health, Safety, Environment – QHSE) von drei Standorten in Deutschland. Pragmatismus, Vertrauen und eine ganzheitliche Betrachtungsweise kennzeichnen unsere Beratungsleistungen und Softwareprodukte.</p>
        </div>
        <div className={styles.direction_item}>
          <img className={styles.image} src={consultingIcon} alt="" />
          <div className={styles.title_container}>
            <h3 className={styles.title}>BERATUNG</h3>
            <h4 className={styles.sub_title}>UUB Schwan</h4> 
          </div> 
          <p className={styles.text}>Wir sind ein etabliertes Beratungsunternehmen im QHSE-Bereich, das seit 20 Jahren Unternehmen aus vielfältigen Branchen berät und begleitet. Grundsatz unserer Beratung ist ein ganzheitlicher Ansatz, in dem wir die Vielfältigkeit aller QHSE-Themen eines Unternehmens berücksichtigen. Seit vielen Jahren arbeiten wir nicht nur als Berater, sondern als beauftragte Personen in den Firmen unserer Kunden und damit Hand in Hand mit den verantwortlichen Mitarbeitern. Diese vertrauensvolle Aufgabe ermöglicht es uns, pragmatische Lösungsansätze zu finden und die Arbeit für uns und unsere Kunden zu vereinfachen. Ein hohes Maß an Individualität kennzeichnet unsere Beratungs- und Softwareprodukte wie Compleon Solutions. Die fachliche Expertise unserer Berater flankiert dabei die umfassenden Features der Software – so entsteht eine optimale Dienstleistung für unsere Kunden.</p>
        </div>
        <div className={styles.direction_item}>
          <img className={styles.image} src={devopsIcon} alt="" />
          <div className={styles.title_container}>
            <h3 className={styles.title}>SOFTWARE</h3>
            <h4 className={styles.sub_title}>UUB IT</h4> 
          </div> 
          <p className={styles.text}>Die UUB-IT UG ist eine Ausgründung aus dem Beratungsgeschäft der UUB Schwan GmbH. Mit dieser neuen Firmierung geben wir der Bereitstellung und Weiterentwicklung unserer Softwareprodukte einen hohen Stellenwert. Die Komplexität der QHSE-Themen wächst ständig und unterliegt fortwährender Entwicklung. Mit softwaregesteuerten Tools unterstützen wir unsere Kunden bei ihren eigenen Transformationsprozessen in einer Zeit des digitalen Wandels. Innovation und ständige Verbesserung unserer Softwareleistungen werden durch die vertrauensvolle Zusammenarbeit von Beratern und Kunden gewährleistet. Auch hier stehen hohe Qualität und Kundenzufriedenheit für uns an erster Stelle. Deshalb erhalten unsere Kunden mit Compleon Solutions ein anwenderfreundliches Produkt, eine vollumfänglich befüllte Rechtsdatenbank – und damit ein Stück Sicherheit für den Unternehmensalltag.</p>
        </div>
      </div>
    </section>
  );
}

export default FirmPage;
