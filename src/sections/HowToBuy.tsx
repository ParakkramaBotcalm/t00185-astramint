import HowToBuyFox_1 from "../assets/image/HowtoBuyFox_1.webp";
import HowToBuyFox_2 from "../assets/image/Howtobuysfox_2.webp";
import HowToBuyCard from "../components/Cards/HowToBuyCard";
import Topic from "../components/Topics/Topic";
import { HOWTOBUYCONST } from "../constants/HowToBuy.const";

const HowToBuy = () => {
  return (
    <div className="commmanPadding xmmlg:pt-[50px] h-auto w-full md:pt-[50px] xl:pt-[100px]">
      <div className="flex h-auto flex-col items-center gap-[47px] md:flex-row md:items-end md:justify-between">
        <div className="md:h flex w-auto items-end">
          <picture className="max-w-[212px] md:max-w-[400px]">
            <img src={HowToBuyFox_1} alt="Fox_1" className="h-full object-contain" />
          </picture>
        </div>

        <div className="xmmlg:min-w-[600px] flex max-w-[356px] flex-col items-center gap-[30px] md:min-w-[350px] 2xl:min-w-[500px]">
          <Topic title="How to Buy" />
          <div className="flex flex-col gap-[20px]">
            {HOWTOBUYCONST.map((item, index) => (
              <HowToBuyCard key={index} description={item} />
            ))}
          </div>
        </div>

        <picture className="max-w-[212px] md:max-w-[400px]">
          <img src={HowToBuyFox_2} alt="Fox_1" />
        </picture>
      </div>
    </div>
  );
};

export default HowToBuy;
