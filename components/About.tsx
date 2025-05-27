import Image from 'next/image'
import SectionTitle from './SectionTitle'
import {RiJavascriptFill} from 'react-icons/ri'
import {SiReactquery} from 'react-icons/si'
import {TbBrandTypescript,TbBrandMongodb,TbBrandTailwind,TbBrandNextjs,TbBrandBootstrap} from 'react-icons/tb'
import {LiaNode} from 'react-icons/lia'
import {DiFirebase} from 'react-icons/di'
import {BsFiletypeSql} from 'react-icons/bs'
import {BiLogoDocker} from 'react-icons/bi'
import { profileImage } from '@/public/assets'

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerxxs mx-auto py-10 md:py-32 flex flex-col gap-8">
      <SectionTitle title={"About me"} />
      <div className="flex flex-col mdl:flex-row gap-8">
        <div className="w-full mdl:w-2/3 text-base font-medium flex flex-col gap-4 text-textDark">
          <p>
            Though originally from an agri-business background, I was captivated
            by the limitless opportunities of web development and the power of
            technology to solve real-world problems. With profound curiosity and
            an insatiable appetite for learning, I transitioned into fullstack
            development, drawn to both creating seamless user experiences and
            building robust backend systems. What began as curiosity soon
            transformed into expertise across the full development stack. I stay
            current with emerging frameworks and best practices, ensuring my
            solutions are both cutting-edge and reliable in today&#39;s
            fast-evolving digital landscape.
          </p>
          <p>
            Here are few technologies/stack which i am constantly developing and
            expanding:
          </p>

          <ul className="w-[450px] grid grid-cols-2 gap-2 mt-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-textLight">
                <RiJavascriptFill />
              </span>
              Javascript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textLight">
                <SiReactquery />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textLight">
                <LiaNode />
              </span>
              Node
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textLight">
                <TbBrandTailwind />
              </span>
              Tailwindcss
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textLight">
                <TbBrandTypescript />
              </span>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textLight">
                <TbBrandNextjs />
              </span>
              Nextjs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textLight">
                <BsFiletypeSql />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textLight">
                <TbBrandMongodb />
              </span>
              Mongodb
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textLight">
                <DiFirebase />
              </span>
              Firebase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textLight">
                <BiLogoDocker />
              </span>
              Docker
            </li>
          </ul>
        </div>
        <div className="w-full mdl:w-1/3 h-80 relative group">
          <div className="w-full absolute h-80 -left-6 -top-6 rounded-lg bg-white ">
            <div className="w-full h-full relative mdl:pl-0 z-20 flex pl-6 ">
              <Image
                src={profileImage}
                alt="profileImage"
                className="object-cover rounded-lg h-80"
              />
              <div
                className="mdl:inline-block absolute w-full h-80 bg-textGreen/60
          rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div
            className="hidden mdl:inline-flex w-full h-80 border-2 border-violet-600
           rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
}

export default About