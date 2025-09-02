import HowToBuyFox_1 from "../assets/image/HowtoBuyFox_1.webp"
import HowToBuyFox_2 from "../assets/image/Howtobuysfox_2.webp"
import HowToBuyCard from "../components/Cards/HowToBuyCard"
import Topic from "../components/Topics/Topic"
import { HOWTOBUYCONST } from "../constants/HowToBuy.const"


const HowToBuy = () => {
    return (
        <div className="commmanPadding w-full h-auto md:pt-[50px] xl:pt-[100px] xmmlg:pt-[50px] ">
            <div className="flex flex-col gap-[47px] items-center md:flex-row md:justify-between  h-auto md:items-end">
              <div className="md:h flex w-auto   items-end">
                  <picture className="max-w-[212px] md:max-w-[400px]">
                    <img src={HowToBuyFox_1} alt="Fox_1" className="h-full object-contain"/>
                </picture>
              </div>

                <div className="flex flex-col items-center max-w-[356px] gap-[30px] md:min-w-[350px] 2xl:min-w-[500px] xmmlg:min-w-[600px]">
                    <Topic title="How to Buy" />
                    <div className="flex flex-col gap-[20px]">
                        {
                            HOWTOBUYCONST.map((item,index)=>(
                                <HowToBuyCard key={index} description={item}/>
                            ))
                        }
                    </div>
                </div>

                 <picture className="max-w-[212px] md:max-w-[400px]">
                    <img src={HowToBuyFox_2} alt="Fox_1" />
                </picture>
            </div>

            
        </div>
    )
}

export default HowToBuy