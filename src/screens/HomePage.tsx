import React from 'react'
import { AnnouncementSection, AwardsPrizesSection, ConferenceSection, DateSection, HomeSection, SponsorsSection } from '../sections'
import { Footer } from '../components'

const HomePage:React.FC = () => {
  return (<div className='relative'>
    <div className={`bg-[url('/src/assets/images/bgimg5.jpg')] bg-cover h-full -z-10 w-full fixed`}></div>
    <div className={`overflow-x-hidden `}>
      <HomeSection/>
      <AnnouncementSection/>
      <ConferenceSection/>
      <DateSection/>
      <SponsorsSection/>
      <AwardsPrizesSection/>
      <Footer/>
    </div>
  </div>
  )
}

export default HomePage
