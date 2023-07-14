import React from 'react'
import { motion } from 'framer-motion'

const DateLocationContainer:React.FC = () => {
  return (
    <motion.div whileHover={{opacity:[1,0.7]}} className="flex cursor-pointer py-4 text-ascentColor3">
        <div className="text-xl max-w-[26rem] px-[1.5rem] py-[1.5rem] sm:px-[3rem] sm:py-[1.3rem] flex flex-col justify-center items-center border-ascentColor3/50 border-[1px] border-r-0 ">
          <div className="font-semibold sm:font-black text-lg sm:text-4xl">20 - 31</div>
          <div className="text-sm tracking-widest"> JULY 2023</div>
        </div>
        <div className="text-xl max-w-[26rem] px-[1.5rem] py-[1.5rem] sm:px-[3rem] sm:py-[1.3rem] flex flex-col justify-center items-center border-ascentColor3/50 border-[1px]">
          <div className="text-base sm:text-xl">NIT JALANDHAR</div>
          <div className="text-base">INDIA</div>
        </div>
      </motion.div>
  )
}

export default DateLocationContainer
