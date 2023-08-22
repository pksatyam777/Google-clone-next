import WebSearchResults from "@/app/Components/WebSearchResults";
import Link from "next/link";
import React from "react";

export default async function WebSearchPage({ searchParams }) {
  // await new Promise(resolve => setTimeout(resolve,10000))
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_API_KEY}&q=${searchParams.searchTerm}`
  );
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();

  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="font-bold text-lg">No Results Found</h1>
        <p>
          Try searching for something else or check spelling or go back to
          <Link className="text-blue-500" href="/">
            {" "}
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <div> {results && <WebSearchResults results={data} />}</div>;
}
