import Image from 'next/image'
import RootLayout from './layout'
import Navbar from './Navbar'
export default function Home() {
  return (
    <div>
      <RootLayout>
        <div>
        <Navbar/>
        </div>
      </RootLayout>
    </div>
  )
}
