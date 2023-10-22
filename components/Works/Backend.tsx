import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const Backend = () => {
    
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="w-full text-textLight">
    <h3 className="flex gap-1 font-medium text-xl font-titleFont">Experiences <span className="tracking-wide text-purple-500">@Backend Development</span></h3>
    <ul className=" mt-6 flex-col gap-3" >
    <li className="text-base flex gap-2 text-textDark">
      <span className=" mt-1 text-orange-400"><TiArrowForward/></span>
      Proficient in writing the logic and algorithms that power the server-side of web applications.
       This includes designing and implementing APIs, business logic, algorithms, and database integration with Node and express.

    </li>
    <li className="text-base flex gap-2 text-textDark">
      <span className=" mt-1 text-orange-400"><TiArrowForward/></span>
      Proficient in working with databases like mongoDB and MySQL to store and retrieve data efficiently. 
      This includes designing database schemas, writing optimized queries, and ensuring data integrity and security.
    </li>
    <li className="text-base flex gap-2 text-textDark">
      <span className=" mt-1 text-orange-400"><TiArrowForward/></span>
     Proficient in building and maintaining APIs that allow communication 
      between the frontend and backend systems.This involves designing RESTful APIs, handling data serialization 
      formats (e.g., JSON, XML), and integrating with external APIs or third-party services.
    </li>

    <li className="text-base flex gap-2 text-textDark">
      <span className=" mt-1 text-orange-400"><TiArrowForward/></span>
       Ability to implement authentication and authorization mechanisms, such as token-based authentication or OAuth.
       
    </li>


    <li className="text-base flex gap-2 text-textDark">
      <span className=" mt-1  text-orange-400"><TiArrowForward/></span>
     Ability to write unit tests,integration tests, and conduct regular debugging to identify and fix bugs and ensure code quality with tools like postman.
       
    </li>
    <li className="text-base flex gap-2 text-textDark">
      <span className=" mt-1  text-orange-400"><TiArrowForward/></span>
      Proficient in the usage of version control systems like Git for code collaboration 
      and management.
    </li>

    </ul>
</motion.div>
  )
}

export default Backend;