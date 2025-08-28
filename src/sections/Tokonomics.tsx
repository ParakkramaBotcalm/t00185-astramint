import TokonomicCard from "../components/Cards/TokonomicCard";
import Topic from "../components/Topics/Topic";
import { TOKONOMICCARDCONST } from "../constants/TokonomicCard.const";
import NorteaseArrow from "../assets/image/icons/nothEastArrow.svg";

const Tokonomics = () => {
  return (
    <div className="xmmlg:px-[200px] flex h-auto w-full max-w-[1920px] flex-col items-center bg-black px-[29px] py-[50px] md:px-[50px] lg:px-[100px] xl:py-[80px] 2xl:px-[150px] 2xl:py-[100px]">
      <div className="bg-brouwn relative flex w-full max-w-[450px] min-w-[300px] flex-col items-center gap-[30px] rounded-[60px] p-[30px] md:min-w-full md:flex-col-reverse md:justify-between md:gap-0 md:py-[50px]">
        <div>
          <picture>
            <img
              src={NorteaseArrow}
              alt="NortheastArrow"
              className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-11/12 md:scale-75"
            />
          </picture>
        </div>
        <div className="flex w-full justify-center md:mt-[30px] md:justify-end xl:mt-[50px]">
          <Topic title="Tokonomics" />
        </div>
        <div className="flex w-full flex-col gap-[10px] md:flex-row">
          {TOKONOMICCARDCONST.map((item, index) => (
            <TokonomicCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokonomics;
