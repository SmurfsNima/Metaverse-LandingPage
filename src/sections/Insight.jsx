import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import NewFeatureCard from "../components/NewFeatureCard";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/Texttyping";

import { insights, startingFeatures } from "../constans";
import { InsightCard } from "../components/InsightCard";

export const Insight = () => {
  return (
    <section className={`${styles.innerWidth} ${styles.paddings} mx-auto `}>
      <motion.div
        variants={staggerContainer}
        initial="hiddn"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col mx-auto"
      >
        
        <TitleText title=" دانش  متاورس" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-8">
          {insights.map((item, i) => (
            <InsightCard key={i} index={i + 1} {...item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
