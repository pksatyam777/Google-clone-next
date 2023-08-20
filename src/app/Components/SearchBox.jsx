"use client"
import React,{useState} from 'react'
import {BsFillMicFill} from 'react-icons/bs'
import { PiMagnifyingGlassThin } from "react-icons/pi";
import {RxCross2} from 'react-icons/rx'
import { useSearchParams, useRouter } from 'next/navigation';

export default function SearchBox() {
   
    const params=useSearchParams()
    const search = params.get('searchTerm')
    const [input, setInput] = useState(search || '');
    const redirect=useRouter()
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(!input.trim()) return;
      redirect.push(`/search/web?searchTerm=${input}`)
    }
  return (
    <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
        >
        {console.log(search)}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow focus:outline-none px-2"
        />
        
          
        <RxCross2 onClick={()=>setInput('')} className='text-xl  text-black cursor-pointer  ' />
            
            
        <BsFillMicFill className="text-xl text-blue-600 mx-3 cursor-pointer hidden sm:inline-flex border-l-2 border-gray-300" />
        <PiMagnifyingGlassThin className="text-xl text-blue-500 mx-3 cursor-pointer hidden sm:inline-flex" onClick={(e)=> handleSubmit(e)}/>
          
        
      </form>
  )
}
