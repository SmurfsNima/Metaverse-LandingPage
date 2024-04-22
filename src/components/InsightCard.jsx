import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';
import arrow from '../assets/arrow.svg'
export const InsightCard = ({index , imgUrl , title , subtitle}) => {
  return (
        <motion.div className='flex flex-col md:flex-row gap-4 mx-auto ' variants={fadeIn('up' , 'spring', index * 0.5,1)}>
            <img src={imgUrl} className='rounded-[32px] w-full md:w-[240px] h-[240px] object-cover' alt="" />
            <div  className='w-full flex justify-between items-center'>
                <div className='flex flex-1 flex-col md:mr-[30px] max-w-[600px]'>
                <h4 className='font-normal text-[42px] text-white'>{title}</h4>
                </div>
                <div className='hidden md:mr-12 lg:flex items-center justify-center w-[100px] h-[100px] rounded-full border border-white bg-transparent rotate-[230deg]'>
                    <img className='w-[40%] h-[40%} object-containt' src={arrow} alt="" />
                </div>
            </div>
        </motion.div>
  )
}
