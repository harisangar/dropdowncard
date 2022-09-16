import React from 'react'


// import user from "/images/user.png";
// import brief from "/images/brief.png";


const Content=({usercount,vehicle,text,briefcount})=> {
  
  return (
    
    
    <div className='flex flex-row ' >
      <img className="w-6 h-6 pl-1 mr-3"src={vehicle} alt="car"/>
     
      <div className='flex flex-col text-start items-start'>
        <p>{text}</p>
        <div className='flex flex-row '>
        <img className="w-3 h-3 mr-2"src="/images/user.png"/><span>X{usercount}</span><img className="w-3 h-3 mx-2"src="/images/brief.png"/><span className='pr-2'>X{briefcount}</span>
        </div>
      </div>
    </div>
  
  )
}

export default Content
