"use client"
import Logo from "./navComponents/Logo";
import Burger from "./navComponents/Burger";
import SearchBasket from "./navComponents/SearchBasket";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  
  
  return ( 
    <div className=" z-10 fixed left-0 right-0 top-0 px-4 md:px-6 lg:px-16 bg-black  h-20 flex item-center justify-between text-white text-sm  ">
      <div className=" flex-1 flex gap-2">
        <div className="flex justify-center items-center cursor-pointer gap-3">
          <Burger />
          <div className=" hidden md:flex justify-center items-center cursor-pointer gap-3">
            <Link href={"/women"} className= {`hover:text-gray-400 ${pathname=="/women"? "text-gray-400 border-b-red-400 border-2 border-black": "text-white"
            }` }>WOMEN</Link>
            <Link href={"/men"} className= {`hover:text-gray-400 ${pathname=="/men"? "text-gray-400 border-b-red-400 border-2 border-black": "text-white"
            }` }>MEN</Link>
            <Link href={"/kids"} className= {`hover:text-gray-400 ${pathname=="/kids"? "text-gray-400 border-b-red-400 border-2 border-black": "text-white"
            }` }>KIDS</Link>
            <Link href={"/accessories"}  className= {`hover:text-gray-400 ${pathname=="/accessories"? "text-gray-400 border-b-red-400 border-2 border-black": "text-white"
            }` }>ACCESSORIES</Link>
          </div>
          
        </div>
        <div className="flex justify-center items-center   md:hidden">
          <Logo />
        </div>
      </div>
      <div className=" hidden md:flex-1 md:flex md:items-center justify-center">
        <Logo />
      </div>
      <div className=" flex-1 flex  justify-end items-center gap-3 text-white ">
        <div className=" flex py-2 items-center justify-center cursor-pointer">
          <SearchBasket/>
          
        </div>
        <div className=" hidden md:block w-max   cursor-pointer py-2 hover:text-gray-400 ">LOG IN</div>
        <div className="hidden w-max md:block cursor-pointer py-2 hover:text-gray-400">MY SHOPPING BASKET (1)</div>
      </div>
    </div>
   );
}
 
export default Navbar;