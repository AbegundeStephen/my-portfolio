import SectionDivider from "./SectionDivider"

interface Props {
    title: string
}

const SectionTitle = ({title}: Props)  => {
    return <h2  className="bg-gradient-to-r from-green-500 via-orange-700 to-purple-500 bg-clip-text text-transparent font-titleFont text-textLight md:text-lg text-2xl flex font-semibold items-center ml-2">
        {title}
       <SectionDivider/>
    </h2>
}

export default SectionTitle