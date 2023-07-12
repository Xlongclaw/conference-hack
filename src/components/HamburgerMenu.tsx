import React from 'react'
import {HamburgerIcon} from '../components'

const HamburgerMenu:React.FC = () => {
  return (
    <div className='lg:hidden block cursor-pointer py-8'>
      <HamburgerIcon/>
    </div>
  )
}

export default HamburgerMenu
