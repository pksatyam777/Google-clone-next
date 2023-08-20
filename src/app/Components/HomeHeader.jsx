import Link from 'next/link'
import React from 'react'
import { BsGrid3X3Gap } from "react-icons/bs";
export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex items-center space-x-4">
        <Link className="hover:underline" href="https://mail.google.com">Gmail</Link>
        <Link className="hover:underline" href="https://images.google.com">Images</Link>
        <BsGrid3X3Gap className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2"/>
        <button className="signin-blue text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign In</button>
      </div>
    </header>
  )
}
