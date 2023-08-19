
import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bottom ">
        <div className="border-b px-8 py-3">
            <CountryLookup />
        </div>
        <div className="flex justify-between flex-col sm:flex-row items-center px-8 py-3 space-y-7 sm:space-y-0  ">
            <ul className="flex space-x-2  items-center">
                <li className="link">About</li>
                <li className="link">Advertising</li>
                <li className="link">Business</li>
                <li className="link">How search Works</li>
            </ul>
            <ul className="flex space-x-2   items-center">
                <li className="link">Privacy</li>
                <li className="link">Terms</li>
                <li className="link">Settings</li>
            </ul>
        </div>
        </footer>
  )
}
