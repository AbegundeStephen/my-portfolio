import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const RealtyDb = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="w-full text-textLight">
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Developer <span className="tracking-wide text-textGreen">@Realty Pointers</span></h3>
       
        <ul className=" mt-6 flex-col gap-3" >
        <li className="text-base flex gap-2 text-textDark">
          <span className=" mt-1 text-textGreen"><TiArrowForward/></span>
          Implemented a dynamic property listings system, enabling real-time
updates of available properties, images, and descriptions, improving
the browsing experience for potential clients.


        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className=" mt-1 text-textGreen"><TiArrowForward/></span>
          Worked closely with cross-functional teams, including designers and
          marketing, to align development efforts with the branding of the company
         = and marketing strategies.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className=" mt-1 text-textGreen"><TiArrowForward/></span>
          Assisted with debugging and troubleshooting backend issues to
         ensure smooth user experience.
        </li>


        </ul>
    </motion.div>
  )
}

export default RealtyDb