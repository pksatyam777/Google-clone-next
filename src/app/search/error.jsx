"use client"
import React, { useEffect } from 'react'

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log(error,"error");
    },[error])
  return (
    <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-3">{error}</h1><button className="text-blue-500"onClick={reset}>Reset</button>
        </div>
    
  )
}
