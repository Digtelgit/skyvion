import React, { useEffect } from "react";
import styles from "../style";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CTA = () => {
  // Setup for viewport detection and animations
  const [ctaRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Container animation with subtle initial scale
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Paragraph animation
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Button container animation
  const buttonContainerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(245, 212, 135, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      ref={ctaRef}
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative overflow-hidden`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      whileHover={{ 
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.5 } 
      }}
    >
      <div className="flex-1 flex flex-col">
        <motion.h2 
          className={styles.heading2}
          variants={headingVariants}
        >
          Your Trusted Wholesale & Retail Supplier
        </motion.h2>

        <motion.p 
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          variants={paragraphVariants}
        >
          Partner with us for high-quality products at competitive prices. We
          supply businesses worldwide with reliable sourcing and seamless
          logistics.
        </motion.p>
      </div>

      <motion.div 
        className={`${styles.flexCenter} sm:ml-10 ml-0`}
        variants={buttonContainerVariants}
      >
        <motion.button 
          className="mt-10 px-6 py-3 bg-[#F5D487] text-black font-semibold rounded-lg transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Subtle accent light effects */}
      <motion.div 
        className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [0.8, 1, 0.8],
          transition: { 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut" 
          }
        }}
        style={{
          background: "radial-gradient(circle, rgba(245, 212, 135, 1) 0%, transparent 70%)",
        }}
      />
      
      <motion.div 
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 0.9, 1],
          transition: { 
            repeat: Infinity,
            duration: 5,
            delay: 1,
            ease: "easeInOut" 
          }
        }}
        style={{
          background: "radial-gradient(circle, rgba(245, 212, 135, 1) 0%, transparent 70%)",
        }}
      />
    </motion.section>
  );
};

export default CTA;