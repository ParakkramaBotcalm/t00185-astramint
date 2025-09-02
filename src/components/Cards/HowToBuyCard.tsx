import { HowToBuyCardProps } from "../../types/HowToBuyCardProps";

const HowToBuyCard = ({ description }: HowToBuyCardProps) => {
  return (
    <div className="ashgradent xmmlg:min-w-[542px] h-auto min-h-[69px] w-full rounded-[30px] p-[2px] 2xl:min-w-[500px]">
      <div className="bg-brouwn flex h-full w-full flex-col items-center rounded-[30px] px-[20px] py-[17px]">
        <p className="font-PoppinsMedium text-center text-[14px] leading-[120%] text-white/60">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowToBuyCard;
