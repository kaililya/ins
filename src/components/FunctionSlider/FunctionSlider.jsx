import React, { useCallback, useEffect, useState } from "react";
import styles from "./FunctionSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetServiceThunk } from "../../services/thunks/swagger-thunk";
import { TailSpin } from "react-loader-spinner";
import { BiSolidError } from "react-icons/bi";
import arrorImg from '../../image/icon_left.png' 

function FunctionSlider() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetServiceThunk());
  }, []);

  const {
    getServiceRequest,
    getServiceRequestSuccess,
    getServiceRequestFailed,
  } = useSelector((store) => store.swaggerDataReducer);

  const serviceData =
    useSelector((store) => store.swaggerDataReducer.serviceData) || [];


  const [swiperRef, setSwiperRef] = useState();
 
  const handlePrevious = () => {
    swiperRef?.slidePrev();
  }

  const handleNext = () => {
    swiperRef?.slideNext();
  };

  const [swiperRefMobile, setSwiperRefMobile] = useState();
 
  const handlePreviousMobile = () => {
    swiperRefMobile?.slidePrev();
  }

  const handleNextMobile = () => {
    swiperRefMobile?.slideNext();
  };

  if (!serviceData || serviceData.length === 0) {
    return null
  }

  // console.log(serviceData[0].attributes.Image.data.attributes.url);
  // console.log(serviceData);



  return (
    <div>
      <div className={styles.swiper_wrapper}>
        {!getServiceRequest &&
          (getServiceRequestFailed || serviceData.length === 0) && (
            <div className={styles.failed_container}>
              <BiSolidError className={styles.error_sign} size={80} />
              <h3
                className={`${styles.advice_title} ${styles.advice_title__warning}`}
              >
                Tipps konnten nicht geladen funktionen. Versuchen Sie es neu
                zuladen oder besuchen Sie diese Seite später.
              </h3>
            </div>
          )}
        {getServiceRequest && (
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
        <div className={styles.swipper_wrapper}>
          <img
            onClick={handlePrevious}
            className={`${styles.swiper_button_next} ${styles.swiper_button_next__desktop}`}
            src={arrorImg}
          />
          <Swiper
            direction={"horizontal"}
            slidesPerView={3}
            onSwiper={setSwiperRef}
            pagination={{
              clickable: true,
            }}
            modules={[ Pagination]}
            className={`mySwiper ${styles.wrapper_desktop}`}
          >
            {serviceData.map((item) => (
              <SwiperSlide className={styles.slider} key={item.id}>
                <div
                  className={`${styles.function_item__swiper} ${styles.function_item__swiper_desktop}`}
                >
                  <img
                    className={styles.function_item_image}
                    src={`https://admin.compleon-solutions.de${item.attributes.Image.data.attributes.url}`}
                    alt="icon"
                  />
                  <h3 className={styles.function_item_title}>
                    {item.attributes.Title}
                  </h3>
                  <p className={styles.function_item_sub_title}>
                    {item.attributes.Description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <img
            onClick={handleNext}
            className={`${styles.swiper_button_prev} ${styles.swiper_button_prev__desktop}`}
            src={arrorImg}
          />
        </div>
      </div>

      <div className={styles.swipper_wrapper}>
        <img
          onClick={handlePreviousMobile}
          className={`${styles.swiper_button_next} ${styles.swiper_button_next__mobile}`}
          src={arrorImg}
        />
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={10}
          onSwiper={setSwiperRefMobile}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={`mySwiper ${styles.wrapper}`}
        >
          {serviceData.map((item) => (
            <SwiperSlide className={styles.slider_mobile} key={item.id}>
              <div className={`${styles.function_item__swiper}`}>
                <img
                  className={styles.function_item_image}
                  src={`https://admin.compleon-solutions.de${item.attributes.Image.data.attributes.url}`}
                  alt="icon"
                />
                <h3 className={styles.function_item_title}>
                  {item.attributes.Title}
                </h3>
                <p className={styles.function_item_sub_title}>
                  {item.attributes.Description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <img
            onClick={handleNextMobile}
            className={`${styles.swiper_button_prev} ${styles.swiper_button_prev__mobile}`}
            src={arrorImg}
          />
      </div>
    </div>
  );
}

export default FunctionSlider;
