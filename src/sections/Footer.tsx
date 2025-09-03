import FooterFoxImage from "../assets/image/FooterFox.webp";
import NavButton from "../components/Button/NavButton";
import Topic from "../components/Topics/Topic";
import { SICONS } from "../constants/FooterImage.const";
import { NAVITEMS } from "../constants/Nav.const";
import FooterFoxImageDesktop from "../assets/image/foxFooterdesktop.webp"

const Footer = () => {
    return (
        <div className="w-full flex justify-center bg-brouwn">
            <div className="commmanPadding flex flex-col items-center py-[42px] max-w-[1920px] w-full">
                <div className="flex max-w-[356px] flex-col items-center gap-[30px] md:gap-[50px] xl:gap-[100px] md:max-w-full w-full">
                    <div className="flex flex-col items-center gap-[30px] md:flex-row ">
                        <picture className="md:hidden">
                            <img alt="FoxImage" src={FooterFoxImage} />
                        </picture>
                        <div className="mx-[26px] flex flex-col items-center gap-[50px]">
                            <div className="mx-6">
                                <Topic title="Supported currencies" />
                            </div>
                            <div className="grid w-full grid-cols-4 grid-rows-3 gap-[10px] md:gap-y-[50px] md:max-w-[400px] lg:max-w-[500px] 2xl:max-w-[742px] md:grid-rows-2 md:grid-cols-5">
                                {SICONS.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-full flex items-center justify-center "
                                    >
                                        <img
                                            src={item}
                                            className="max-w-full max-h-full object-contain cursor-pointer hover:scale-110 transition-transform duration-300 ease-in"
                                            alt={`icon-${index}`}
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    <div className="flex h-auto w-full flex-col gap-[20px] md:flex-row md:gap-[10px] lg:gap-[14px] xl:gap-[20px] md:relative">
                        {NAVITEMS.map((item, index) => (
                            <NavButton key={index} title={item._name} href={item._href} />
                        ))}


                        <div className="hidden md:absolute md:flex bottom-10 lg:-left-4 xmmlg:-bottom-2 xmmlg:-left-16">
                            <picture>
                                <img src={FooterFoxImageDesktop} alt="FooterFox" className="md:w-[200px] midlg:w-[250px] lg:w-[230px] xl:w-[280px] 2xl:w-[350px] xmmlg:w-[440px] " />
                            </picture>
                        </div>
                    </div>


                </div>
                <div className="w-full h-auto  mt-8 text-center text-white minism:text-[18px] font-PoppinsMedium font-[400] text-[14px]">
                    <p>@2025 AstraMint All Right Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
