  import React, { Fragment, useEffect, useMemo, useState } from "react";
import WikiContent from "../../components/WikiContent/WikiContent";
import styles from "./WikiPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetWikiThunk } from "../../services/thunks/swagger-thunk";
import { BiSolidError } from "react-icons/bi";
import { TailSpin } from "react-loader-spinner";


const WikiPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetWikiThunk());
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const index = useMemo(() => {
    if (window.innerWidth > 991) {
      setActiveIndex(2)
    }
  }, [window.innerWidth])


  const wikiData =
    useSelector((store) => store.swaggerDataReducer.wikiData) || [];

  const { getWikiRequest,
    getWikiRequestFailed} =
    useSelector((store) => store.swaggerDataReducer);

  if (!wikiData || wikiData.length === 0) {
    return  (
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
    <section className={styles.wiki}>
      {!getWikiRequest &&
       (getWikiRequestFailed || wikiData.length === 0) && (
          <div className={styles.failed_container}>
            <BiSolidError className={styles.error_sign} size={80} />
            <h3
              className={`${styles.advice_title} ${styles.advice_title__warning}`}
            >
             Die Tarife konnten nicht geladen werden. Versuchen Sie einen Neustart oder besuchen Sie diese Seite später.
            </h3>
          </div>
        )}
      <div className={styles.wiki_container}>
        {wikiData.data.attributes.Categories.map((item) => (
          <Fragment key={item.id}>
            <h4 className={styles.wiki_title}>{item.Category}</h4>
            {item.SubContent.map((item) => (
            <Fragment key={item.id}>
              <div className={styles.wiki_inner}>
                <p
                  onClick={() => setActiveIndex(item.id)}
                  className={`${styles.wiki_subtitle} ${styles.wiki_subtitle_nav}`}
                >
                  {item.Title}
                </p>
              </div>
              {activeIndex === item.id && (
                <div className={styles.wiki_content}>
                    <WikiContent
                      title={item.Title}
                      subtitle={item.Content[0].Body}
                      key={item.id}
                    />
                </div>
              )}
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default WikiPage;