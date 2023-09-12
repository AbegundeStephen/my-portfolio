
import SectionTitle from './SectionTitle'
import {useState} from 'react'
import UncleDIgital from './Works/UncleDIgital'
import RealtyDb from './Works/RealtyDb'

const Experience = () => {
 
  const handleRealtyDB = () => {
    setWorkRealty(true)
    setWorkUncleDigital(false)
  }
  const handleUncleDB = () => {
    setWorkRealty(false)
    setWorkUncleDigital(true)
  }

    const [workUncleDigital, setWorkUncleDigital] = useState(true)
    const [workRealty, setWorkRealty] = useState(false)
  return (
    <section className="max-w-containerxxs mx-auto py-10 mdl:py-24 px-4" id='experience'>
      <SectionTitle title='Where i have worked'/>

      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
        <li onClick={handleUncleDB} className={`${workUncleDigital? "border-l-textGreen text-textGreen": "border-l-textDark text-textDark"} border-l-2  bg-transparent  text-textDark hover:bg-[#112240] cursor-pointer duration-300 font-medium py-3 text-sm px-8`}>Uncle Digital Limited</li>
          <li onClick={handleRealtyDB} className={`${workRealty? "border-l-textGreen text-textGreen": "border-l-textDark text-textDark"} border-l-2  bg-transparent  text-textDark hover:bg-[#112240] cursor-pointer duration-300 font-medium py-3 text-sm px-8`}>Realty Pointers</li>
       </ul>
        {workUncleDigital && <UncleDIgital/>}
        {workRealty && <RealtyDb/>}
      </div>
    </section>
  )
}

export default Experience 