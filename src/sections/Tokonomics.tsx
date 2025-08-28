import TokonomicCard from "../components/Cards/TokonomicCard"
import Topic from "../components/Topics/Topic"
import { TOKONOMICCARDCONST } from "../constants/TokonomicCard.const" 
import NorteaseArrow from "../assets/image/icons/nothEastArrow.svg"


const Tokonomics = () => {
    return (
        <div className= "flex flex-col items-center  w-full px-[29px] h-auto pt-[100px]  md:px-[50px]  lg:px-[100px] 2xl:px-[150px] xmmlg:px-[200px] bg-black ">
           
            <div className="bg-brouwn relative max-w-[450px] min-w-[300px] w-full flex flex-col p-[30px] rounded-[60px] gap-[30px] items-center">
                 <div>
                <picture>
                    <img src={NorteaseArrow} alt="NortheastArrow" className="absolute -translate-x-1/2 left-1/2 -top-10" />
                </picture>
            </div>
                <div>
                    <Topic title="Tokonomics" />
                </div>
                <div className="w-full flex flex-col gap-[10px]">
                    {TOKONOMICCARDCONST.map((item, index) => (
                        <TokonomicCard key={index} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tokonomics