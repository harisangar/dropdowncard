import React from 'react'

import user from "../images/user.png";
import brief from "../images/brief.png";


function Content(props) {
  return (
    <div className='flex flex-row '>
      <img className="w-6 h-6 pl-1 mr-3"src={props.vehicle} alt="car"/>
     
      <div className='flex flex-col text-start items-start'>
        <p>{props.text}</p>
        <div className='flex flex-row '>
        <img className="w-3 h-3 mr-2"src={user}/><span>X{props.usercount}</span><img className="w-3 h-3 mx-2"src={brief}/><span className='pr-2'>X{props.briefcount}</span>
        </div>
      </div>
    </div>
  )
}

export default Content
