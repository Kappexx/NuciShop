"use client"

import { useContext } from "react";
import { StateContext } from "@/Context/store";
import { stateType } from "@/Context/store";

const Burger = () => {
  const {isopen, setIsopen}:stateType = useContext(StateContext)

  const handlecklick = () =>{
    setIsopen()
  }
  return ( 
    <div onClick={handlecklick} className="group p-2 border-l-2" >
      <svg width="15" height="15" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line className="group-hover:stroke-gray-400" y1="1" x2="36" y2="1" stroke="white" strokeWidth="2"/>
      <line className="group-hover:stroke-gray-400" y1="23" x2="36" y2="23" stroke="white" strokeWidth="2"/>
      <line className="group-hover:stroke-red-400" y1="12" x2="36" y2="12" stroke="white" strokeWidth="2"/>
      </svg>
    </div>
    

   );
}
 
export default Burger;