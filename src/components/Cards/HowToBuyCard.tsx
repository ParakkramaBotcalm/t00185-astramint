import { HowToBuyCardProps } from "../../types/HowToBuyCardProps"


const HowToBuyCard = ({ description }: HowToBuyCardProps) => {
    return (
        <div className="w-full h-auto p-[2px] rounded-[30px] ashgradent min-h-[69px] 2xl:min-w-[500px] xmmlg:min-w-[542px]">
            <div className="flex flex-col items-center py-[17px] bg-brouwn rounded-[30px] px-[20px] w-full h-full">
                <p className="text-[14px] text-white/60 leading-[120%] font-PoppinsMedium text-center">{description}</p>
            </div>
        </div>
    )
}

export default HowToBuyCard