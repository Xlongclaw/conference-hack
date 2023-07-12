import React from 'react'
import {motion} from "framer-motion"

const DropDown:React.FC<{DropDownData:Array<{subtitle:string,link:string}>;visibility:boolean}> = (props) => {
  return (
    <motion.div animate={props.visibility?{display:"flex",opacity:1}:{display:"none",opacity:0}} className='absolute flex-col right-0 top-12 bg-ascentColor4 shadow1 text-ascentColor3 py-2'>
      {
        props.DropDownData.map((elem)=><div key={elem.subtitle} className='min-w-max text-sm px-10 py-4 hover:bg-custom-orange hover:text-ascentColor4'>{elem.subtitle}</div>)
      }
    </motion.div>
  )
}

export default DropDown
