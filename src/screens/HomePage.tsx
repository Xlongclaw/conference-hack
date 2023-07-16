import React from 'react'
import { AnnouncementSection, AwardsPrizesSection, ConferenceSection, DateSection, HomeSection, SponsorsSection } from '../sections'
import { Footer } from '../components'

const HomePage:React.FC = () => {
  return (
    <div className={`overflow-x-hidden`}>
      <HomeSection/>
      <AnnouncementSection/>
      <ConferenceSection/>
      <DateSection/>
      <SponsorsSection/>
      <AwardsPrizesSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
