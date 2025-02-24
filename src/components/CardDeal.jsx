import React from "react";
import { aboutUs } from "../assets";

import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>About Us</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Sun Multinational DMCC, headquartered in Dubai, UAE, is a global
          conglomerate with operations in 12 countries across four continets.
          Our mission is to leverage our brands , industry expertise , and
          talent to drvie sustainable growth and deliver long-term value to our
          stakeholders.
        </p>
        <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
      <div className={layout.sectionImg}>
        <img src={aboutUs} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
