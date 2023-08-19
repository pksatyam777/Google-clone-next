"use client";
import React, { useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { useRouter } from "next/navigation";
export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [loading,setLoading]=useState(false);
  const redirect = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (input) {
      redirect.push(`/search/web?searchTerm=${input}`);
    }
  };
  async function randomSearch(e){
    e.preventDefault()
    setLoading(true);
    const response= await fetch(`https://random-word-api.herokuapp.com/word`)
    .then((res) => res.json())
    .then((data) => data[0])
    if(!response) return
    if(response){
        redirect.push(`/search/web?searchTerm=${response}`);
        setLoading(false)
    }
  }
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" flex w-full m5-5 mx-auto max-w-[90%] my-4 border border-gray-200 items-center rounded-full px-2 py-3  hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <PiMagnifyingGlassThin className="text-xl text-gray-500 mx-3" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-xl mx-3" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-x-4 sm:space-y-0 justify-center sm:flex-row">
        <button
          onClick={(e) => handleSubmit(e)}
          className="btn w-52 py-2 px-4 text-sm text-gray-800 rounded-md font-normal hover:shadow-md transition-shadow hover: border hover:border-gray-300"
        >
          Google Search
        </button>
        <button
          onClick={(e) => randomSearch(e)} disabled={loading}
          className="btn w-52 py-2 px-4 text-sm text-gray-800 rounded-md font-normal hover:shadow-md transition-shadow hover: border hover:border-gray-300 flex items-center justify-center disabled:opacity-80"
        >{loading ? ( <img src="spinner.svg" alt="loading" className="h-6 text-center" /> ): ("I'm Feeling Lucky")  }
          
        </button>
      </div>
    </>
  );
}
