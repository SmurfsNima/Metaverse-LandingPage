import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import headset from "../assets/headset.svg";
import { socials } from "../constans";
export const Footer = () => {
  return (
    <motion.footer
      className={`${styles.paddings}  relative`}
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="footer-gradient" />
      <div className={` ${styles.paddings} mx-auto `}>
        <div className="flex items-center flex-col md:flex-row justify-between  gap-3">
          <h4 className="font-bold text-[34px] lg:text-[64px] text-white">
            وارد دنیای متاورس شوید
          </h4>
          <button className=" my-4 px-6 py-4 flex items-center gap-3 bg-[#25618b] h-fit rounded-3xl">
            <img className="object-contain w-6 h-6" src={headset} alt="" />
            <span className="uppercase text-white font-normal text-[16px]">
              ورود به متاورس
            </span>
          </button>
        </div>
        <div className="h-[2px]  bg-white mt-6 opacity-15" />
        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-between gap-5">
            <h4 className="font-extrabold text-[24px]  text-white">متاورس</h4>
            <p className="font-normal text-[14px] text-white opacity-50">کلیه حقوق محفوظ است | متاورس 2024 </p>
            <div className=" max-sm:justify-center flex gap-3">
                {socials.map((item)=>(
                    <img key={DataTransferItemList.name} src={item.url} alt={item.name} className="w-6 h-6 object-contain cursor-pointer" />
                ))}
            </div>
        </div>
      </div>
    </motion.footer>
  );
};
