import { Poppins } from '@next/font/google'
import Home from '@/components/Home'
import AboutSection from '@/components/AboutSection'
const poppins = Poppins({
  subsets: ['latin'],
  weight: '300'
})


export default function Home() {
  return (
   <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
    <Home/>
    <AboutSection/>
   </main>
  )
}
