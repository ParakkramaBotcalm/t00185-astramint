import FooterFoxImage from "../assets/image/FooterFox.webp";
import NavButton from "../components/Button/NavButton";
import Topic from "../components/Topics/Topic";
import { SICONS } from "../constants/FooterImage.const";
import { NAVITEMS } from "../constants/Nav.const";

const Footer = () => {
  return (
    <div className="commmanPadding items-center py-[42px]">
      <div className="flex max-w-[356px] flex-col items-center gap-[30px]">
        <div className="flex flex-col items-center gap-[30px]">
          <picture>
            <img alt="FoxImage" src={FooterFoxImage} />
          </picture>
          <div className="mx-[26px] flex flex-col items-center gap-[50px]">
            <div className="mx-6">
              <Topic title="Supported currencies" />
            </div>
            <div className="grid w-full grid-cols-4 grid-rows-3 gap-[10px]">
              {SICONS.map((item, index) => (
                <img src={item} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full flex-col gap-[20px]">
          {NAVITEMS.map((item, index) => (
            <NavButton key={index} title={item._name} href={item._href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
