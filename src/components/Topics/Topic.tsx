import { TopicCardProps } from "../../types/TopicCardProps"

const Topic = ({title}:TopicCardProps) => {
  return (
    <div className="">
        <p className="font-Poppins font-[800] text-[36px] md:text-[40px] lg:text-[50px] 2xl:text-[70px] xmlg:text-[80px] leading-[100%] text-white">{title}</p>
    </div>
  )
}

export default Topic