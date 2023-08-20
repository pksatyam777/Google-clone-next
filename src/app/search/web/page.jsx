import React from 'react'

export default async function WebSearchPage({searchParams}) {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_API_KEY}&q=${searchParams.searchTerm}`)
  const data= await response.json()
  console.log(data)
  const results=data.items;
  return (
    <div> {results && results.map((item)=>(
      <div key={item.title} className="flex items-center ml-48">
    <h1 className='underline text-blue-600'>{item.title}</h1>
    <p></p>
    </div>
    ))}</div>
  )
}
