import React from "react";
import styles from './News.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import newImage from '../../image/new_img.png'
import 'swiper/css/pagination';
import 'swiper/css';
import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";


function News() {
  const switchClassName = ({isActive}) => (isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`);

  return (  
  <section className={styles.main_container}>
    <h2 className={styles.title}>
      Nachrichten
    </h2>
    <Swiper
        direction={'horizontal'}
        slidesPerView={2}
        breakpoints={{
          963: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          960: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`mySwiper ${styles.wrapper}`}
      >
      <SwiperSlide className={styles.slide}>
        
        <div className={styles.new_container}>
          <div className={styles.new_container_text_column}>
            <p className={styles.new_date}>
              TECHNOLOGY | JULY 29, 2023
            </p>
            <h3 className={styles.new_title}>
              Finibus Bonorum et Malorum
            </h3>
            <p className={styles.new_text}>
             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <NavLink className={switchClassName} to=''>
              <span className={styles.link_text}>Lesen</span>
              <IoIosArrowRoundForward className={styles.link_icon}/>
            </NavLink>
          </div>

          <div className={styles.new_container_image_column}>
            <img className={styles.new_image} src={newImage} alt="" />
          </div>
        </div>


      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.new_container}>
          <div className={styles.new_container_text_column}>
            <p className={styles.new_date}>
              TECHNOLOGY | JULY 29, 2023
            </p>
            <h3 className={styles.new_title}>
              Finibus Bonorum et Malorum
            </h3>
            <p className={styles.new_text}>
             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <NavLink className={switchClassName} to=''>
              <span className={styles.link_text}>Lesen</span>
              <IoIosArrowRoundForward className={styles.link_icon}/>
            </NavLink>
          </div>

          <div className={styles.new_container_image_column}>
            <img className={styles.new_image} src={newImage} alt="" />
          </div>
        </div>


      </SwiperSlide>      
      <SwiperSlide className={styles.slide}>
        <div className={styles.new_container}>
          <div className={styles.new_container_text_column}>
            <p className={styles.new_date}>
              TECHNOLOGY | JULY 29, 2023
            </p>
            <h3 className={styles.new_title}>
              Finibus Bonorum et Malorum
            </h3>
            <p className={styles.new_text}>
             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <NavLink className={switchClassName} to=''>
              <span className={styles.link_text}>Lesen</span>
              <IoIosArrowRoundForward className={styles.link_icon}/>
            </NavLink>
          </div>

          <div className={styles.new_container_image_column}>
            <img className={styles.new_image} src={newImage} alt="" />
          </div>
        </div>


      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.new_container}>
          <div className={styles.new_container_text_column}>
            <p className={styles.new_date}>
              TECHNOLOGY | JULY 29, 2023
            </p>
            <h3 className={styles.new_title}>
              Finibus Bonorum et Malorum
            </h3>
            <p className={styles.new_text}>
             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <NavLink className={switchClassName} to=''>
              <span className={styles.link_text}>Lesen</span>
              <IoIosArrowRoundForward className={styles.link_icon}/>
            </NavLink>
          </div>
          <div className={styles.new_container_image_column}>
            <img className={styles.new_image} src={newImage} alt="" />
          </div>
        </div>


      </SwiperSlide>
    </Swiper>
  </section>
  )

}

export default News;
