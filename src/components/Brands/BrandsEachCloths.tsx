"use client"
import { StateContext } from "@/Context/store";
import { useContext } from "react";
import { stateType } from "@/Context/store";

type BrendType = {

  eachbrand: string
}
  

// {props: {eachbrand: string}}

const BrandsEAchCloths = (props: BrendType) => {
  const {brend}:stateType = useContext(StateContext)
  
  

  return ( 
    <div className={props.eachbrand == brend?  " bg-red-400 text-white " : " bg-none"}>
      {props.eachbrand}
    </div>
   );
}
 
export default BrandsEAchCloths;