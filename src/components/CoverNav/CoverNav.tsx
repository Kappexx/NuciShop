import Link from "next/link";





const CoverNav = () => {
  return ( 
    <div className=" mt-20  h-screen  flex flex-col  text-white items-center justify-center gap-5 md:flex-row ">
      <div className=" bg-masimmnewcover bg-cover bg-center border-8 border-black rounded-xl  flex-1 flex flex-col items-center justify-around   h-[75%]   p-2 text-center md:text-left  ">
        <Link href={"/new"}>
        <p className="group cursor-pointer w-min h-min p-10 border-solid border-2 transition-all hover:border-gray-400">
        <svg className=" " width="154" height="28" viewBox="0 0 154 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        
      
        
<g className=" " filter="url(#filter0_i_7_4)">
<path className="group-hover:fill-gray-400" d="M0.76 28V-1.90735e-06H5.04L22.6 21.56H20.48V-1.90735e-06H25.64V28H21.36L3.8 6.44H5.92V28H0.76ZM37.9428 11.64H51.8628V15.92H37.9428V11.64ZM38.3428 23.64H54.1428V28H33.1428V-1.90735e-06H53.5828V4.36H38.3428V23.64ZM66.1491 28L56.8691 -1.90735e-06H62.2691L70.5491 25.32H67.8691L76.4691 -1.90735e-06H81.2691L89.6291 25.32H87.0291L95.5091 -1.90735e-06H100.469L91.1891 28H85.6691L78.0291 5.16H79.4691L71.7091 28H66.1491ZM116.346 28V-1.90735e-06H121.546V28H116.346ZM129.119 28V-1.90735e-06H133.399L150.959 21.56H148.839V-1.90735e-06H153.999V28H149.719L132.159 6.44H134.279V28H129.119Z" fill="white"/>
</g>
<defs>
  
<filter id="filter0_i_7_4" x="0.759995" y="0" width="153.239" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_7_4"/>
</filter>
</defs>

</svg>
          
        </p> 
        </Link>
        <h1 className=" text-lg w-[75%]  break-all  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusamus debitis  </h1>
      </div>
      <div className=" flex-1 flex  flex-wrap h-[75%] w-[100%]  ">
        <div className="border-8 rounded-xl  border-black bg-massimowomen bg-cover bg-center flex-[50%] text-center  flex items-center justify-center text-sm cursor-pointer md:hover:text-base "><p className=" w-max h-10 text-center transition-all">WOMEN</p></div>
        <div className="border-8  rounded-xl border-r-white border-black bg-cover  bg-center bg-massimomen flex-[50%] flex items-center justify-center text-sm cursor-pointer md:hover:text-base"><p className="w-max h-10 text-center transition-all">MEN</p></div>
        <div className="border-8 rounded-xl border-black bg-cover bg-center bg-massimokids flex-[50%] flex items-center justify-center text-sm cursor-pointer md:hover:text-base"><p className="w-max h-10 text-center transition-all">KIDS</p></div>
        <div className="border-8 rounded-xl border-r-white border-black bg-cover bg-center bg-masimmoaccesories flex-[50%] flex items-center justify-center text-sm cursor-pointer md:hover:text-base"><p className=" w-max h-10 text-center transition-all">ACCESSORIES</p></div>
      </div>
    </div>
   );
}
 
export default CoverNav;