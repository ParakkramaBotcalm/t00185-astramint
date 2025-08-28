import BasicButton from "../components/Button/BasicButton"
import FoxHero from "../assets/image/foxHero.webp"
import DownArrow from "../assets/image/icons/downArrow.svg"

const Hero = () => {
    return (
        <div className="w-full h-auto md:relative  flex flex-col  justify-end md:justify-between md:px-[50px] pt-[124px] bg-black text-white md:flex-row">
            <div className="flex flex-col gap-[30px] px-[29px] items-center md:min-h-[300px]">
                <div className="md:relative max-w-[400px]  items-center flex flex-col">
                    <p className="text-[50px] md:text-[65px] midlg:text-[75px] font-Poppins  text-center md:text-start font-[900]">Mint the Future of Utility.</p>
                    {/* <div className="absolute hidden md:block top-0 right-[-300px]">
                        <div>
                            <picture>
                                <img src={FoxHero} alt="FoxHeroImage" className="md:max-w-[300px]" />
                            </picture>
                        </div>
                    </div> */}
                </div>
                <div className="flex flex-col gap-5 items-center md:flex-row md:items-start w-full" >
                    <BasicButton title="Buy $ASTRA" />
                    <BasicButton title="Join Community" />
                </div>
            </div>
            <div className="md:absolute left-1/2 -translate-x-1/2 ml-14 bottom-8 hidden md:block overflow-visible ">
                <div className="flex flex-col gap-[10px] items-center">
                    <picture>
                        <img src={FoxHero} alt="FoxHeroImage" className="md:max-w-[250px] midlg:max-w-[350px]" />
                    </picture>
                    <div className="h-[2px] w-[50vw] ml-[120px] bg-orange relative">
                        <div className="size-[10px] rounded-full bg-orange absolute left-0 -top-1"></div>
                        <div className="size-[10px] rounded-full bg-orange absolute right-0 -top-1"></div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-auto px-[29px] py-[10px] gap-[10px] flex flex-col items-center md:flex-row md:justify-end md:items-start">
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
                <div className="flex flex-col gap-5 items-center w-full md:max-w-[200px] ">
                    <div className="w-full max-w-[356px] bg-orange flex justify-center gap-[20px] py-[18px] rounded-[60px]">
                        <div>
                            <picture>
                                <img src={DownArrow} alt="DownArrow" className="size-[44px] md:size-[22px]" />
                            </picture>
                        </div>
                        <div className="flex items-center font-[900] text-black">
                            <p className="text-[24px] font-Poppins md:text-[16px]">EXPLORE IT .</p>
                        </div>
                    </div>

                    <div className="w-full max-w-[356px] text-center text-[14px] md:text-[12px] font-Poppins font-[200]">
                        <p>AstraMint turns community energy into on-chain utility—fast, fair, and transparent.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero