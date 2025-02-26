import React, { useEffect } from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FeatureCard = ({ icon, title, content, index }) => {
  // Animation setup for each feature card
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.2, 
        ease: "easeOut" 
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={icon}
          alt='icon'
          className='w-[50%] h-[50%] object-contain'
        />
      </motion.div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
          {content}
        </p>
      </div>
    </motion.div>
  )
}

const Business = () => {
  // Animation for the main section content
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const textControls = useAnimation()
  
  useEffect(() => {
    if (sectionInView) {
      textControls.start('visible')
    }
  }, [textControls, sectionInView])

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(245, 212, 135, 0.4)"
    },
    tap: { scale: 0.95 }
  }

  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo} ref={sectionRef}>
        <motion.h2 
          className={`${styles.heading2} text-white`}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
        >
          Trusted & Competent Trading <br className="sm:block hidden" />
          for Global Market Expansion
        </motion.h2>
        <motion.p 
          className={`${styles.paragraph} max-w-[600px] mt-5 text-gray-300`}
          initial="hidden"
          animate={textControls}
          variants={{
            ...textVariants,
            visible: {
              ...textVariants.visible,
              transition: {
                delay: 0.2,
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }}
        >
          We are committed to progress and developing a trading company that ensures
          the best satisfaction for customers and business partners through quality services and products.
        </motion.p>
        <motion.button 
          className="mt-10 px-6 py-3 bg-[#F5D487] hover:bg-[#E6C06C] text-black font-semibold rounded-lg transition duration-300"
          initial="hidden"
          animate={textControls}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Explore More
        </motion.button>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business