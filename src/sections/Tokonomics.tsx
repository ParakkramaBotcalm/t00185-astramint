import TokonomicCard from "../components/Cards/TokonomicCard"
import Topic from "../components/Topics/Topic"
import { TOKONOMICCARDCONST } from "../constants/TokonomicCard.const"
import NorteaseArrow from "../assets/image/icons/nothEastArrow.svg"



const Tokonomics = () => {
    return (
        <div className="flex flex-col items-center  w-full px-[29px] h-auto py-[50px] xl:py-[80px] 2xl:py-[100px]  md:px-[50px]  lg:px-[100px] 2xl:px-[150px] xmmlg:px-[200px] bg-black max-w-[1920px] ">

            <div className="bg-brouwn relative max-w-[450px] min-w-[300px] md:min-w-full w-full flex flex-col p-[30px] md:py-[50px] rounded-[60px] gap-[30px] md:gap-0  items-center md:flex-col-reverse  md:justify-between">
                <div>
                    <picture>
                        <img src={NorteaseArrow} alt="NortheastArrow" className="absolute -translate-x-1/2 left-1/2 md:left-11/12 -top-10 md:scale-75" />
                    </picture>
                </div>
                <div className="w-full flex justify-center md:justify-end md:mt-[30px] xl:mt-[50px]">
                    <Topic title="Tokonomics" />
                </div>
                <div className="w-full flex flex-col md:flex-row gap-[10px]">
                    {TOKONOMICCARDCONST.map((item, index) => (
                        <TokonomicCard key={index} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tokonomics