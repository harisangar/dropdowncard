import React, { useState, createRef, useEffect,useRef} from "react";
import { createPopper } from "@popperjs/core";
import Button from "./Button";

import { Data } from "./Data";

const Dropdown = () => {
 
  // dropdown props
  const [value,setValue]=useState("Dropdown");
  const changetext=(val)=>{
    setValue(val);
    
    
  }
  const concernedElement = document.querySelector(".dropdownbox");

  document.addEventListener("mousedown", (event) => {
    if (concernedElement.contains(event.target)) {
      console.log("Clicked Inside");
    } else {
      closeDropdownPopover();
    }
  });

  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  

  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const len= Data.length/2;
  // const lengtofdata= Data.length;
  // const calcdata=()=>{
  //   if(Data.length/2 === 1 ){
  //     data=Data[Data.length-1];
  //     setIsodd(true);
  //   }
  // }
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors

  return (
    <>
      <div className="flex flex-wrap  w-full sm:w-6/12 md:w-4/12   ">
        <div
          className={
            " w-full relativecursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm h-12'"
          }
          type="button"
          ref={btnDropdownRef}
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
       {value}
    
        </div>

        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            " dropdownbox text-base  z-50  absolute py-2 list-none text-left rounded shadow-lg shadow-indigo-500/40  bg-gray-500"
          }
          style={{ minWidth: "12rem" }}
        >
          <div className="flex flex-row-reverse">
            <div className="flex flex-col">
              
              {Data.map((data,index)=>{
                
                
                if (index<=(len-1)) {
                  return  <div  onClick={() => {
                    dropdownPopoverShow
                      ? closeDropdownPopover()
                      : openDropdownPopover();
                  }}><a
                  
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900 "
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  <Button key={index}
                  buttonclicked={changetext}
                 
                   
                    text={data.text}
                    vehicle={data.vehicle}
                    
                    usercount={data.usercount}
                    briefcount={data.briefcount}
                   
                  />
                </a>
                <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
                
                </div>
                
                }
              })}
            </div>
            <div className="flex flex-col"  onClick={() => {
                    dropdownPopoverShow
                      ? closeDropdownPopover()
                      : openDropdownPopover();
                  }}>
            {Data.map((data,index)=>{
                if (index>(len-1)) {
                  return  <div><a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900 "
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  <Button
                  buttonclicked={changetext}
                    text={data.text}
                    vehicle={data.vehicle}
                    usercount={data.usercount}
                    briefcount={data.briefcount}
                  />
                </a>
                <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
                </div>
                }
              })}

            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Dropdown;
