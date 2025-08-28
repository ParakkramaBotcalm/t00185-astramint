import BasicButton from "../components/Button/BasicButton"
import FoxHero from "../assets/image/foxHero.webp"
import DownArrow from "../assets/image/icons/downArrow.svg"

const Hero = () => {
    return (
        <div className="w-full max-w-[1920px] h-auto md:relative  flex flex-col  justify-end md:justify-between md:px-[50px]  lg:px-[100px] 2xl:px-[150px] xmmlg:px-[200px] pt-[124px]  bg-black text-white md:flex-row">
            <div className="flex flex-col gap-[30px] px-[29px] items-center md:min-h-[300px] midlg:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] 2xl:min-h-[565px] md:justify-between">
                <div className="md:relative max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[785px] items-center flex flex-col">
                    <p className="text-[50px] leading-[61px]  md:text-[65px] md:leading-[55px] midlg:leading-[70px] midlg:text-[75px] lg:leading-[80px] lg:text-[85px] xl:leading-[90px] xl:text-[100px] font-Poppins text-center md:text-start 2xl:leading-[120px] 2xl:text-[130px] font-[900] uppercase">Mint the Future of Utility.</p>
                </div>
                <div className="flex flex-col gap-5 items-center md:flex-row md:items-start w-full" >
                    <BasicButton title="Buy $ASTRA" />
                    <BasicButton title="Join Community" />
                </div>
            </div>
            <div className="md:absolute left-1/2 -translate-x-1/2 ml-[70px] lg:ml-32 xl:ml-32 2xl:ml-52 xmmlg:ml-32 bottom-8 hidden md:block overflow-visible ">
                <div className="flex flex-col  items-center">
                    <picture>
                        <img src={FoxHero} alt="FoxHeroImage" className="md:max-w-[250px] midlg:max-w-[300px] lg:max-w-[350px] xl:min-w-[450px] 2xl:min-w-[573px]" />
                    </picture>
                    <div className="h-[2px] w-[50vw] ml-[120px] xmmlg:ml-[270px] max-w-[950px] bg-orange relative">
                        <div className="size-[10px] rounded-full bg-orange absolute left-0 -top-1"></div>
                        <div className="size-[10px] rounded-full bg-orange absolute right-0 -top-1"></div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-auto md:min-w-[250px] xl:min-w-[350px] xmmlg:min-w-[488px]  px-[29px] py-[10px] gap-[10px] flex flex-col items-center md:flex-row md:justify-end md:items-start">
                <div className="md:hidden w-full items-center flex flex-col gap-[10px]">
                    <div>
                        <picture>
                            <img src={FoxHero} alt="FoxHeroImage" className="max-w-[184px]" />
                        </picture>
                    </div>
                    <div className="h-[2px] w-full max-w-[356px] bg-orange flex relative">
                        <div className="size-[10px] rounded-full bg-orange absolute left-0 -top-1"></div>
                        <div className="size-[10px] rounded-full bg-orange absolute right-0 -top-1"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center w-full md:min-w-full md:max-w-[200px] ">
                    <div className="w-full max-w-[356px] md:min-w-full md:min-h-[80px] xl:min-h-[100px] xmmlg:min-h-[125px] bg-orange flex justify-center gap-[20px] md:gap-[10px] py-[18px] rounded-[60px]">
                        <div className="realCenter">
                            <picture>
                                <img src={DownArrow} alt="DownArrow" className="size-[44px] md:size-[32px] lg:size-[26px] xl:size-[44px] 2xl:size-[48px] xmmlg:size-[88px]" />
                            </picture>
                        </div>
                        <div className="flex items-center font-[900] text-black">
                            <p className="text-[24px] font-Poppins md:text-[20px] lg:text-[22px] xl:text-[32px] 2xl:text-[34px] xmmlg:text-[50px]">EXPLORE IT .</p>
                        </div>
                    </div>

                    <div className="w-full max-w-[356px] text-center text-[14px] md:text-[12px] lg:text-[16px] xl:text-[20px] font-Poppins font-[200] md:text-start">
                        <p>AstraMint turns community energy into on-chain utility—fast, fair, and transparent.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero