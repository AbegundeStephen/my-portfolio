import { motion  } from 'framer-motion'

const Banner = () => {
  return (
    <section id='home'  className='max-w-containerxs mx-auto  py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
       <motion.h3 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.6}}
        className='text-lg font-titleFont tracking-wide text-textLight'>
        Hi, my name is
       </motion.h3>

       <motion.h1 
       initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}} 
        transition={{duration:0.5, delay:0.7}} 
        className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col text-gray-300' >
        Abegunde Oluwatimilehin <span className=' text-textDark mt-2 lgl:mt-4'>Designing, developing, delivering excellence</span>
        </motion.h1>
        <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.9}}   
        className='text-base md:max-w-[500px] text-textDark font-medium'>
          I am a passionate software developer with deep 
          understanding of frontend and backend development architectures. 
          I thrive on challenges and love transforming complex concepts 
          into seamless, user-friendly solutions. What is life without a few bugs anyway!!!
              {""}
        </motion.p>
        <motion.button
           id='projects'
           initial={{y:10, opacity:0}}
           animate={{y:0, opacity:1}}
           transition={{duration:0.5, delay:0.9}}
           className='w-52 h-14 rounded-md font-semibold uppercase text-textDark tracking-wide hover:bg-hoverColor duration-300 text-sm font-titleFont border border-violet-700 border-2l '>
            Check out my projects
        </motion.button >
    
    </section>
  )
}

export default Banner