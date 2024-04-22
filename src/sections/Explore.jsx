import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { useState } from "react";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/Texttyping";
import { exploreWorlds } from "../constans";
import ExploreCard from "../components/ExploreCard";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title=" جهان های متاورس |" textStyles="text-center" />
        <TitleText
          textStyles="text-center"
          title={
            <>
             دنیای مورد علاقه <br className="md:block hidden" /> خود را انتخاب کنید
            </>
          }
        />
        <div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
