import React from 'react'

const ConferenceWrapper:React.FC<{heading:string;year:string;imglink:string;color:string}> = (props) => {
  return (
    <div className="flex justify-center relative items-center w-[28rem] h-[38rem] overflow-hidden rounded-3xl">
            <img src={props.imglink} alt="" />
            <div className="absolute w-full h-full bg-black/70"></div>
            <div className={`absolute text-9xl bottom-8 left-8 ${props.color} font-semibold`}>
              <button className="border-[2px] mb-6 top-[-3rem] absolute border-ascentColor3 hover:transition-all hover:duration-300 transition-all duration-300 hover:bg-ascentColor3 hover:text-ascentColor4 cursor-pointer font-normal custom-font1 px-8 py-2 rounded-2xl text-ascentColor3 mx-4 text-xl">
                Discover more.
              </button>
              <h1>{props.heading}</h1>
              <h3 className="text-6xl font font-medium ml-4 leading-6 tracking-[1.4rem]">
                {props.year}
              </h3>
            </div>
          </div>
  )
}

export default ConferenceWrapper
