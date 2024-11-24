import styles from "./Benefits.module.css";
import React, { useState } from "react";

const Benefits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Why choose BreatheSafetyIndex?</h1>
        <div className={styles.whiteSquare}>
          <div className={styles.aboutSection}>
            <img src="./women.png" alt="Фото" className={styles.image} />
            <p className={styles.aboutText}>
              In a world where air pollution affects millions, understanding its
              direct impact on health is essential. Unlike standard air quality
              indices, BreatheSafetyIndex translates air pollution data into
              actionable health risk assessments across various bodily systems.
              Backed by scientific expertise and powered by advanced algorithms,
              BreatheSafetyIndex delivers the insights you need to help protect
              and inform your users.
            </p>
          </div>
          <div className={styles.advantagesSection}>
            <div className={styles.arrow1} onClick={openModal}>
              <div></div>
            </div>
            <p>The advantage of the BreatheSafetyIndex solution, based on:</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p className={styles.aboutTextMore}>
              The advantage of the BreatheSafetyIndex solution, based
              on:-Reliable data sources with a high density of control points,
              combining global services and local providers;-Utilization of a
              unique and continuously adaptive methodology for calculating
              indicators (indexes);-A continuous (as opposed to partial) data
              processing process that enables training of the mathematical
              model;-Fast algorithms for processing environmental and air
              quality parameters;-Near real-time speed of request handling via
              API;-Wide geographic coverage with a focus on large urban
              agglomerations.
            </p>
            <br />
            {/* <p>
              https://www.eea.europa.eu/en/topics/in-depth/air-pollution/eow-it-affects-our-health
            </p> */}
            <div
              className={styles.arrow1Button}
              onClick={() => setIsModalOpen(false)}
            >
              <div></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Benefits;
