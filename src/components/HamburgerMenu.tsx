import React,{useState} from 'react'
import {HamBurgerWrapper, HamburgerIcon} from '../components'

const HamburgerMenu:React.FC = () => {
  const [showDropDown,setShowDropDown] = useState(false)
  return (
    <div className='lg:hidden flex flex-col items-end cursor-pointer py-8 relative'>

      <div className='p-4' onClick={()=>{setShowDropDown(!showDropDown)}}>
      <HamburgerIcon/>
      </div>
      <HamBurgerWrapper visible={showDropDown}/>
    </div>
  )
}

export default HamburgerMenu
