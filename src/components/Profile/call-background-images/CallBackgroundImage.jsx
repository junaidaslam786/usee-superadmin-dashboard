import React from "react";
import styles from './CallBackgroundImage.module.css'

const CallBackgroundImage = () => {
  return (
    <div className={styles.userBackgroundImage}>
      <div className={styles.userBackgroundImageHeading}>
        <h3>Call Background Images</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ex.
        </p>
      </div>
      <div className={styles.userBackgroundImageFiles}>
        <p>
          Drag & drop some files, or <a href="#">click here</a> to select files
        </p>
      </div>
    </div>
  );
};

export default CallBackgroundImage;
