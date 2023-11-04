

const SearchBasket = () => {
  return (
  <div className=" flex  items-center justify-center">
    <span className=" flex group items-center justify-center gap-1 mr-4 md:mr-1">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className="group-hover:fill-red-400 " fillRule="evenodd" clipRule="evenodd" d="M7.41658 1.5C4.13384 1.5 1.5 4.07393 1.5 7.21585C1.5 10.3578 4.13384 12.9317 7.41658 12.9317C10.6993 12.9317 13.3332 10.3578 13.3332 7.21585C13.3332 4.07393 10.6993 1.5 7.41658 1.5ZM0.5 7.21585C0.5 3.49193 3.61176 0.5 7.41658 0.5C11.2214 0.5 14.3332 3.49193 14.3332 7.21585C14.3332 10.9398 11.2214 13.9317 7.41658 13.9317C3.61176 13.9317 0.5 10.9398 0.5 7.21585ZM12.3215 12.4055C12.5137 12.2072 12.8302 12.2022 13.0286 12.3943L15.3475 14.6407C15.5459 14.8329 15.5509 15.1494 15.3588 15.3477C15.1666 15.5461 14.8501 15.5511 14.6518 15.359L12.3328 13.1125C12.1344 12.9204 12.1294 12.6039 12.3215 12.4055Z" fill="#FFFFFF"></path>
    </svg>
    <p className="hidden md:block group-hover:text-gray-400  ">SEARCH</p>
  </span>
    <span className="flex items-center justify-center md:hidden">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M3.5 5C3.5 2.51472 5.51472 0.5 8 0.5C10.4853 0.5 12.5 2.51472 12.5 5V5.5H14.3668L15.5634 15.5H0.436604L1.63319 5.5H3.5V5ZM4.5 5.5H11.5V5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5V5.5ZM2.52066 6.5L1.5634 14.5H14.4366L13.4793 6.5H2.52066Z" fill="#fff"></path>
    </svg>
    <span className=" text-sm text-center ">(0)</span>
    </span>
  </div>

   );
}
 
export default SearchBasket;