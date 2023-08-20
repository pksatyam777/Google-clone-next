"use client"
import React,{useState} from 'react'
import {BsFillMicFill} from 'react-icons/bs'
export default function SearchBox() {
    const [input, setInput] = useState("");
  return (
    <form
        onSubmit={(e) => handleSubmit(e)}
        className=" flex w-full m5-5 mx-auto max-w-[90%] my-4 border border-gray-200 items-center rounded-full px-2 py-3  hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-full lg:max-w-2xl"
      >
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-xl mx-3" />
      </form>
  )
}
