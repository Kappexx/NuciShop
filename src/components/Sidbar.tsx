'use client'

import { StateContext } from "@/Context/store";
import { useContext } from "react";
import { stateType } from "@/Context/store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
// unda davalago folderebi !!

const Sidbar = () => {

  const {isopen, setIsopen, setStrictChange}:stateType = useContext(StateContext)

  const pathname = usePathname().slice(1)
  

  
  
  const handleOnClick = () => {

    setIsopen()
    
  }

  // useEffect(()=>{
  //   if(pathname.length>1){
  //     setStrictChange()
  //   }

  // },[])
  
  return ( 
    <div className={` opacity-95 fixed  ${isopen? " left-0 right-0 md:right-[65%] lg:right-[65%]": "left-[-200px] hidden"} top-0 bottom-0   z-50 bg-gradient-to-l from-black  to-gray-900 px-5 md:px-7 lg:px-16 text-white`} >
      <div className=" flex items-center justify-start  gap-3   h-20">
        
        <div onClick={handleOnClick} className=" flex items-center  cursor-pointer group p-2">
          <svg width="16" height="16" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line className=" group-hover:stroke-gray-400" x1="0.353553" y1="0.646447" x2="16.3536" y2="16.6464" stroke="white"/>
            <line className=" group-hover:stroke-gray-400 "x1="16.3536" y1="1.35355" x2="0.353554" y2="17.3536" stroke="white"/>
          </svg>
          
        </div>
        <div className=" flex items-center gap-3 text-sm">
        <Link  href={"/women"} className= {`hover:text-gray-400 ${pathname=="women"? "text-gray-400 border-b-red-400 border-b-2 border-black": "text-white"
            }` }>WOMEN</Link>
            <Link href={"/men"} className= {`hover:text-gray-400 ${pathname=="men"? "text-gray-400 border-b-red-400 border-b-2  ": "text-white"
            }` }>MEN</Link>
            <Link href={"/kids"} className= {`hover:text-gray-400 ${pathname=="kids"? "text-gray-400 border-b-red-400 border-b-2  ": "text-white"
            }` }>KIDS</Link>
            <Link href={"/accessories"}  className= {`hover:text-gray-400 ${pathname=="accessories"? "text-gray-400 border-b-red-400 border-b-2 ": "text-white"
            }` }>ACCESSORIES</Link>
        </div>
      </div>
      {/* New in */}
      {/* <p className=" w-max mt-8 mb-8 pl-2 text-sm cursor-pointer font-semibold hover:text-gray-400">
        {pathname.length == 0? "NEW IN": pathname.toUpperCase()}
      </p> */}
      {
        pathname.length !==0 && pathname !== "new" ? <div className="flex flex-col gap-4 w-max mt-8 mb-8 pl-2 text-xs font-semibold ">
        {
        pathname == "accessories" ?
        <p className=" cursor-pointer hover:text-gray-400 ">ALL ACCESSORIES</p> : <><p className=" cursor-pointer hover:text-gray-400">TROUSERS
        </p>
        
        <p className= {`cursor-pointer hover:text-gray-400  ${pathname == "women"||pathname == "kids"? "" : "hidden"}`} >
          DRESS
        </p>
        <p className=" cursor-pointer hover:text-gray-400">SHOES</p></>
        }
      </div>: <p className=" w-max mt-8 mb-8 pl-2 text-sm cursor-pointer font-semibold hover:text-gray-400">NEW IN</p>
      }
      
      
    </div>
   );
}
 
export default Sidbar;