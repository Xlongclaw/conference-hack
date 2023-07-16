import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {YouTube} from "@mui/icons-material";

import { motion } from 'framer-motion';

const SocialLinks:React.FC<{facebookLink:string;instaLink:string;twitterLink:string;youtubeLink:string}> = (props) => {
  return (
    <div className="flex gap-8 mt-16 text-white ">
          <motion.a href={props.facebookLink} target="_blank" whileHover={{scale:1.4,translateY:-10,color:"#5db7de"}}>
            <FacebookIcon className="scale-150 cursor-pointer" />
          </motion.a>
          <motion.a href={props.instaLink} target="_blank"  whileHover={{scale:1.4,translateY:-10,color:"#5db7de"}}>
            <InstagramIcon className="scale-150 cursor-pointer" />
          </motion.a>
          <motion.a href={props.youtubeLink} target="_blank"  whileHover={{scale:1.4,translateY:-10,color:"#5db7de"}}>
            <YouTube className="scale-150 cursor-pointer" />
          </motion.a>
          <motion.a href={props.twitterLink} target="_blank"  whileHover={{scale:1.4,translateY:-10,color:"#5db7de"}}>
            <TwitterIcon className="scale-150 cursor-pointer" />
          </motion.a>
        </div>
  )
}

export default SocialLinks
