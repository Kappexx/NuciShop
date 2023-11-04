

const Footer = () => {
  return ( 
    <>
    <div className=" flex flex-wrap justify-between text-white border-t-2 border-b-2 border-gray-600 mt-14 py-14  text-sm md:flex-row">
      <div className=" flex-[50%] md:flex-auto">
        <p>HELP</p>

        <div className=" text-xs mt-3  leading-6">
          <p className=" cursor-pointer hover:text-gray-400">CONTACT</p>
          <p className=" cursor-pointer hover:text-gray-400">TRACK YOUR ORDER</p>
        </div>
        
      </div>
      <div className=" flex-[50%] md:flex-auto">
        <p>SERVICES</p>
        
        <div className=" text-xs mt-3   leading-6">
          <p className=" cursor-pointer hover:text-gray-400">SERVICES FROM UK</p>
          <p className=" cursor-pointer hover:text-gray-400">DELIVERY INFORMATION</p>
        </div>
        
      </div>
      <div className=" flex-[50%] mt-4 md:flex-auto md:mt-0">
        <p>LEGAL</p>
        
        <div className=" text-xs mt-3  leading-6">
          <p className=" cursor-pointer hover:text-gray-400">PRIVACY POLICY</p>
          <p className=" cursor-pointer hover:text-gray-400">TRACK YOUR ORDER</p>
          <p className=" cursor-pointer hover:text-gray-400">RETURN POLICY</p>
          <p className=" cursor-pointer hover:text-gray-400">COOKIES INFORMATION</p>
        </div>
        
      </div>
      <div className=" flex-[50%] mt-4 md:flex-auto md:mt-0">
        <p>COMPANY</p>

        <div className=" text-xs mt-3 leading-6">
          <p className=" cursor-pointer hover:text-gray-400">ABOUT  NINA'S ROOM</p>
        </div>
        
        
      </div>
    </div>

    <div className="flex justify-between text-xs text-white pt-4 pb-11">
      <div className=" flex gap-3 ">
        <p className=" cursor-pointer">INSTAGRAM</p>
        <p className=" cursor-pointer">FACEBOOK</p>
        
        
      </div>
      <p>UNITED KINGDOM | EN</p>
    </div>
    </>
   );
}
 
export default Footer;