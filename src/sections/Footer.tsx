import FooterFoxImage from "../assets/image/FooterFox.webp";
import NavButton from "../components/Button/NavButton";
import Topic from "../components/Topics/Topic";
import { SICONS } from "../constants/FooterImage.const";
import { NAVITEMS } from "../constants/Nav.const";
import FooterFoxImageDesktop from "../assets/image/foxFooterdesktop.webp";

const Footer = () => {
  return (
    <div className="bg-brouwn flex w-full justify-center">
      <div className="commmanPadding flex w-full max-w-[1920px] flex-col items-center py-[42px]">
        <div className="flex w-full max-w-[356px] flex-col items-center gap-[30px] md:max-w-full md:gap-[50px] xl:gap-[100px]">
          <div className="flex flex-col items-center gap-[30px] md:flex-row">
            <picture className="md:hidden">
              <img alt="FoxImage" src={FooterFoxImage} />
            </picture>
            <div className="mx-[26px] flex flex-col items-center gap-[50px]">
              <div className="mx-6">
                <Topic title="Supported currencies" />
              </div>
              <div className="grid w-full grid-cols-4 grid-rows-3 gap-[10px] md:max-w-[400px] md:grid-cols-5 md:grid-rows-2 md:gap-y-[50px] lg:max-w-[500px] 2xl:max-w-[742px]">
                {SICONS.map((item, index) => (
                  <div key={index} className="flex h-full w-full items-center justify-center">
                    <img
                      src={item}
                      className="max-h-full max-w-full cursor-pointer object-contain transition-transform duration-300 ease-in hover:scale-110"
                      alt={`icon-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-auto w-full flex-col gap-[20px] md:relative md:flex-row md:gap-[10px] lg:gap-[14px] xl:gap-[20px]">
            {NAVITEMS.map((item, index) => (
              <NavButton key={index} title={item._name} href={item._href} />
            ))}

            <div className="xmmlg:-bottom-2 xmmlg:-left-16 bottom-10 hidden md:absolute md:flex lg:-left-4">
              <picture>
                <img
                  src={FooterFoxImageDesktop}
                  alt="FooterFox"
                  className="midlg:w-[250px] xmmlg:w-[440px] md:w-[200px] lg:w-[230px] xl:w-[280px] 2xl:w-[350px]"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="minism:text-[18px] font-PoppinsMedium mt-8 h-auto w-full text-center text-[14px] font-[400] text-white">
          <p>@2025 AstraMint All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
