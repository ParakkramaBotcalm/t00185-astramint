import { QuctionCardProps } from "../../types/QuctionCardProps";

const QuctionsCard = ({ topic, content }: QuctionCardProps) => {
  return (
    <div className="ashgradent flex w-full flex-col gap-3 rounded-[30px] p-[2px] md:max-w-[250px] xl:max-w-[400px] 2xl:max-w-[472px]">
      <div className="bg-brouwn font-PoppinsMedium h-auto w-full rounded-[30px] p-5 font-[500]">
        <div className="flex justify-start text-[20px] font-[500] text-white md:text-[12px] xl:text-[16px] 2xl:text-[20px]">
          <p>{topic}</p>
        </div>
        <div className="text-[14px] font-[400] text-white/60 md:text-[10px] xl:text-[14px] 2xl:text-[16px]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default QuctionsCard;
