import Navbar from '@/components/Navbar'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Archive from '@/components/Archive'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

import {motion} from 'framer-motion'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <main className='w-full h-screen font-bodyFont bg-bodyColor text-light overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20s scrollbar-thumb-textDark/60'>
    <Navbar/>
    <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} className="hidden mdl:inline-flex h-full fixed left-0 bottom-0"><LeftSide/> </motion.div>
      <div className="h-[88vh] w-full mx-auto p-4">
        <Banner/>
        <About/>
        <Experience/>
        <Projects/>
        <Archive/>
        <Contact/>
        <Footer/>
      
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}  className="hidden md:inline-flex w-32 h-1/4 fixed right-0 bottom-0" ><RightSide/></motion.div>
    </div>
    </main>
    </>
  )
}
