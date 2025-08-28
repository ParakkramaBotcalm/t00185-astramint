import { TokonomicCardProps } from "../../types/TokonomicCardProps"

const TokonomicCard = ({ title, description }: TokonomicCardProps) => {
    return (
        <div className="w-full p-[31px] bg-darkbrown rounded-[52px] min-h-[153px] md:min-h-[100px] lg:min-h-[120px] xl:min-h-[150px] 2xl:min-h-[183px]">
            <div className="flex flex-col gap-[20px] font-Poppins ">
                <div className="border-[2px] border-yellow py-[6px] bg-white flex justify-center rounded-[100px]">
                    <p className="font-[200] text-[14px] text-center md:text-[10px] midlg:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] xmlg:text-[19px]">   {title}</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-white font-[200] text-center text-[20px] md:text-[12px] midlg:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] xmlg:text-[30px]">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TokonomicCard