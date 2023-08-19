import Image from 'next/image'
import HomeHeader from './Components/HomeHeader'
import HomeSearch from './Components/HomeSearch'

export default function Home() {
  return (
    <>
    {/* Header */}
    <HomeHeader />

    {/* Body */}
    <div className="flex flex-col items-center mx-28 my-56">
    <Image width="300" height="300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" alt="Google"/>
    <HomeSearch />
    </div>
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>
    </main>
    </>
  )
}
