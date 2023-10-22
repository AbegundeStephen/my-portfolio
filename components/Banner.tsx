import { motion  } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Link from 'next/link'

const Banner = () => {
  const ref = useRef<string | any >("")
  const [showProjects, setShowProjects] = useState(false)


  const scrollToProjects = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowProjects(!showProjects)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "")
    const element = document.getElementById(targetId)
    element?.scrollIntoView({behavior:"smooth"})
  } 

  useEffect(() => {
    scrollToProjects
  })
  return (
    <section id='home'  className='max-w-containerxs mx-auto  py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
       <motion.h2 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.6}}
        className='text-lg font-mono tracking-wide text-orange-600'>
        Hi, my name is
       </motion.h2>

       <motion.h1 
       initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}} 
        transition={{duration:0.5, delay:0.7}} 
        className='bg-gradient-to-r from-purple-700 via-green-700 to-rose-500 bg-clip-text text-transparent text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col text-gray-300' >
        Abegunde Oluwatimilehin Stephen <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-purple-500 bg-clip-text text-transparent text-textDark mt-2 lgl:mt-4 text-4xl'>Fullstack Developer.</span>
        </motion.h1>
        <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.9}}   
        className='text-base md:max-w-[500px] text-textDark font-medium'>
          I am a passionate software developer with deep 
          understanding of frontend and backend development architectures. 
          I thrive on challenges and love transforming complex concepts 
          into seamless, user-friendly solutions. What is life without a few bugs anyway!!!
              {""}
        </motion.p>
        <motion.a
           onClick={scrollToProjects}
           href='#project'
           initial={{y:10, opacity:0}}
           animate={{y:0, opacity:1}}
           transition={{duration:0.5, delay:0.9}}
           className='w-56 h-10 text-center p-2 rounded-md font-semibold  uppercase text-textDark tracking-wide hover:bg-green-800 duration-300 text-sm font-titleFont border border-violet-700 border-2l '>
            Check out my projects
        </motion.a >
    
    </section>
  )
}

export default Banner