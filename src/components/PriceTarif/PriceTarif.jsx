import React, { useEffect, useMemo, useState } from "react";
import styles from "./PriceTarif.module.css";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPriceThunk } from "../../services/thunks/swagger-thunk";
import { TailSpin } from "react-loader-spinner";
import { BiSolidError } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";

function PriceTarif() {
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    dispatch(fetchGetPriceThunk());

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const countOfReview = useMemo(() => {
    if (windowWidth <= 680) {
      return 1;
    } else {
      return 2;
    }
  }, [windowWidth]);

  const { getPriceRequest, getPriceRequestSuccess, getPriceRequestFailed } =
    useSelector((store) => store.swaggerDataReducer);

  const priceData =
    useSelector((store) => store.swaggerDataReducer.priceData) || [];

  const {pathname} = useLocation();
  console.log(pathname);

  
  return (
    <section
    className={
      (pathname === "/function")
        ? `${styles.main_container__function}`
        : `${styles.main_container}`
    }
    // className={styles.main_container}
    >
      {!getPriceRequest &&
       (getPriceRequestFailed || priceData.length === 0) && (
          <div className={styles.failed_container}>
            <BiSolidError className={styles.error_sign} size={80} />
            <h3
              className={`${styles.advice_title} ${styles.advice_title__warning}`}
            >
             Die Tarife konnten nicht geladen werden. Versuchen Sie einen Neustart oder besuchen Sie diese Seite später.
            </h3>
          </div>
        )}
      {getPriceRequest && (
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
      <ul className={styles.tarif_container}>
        {priceData.map((item, id) => (
          <li key={item.id}
            style={{border: id === 1 ? '1px solid #EC5E43' : ''}}
            className={styles.tarif_item}>
            <h2 className={styles.title}>
              {item.attributes.Title}
            </h2>
            <p className={styles.sub_title}>
              {item.attributes.Subtitle}
            </p>
            <ul className={styles.features_container}>
              {item.attributes.items.map((item) => (
              <li key={item.id} className={styles.features_item}>
                {item.status ? (
                  <MdOutlineDone className={styles.sign__allowable} />
                ) : (
                  <RxCross2 className={styles.sign__unallowable} />
                )}
                <p className={styles.feature_text}>
                  {item.itemName}
                </p>
              </li>
              ))}
              
            </ul>
            <p className={styles.price}>
              {item.attributes.Price === '0' ? (
              // <span className={styles.price_value}>
              <>
               {item.attributes.ButtonSubtitle}
              </>
              ) : (
                <>
                <span className={styles.price_value}>
                  {item.attributes.Price.split('/').map(item => item.trim())[0]}
                </span> 
                 &nbsp; / &nbsp;{item.attributes.Price.split('/').map(item => item.trim())[1]}
                </>
              )}
            </p>
            <a 
              className={item.id === 2 ? `${styles.button} ${styles.button__special}` : `${styles.button}`}
              href={item.attributes.ButtonPrice.link}
              target="_blank"
            >{item.attributes.ButtonPrice.Title}</a>
            <p className={styles.button__subtitle}>
              {item.attributes.ButtonSubtitle === 'kostenfrei' ? (
                <></>
              ) : (
                <>
                {item.attributes.ButtonSubtitle}
                </>
              )}
            </p>
          </li>
        ))}
      </ul> 
      <Swiper 
        direction={"horizontal"}
        slidesPerView={countOfReview}
        spaceBetween={10}
        initialSlide={1} 
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`mySwiper ${styles.wrapper}`}
      >
        {priceData.map((item,id) => (
         <SwiperSlide key={item.attributes.id} className={styles.swiper_slide}>
          <div             
            style={{border: id === 1 ? '1px solid #EC5E43' : ''}}
            key={item.attributes.id} 
            className={`${styles.tarif_item} ${styles.tarif_item__mobile}`}>
            <h2 className={styles.title}>
              {item.attributes.Title}
            </h2>
            <p className={styles.sub_title}>
              {item.attributes.Subtitle}
            </p>
            <ul className={styles.features_container}>
              {item.attributes.items.map((item) => (
              <li key={item.id} className={styles.features_item}>
                {item.status ? (
                  <MdOutlineDone className={styles.sign__allowable} />
                ) : (
                  <RxCross2 className={styles.sign__unallowable} />
                )}
                <p className={styles.feature_text}>
                  {item.itemName}
                </p>
              </li>
              ))}
              
            </ul>
            <p className={styles.price}>
              {item.attributes.Price === '0' ? (
              <>
               {item.attributes.ButtonSubtitle}
              </>
              ) : (
                <>
                <span className={styles.price_value}>
                  {item.attributes.Price.split('/').map(item => item.trim())[0]}
                </span> 
                 &nbsp; / &nbsp;{item.attributes.Price.split('/').map(item => item.trim())[1]}
                </>
              )}
            </p>
            {console.log(item.id)}
            {!item.attributes.ButtonPrice.isExternal ? (
             <a 
               className={id === 1 ? `${styles.button} ${styles.button__special}` : `${styles.button}`}
               href={item.attributes.ButtonPrice.link}
               target="_blank"
             >
              {item.attributes.ButtonPrice.Title}
            </a>
            ) : (
              <NavLink
              className={id === 1 ? `${styles.button} ${styles.button__special}` : `${styles.button}`}
               to={item.attributes.ButtonPrice.link}>
              {item.attributes.ButtonPrice.Title}
              </NavLink>
            )}
           
            <p className={styles.button__subtitle}>
              {item.attributes.ButtonSubtitle === 'kostenfrei' ? (
                <></>
              ) : (
                <>
                {item.attributes.ButtonSubtitle}
                </>
              )}
            </p>
          </div>
        </SwiperSlide>

        ))}
        {/* <SwiperSlide key={item.attributes.id} className={styles.swiper_slide}>
          <li className={`${styles.tarif_item} ${styles.tarif_item__mobile}`}>
            <h2 className={styles.title}>Free</h2>
            <p className={styles.sub_title}>
              Testversion mit einer Auswahl an 20 Rechtsnormen
            </p>
            <ul className={styles.features_container}>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>
                  Rechts­än­de­rungen Update
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>Compli­an­ce­prüfung</p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>
                  Rechts­pflich­ten­ab­teilung
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>Indivi­du­elles Dashboard</p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>
                  Filter- und Exportfunktion
                </p>
              </li>
              <li className={styles.features_item}>
                <RxCross2 className={styles.sign__unallowable} />
                <p
                  className={`${styles.feature_text} ${styles.feature_text__unallowable}`}
                >
                  Rollen- und Nutzerkonzept
                </p>
              </li>
              <li className={styles.features_item}>
                <RxCross2 className={styles.sign__unallowable} />
                <p
                  className={`${styles.feature_text} ${styles.feature_text__unallowable}`}
                >
                  Unbegrenzte Nutzer­anzahl
                </p>
              </li>
              <li className={styles.features_item}>
                <RxCross2 className={styles.sign__unallowable} />
                <p
                  className={`${styles.feature_text} ${styles.feature_text__unallowable}`}
                >
                  Umfas­sende Organisationsabbildung
                </p>
              </li>
              <li className={styles.features_item}>
                <RxCross2 className={styles.sign__unallowable} />
                <p
                  className={`${styles.feature_text} ${styles.feature_text__unallowable}`}
                >
                  Unbegrenzte Anzahl an Rechtsnormen
                </p>
              </li>
              <li className={styles.features_item}>
                <RxCross2 className={styles.sign__unallowable} />
                <p
                  className={`${styles.feature_text} ${styles.feature_text__unallowable}`}
                >
                  Abbildung von mehreren Standorten
                </p>
              </li>
            </ul>
            <p className={styles.price}>kostenfrei</p>
            <div className={styles.button}>Regis­trieren & einrichten</div>
          </li>
        </SwiperSlide> */}
        {/* <SwiperSlide className={styles.swiper_slide}>
          <li
            className={`${styles.tarif_item} ${styles.tarif_item__mobile} ${styles.tarif_item__active}`}
          >
            <h2 className={styles.title}>Basic</h2>
            <p className={styles.sub_title}>
              für kleine und mittel­stän­dische Unternehmen
            </p>
            <ul className={styles.features_container}>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>
                  Rechts­än­de­rungen Update
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>Compli­an­ce­prüfung</p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>
                  Rechts­pflich­ten­ab­teilung
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>Indivi­du­elles Dashboard</p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>
                  Filter- und Exportfunktion
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={`${styles.feature_text} `}>
                  Rollen- und Nutzerkonzept
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={`${styles.feature_text} `}>
                  Unbegrenzte Nutzer­anzahl
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={`${styles.feature_text} `}>
                  Umfas­sende Organisationsabbildung
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={`${styles.feature_text} `}>
                  Unbegrenzte Anzahl an Rechtsnormen
                </p>
              </li>
              <li className={styles.features_item}>
                <RxCross2 className={styles.sign__unallowable} />
                <p
                  className={`${styles.feature_text} ${styles.feature_text__unallowable}`}
                >
                  Abbildung von mehreren Standorten
                </p>
              </li>
            </ul>
            <p className={styles.price}>
              <span className={styles.price_value}>ab 250€</span>/ Monat*
            </p>
            <div className={styles.button}>Jetzt Angebot anfragen</div>
            <p className={styles.additional_text}>
              * ggf. zzgl. Einrichtungskosten
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <li className={`${styles.tarif_item} ${styles.tarif_item__mobile}`}>
            <h2 className={styles.title}>Enter­prise</h2>
            <p className={styles.sub_title}>
              für große Unter­nehmen mit mehreren Standorten
            </p>
            <ul className={styles.features_container}>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>
                  Rechts­än­de­rungen Update
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>Compli­an­ce­prüfung</p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>
                  Rechts­pflich­ten­ab­teilung
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>Indivi­du­elles Dashboard</p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={styles.feature_text}>
                  Filter- und Exportfunktion
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={`${styles.feature_text} `}>
                  Rollen- und Nutzerkonzept
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={`${styles.feature_text} `}>
                  Unbegrenzte Nutzer­anzahl
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={`${styles.feature_text} `}>
                  Umfas­sende Organisationsabbildung
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={`${styles.feature_text} `}>
                  Unbegrenzte Anzahl an Rechtsnormen
                </p>
              </li>
              <li className={styles.features_item}>
                <MdOutlineDone className={styles.sign__allowable} />
                <p className={`${styles.feature_text} `}>
                  Abbildung von mehreren Standorten
                </p>
              </li>
            </ul>
            <p className={styles.price}>
              <span className={styles.price_value}>ab 250€</span>/ Monat*
            </p>
            <div className={styles.button}>Sprechen Sie uns an</div>
            <p className={styles.additional_text}>Tel. 030 930 2981 916</p>
            <p className={styles.additional_text}>
              contact@​compleon-​solutions.​de
            </p>
          </li>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default PriceTarif;



{/* <p className={styles.additional_text}>Tel. 030 930 2981 916</p>
            <p className={styles.additional_text}>
              contact@​compleon-​solutions.​de
            </p> */}



{/* <li className={`${styles.tarif_item} ${styles.tarif_item__active}`}>
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
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>Compli­an­ce­prüfung</p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>
                Rechts­pflich­ten­ab­teilung
              </p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>Indivi­du­elles Dashboard</p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>Filter- und Exportfunktion</p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={`${styles.feature_text} `}>
                Rollen- und Nutzerkonzept
              </p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={`${styles.feature_text} `}>
                Unbegrenzte Nutzer­anzahl
              </p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={`${styles.feature_text} `}>
                Umfas­sende Organisationsabbildung
              </p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={`${styles.feature_text} `}>
                Unbegrenzte Anzahl an Rechtsnormen
              </p>
            </li>
            <li className={styles.features_item}>
              <RxCross2 className={styles.sign__unallowable} />
              <p
                className={`${styles.feature_text} ${styles.feature_text__unallowable}`}
              >
                Abbildung von mehreren Standorten
              </p>
            </li>
          </ul>
          <p className={styles.price}>
            <span className={styles.price_value}>ab 250€</span>/ Monat*
          </p>
          <div className={styles.button}>Jetzt Angebot anfragen</div>
          <p className={styles.additional_text}>
            * ggf. zzgl. Einrichtungskosten
          </p>
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
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>Compli­an­ce­prüfung</p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>
                Rechts­pflich­ten­ab­teilung
              </p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>Indivi­du­elles Dashboard</p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={styles.feature_text}>Filter- und Exportfunktion</p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={`${styles.feature_text} `}>
                Rollen- und Nutzerkonzept
              </p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={`${styles.feature_text} `}>
                Unbegrenzte Nutzer­anzahl
              </p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={`${styles.feature_text} `}>
                Umfas­sende Organisationsabbildung
              </p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={`${styles.feature_text} `}>
                Unbegrenzte Anzahl an Rechtsnormen
              </p>
            </li>
            <li className={styles.features_item}>
              <MdOutlineDone className={styles.sign__allowable} />
              <p className={`${styles.feature_text} `}>
                Abbildung von mehreren Standorten
              </p>
            </li>
          </ul>
          <p className={styles.price}>
            <span className={styles.price_value}>ab 250€</span>/ Monat*
          </p>
          <div className={styles.button}>Sprechen Sie uns an</div>
          <p className={styles.additional_text}>Tel. 030 930 2981 916</p>
          <p className={styles.additional_text}>
            contact@​compleon-​solutions.​de
          </p>
        </li> */}