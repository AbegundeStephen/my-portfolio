import {TbBrandGithub,TbBrandTwitter} from 'react-icons/tb'
import {LuLinkedin} from 'react-icons/lu'

const LeftSide = () => {
  return (
    <div className='w-full  h-full flex flex-col items-center justify-end gap-4 text-textLight'>
      <div className='flex flex-col gap-4'>
        <a href="http://github.com/AbegundeStephen" target="_blank" >
          <span className='w-10 h-10 cursor-pointer
          rounded-full inline-flex items-center justify-center hover:-translate-y-2
          transition-all duration-300 text-xl bg-h'><TbBrandGithub/></span>
        </a>
        <a href="http://linkedin.com/in/abegunde-stephen-05b897aa" target="_blank" >
          <span className='w-10 h-10 cursor-pointer
          rounded-full inline-flex items-center justify-center hover:-translate-y-2
          transition-all duration-300 text-xl bg-h'><LuLinkedin/></span>
        </a>
        <a href="http://twitter.com/Gogreen_z" target="_blank" >
          <span className='w-10 h-10 cursor-pointer
          rounded-full inline-flex items-center justify-center hover:-translate-y-2
          transition-all duration-300 text-xl bg-h'><TbBrandTwitter/></span>
        </a>
      </div>
      <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  )
}

export default LeftSide