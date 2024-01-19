import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css";

import styles from "./ArticlesPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetArticlesThunk } from "../../services/thunks/swagger-thunk";
import { TailSpin } from "react-loader-spinner";
import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router-dom";

const ArticlesPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetArticlesThunk());
    window.scrollTo(0, 0);
  }, []);

  const articlesData =
    useSelector((store) => store.swaggerDataReducer.articlesData) || [];
  const { getArticlesRequest, getArticlesRequestSuccess, getArticlesRequestRequestFailed } =
    useSelector((store) => store.swaggerDataReducer);

  if (!articlesData || articlesData.length === 0) {
    return null;
  }

  const lastArticle = articlesData.data[articlesData.data.length - 1];


  function create2DArray(inputArray) {
    let resultArray = [];

    for (let i = 0; i < inputArray.length; i += 2) {
      let subarray = inputArray.slice(i, i + 2);
      resultArray.push(subarray);
    }

    return resultArray;
  }
  const articlesDataPopLast = [...articlesData.data].slice(0, articlesData.data.length - 1)

  const twoDArrayArticlesData = create2DArray(articlesDataPopLast);

  const sliderContent = () => {
    const sliders = [];

    for (let i = 0; i < twoDArrayArticlesData.length; i++) {
      sliders.push(
        <SwiperSlide key={i} className={styles.articles_slide}>
          <ul className={styles.articles_items}>
            {twoDArrayArticlesData[i].map((article) => (
           <Link key={article.id} className={styles.link} to={`/article/${article.id}`}>
            <li key={article.id} className={styles.articles_item}>
              <div className={styles.articles_text}>
                <h4 className={styles.articles_title}>
                  {article.attributes.Title}
                </h4>
                <p className={styles.articles_suptitle}>
                  {article.attributes.Category} |{" "}
                  {article.attributes.CreatedDate}
                </p>
                <p className={styles.articles_subtitle}>
                  {article.attributes.BodyText[0].children[0].text}
                </p>
              </div>
              <div className={styles.articles_image}>
                <img
                  src={`https://admin.compleon-solutions.de${article.attributes.ArticleImage.data.attributes.url}`}
                  alt="article image"
                />
              </div>
            </li>
            </Link>
          ))}
          </ul>
        </SwiperSlide>
      );
    }
    return sliders
  }
  

  return (
    <section className={styles.articles}>
      {!getArticlesRequest &&
        (getArticlesRequestRequestFailed || articlesData.length === 0) && (
          <div className={styles.failed_container}>
            <BiSolidError className={styles.error_sign} size={80} />
            <h3
              className={`${styles.advice_title} ${styles.advice_title__warning}`}
            >
            Die Nachrichten konnten nicht heruntergeladen werden . Versuchen Sie einen Neustart oder besuchen Sie diese Seite später.            </h3>
          </div>
        )}
      {getArticlesRequest  && (
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
      <div className={styles.articles_container}>
        <div className={styles.articles_aside}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            className={styles.articles_wrapper}
          >
          {sliderContent()}
          </Swiper>
        </div>
        <Link 
          className={`${styles.articles_content} ${styles.link}`} 
          to={`/article/${lastArticle.id}`} >
          <div
            className={`${styles.articles_item} ${styles.articles_item_big}`}
          >
            <div
              className={`${styles.articles_text} ${styles.articles_text_big}`}
            >
              <h4
                className={`${styles.articles_title} ${styles.articles_title_big}`}
              >
                {lastArticle.attributes.Title}
              </h4>
              <p className={styles.articles_suptitle}>
                {lastArticle.attributes.Category} |{" "}
                {lastArticle.attributes.CreatedDate}
              </p>
              <p
                className={`${styles.articles_subtitle}  ${styles.articles_subtitle_big}`}
              >
                {lastArticle.attributes.BodyText[0].children[0].text}
              </p>
            </div>

            <div
              className={`${styles.articles_image} ${styles.articles_image_big}`}
            >
              <img
                src={`https://admin.compleon-solutions.de${lastArticle.attributes.ArticleImage.data.attributes.url}`}
                alt="article image"
              />
            </div>

          </div>
        </Link>
      </div>
    </section>
  );
};

export default ArticlesPage;
