import React from 'react'
import { Footer, NavBar } from '../components'
import { SponsorsSection } from '../sections'

const SponsorshipPage:React.FC = () => {
  return (
    <div className='bg-black'>
      <NavBar solid/>
      <SponsorsSection confId='647f315f62cdb3a26174fc38'/>
      <Footer/>
    </div>
  )
}

export default SponsorshipPage
