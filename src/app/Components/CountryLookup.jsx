"use client"
import React,{useEffect, useState} from 'react'

export default function CountryLookup() {
    const [location,setLocation]=useState('India')
    const Api_key=process.env.NEXT_PUBLIC_IP_API_KEY
    useEffect(()=>{
        fetch(`https://extreme-ip-lookup.com/json/?key=${Api_key}`).then((res)=>  res.json()).then((data)=> setLocation(data.country))
    },[])
  return (
    <div>{location}</div>
  )
}
