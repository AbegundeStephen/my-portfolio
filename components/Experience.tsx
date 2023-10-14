
import SectionTitle from './SectionTitle'
import {useState} from 'react'
import Frontend from './Works/Frontend'
import Backend from './Works/Backend'
import Databases from './Works/Databases'

const Experience = () => {
 
  const [frontend, setFrontend] = useState(true)
    const [backend, setBackend] = useState(false)
    const [databases, setDatabases] = useState(false)
   
  const handleFrontend = () => {
    setFrontend(true)
    setBackend(false)
    setDatabases(false)
  }
  const handleBackend = () => {
    setFrontend(false)
    setBackend(true)
    setDatabases(false)
  }
  const handleDatabases = () => {
      setFrontend(false)
      setBackend(false)
      setDatabases(true)
  }

    
  return (
    <section className="max-w-containerxxs mx-auto py-10 mdl:py-24 px-4" id='experience'>
      <SectionTitle title='Technical Experiences'/>

      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
        <li onClick={handleFrontend} className={`${frontend? "border-l-textGreen text-textGreen": "border-l-textDark text-textDark"} border-l-2  bg-transparent  text-textDark hover:bg-[#112240] cursor-pointer duration-300 font-medium py-3 text-sm px-8`}>Frontend Development</li>
          <li onClick={handleBackend} className={`${backend? "border-l-textGreen text-textGreen": "border-l-textDark text-textDark"} border-l-2  bg-transparent  text-textDark hover:bg-[#112240] cursor-pointer duration-300 font-medium py-3 text-sm px-8`}>Backend Development</li>
          {/* <li onClick={handleDatabases} className={`${databases? "border-l-textGreen text-textGreen": "border-l-textDark text-textDark"} border-l-2  bg-transparent  text-textDark hover:bg-[#112240] cursor-pointer duration-300 font-medium py-3 text-sm px-8`}>Databases</li>
           */}
       </ul>
        {frontend && <Frontend/>}
        {backend && <Backend/>}
        {/* {databases && <Databases/>} */}
      </div>
    </section>
  )
}

export default Experience 