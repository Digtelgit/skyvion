import React, { useEffect } from "react";
import { value } from "../assets";
import styles, { layout } from "../style";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Billing = () => {
  // Animation controls for text section
  const textControls = useAnimation();
  const [textRef, textInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Animation controls for image and gradients
  const imageControls = useAnimation();
  const [imageRef, imageInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Start animations when elements come into view
  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
  }, [textControls, textInView]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    }
  }, [imageControls, imageInView]);

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const gradient1Variants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 0.8,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const gradient2Variants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 0.8,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Animation for the strong text elements inside paragraph
  const strongTextVariants = {
    hidden: { color: "rgb(209, 213, 219)" },
    visible: {
      color: "rgb(245, 212, 135)",
      transition: { duration: 0.5, delay: 1.2 },
    },
  };

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse} ref={imageRef}>
        <motion.img
          src={value}
          alt="billing"
          className="w-[80%] h-[100%] relative z-[5]"
          initial="hidden"
          animate={imageControls}
          variants={imageVariants}
          whileHover={{ 
            scale: 1.03, 
            transition: { duration: 0.3 },
            rotate: [0, -1, 1, -1, 0],
          }}
        />
        <motion.div 
          className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" 
          initial="hidden"
          animate={imageControls}
          variants={gradient1Variants}
          whileInView={{ 
            x: [0, 5, -5, 5, 0],
            transition: { 
              repeat: Infinity, 
              repeatType: "mirror", 
              duration: 6,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div 
          className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" 
          initial="hidden"
          animate={imageControls}
          variants={gradient2Variants}
          whileInView={{ 
            x: [0, -5, 5, -5, 0],
            transition: { 
              repeat: Infinity, 
              repeatType: "mirror", 
              duration: 6,
              ease: "easeInOut",
              delay: 0.5
            }
          }}
        />
      </div>
      <div className={layout.sectionInfo} ref={textRef}>
        <motion.h2 
          className={styles.heading2}
          initial="hidden"
          animate={textControls}
          variants={headingVariants}
        >
          Our Core Values <br className="sm:block hidden" />
          Driving Success
        </motion.h2>
        <motion.p 
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          initial="hidden"
          animate={textControls}
          variants={paragraphVariants}
        >
          We believe in <motion.strong 
            initial="hidden"
            animate={textControls}
            variants={strongTextVariants}
          >Teamwork</motion.strong>, where collaboration strengthens our business. 
          We take <motion.strong 
            initial="hidden"
            animate={textControls}
            variants={strongTextVariants}
          >Ownership</motion.strong> of our actions, ensuring accountability. 
          With <motion.strong 
            initial="hidden"
            animate={textControls}
            variants={strongTextVariants}
          >Integrity</motion.strong>, we maintain transparency and trust. 
          Our <motion.strong 
            initial="hidden"
            animate={textControls}
            variants={strongTextVariants}
          >Imaginative</motion.strong> mindset fuels innovation, and through <motion.strong 
            initial="hidden"
            animate={textControls}
            variants={strongTextVariants}
          >Leadership</motion.strong>, 
          we drive growth in our industry and communities.
        </motion.p>
      </div>
    </section>
  );
};

export default Billing;