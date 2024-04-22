import React from "react";
import map from "../assets/map.png";
import people1 from "../assets/people-01.png";
import people2 from "../assets/people-02.png";
import people3 from "../assets/people-03.png";
import { motion } from "framer-motion";
import styles from "../styles";

import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/Texttyping";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText title="طرفداران متاورس در جهان |" textStyles="text-center" />
        <TypingText
        
          title="دوستان خود را به متاورس دعوت کنید | "
          textStyles="text-center"
        />
        <div className=" mt-10 w-full h-[550px] relative">
          <img src={map} className="object-cover" alt="" />
          <div className="absolute top-10 md:top-28 right-24 h-10 md:h-16 w-10 md:w-16 rounded-full p-[4px] md:p-[6px] bg-[#5d6680]">
            <img src={people1} alt="people" className=" " />
          </div>
          <div className="absolute top-[34px] left-16 h-10 md:h-16 w-10 md:w-16 rounded-full p-[4px] md:p-[6px] bg-[#5d6680]">
            <img src={people2} alt="people" className=" " />
          </div>
          <div className="absolute top-[15%] left-[40%] h-10 md:h-16 w-10 md:w-16 rounded-full p-[4px] md:p-[6px] bg-[#5d6680]">
            <img src={people3} alt="people" className=" " />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default World;
