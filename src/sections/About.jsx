import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components/Texttyping";
import { fadeIn, staggerContainer } from "../utils/motion";
const About = () => {
  return (
    <section className={` ${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title=" درباره متاورس | " textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-2 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
        >
          <h3 className="font-extrabold text-white">
          متاورس، شرکتی فناوری محور است که در زمینه تحلیل داده و هوش مصنوعی فعالیت می‌کند. این شرکت به ارائه راه‌حل‌های نوآورانه در حوزه‌هایی از جمله پیش‌بینی ترافیک شهری، تحلیل مشتریان و بهبود عملکرد تجاری می‌پردازد. با بهره‌گیری از الگوریتم‌ها و مدل‌های پیشرفته هوش مصنوعی، متاورس به شرکت‌ها کمک می‌کند تا از داده‌های خود بهترین استفاده را برای تصمیم‌گیری‌های استراتژیک و عملیاتی بکنند. از جمله محصولات برجسته این شرکت می‌توان به سیستم‌های پیش‌بینی ترافیک، پردازش زبان طبیعی، و پلتفرم‌های تحلیل داده اشاره کرد.

          </h3>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
