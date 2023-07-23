import React from 'react'
import NavLinksData from '../Constants/NavLinksData'
import { Link } from 'react-router-dom'

const HamBurgerWrapper:React.FC<{visible:boolean}> = (props) => {
  return (
    <div className={`text-white ${props.visible?"flex":"hidden"} flex-col items-end bg-custom-dark absolute top-24`}>
      {
        NavLinksData.map((link:{title:string;link:string;dropdown:Array<{subtitle:string;link:string}>},index:number)=>(
            <div key={index} className='py-3 px-10 hover:bg-custom-orange hover:text-ascentColor4 w-full'>
                <Link to={link.link}>{link.title}</Link>
            </div>
        ))
      }
    </div>
  )
}

export default HamBurgerWrapper
