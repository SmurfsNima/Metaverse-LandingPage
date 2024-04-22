import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import planet9 from '../assets/planet-09.png'

export const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}> 
        <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once:false , amount: 0.25}} className="flex flex-col lg:flex-row mx-auto gap-6">
            <motion.div variants={fadeIn('right' , 'tween' , 0.2 , 1)}  className="flex flex-col justify-end w-full lg:max-w-lg gradient-05 border rounded-[32px] border-[#6a6a6a] flex=[0.5] p-4 sm:p-8 relative">
            <div className="feedback-gradient" />
            <div className="text-[18px] sm:text-[24px] font-normal leading-4 sm:leading-[45px] text-white">
                <h4 className="font-bold text-3xl">ایلان ماسک</h4>
                <p>مدیر عامل  | شرکت  تسلا</p>
                <p className="mt-4">دنیای متاورس یک بستر برای آزادی و خلاقیت است، جایی که هیچ مرزی برای تخیل و واقعیت نمی‌گذارد. در این دنیا، همه چیز در جریان تغییر و تحول است و هیچ چیز به ثابتی نمی‌رسد. این دیدگاه به ما یادآوری می‌کند که قدرت تغییر در دستان ماست و ما می‌توانیم با انتخاب‌هایمان، مسیر زندگی خود را به شکل دلخواه خود شکل دهیم. </p>
            </div>
            </motion.div>
            <motion.div variants={fadeIn('left' , 'tween' ,0.2, 1 )} className=" flex-1 flex justify-center items-center">
              <img src={planet9} alt="planet-09" className="lg:h-[600px] w-full min-h-[210px] h-auto  object-cover  rounded-[40px]" /> 
            </motion.div>
        </motion.div>
    </section>
  )
}
