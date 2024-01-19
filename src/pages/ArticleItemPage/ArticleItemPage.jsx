import React, { useEffect } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import styles from './ArticleItemPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetUniqueArticleThunk } from '../../services/thunks/swagger-thunk';
import { TailSpin } from 'react-loader-spinner';
import { BiSolidError } from 'react-icons/bi';

function ArticleItemPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchGetUniqueArticleThunk(id));
    window.scrollTo(0, 0);
  }, [id]);

  const switchClassName = ({ isActive }) =>
    isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`;

  const uniqueArticleData =
    useSelector((store) => store.swaggerDataReducer.uniqueArticlesData) || [];

  const {
    getUniqueArticlesRequest,
    getUniqueArticlesRequestFailed,
  } = useSelector((store) => store.swaggerDataReducer);

  if (
    !uniqueArticleData ||
    uniqueArticleData === null ||
    uniqueArticleData === undefined ||
    uniqueArticleData.length === 0
  ) {
    return null;
  }

  return (
    <section className={styles.main_container}>
      {!getUniqueArticlesRequest &&
        (getUniqueArticlesRequestFailed || uniqueArticleData.length === 0) && (
          <div className={styles.failed_container}>
            <BiSolidError className={styles.error_sign} size={80} />
            <h3 className={`${styles.advice_title} ${styles.advice_title__warning}`}>
              Der Artikel konnte nicht geladen werden. Versuchen Sie, neu zu starten oder besuchen
              Sie diese Seite später.
            </h3>
          </div>
        )}
      {getUniqueArticlesRequest && (
        <div className={styles.spiner}>
          <TailSpin
            color="#292982"
            radius={'3px'}
            width={100}
            height={100}
            wrapperClass={styles.spiner}
          />
        </div>
      )}
      <article className={styles.new_container}>
        <div className={styles.new_container_text_column}>
          <p className={styles.new_date}>
            {uniqueArticleData.attributes.Category} | {uniqueArticleData.attributes.CreatedDate}
          </p>
          <h3 className={styles.new_title}>{uniqueArticleData.attributes.Title}</h3>
          <div
            className={`${styles.new_container_image_column} ${styles.new_container_image_column__mobile}`}>
            <img
              className={styles.new_image}
              src={`https://admin.compleon-solutions.de${uniqueArticleData.attributes.ArticleImage.data.attributes.url}`}
              alt="article image"
            />
          </div>

          <p className={styles.new_text}>
            {uniqueArticleData.attributes.BodyText[0].children[0].text}
          </p>
          <NavLink className={switchClassName} onClick={() => navigate(-1)}>
            <IoIosArrowRoundForward size={'30px'} className={styles.link_icon} />
          </NavLink>
        </div>

        <div className={styles.new_container_image_column}>
          <img
            className={styles.new_image}
            src={`https://admin.compleon-solutions.de${uniqueArticleData.attributes.ArticleImage.data.attributes.url}`}
            alt="article image"
          />
        </div>
      </article>
    </section>
  );
}

export default ArticleItemPage;
