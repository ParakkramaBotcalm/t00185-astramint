import BasicButton from "../components/Button/BasicButton";
import Topic from "../components/Topics/Topic";
import StoryFox from "../assets/image/story_fox.webp";

const TokenStory = () => {
  return (
    <div
      id="about-us"
      className="xmmlg:px-[200px] flex w-full max-w-[1920px] flex-col items-center gap-[30px] overflow-x-hidden px-[29px] py-[50px] md:flex-row md:justify-between md:px-[50px] lg:gap-[40px] lg:px-[100px] 2xl:gap-[50px] 2xl:px-[150px]"
    >
      <div className="flex max-w-[450px] flex-col items-center gap-[30px] md:max-w-full md:min-w-1/2">
        <div className="flex max-w-[450px] flex-col items-center gap-[30px] md:max-w-[749px]">
          <div className="flex w-full justify-center text-center md:justify-start">
            <Topic title="Token Story" />
          </div>
          <div className="font-PoppinsMedium text-center text-[14px] leading-[150%] font-[100] text-white capitalize md:text-start lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
            <p>
              Here you will find a comprehensive overview of my skills and expertise. As a highly
              motivated and driven professional, I have honed my abilities in various areas
              throughout my career. From technical proficiency to interpersonal communication, I
              have developed a diverse range of skills that enable me to excel in any role. discover
              my strengths and capabilities, providing insight into how I can contribute as
              Developer.
            </p>
          </div>
          <div className="flex w-full items-center justify-center md:justify-start">
            <BasicButton title="Buy $ASTRA" className="bg-orange" textColor="text-black" />
          </div>
        </div>
      </div>
      <div>
        <picture className="">
          <img
            src={StoryFox}
            alt="StoryFox"
            className="max-w-[356px] md:max-w-[455px] lg:max-w-[550px] 2xl:max-w-[655px]"
          />
        </picture>
      </div>
    </div>
  );
};

export default TokenStory;
