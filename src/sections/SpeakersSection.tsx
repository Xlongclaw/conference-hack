import React from 'react'
import { SpeakersPanel } from '../components'

const SpeakersSection:React.FC = () => {
  return (
    <div className=''>
      <div className="custom-font1 text-5xl pl-32 pb-32">Speakers</div>
      <SpeakersPanel/>
    </div>
  )
}

export default SpeakersSection
