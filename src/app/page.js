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
    
  
    </>
  )
}
