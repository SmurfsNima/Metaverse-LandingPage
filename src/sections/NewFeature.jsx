import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import NewFeatureCard  from "../components/NewFeatureCard";
import {staggerContainer , fadeIn , planetVariants} from "../utils/motion";
import { TitleText, TypingText } from "../components/Texttyping";

import { newFeatures } from "../constans";
import whatsnew from '../assets/whats-new.png';
const NewFeature = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8 `}
      >
       
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={`flex flex-[0.75] justify-center flex-col`}
        >
          <TypingText title="چه خبر ؟" />
          <TitleText title={<> موارد جدید متاورس</>} />
          <div className="mt-11 flex justify-between gap-6">
            {newFeatures.map((item) => (
            <NewFeatureCard key={item.title} imgurl={item.imgUrl} title={item.title} subtitle={item.subtitle} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter} flex-1`}
        >
          <img
            src={whatsnew}
            alt="Get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewFeature;
