import React from 'react'
import { AnnouncementSection, AwardsPrizesSection, ConferenceSection, ContactUsSecion, DateSection, HomeSection, SponsorsSection } from '../sections'
import { Footer } from '../components'

const HomePage:React.FC = () => {
  return (<div className='relative parallax'>
    <div className={`overflow-x-hidden `}>
      <HomeSection/>
      <AnnouncementSection/>
      <ConferenceSection/>
      <DateSection/>
      <SponsorsSection/>
      <AwardsPrizesSection/>
      <ContactUsSecion/>
      <Footer/>
    </div>
  </div>
  )
}

export default HomePage
