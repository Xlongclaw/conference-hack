import React from 'react'
import { AnnouncementContainer } from '../components'
import CampaignIcon from '@mui/icons-material/Campaign';
import useSWR from 'swr';

const AnnouncementSection:React.FC = () => {
  const CONF_ID1 = "647f315f62cdb3a26174fc38"
  const {data,isLoading,error} = useSWR(`https://conference.cyclic.app/announcement/conf/${CONF_ID1}`)
  console.log(data);
  
  if (error) return <></>
  if (isLoading) return <></>
  return (
    <div className=' py-[5rem] relative md:pl-32 bg-zinc-950 flex flex-col justify-center md:items-start items-center'>
      <h1 className='custom-font1 text-ascentColor3 flex text-4xl sm:text-5xl px-[12vw] md:px-0 self-start mb-16 items-center gap-8'>
        <div className=' scale-[170%] sm:scale-[200%] flex items-center justify-center'>
        <CampaignIcon/>
        </div>
        Announcements</h1>
      <div className='grid grid-flow-row scroll1 overflow-y-auto border-l-0  h-[40rem] gap-12 w-[80vw] md:w-[38rem] overflow-x-hidden'>
        {
          data.map((announcement:Object,index:number)=>
            <AnnouncementContainer key={index} announcement={announcement}/>
          )
        }
      </div>
    </div>
  )
}

export default AnnouncementSection
