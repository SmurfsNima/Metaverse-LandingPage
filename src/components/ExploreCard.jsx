import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import hedset from '../assets/headset.svg'
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[1.5] flex-[10] " : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-[flex] cursor-pointer `}
      onClick={()=>handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-3xl "
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[28px] text-[18px] text-white absolute z-0 lg:bottom-[90px]  lg:rotate[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ):(
        <div className="absolute left-0 lg:bottom-0 p-8 w-full max-lg:w-[40%] max-lg:h-full max-lg:justify-center flex flex-col  bg-[rgba(0,0,0,0.5)] rounded-b[24px]">
            <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-4`}>
                <img className="w-1/2 h-1/2 object-contain" src={hedset} alt="" />
            </div>
            <p className="font-normal text-[24px] leading-5 text-white uppercase">وارد متاورس شوید</p>
            <h2 className="mt-6 font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
