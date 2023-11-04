

import Image from "next/image";

import { products } from "@/Types/types";

import Brands from "@/components/Brands/Brands";
import BrandsEAchCloths from "@/components/Brands/BrandsEachCloths";


const Kids = () => {

  
  const BrandNames = {
    brends: [""]
  }
  
  products.forEach((item)=>{
    
    if(!BrandNames.brends.includes(item.brand)){

      BrandNames.brends.push(item.brand)
    }
  })

  
  
  return ( 
    <div className="flex flex-wrap  gap-6   justify-between text-white mt-48 h-auto  relative
    ">
      <Brands {...BrandNames}/>
     
      {
        products.map((item)=>{

          return(
        <div key={item.id} className=" w-[calc(50%-1.5rem)] md:w-[calc(25%-1.5rem)] ">
          <div className="  h-72 bg-gray-300 shadow-sm shadow-white rounded-t-sm">
            <div className=" relative h-72 cursor-pointer">
            <Image  className="  object-contain" sizes="(max-width: 768px) 100vw" fill src={item.img} alt="" priority>
            </Image>
            </div>
          </div>
        <div className=" bg-white text-black font-medium text-sm p-4">
          <div className=" font-semibold text-center mb-2">
            <BrandsEAchCloths eachbrand= {item.brand} />
          </div>
          <div>
            {item.title}
          </div>
          <div>
           {item.price}£
          </div>
          <div>
            admin
          </div>
        </div>
      </div>
          )
        })
      }
    </div>
   );
}
 
export default Kids;