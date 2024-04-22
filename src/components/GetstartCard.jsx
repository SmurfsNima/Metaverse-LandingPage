import React from 'react'
import styles from '../styles'

const GetstartCard = ({number , text}) => {
  return (
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} bg-[#323f5d] w-[70px] h-[70px] rounded-[24px] `}>
        <p className='font-bold text-xl text-white '>0{number}</p>
      </div>
      <p className='flex-1 mr-7 font-normal text-[18px] text-[#B0B0B0] leading-8'>{text}</p>
    </div>
  )
}

export default GetstartCard
