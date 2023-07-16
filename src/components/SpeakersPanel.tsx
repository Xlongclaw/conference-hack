import React from 'react'
import {SpeakerContainer} from '../components'
import { motion } from 'framer-motion'
import useSWR from 'swr'

const SpeakersPanel:React.FC = () => {
  const slideLeft= {
    hidden:{
      x:600,
      opacity:0,
      
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        type:"spring",
        stiffness:20,
        delay:0.5,
        // when:"beforeChildren",
        // staggerChildren:0.5
      }
    }
  }
  const CONF_ID1 = "647f315f62cdb3a26174fc38"
  // const CONF_ID2 = "6492f77d1cc9629afd1c7008"
  const { data, isLoading, error } = useSWR(
    `https://conference.cyclic.app/speakers/conference/${CONF_ID1}`
  );
  if(error) return <></>
  if(isLoading) return <></>
  return (
    <motion.div variants={slideLeft} initial={'hidden'} whileInView={'visible'} className='gap-[3rem] grid grid-flow-col overflow-x-auto scrolldiv my-[10rem] relative z-10'>
      {
        data.map((speaker:any,index:number)=>{
         return <SpeakerContainer key={index} Name={speaker.Name} Designation={speaker.Designation} ImgLink={speaker.ImgLink}/>
        })
      }
    </motion.div>
  )
}

export default SpeakersPanel
