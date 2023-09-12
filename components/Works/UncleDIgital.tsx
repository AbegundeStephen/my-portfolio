import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const UncleDIgital = () => {
    
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="w-full text-textLight">
    <h3 className="flex gap-1 font-medium text-xl font-titleFont">Frontend Engineer <span className="tracking-wide text-textGreen">@Uncle Digital Limited</span></h3>
    <ul className=" mt-6 flex-col gap-3" >
    <li className="text-base flex gap-2 text-textDark">
      <span className=" mt-1 text-textGreen"><TiArrowForward/></span>
      Developed and maintained frontend codebase for multiple client
      websites, ensuring cross-browser compatibility and responsive design.

    </li>
    <li className="text-base flex gap-2 text-textDark">
      <span className=" mt-1 text-textGreen"><TiArrowForward/></span>
      Collaborated with UX designers and backend developers to implement
       user-centric features and functionality.
    </li>
    <li className="text-base flex gap-2 text-textDark">
      <span className=" mt-1 text-textGreen"><TiArrowForward/></span>
      Optimized website performance by conducting regular audits and
       implementing necessary improvements.
    </li>


    </ul>
</motion.div>
  )
}

export default UncleDIgital