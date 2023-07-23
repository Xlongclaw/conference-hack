import React from 'react'
import { ContactWrapper, Error, Footer, Loading, NavBar } from '../components'
import useSWR from 'swr';

const ContactUsPage:React.FC = () => {
  const { data:contacts, isLoading, error } = useSWR(
    `https://conference.cyclic.app/contacts/647f315f62cdb3a26174fc38`
  );


  if (error) return <Error/>;
  if (isLoading) return <Loading/>;
  return (
    <div>
      <NavBar solid/>
      <h5 className='text-3xl text-center mt-[3rem]'>Contacts</h5>
      <div className='flex flex-wrap gap-16 justify-center my-[3rem]'>
        {
          contacts.map((contact:any,index:number)=>(
            <ContactWrapper contact={contact} key={index}/>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUsPage
