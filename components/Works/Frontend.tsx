import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const Frontend = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="w-full text-textLight">
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Experiences <span className="tracking-wide text-textGreen">@Frontend Development</span></h3>
       
        <ul className=" mt-6 flex-col gap-3" >
        <li className="text-base flex gap-2 text-textDark">
          <span className=" mt-1 text-textGreen"><TiArrowForward/></span>
          Proficient in building and implementing user interfaces based on designs provided
            by UI/UX designers. This includes converting design files into HTML,
             CSS, and JavaScript code.



        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className=" mt-1 text-textGreen"><TiArrowForward/></span>
           Ability to create websites or web applications that are responsive and adaptable 
           across different devices and screen sizes. This involves using CSS
            media queries and other techniques to ensure a seamless user experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className=" mt-1 text-textGreen"><TiArrowForward/></span>
           Proficient in working with APIs to fetch data
           from the server and update the user interface dynamically,using
           JavaScript frameworks like React.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className=" mt-1 text-textGreen"><TiArrowForward/></span>
            web pages optimization for performance by minimizing file sizes,image type conversion,
            leveraging caching techniques, and reducing the number of server requests.
        </li>


        </ul>
    </motion.div>
  )
}

export default Frontend;