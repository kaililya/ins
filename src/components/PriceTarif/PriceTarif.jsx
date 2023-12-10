import React from "react";
import styles from './PriceTarif.module.css'
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';



function PriceTarif() {
  return (
    <section className={styles.main_container}>
      <ul className={styles.tarif_container}>
        <li className={styles.tarif_item}>
          <h2 className={styles.title}>Free</h2>
          <p className={styles.sub_title}>
            Testversion mit einer Auswahl an 20 Rechtsnormen
          </p>
          <ul className={styles.features_container}>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>Rechts­än­de­rungen Update</p>
            </li>
            <li className={styles.features_item}>
              <RxCross2 className={styles.sign__unallowable} />
              <p className={`${styles.feature_text} ${styles.feature_text__unallowable}`}>Rollen- und Nutzerkonzept</p>
            </li>
          </ul>
          <p className={styles.price}>kostenfrei</p>
          <div className={styles.button}>
            Regis­trieren & einrichten
          </div>

        </li>
        <li className={`${styles.tarif_item} ${styles.tarif_item__active}`}>
          <h2 className={styles.title}>Basic</h2>
          <p className={styles.sub_title}>
            für kleine und mittel­stän­dische Unternehmen
          </p>
          <ul className={styles.features_container}>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>Rechts­än­de­rungen Update</p>
            </li>
            <li className={styles.features_item}>
              <RxCross2 className={styles.sign__unallowable} />
              <p className={`${styles.feature_text} ${styles.feature_text__unallowable}`}>Rollen- und Nutzerkonzept</p>
            </li>
          </ul>
          <p className={styles.price}><span className={styles.price_value}>ab 250€</span>/ Monat*</p>
          <div className={styles.button}>
            Jetzt Angebot anfragen
          </div>
          <p className={styles.additional_text}>* ggf. zzgl. Einrichtungskosten</p>

        </li>
        <li className={styles.tarif_item}>
          <h2 className={styles.title}>Enter­prise</h2>
          <p className={styles.sub_title}>
            für große Unter­nehmen mit mehreren Standorten
          </p>
          <ul className={styles.features_container}>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>Rechts­än­de­rungen Update</p>
            </li>
            <li className={styles.features_item}>
              <RxCross2 className={styles.sign__unallowable} />
              <p className={`${styles.feature_text} ${styles.feature_text__unallowable}`}>Rollen- und Nutzerkonzept</p>
            </li>
            
          </ul>
          <p className={styles.price}><span className={styles.price_value}>ab 250€</span>/ Monat*</p>
          <div className={styles.button}>
            Sprechen Sie uns an
          </div>
          <p className={styles.additional_text}>Tel. 030 930 2981 916</p>
          <p className={styles.additional_text}>contact@​compleon-​solutions.​de</p>
        </li>
      </ul>
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`mySwiper ${styles.wrapper}`}
      >
        <SwiperSlide className={styles.swiper_slide} >
          <li className={styles.tarif_item}>
            <h2 className={styles.title}>Free</h2>
            <p className={styles.sub_title}>
              Testversion mit einer Auswahl an 20 Rechtsnormen
            </p>
            <ul className={styles.features_container}>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>Rechts­än­de­rungen Update</p>
              </li>
              <li className={styles.features_item}>
                <RxCross2 className={styles.sign__unallowable} />
                <p className={`${styles.feature_text} ${styles.feature_text__unallowable}`}>Rollen- und Nutzerkonzept</p>
              </li>
            </ul>
            <p className={styles.price}>kostenfrei</p>
            <div className={styles.button}>
              Regis­trieren & einrichten
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <li className={`${styles.tarif_item} ${styles.tarif_item__active}`}>
            <h2 className={styles.title}>Basic</h2>
            <p className={styles.sub_title}>
             für kleine und mittel­stän­dische Unternehmen
            </p>
            <ul className={styles.features_container}>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>Rechts­än­de­rungen Update</p>
              </li>
              <li className={styles.features_item}>
                <RxCross2 className={styles.sign__unallowable} />
                <p className={`${styles.feature_text} ${styles.feature_text__unallowable}`}>Rollen- und Nutzerkonzept</p>
              </li>
            </ul>
            <p className={styles.price}><span className={styles.price_value}>ab 250€</span>/ Monat*</p>
            <div className={styles.button}>
              Jetzt Angebot anfragen
            </div>
            <p className={styles.additional_text}>* ggf. zzgl. Einrichtungskosten</p>
          </li>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <li className={styles.tarif_item}>
            <h2 className={styles.title}>Enter­prise</h2>
            <p className={styles.sub_title}>
              für große Unter­nehmen mit mehreren Standorten
            </p>
            <ul className={styles.features_container}>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>Rechts­än­de­rungen Update</p>
              </li>
              <li className={styles.features_item}>
                <RxCross2 className={styles.sign__unallowable} />
                <p className={`${styles.feature_text} ${styles.feature_text__unallowable}`}>Rollen- und Nutzerkonzept</p>
              </li>
            </ul>
            <p className={styles.price}><span className={styles.price_value}>ab 250€</span>/ Monat*</p>
            <div className={styles.button}>
              Sprechen Sie uns an
            </div>
            <p className={styles.additional_text}>Tel. 030 930 2981 916</p>
            <p className={styles.additional_text}>contact@​compleon-​solutions.​de</p>
          </li>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default PriceTarif;
