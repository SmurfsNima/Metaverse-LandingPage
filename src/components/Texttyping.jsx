import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-sm text-secondary-white mt-4  ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === "" ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-2 font-bold text-[40px] md:text-[44px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
