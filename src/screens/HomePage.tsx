import React from 'react'
import { AnnouncementSection, CommitteeSection, ConferenceSection, ContactUsSecion, HomeSection, SpeakersSection, SponsorsSection } from '../sections'
import { Footer } from '../components'

const HomePage:React.FC = () => {
  return (
    <div className=''>
      <HomeSection/>
      <AnnouncementSection/>
      <ConferenceSection/>
      <CommitteeSection/>
      <SpeakersSection/>
      <SponsorsSection/>
      <ContactUsSecion/>
      <Footer/>
    </div>
  )
}

export default HomePage
