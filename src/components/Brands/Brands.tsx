"use client"

import { StateContext } from "@/Context/store"
import { useContext } from "react"
import { stateType } from "@/Context/store"


type AllBrends = {

  brends : string[]
}



const Brands = (props: AllBrends) => {

  const {brend,setBrendWrap}: stateType = useContext(StateContext)
 
  
  const handleHover = (bren: any)=>{

    // console.log(brend)
   
    setBrendWrap(bren)
    
  }
  
  return ( 
    <div className=" absolute top-[-80px] left-1/2 transform -translate-x-1/2  text-center   ">
      {
        props.brends.map((bren, i)=>{
          
          
          
          return(
            
            <span className={` ${props.brends[i] == brend? " bg-red-400" : ""  }   text-sm cursor-pointer mr-4 hover:bg-red-400 p-2  ${i == 0? "hidden": ""} rounded    `} key={i}
            onMouseOver={()=> handleHover(bren)}
            >{bren}
            </span>
          )
        })
      }
    </div>
   );
}
 
export default Brands;