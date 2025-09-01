import { TopicCardProps } from "../../types/TopicCardProps";

const Topic = ({ title }: TopicCardProps) => {
  return (
    <div className="">
      <p className="font-Poppins xmlg:text-[80px] text-[36px] leading-[100%] font-[800] text-white uppercase after:text-yellow-400 after:content-['.'] md:text-[40px] lg:text-[50px] 2xl:text-[70px]">
        {title}
      </p>
    </div>
  );
};

export default Topic;
