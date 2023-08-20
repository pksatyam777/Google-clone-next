"use client"

import Link from 'next/link'
import React from 'react'
import {AiOutlineSearch , AiOutlineCamera} from 'react-icons/ai'
import { usePathname ,useRouter ,useSearchParams} from 'next/navigation'

export default function SearchHeaderOptions() {
  const pathname=usePathname()
  const router=useRouter()
  const params=useSearchParams().get('searchTerm')
  const handleTab=(tab)=>{
  
      router.push(`/search/${tab==='All'? 'web':'image'}?searchTerm=${params}`)
    
  }
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-48 text-gray-700 text-sm">
      <div onClick={()=>handleTab("All")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname ==='/search/web' && '!text-blue-600 !border-b-blue-600'}`}>
        
        <AiOutlineSearch />
        <p>All</p>
        
      </div>
      <div onClick={()=>handleTab("Image")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname ==='/search/image' && '!text-blue-600 !border-b-blue-600'}`}>
      <AiOutlineCamera />
      <p>Image</p>
      </div>
    </div>
  )
}
