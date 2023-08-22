import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'
import PaginationButtons from './PaginationButtons'
export default function WebSearchResults({results}) {
    
  return (
    // About 4,21,00,000 results (0.45 seconds) 
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 pl-[5%] md:pl-[14%] lg:pl-48">
        <p className="py-2 text-sm text-gray-500 font-normal">{`About ${results.searchInformation?.formattedTotalResults} results (${results.searchInformation?.formattedSearchTime} seconds) `} </p>
        {results.items?.map((item)=>(
            <div key={item.title} className="mb-8 max-w-xl flex flex-col">
                <div className="group">
                <div>
                    <Link className="text-sm text-gray-600 truncate" href={item.link}>{item.formattedUrl}</Link>
                </div>
                <Link href={item.link}>
                <h1 className="text-blue-800 cursor-pointer group-hover:underline text-lg font-semibold">{item.title}</h1>
                </Link>
                </div>
                <p className='text-gray-600'>
                    {Parser(item.htmlSnippet)}...<br/>
                </p>
            </div>
        ))}
        <PaginationButtons/>
    </div>
  )
}
