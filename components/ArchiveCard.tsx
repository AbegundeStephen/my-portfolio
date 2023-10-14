import {FaRegFolder} from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

interface Props  {
    title:string;
    desc:string;
    link:string;
    listItem: string[]
}

const ArchiveCard = ({title,desc,link,listItem}: Props) => {
  return (
   <a href={link}>
     <div className='w-full h-80 p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group rounded-lg bg-[#112249]'>
        <div className='flex  justify-between items-center'>
            <FaRegFolder data-tooltip-target='tooltip-hover' data-tooltip-trigger='hover' className=" text-4xl text-textLight hover:text-purple-500"/>
            <RxOpenInNewWindow className=" text-4xl hover:text-red-600 text-textLight" />
        </div>
        <div>
        <h2 className='text-xl font-titleFont font-semibold tracking-wide
        group-hover:text-textGreen text-textGreen'>{title}</h2>
        <p className='text-sm mt-3 text-textLight'>{desc}</p>
        </div>
        <ul className='text-xs flex-wrap justify-between mdl:text-sm flex items-center gap-2 text-textDark'>
          {listItem.map((item,i) => (
            <li key={i}>{item}</li>
          ) ) }
        </ul>
    </div>
   </a>
  )
}

export default ArchiveCard ;