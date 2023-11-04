"use client"


import {createContext, useState} from 'react'

export interface stateType {
  isopen: boolean,
  setIsopen: () => void,
  setStrictChange: () => void,
  brend: string,
  setBrend?: (brend: string)=> void,
  setBrendWrap: (brend: string) => void
}
const defaultstate = {
  isopen: false,
  setIsopen: ()=> {},
  setStrictChange: ()=> {},
  brend: "",
  setBrend: () => {},
  setBrendWrap: () => {}
}
type Props = {
  children: React.ReactNode
}



const StateContext = createContext<stateType>(defaultstate)

const IsOpenProvider = ({children}:Props)=>{
  const [isopen, setOpen]= useState(defaultstate.isopen)
  const [brend, setBrend] = useState(defaultstate.brend)
 
  
  const setIsopen = () =>{

    setOpen(prev => !prev)
  }
  const setStrictChange = () =>{
    
    
    setOpen(true)
  }

  const setBrendWrap = (brend: string) =>{

    setBrend(brend)
  }
  

  return(
    <StateContext.Provider value={{
      isopen,
      setIsopen,
      setStrictChange,
      brend,
      setBrendWrap
    }}>
      {children}
    </StateContext.Provider>
  )
}

export {IsOpenProvider, StateContext}

