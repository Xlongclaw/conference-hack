import React from 'react'
import { AnnouncementSection, CommitteeSection, ContactUsSecion, HomeSection, SpeakersSection, SponsorsSection } from '../sections'
import { Footer } from '../components'

const HomePage:React.FC = () => {
  return (
    <div>
      <HomeSection/>
      <AnnouncementSection/>
      <CommitteeSection/>
      <SpeakersSection/>
      <SponsorsSection/>
      <ContactUsSecion/>
      <Footer/>
    </div>
  )
}

export default HomePage
