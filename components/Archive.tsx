import{useState} from 'react'
import ArchiveCard from './ArchiveCard'
import {motion} from 'framer-motion'

const Archive = () => {
  const [showMore, setshowMore] = useState(false)
  return (
    <div className='max-w-containerxs mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-titleFont text-textDark font-semibold'>Other Projects</h2>
            
        </div>
        <div className='grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <motion.div  initial={{opacity:0}}
                whileInView={{opacity:1}}
                 transition={{delay:0.1}}>
            <ArchiveCard
            title="A Travel and Tour Website"
            desc="Search tourist destinations in Nigeria and place booking for travel to explore chosen destination."
            link="https//goojkflkvkv"
            listItem={["Html","CSS", "Javascript"]}/>
            </motion.div>
            <motion.div  initial={{opacity:0}}
                whileInView={{opacity:1}}
                 transition={{delay:0.2}}>
            <ArchiveCard
            title="A Task Tracker App"
            desc="Create,Update and Delete upcoming task with a running timer and reminder against each task."
            link="https//goojkflkvkv"
            listItem={["React-Native"]}/>
            </motion.div>
            <motion.div  initial={{opacity:0}}
                whileInView={{opacity:1}}
                 transition={{delay:0.1}}>
            <ArchiveCard
            title="A Landing Page"
            desc="Responsive landing page for an Agro-consultancy platform."
            link="https//goojkflkvkv"
            listItem={["Html,Tailwind-css"]}/>
            </motion.div>
            <motion.div  initial={{opacity:0}}
                whileInView={{opacity:1}}
                 transition={{delay:0.2}}>
            <ArchiveCard
            title="Car Listing App"
            desc="Find book, rent a car"
            link="https//goojkflkvkv"
            listItem={["Next.js","Rapidapi",]}/>
            </motion.div>
            <motion.div  initial={{opacity:0}}
                whileInView={{opacity:1}}
                 transition={{delay:0.6}}>
            <ArchiveCard
            title="Ai Saas Website"
            desc="Generate, Design and Customize T-Shirts with ai"
            link="https//goojkflkvkv"
            listItem={["Mongodb","Next.js"]}/>
            </motion.div>
            

            {
            showMore && (
              <>
            {/* <motion.div  initial={{opacity:0}}
                whileInView={{opacity:1}}
                 transition={{delay:0.6}}>
            <ArchiveCard
            title="Ai Saas Website"
            desc="Generate, Design and Customize T-Shirts with ai"
            link="https//goojkflkvkv"
            listItem={["Mongodb","Next.js"]}/>
            </motion.div> */}
              
              </>
            )}

        </div>
        <div onClick={() => setshowMore(!showMore)} className='mt-12 flex items-center justify-center'>
        <button className='w-36 h-12 rouned-lg text-textDark text-[13px] border border-violet-700 hover:bg-hoverColor duration-300'>
            {showMore ? "Show Less" : "Show More"}
        </button>
        </div>
    </div>
  )
}

export default Archive