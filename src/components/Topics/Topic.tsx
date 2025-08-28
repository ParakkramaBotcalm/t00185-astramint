import { TopicCardProps } from "../../types/TopicCardProps"

const Topic = ({title}:TopicCardProps) => {
  return (
    <div className="">
        <p className="font-Poppins font-[800] text-[36px] leading-[100%] text-center text-white">{title}</p>
    </div>
  )
}

export default Topic