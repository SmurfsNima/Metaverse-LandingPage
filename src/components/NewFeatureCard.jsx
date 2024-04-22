import React from "react";
import styles from "../styles";
const NewFeatureCard = ({ imgurl, title, subtitle }) => {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-h-[210px]">
      <div
        className={`${styles.flexCenter} w-16 h-[70px] rounded-3xl bg-[#323f5d]`}
      >
        <img src={imgurl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>

      <h1 className="mt-6 font-bold text-2xl leading-8 text-white">
        {title}
      </h1>
      <p className="flex-1 mt-4 font-normal text-[18px] text-[#b0b0b0] leading-8">
        {subtitle}
      </p>
    </div>
  );
};

export default NewFeatureCard;
