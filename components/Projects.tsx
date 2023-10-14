import {stockUp,project4 ,eduPro ,chat,gpt, article} from "@/public/assets";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import {RxOpenInNewWindow} from 'react-icons/rx'

const Projects = () => {
  return (
    <section id='projects' className='max-w-container mx-auto mdl:px-20 py-24'>
       <SectionTitle title="Featured Projects"/>
      <div className="w-full flex justify-between gap-16 mt-10 flex-col items-center">

        {/* Project One */}
       <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col lg:flex-row gap-6">
            <a href="https://github.com/AbegundeStephen/shop" target="_blank" className="
            w-full lg:w-1/2 h-auto relative group">
            <div>
                <Image src={gpt} alt="" className="w-[80vw] h-full object-cover"/>
            </div>
            </a>
           <div className="w-full lgl:w-1/2 items-end text-right lg:-ml-16 z-10 flex flex-col gap-6 ">
         
          <h3 className="text-2xl font-bold text-textDark">Modern UI/UX Website</h3>
          <p className="text-sm md:text-base p-2 md:p-6 rounded-md text-textLight bg-[#112240]">
          Responsive and well animated website showcasing the endless possibilities of artificial
          intelligence with Chat GPT-3.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            
            <li>React</li>
            <li>CSS</li>
                     
          </ul>
          <div className="text-2xl flex gap-4">
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <TbBrandGithub/>
            </a>
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <RxOpenInNewWindow/>
            </a>
          </div>
        </div>
        </div>
        
        <div></div>
       </div>
       
   
       {/* Project One */}
       <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col lg:flex-row-reverse gap-6">
            <a href="https://github.com/AbegundeStephen/shop" target="_blank" className="
            w-full lg:w-1/2 h-auto relative group">
            <div>
                <Image src={eduPro} alt="" className="w-[80vw] h-full object-cover"/>
            </div>
            </a>
           <div className="w-full lgl:w-1/2 items-end text-right lg:-ml-16 z-10 flex flex-col gap-6 ">
         
          <h3 className="text-2xl font-bold text-textDark">eduPro</h3>
          <p className="text-sm md:text-base p-2 md:p-6 rounded-md text-textLight bg-[#112240]">
          This is an Education Consulting Platform with the infusion of Blogging capabilites, 
          a one stop destination for latest school gists and related news. Any user who has signed-up
          or logged in can create articles for others to read. Also, readers can like or comment on any article.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            
            <li>Firebase</li>
            <li>React</li>
            <li>Bootsrap5</li>
                     
          </ul>
          <div className="text-2xl flex gap-4">
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <TbBrandGithub/>
            </a>
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <RxOpenInNewWindow/>
            </a>
          </div>
        </div>
        </div>
        
        <div></div>
       </div>

       {/* Project One */}
   <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col lg:flex-row gap-6">
            <a href="https://github.com/AbegundeStephen/shop" target="_blank" className="
            w-full lg:w-1/2 h-auto relative group">
            <div>
                <Image src={article} alt="" className="w-[80vw] h-full object-cover"/>
            </div>
            </a>
           <div className="w-full lgl:w-1/2 items-end text-right lg:-ml-16 z-10 flex flex-col gap-6 ">
         
          <h3 className="text-2xl font-bold text-textDark">Summarify</h3>
          <p className="text-sm md:text-base p-2 md:p-6 rounded-md text-textLight bg-[#112240]">
            An Ai Article Summarizer which returns a concise summary of an article.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            
            <li>Rapidapi</li>
            <li>Tailwind</li>
            
                     
          </ul>
          <div className="text-2xl flex gap-4">
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <TbBrandGithub/>
            </a>
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <RxOpenInNewWindow/>
            </a>
          </div>
        </div>
        </div>
        
        <div></div>
       </div>

       
       {/* Project Two*/}
       <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col lg:flex-row-reverse gap-6">
            <a href="https://github.com/AbegundeStephen/messaging-app-backend" target="_blank" className="
            w-full lg:w-1/2 h-auto relative group">
            <div>
                <Image src={chat} alt="" className="w-[80vw] h-full object-cover"/>
            </div>
            </a>
           <div className="w-full lgl:w-1/2 items-end text-right  z-10 flex flex-col gap-6 ">
         
          <h3 className="text-2xl font-bold text-textDark">BEEP</h3>
          <p className="text-sm md:text-base lg:-mr-16 p-2 md:p-6 rounded-md text-textLight bg-[#112240]">
           A real time chat-app built with websocket api and nodejs websocket server which runs
           parallel to the http protocol, a communication channel was established through which the
           server communicates with the client. Using the same local address, users can 
           exchange messges in a global chat room.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>React</li>
            <li>Socket.io</li>
            <li>Styled-components</li>
            <li>MongoDB</li>
            <li>Node</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <TbBrandGithub/>
            </a>
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <RxOpenInNewWindow/>
            </a>
          </div>
        </div>
        </div>
        
        <div></div>
       </div>
          {/* {Project Three} */}
       <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col lg:flex-row gap-6">
            <a href="https://github.com/AbegundeStephen/shop" target="_blank" className="
            w-full lg:w-1/2 h-auto relative group">
            <div>
                <Image src={stockUp} alt="" className="w-[80vw] h-full object-cover"/>
            </div>
            </a>
           <div className="w-full lgl:w-1/2 items-end text-right lg:-ml-16 z-10 flex flex-col gap-6 ">
         
          <h3 className="text-2xl font-bold text-textDark">stockUp</h3>
          <p className="text-sm md:text-base p-2 md:p-6 rounded-md text-textLight bg-[#112240]">
            An inventory management appplication for taking stock. React was used for frontend and Nodejs for backend. 
            jsonwebtoken waas used to authenticating users while react-redux and redux-toolkit 
            was used to persist user data
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>jwt</li>
            <li>mongoDB</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <TbBrandGithub/>
            </a>
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <RxOpenInNewWindow/>
            </a>
          </div>
        </div>
        </div>
        
        <div></div>
       </div>
         {/* {Project Four} */}
         <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col lg:flex-row-reverse gap-6">
            <a href="https://github.com/AbegundeStephen/shop" target="_blank" className="
            w-full lg:w-1/2 h-auto relative group">
            <div>
                <Image src={project4} alt="" className="w-[80vw] h-full object-cover"/>
            </div>
            </a>
           <div className="w-full lgl:w-1/2 items-end text-right lg:-ml-16 z-10 flex flex-col gap-6 ">
         
          <h3 className="text-2xl font-bold text-textDark">WEB SHOP</h3>
          <p className="text-sm md:text-base p-2 md:p-6 rounded-md text-textLight bg-[#112240]">
            A web shop with customer and admin section. mongodb was used as data storage 
            while jsonwebtokens handled authentication. Stripe was used as payment gateway while
            redux toolkit was used to persist state changes with users data.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            
            <li>Node</li>
            <li>React</li>
            <li>Redux</li>
           <li>MongoDB</li>
            <li>Stripe</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <TbBrandGithub/>
            </a>
            <a className="hover:text-textGreen text-textLight duration-300" href="https://github.com/AbegundeStephen/shop" target="_blank">
              <RxOpenInNewWindow/>
            </a>
          </div>
        </div>
        </div>
        
        <div></div>
       </div>
        
      </div>
    
    </section>
  );
};

export default Projects