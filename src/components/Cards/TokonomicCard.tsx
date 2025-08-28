import { TokonomicCardProps } from "../../types/TokonomicCardProps"

const TokonomicCard = ({ title, description }: TokonomicCardProps) => {
    return (
        <div className="w-full p-[31px] bg-darkbrown rounded-[52px] min-h-[153px]">
            <div className="flex flex-col gap-[20px] font-Poppins ">
                <div className="border-[2px] border-yellow py-[6px] bg-white flex justify-center rounded-[100px]">
                    <p className="font-[200]">   {title}</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-white font-[200]">{description}</p>
                </div>

            </div>
        </div>
    )
}

export default TokonomicCard