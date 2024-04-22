import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import cover from "../assets/cover.png";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col items-center justify-center mx-auto"
      >
        <div className=" relative z-10 ">
          <motion.h1
            className={`${styles.heroHeading}`}
            variants={textVariant(1.1)}
          >
            
           جنون دنیای 
          </motion.h1>
          <motion.div
            variants={textVariant(1.3)}
            className="flex justify-center items-center"
          >
           
            
            <h1 className={`${styles.heroHeading}`}>متاورس</h1>
      
          </motion.div>
        </div>

        <motion.div
          className="w-full relative md:mt-[-20px] mt-[-12px]"
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 top-[-50px] " />
          <img
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative "
            src={cover}
            alt=""
          />
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
