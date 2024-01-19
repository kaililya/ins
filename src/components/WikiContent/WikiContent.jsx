import React from 'react';
import styles from './WikiContent.module.css';

const WikiContent = ({ title, subtitle }) => {
  return (
    <div className={styles.wiki}>
      <h6 className={styles.wiki_title}>{title}</h6>
      <div className={styles.wiki_subtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
    </div>
  );
};

export default WikiContent;
