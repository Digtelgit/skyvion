import React, { useEffect } from "react";
import { aboutUs } from "../assets";
import styles, { layout } from "../style";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const CardDeal = () => {
  const navigate = useNavigate(); 
  // Content section animations
  const [contentRef, contentInView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  });
  const contentControls = useAnimation();

  // Image section animations
  const [imageRef, imageInView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  });
  const imageControls = useAnimation();

  // Trigger animations when sections come into view
  useEffect(() => {
    if (contentInView) {
      contentControls.start("visible");
    }
  }, [contentControls, contentInView]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    }
  }, [imageControls, imageInView]);

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#1E40AF",
      boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      rotateY: 15,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  // Floating animation for the image
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }
  };

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo} ref={contentRef}>
        <motion.div
          initial="hidden"
          animate={contentControls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            className={styles.heading2}
            variants={headingVariants}
          >
            About Us
          </motion.h2>
          
          <motion.p 
            className={`${styles.paragraph} max-w-[470px] mt-5`}
            variants={paragraphVariants}
          >
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)",
                transition: { delay: 0.9, duration: 0.7 }
              }}
            >
              Sun Multinational DMCC, headquartered in Dubai, UAE, is a global
              conglomerate with operations in 12 countries across four continets.
              Our mission is to leverage our brands, industry expertise, and
              talent to drive sustainable growth and deliver long-term value to our
              stakeholders.
            </motion.span>
          </motion.p>
          
          <motion.button 
            className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg transition"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate("/AboutUs")}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div 
        className={layout.sectionImg}
        ref={imageRef}
        initial="hidden"
        animate={imageControls}
        variants={imageVariants}
        whileInView={floatAnimation}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, delay: 0.3 }
          }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8 }
            }}
            style={{ transform: 'translateZ(-10px)' }}
          />
          
          <motion.img 
            src={aboutUs} 
            alt="card" 
            className="w-[100%] h-[100%] relative z-10 rounded-xl"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            style={{ filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))' }}
          />
          
          <motion.div
            className="absolute -inset-2 bg-blue-500/10 rounded-xl z-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.8, duration: 0.6 }
            }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CardDeal;