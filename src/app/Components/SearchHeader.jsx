import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchBox from './SearchBox'
import { RiSettings3Line } from 'react-icons/ri'
import { BsGrid3X3Gap } from "react-icons/bs";
import SearchHeaderOptions from './SearchHeaderOptions'
export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="search-header flex w-full justify-between  p-6 items-center">
        <div className="">
          <Link href="/">
          <Image width="120" height="120" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" />
          </Link>
        </div>
        <div className="search-input flex-1">
          <SearchBox />
        </div>
        <div className="nav-section  justify-between space-x-4 items-center hidden md:inline-flex">
          <RiSettings3Line className="text-4xl text-gray-600 cursor-pointer p-2" />
          <BsGrid3X3Gap className="text-4xl text-gray-600 cursor-pointer p-2"  />
          <button className="signin-blue  text-white px-6 py-2 font-normal rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign In</button>
        </div>
      </div>
      
        <SearchHeaderOptions />
      
    </header>
  )
}
