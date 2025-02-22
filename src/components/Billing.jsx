import React from "react";
import {  value } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={value}
          alt="billing"
          className="w-[80%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Our Core Values <br className="sm:block hidden" />
          Driving Success
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We believe in <strong>Teamwork</strong>, where collaboration strengthens our business. 
          We take <strong>Ownership</strong> of our actions, ensuring accountability. 
          With <strong>Integrity</strong>, we maintain transparency and trust. 
          Our <strong>Imaginative</strong> mindset fuels innovation, and through <strong>Leadership</strong>, 
          we drive growth in our industry and communities.
        </p>
      </div>
    </section>
  );
};

export default Billing;
