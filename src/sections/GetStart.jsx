import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";

import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/Texttyping";
import GetStarted from "../assets/get-started.png";
import { startingFeatures } from "../constans";
import GetstartCard from "../components/GetstartCard";
const GetStart = () => {
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
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={`flex flex-[0.75] justify-center flex-col`}
        >
          <TypingText title="متاورس چگونه کار میکند ؟ " />
          <TitleText title={<>با چند کلیک شروع کنید</>} />
          <div className="mt-8 flex flex-col max-w-sm gap-6">{startingFeatures.map((item , index)=>(
            <GetstartCard text={item} number={index + 1} key={index} />
          ))}</div>
        </motion.div>
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter} flex-1`}
        >
          <img
            src={GetStarted}
            alt="Get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default GetStart;
