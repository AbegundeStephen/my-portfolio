import Link from 'next/link'
import {useState,useRef,useEffect} from 'react'
import { motion } from 'framer-motion'
import {MdOutlineClose} from 'react-icons/md'
import { TbBrandTwitter,TbBrandGithub } from 'react-icons/tb';
import { LuLinkedin } from 'react-icons/lu';
const Navbar = () => {
   const ref = useRef<string | any>("")
  const [showMenu, setShowmenu] = useState(false)

  const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowmenu(!showMenu)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/,"");
    const elem = document.getElementById(targetId)
    elem ?.scrollIntoView({behavior:"smooth"});
    //update the className
    const links = document.querySelectorAll(".nav-link")
    links.forEach((link) => {
      link.classList.remove("active")
    });
    e.currentTarget.classList.add("active")
  };
  useEffect(() => {
    handleScroll
  },)
  const handleClick = (e:any) => {
    if(e.target.contains(ref.current)) {
      setShowmenu(!showMenu);
    }
  }
  return (
    <div className='w-full shadow-navbarshadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
    <div className="max-width-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
       <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
       
        </motion.div>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex text-{13px} gap-7'>
            <Link href="#home" className='flex items-center gap-1 font-medium text-textDark
                hover:text-purple-600 cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                  <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2}}>
                    Home
                  </motion.li>
                </Link>
                <Link href="#about" className='flex items-center gap-1 font-medium text-textDark
                hover:text-purple-600 cursor-pointer duration-300 nav-link'onClick={handleScroll}>
                 <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2,delay:0.1}}>
                   About
                  </motion.li>
                </Link>
                <Link href="#experience" className='flex items-center gap-1 font-medium text-textDark
                hover:text-purple-600 cursor-pointer duration-300 nav-link'onClick={handleScroll}>
                 <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2,delay:0.2}}>
                    Experience
                  </motion.li>
                </Link>
                <Link href="#project" className='flex items-center gap-1 font-medium text-textDark
                hover:text-purple-600 cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                 <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2,delay:0.3}}>
                    Projects
                  </motion.li>
                </Link>
                <Link href="#contact" className='flex items-center gap-1 font-medium text-textDark
                hover:text-purple-600 cursor-pointer duration-300 nav-link'onClick={handleScroll}>
                 <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2,delay:0.4}}>
                    Contact
                  </motion.li>
                </Link>
            </ul>
        
        </div>
        {/* Small icon */}
        <div onClick={() => setShowmenu(!showMenu)} className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className='w-full h-[2px] bg-purple-500 inline-flex trasnform
          group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
           <span className='w-full h-[2px] bg-purple-500 inline-flex trasnform
          group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
           <span className='w-full h-[2px] bg-purple-500 inline-flex trasnform
          group-hover:translate-x-1 transition-all ease-in-out duration-300'></span>
         </div>
         {showMenu && (
          <div onClick={handleClick}
           ref={(node) => (ref.current = node)}
           className='absolute mdl:hidden top-0 right-0 w-full
           h-screen bg-black bg-opacity-50 flex flex-col items-end'>
           <motion.div 
           initial={{x:20,opacity:0}}
           animate={{x:0,opacity:1}}
           transition={{duration:0.1}}
           className='w-[80%] h-full overflow-y-scrollnscrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'>
           <MdOutlineClose
           className="text-3xl text-purple-500 cursor-pointer
           hover:text-red-500 absolute top-4 right-4"
           onClick={() => setShowmenu(!showMenu)}/>
           <div className='flex flex-col items-center gap-7'>
            <ul className='flex flex-col text-base gap-7'>
            <Link href="#home" className='flex items-center gap-1 font-medium text-textDark
                hover:text-purple-600 cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                  <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2}}>
                    Home
                  </motion.li>
                </Link>
                <Link href="#about" className='flex items-center gap-1 font-medium text-textDark
                hover:text-purple-600 cursor-pointer duration-300 nav-link'onClick={handleScroll}>
                 <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2,delay:0.1}}>
                   About
                  </motion.li>
                </Link>
                <Link href="#experience" className='flex items-center gap-1 font-medium text-textDark
                hover:text-purple-600 cursor-pointer duration-300 nav-link'onClick={handleScroll}>
                 <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2,delay:0.2}}>
                    Experience
                  </motion.li>
                </Link>
                <Link href="#projects" className='flex items-center gap-1 font-medium text-textDark
                hover:text-purple-600 cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                 <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2,delay:0.3}}>
                    Projects
                  </motion.li>
                </Link>
                <Link href="#contact" className='flex items-center gap-1 font-medium text-textDark
                hover:text-purple-600 cursor-pointer duration-300 nav-link'onClick={handleScroll}>
                 <motion.li initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2,delay:0.4}}>
                    Contact
                  </motion.li>
                </Link>
            </ul>
            <a href="/assets/ABEGUNDE.pdf" target='_blank'>
           <motion.button
            className='px-4 py-2 rounded-md text-textLight text-{13px}  border border-purple-600 hover:bg-hoverColor duration-300 uppercase'
              initial={{opacity:0}}
              animate={{opacity:1}} 
              transition={{duration:0.5}}>
                Resume
            </motion.button>
           </a> 
           <div className='flex gap-4'>
           <motion.a 
        className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
        hover:border-textGreen text-zinc-200 rounded-full inline-flex
        items-center justify-center hover:text-purple-600 cursor-pointer hover:-translate-y-2 transition-all
        duration-300'
        href="" target='_blank'>
         <TbBrandGithub/>
        </motion.a>
        <motion.a 
        className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
        hover:border-textGreen text-zinc-200 rounded-full inline-flex
        items-center justify-center hover:text-purple-600 cursor-pointer hover:-translate-y-2 transition-all
        duration-300'
        href="" target='_blank'>
         <LuLinkedin/>
        </motion.a>
        <motion.a 
        className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
        hover:border-textGreen text-zinc-200 rounded-full inline-flex
        items-center justify-center hover:text-purple-600 cursor-pointer hover:-translate-y-2 transition-all
        duration-300'
        href="" target='_blank'>
         <TbBrandTwitter/>
        </motion.a>
           </div>
           <motion.a
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{delay:1.2,ease:"easeIn"}}
           className='text-sm w-72 tracking-widest text-orange-500
           text-center mt-4'
           href='mailto:timilehin18@gmail.com'>
            <p>timilehin@gmail.com</p>
           </motion.a>
           </div>
           </motion.div>
          </div>
         )}
    </div>
    </div>
  )
}

export default Navbar