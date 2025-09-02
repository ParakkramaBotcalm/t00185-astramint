import BasicButton from "../components/Button/BasicButton";
import FoxHero from "../assets/image/foxHero.webp";
import DownArrow from "../assets/image/icons/downArrow.svg";

const Hero = () => {
  return (
    <div
      id="who-is-astramint"
      className="xmmlg:px-[200px] flex h-auto w-full max-w-[1920px] flex-col justify-end bg-black pt-[124px] text-white md:relative md:flex-row md:justify-between md:px-[50px] lg:px-[100px] 2xl:px-[150px]"
    >
      <div className="midlg:min-h-[350px] flex flex-col items-center gap-[30px] px-[29px] md:min-h-[300px] md:justify-between lg:min-h-[400px] xl:min-h-[450px] 2xl:min-h-[565px]">
        <div className="flex max-w-[400px] flex-col items-center md:relative md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[785px]">
          <p className="first-letter:text-yellow midlg:leading-[70px] midlg:text-[75px] font-Poppins text-center text-[50px] leading-[61px] font-[900] uppercase after:text-yellow-400 after:content-['.'] md:text-start md:text-[65px] md:leading-[55px] lg:text-[85px] lg:leading-[80px] xl:text-[100px] xl:leading-[90px] 2xl:text-[130px] 2xl:leading-[120px]">
            Mint the Future of Utility
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-5 md:flex-row md:items-start">
          <BasicButton title="Buy $ASTRA" />
          <BasicButton title="Join Community" />
        </div>
      </div>
      <div className="xmmlg:ml-32 bottom-8 left-1/2 ml-[70px] hidden -translate-x-1/2 overflow-visible md:absolute md:block lg:ml-32 xl:ml-32 2xl:ml-52">
        <div className="flex flex-col items-center">
          <picture>
            <img
              src={FoxHero}
              alt="FoxHeroImage"
              className="midlg:max-w-[300px] md:max-w-[250px] lg:max-w-[350px] xl:min-w-[450px] 2xl:min-w-[573px]"
            />
          </picture>
          <div className="xmmlg:ml-[270px] bg-orange relative ml-[120px] h-[2px] w-[50vw] max-w-[950px]">
            <div className="bg-orange absolute -top-1 left-0 size-[10px] rounded-full"></div>
            <div className="bg-orange absolute -top-1 right-0 size-[10px] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="xmmlg:min-w-[488px] flex w-full flex-col items-center gap-[10px] px-[29px] py-[10px] md:w-auto md:min-w-[250px] md:flex-row md:items-start md:justify-end xl:min-w-[350px]">
        <div className="flex w-full flex-col items-center gap-[10px] md:hidden">
          <div>
            <picture>
              <img src={FoxHero} alt="FoxHeroImage" className="max-w-[184px]" />
            </picture>
          </div>
          <div className="bg-orange relative flex h-[2px] w-full max-w-[356px]">
            <div className="bg-orange absolute -top-1 left-0 size-[10px] rounded-full"></div>
            <div className="bg-orange absolute -top-1 right-0 size-[10px] rounded-full"></div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-5 md:max-w-[200px] md:min-w-full">
          <div className="xmmlg:min-h-[125px] bg-orange flex w-full max-w-[356px] justify-center gap-[20px] rounded-[60px] py-[18px] md:min-h-[80px] md:min-w-full md:gap-[10px] xl:min-h-[100px]">
            <div className="realCenter">
              <picture>
                <img
                  src={DownArrow}
                  alt="DownArrow"
                  className="xmmlg:size-[88px] size-[44px] md:size-[32px] lg:size-[26px] xl:size-[44px] 2xl:size-[48px]"
                />
              </picture>
            </div>
            <div className="flex items-center font-[900] text-black">
              <p className="font-Poppins xmmlg:text-[50px] text-[24px] md:text-[20px] lg:text-[22px] xl:text-[32px] 2xl:text-[34px]">
                EXPLORE IT .
              </p>
            </div>
          </div>

          <div className="font-Poppins w-full max-w-[356px] text-center text-[14px] font-[200] md:text-start md:text-[12px] lg:text-[16px] xl:text-[20px]">
            <p>
              AstraMint turns community energy into on-chain utility—fast, fair, and transparent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
