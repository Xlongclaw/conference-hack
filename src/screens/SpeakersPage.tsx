import React from 'react'
import { Footer, NavBar, SpeakersPanel } from '../components'

const SpeakersPage:React.FC = () => {
  return (
    <div className=''>
      <NavBar solid={true}/>
      <SpeakersPanel/>
      <Footer/>
    </div>
  )
}

export default SpeakersPage
