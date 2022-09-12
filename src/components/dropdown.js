import React, { useState, createRef } from "react";
import { createPopper } from "@popperjs/core";
import Button from "./Button";
import car from "../images/car.png";
import bus from "../images/bus.png";

const Dropdown = () => {
  // dropdown props

  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
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
            <button
              className={
                "text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none   ease-linear transition-all duration-150 bg-[#ff6900]" 
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              Dropdown
            </button>
            
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                 
                " text-base  z-50  absolute py-2 list-none text-left rounded shadow-lg shadow-indigo-500/40  bg-orange-300"
              }
              style={{ minWidth: "12rem"}}
            >
              <div className="flex">
                <div>
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900 "
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button
                      text="Economy"
                      vehicle={car}
                      usercount="3"
                      briefcount="3"
                    />
                  </a>
                  <div className="h-0 my-2 border border-solid border-t-0 border-[#ff6900] opacity-25" />
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900"
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button
                      text="Comfort"
                      vehicle={bus}
                      usercount="3"
                      briefcount="3"
                    />
                  </a>
                  <div className="h-0 my-2 border border-solid border-t-0 border-[#ff6900] opacity-25" />
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900"
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button
                      text="Business"
                      vehicle={car}
                      usercount="3"
                      briefcount="3"
                    />
                  </a>
                  <div className="h-0 my-2 border border-solid border-t-0 border-[#ff6900] opacity-25" />
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900"
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button
                      text="Premium"
                      vehicle={bus}
                      usercount="3"
                      briefcount="3"
                    />
                  </a>
                  <div className="h-0 my-2 border border-solid border-t-0 border-[#ff6900] opacity-25" />
                </div>
                <div>
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900"
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button
                      text="VIP"
                      vehicle={car}
                      usercount="3"
                      briefcount="3"
                    />
                  </a>
                  <div className="h-0 my-2 border border-solid border-t-0 border-[#ff6900] opacity-25" />
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900"
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button
                      text="SUV"
                      vehicle={bus}
                      usercount="5"
                      briefcount="5"
                    />
                  </a>
                  <div className="h-0 my-2 border border-solid border-t-0 border-[#ff6900] opacity-25" />
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900"
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button
                      text="Van"
                      vehicle={car}
                      usercount="8"
                      briefcount="6"
                    />
                  </a>
                  <div className="h-0 my-2 border border-solid border-t-0 border-[#ff6900] opacity-25" />
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-900"
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button
                      text="MiniBus"
                      vehicle={bus}
                      usercount="16"
                      briefcount="16"
                    />
                  </a>
                  <div className="h-0 my-2 border border-solid border-t-0 border-[#ff6900] opacity-25" />
                </div>
              </div>
            </div>
          </div>
        
    </>
  );
};

export default Dropdown;
