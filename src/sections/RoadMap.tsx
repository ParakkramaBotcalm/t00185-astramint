import TokonomicCard from "../components/Cards/TokonomicCard";
import Topic from "../components/Topics/Topic";
import { ROADMAP } from "../constants/RoadMapConst";

const RoadMap = () => {
  return (
    <div
      
      className="xmmlg:px-[200px] flex h-auto w-full max-w-[1920px] flex-col items-center px-[29px] py-[50px] md:px-[50px] lg:px-[100px] xl:py-[80px] 2xl:px-[150px] 2xl:py-[100px]"
    >
      <div className="bg-brouwn relative flex w-full max-w-[450px] min-w-[300px] flex-col items-center gap-[30px] rounded-[60px] p-[30px] md:min-w-full md:flex-col-reverse md:justify-between md:gap-0 md:py-[50px]">
        <div className="flex w-full justify-center md:mt-[30px] md:justify-end xl:mt-[50px]">
          <Topic title="Road Map" />
        </div>
        <div className="flex w-full flex-col gap-[10px] md:flex-row">
          {ROADMAP.map((item, index) => (
            <TokonomicCard
              key={index}
              title={item.topic}
              description={item.content}
              className="xmmlg:text-[19px] text-[13px] font-[400] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
