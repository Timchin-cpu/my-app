import React, { useState } from "react";
import styles from "./Api2.module.css";

const Api = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(setIsModalOpen);
  // const openModal = () => setIsModalOpen(true);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Ready to integrate BreatheSafetyIndex?</h1>
        <div>
          <div className={styles.textImageWrapper}>
            <p className={styles.text}>
              Explore our API, discover our scores, and see how
              BreatheSafetyIndex can enhance your services today. With air
              pollution impacting global health at an unprecedented scale, the
              need for data-driven, accessible tools is greater than ever.
              Partner with BreatheSafetyIndex to make impactful changes, enhance
              user engagement, and contribute to a healthier future. Join Us on
              our Mission to identify and measure health threats.
            </p>
            <img src="./Logo 3 (2).png" alt="#" />
          </div>
          <div className={styles.advantagesSection}>
            <div className={styles.arrow1}>
              <div></div>
            </div>
            <p>Try now</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p className={styles.aboutTextMore}>
              Problem statement.With outdoor air pollution contributing to over
              238,000 premature deaths in the EU alone, translating air quality
              data into meaningful health insights has become essential.
              Standard air quality measures offer limited guidance on the direct
              effects of pollution on human health, leaving a significant gap in
              understanding the specific risks associated with daily exposure to
              pollutants.
            </p>
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Api;
