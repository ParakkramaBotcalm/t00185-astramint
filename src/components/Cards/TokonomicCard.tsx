import { TokonomicCardProps } from "../../types/TokonomicCardProps";

const TokonomicCard = ({
  title,
  description,
  className = "midlg:text-[15px] xmlg:text-[30px] text-[20px] font-[200] md:text-[12px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px]",
}: TokonomicCardProps) => {
  return (
    <div className="bg-darkbrown min-h-[153px] w-full rounded-[52px] p-[31px] md:min-h-[100px] lg:min-h-[120px] xl:min-h-[150px] 2xl:min-h-[183px]">
      <div className="font-PoppinsMedium flex flex-col gap-[20px]">
        <div className="border-yellow flex justify-center rounded-[100px] border-[2px] bg-white py-[6px]">
          <p className="midlg:text-[13px] xmlg:text-[19px] text-center text-[14px] font-[200] md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]">
            {" "}
            {title}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className={`${className} text-center text-white`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TokonomicCard;
