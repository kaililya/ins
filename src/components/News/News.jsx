import React, { useEffect } from "react";
import styles from "./News.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetArticlesThunk } from "../../services/thunks/swagger-thunk";
import { BiSolidError } from "react-icons/bi";
import { TailSpin } from "react-loader-spinner";

function News() {
  const switchClassName = ({ isActive }) =>
    isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetArticlesThunk());
  }, []);

  const articlesData =
    useSelector((store) => store.swaggerDataReducer.articlesData) || [];
  const { getArticlesRequest, getArticlesRequestSuccess, getArticlesRequestFailed } =
    useSelector((store) => store.swaggerDataReducer);

    if (getArticlesRequestFailed) {
      return (
      <div className={styles.failed_container}>
        <BiSolidError className={styles.error_sign} size={80} />
        <h3
          className={`${styles.advice_title} ${styles.advice_title__warning}`}
        >
Die Nachrichten konnten nicht heruntergeladen werden. Versuchen Sie, neu zu starten oder besuchen Sie diese Seite später.  </h3>
      </div>)
    }


  if (!articlesData || articlesData.length  === 0) {
    return (
      <div className={styles.spiner}>
        <TailSpin
          color="#292982"
          radius={"3px"}
          width={100}
          height={100}
          wrapperClass={styles.spiner}
        />
      </div>
    )
  }
  
  return (
    <section className={styles.main_container}>
      <h2 className={styles.title}>Nachrichten</h2>
     
      {/* {getArticlesRequest && (
        <div className={styles.spiner}>
          <TailSpin
            color="#292982"
            radius={"3px"}
            width={100}
            height={100}
            wrapperClass={styles.spiner}
          />
        </div>
      )} */}
      <Swiper
        direction={"horizontal"}
        slidesPerView={2}
        breakpoints={{
          963: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          960: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`mySwiper ${styles.wrapper}`}
      >
        {articlesData.data.map((article, id) => (
      <SwiperSlide key={id} className={styles.slide}>
        <article className={styles.new_container}>
         <div className={styles.new_container_text_column}>
           <p className={styles.new_date}>
             {article.attributes.Category} |{" "}
             {article.attributes.CreatedDate}
           </p>
           <h3 className={styles.new_title}>
             {article.attributes.Title}
           </h3>
           <p className={styles.new_text}>
             {article.attributes.BodyText[0].children[0].text}
           </p>
           <NavLink className={switchClassName} to={`/article/${article.id}`}>
             <span className={styles.link_text}>Lesen</span>
             <IoIosArrowRoundForward className={styles.link_icon} />
           </NavLink>
           </div>

           <div className={styles.new_container_image_column}>
             <img
               className={styles.new_image}
               src={`https://admin.compleon-solutions.de${article.attributes.ArticleImage.data.attributes.url}`}
               alt="article image"
             />
           </div>
         </article>
        </SwiperSlide>
        ))}


        {/* <SwiperSlide className={styles.slide}>
          {articlesData.data.map((item) => (
            <></>
          ))}
          
        </SwiperSlide> */}
        {/* <SwiperSlide className={styles.slide}>
          <article className={styles.new_container}>
            <div className={styles.new_container_text_column}>
              <p className={styles.new_date}>TECHNOLOGY | JULY 29, 2023</p>
              <h3 className={styles.new_title}>Finibus Bonorum et Malorum</h3>
              <p className={styles.new_text}>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <NavLink className={switchClassName} to="">
                <span className={styles.link_text}>Lesen</span>
                <IoIosArrowRoundForward className={styles.link_icon} />
              </NavLink>
            </div>

            <div className={styles.new_container_image_column}>
              <img
                className={styles.new_image}
                src={newImage}
                alt="new-image"
              />
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article className={styles.new_container}>
            <div className={styles.new_container_text_column}>
              <p className={styles.new_date}>TECHNOLOGY | JULY 29, 2023</p>
              <h3 className={styles.new_title}>Finibus Bonorum et Malorum</h3>
              <p className={styles.new_text}>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <NavLink className={switchClassName} to="">
                <span className={styles.link_text}>Lesen</span>
                <IoIosArrowRoundForward className={styles.link_icon} />
              </NavLink>
            </div>

            <div className={styles.new_container_image_column}>
              <img
                className={styles.new_image}
                src={newImage}
                alt="new-image"
              />
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article className={styles.new_container}>
            <div className={styles.new_container_text_column}>
              <p className={styles.new_date}>TECHNOLOGY | JULY 29, 2023</p>
              <h3 className={styles.new_title}>Finibus Bonorum et Malorum</h3>
              <p className={styles.new_text}>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <NavLink className={switchClassName} to="">
                <span className={styles.link_text}>Lesen</span>
                <IoIosArrowRoundForward className={styles.link_icon} />
              </NavLink>
            </div>
            <div className={styles.new_container_image_column}>
              <img
                className={styles.new_image}
                src={newImage}
                alt="new-image"
              />
            </div>
          </article>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default News;
