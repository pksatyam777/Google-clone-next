
import { Inter } from 'next/font/google'
import SearchHeader from '../Components/SearchHeader'

const inter = Inter({ subsets: ['latin'] })



export default function SearchLayout({ children }) {
  return (
    
      <div><SearchHeader />{children}</div>
      
    
  )
}
