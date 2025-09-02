import FooterFoxImage from "../assets/image/FooterFox.webp"
import NavButton from "../components/Button/NavButton"
import Topic from "../components/Topics/Topic"
import { SICONS } from "../constants/FooterImage.const"
import { NAVITEMS } from "../constants/Nav.const"

const Footer = () => {
    return (
        <div className="commmanPadding py-[42px] items-center">
            <div className="flex flex-col items-center max-w-[356px] gap-[30px]">
                <div className="flex flex-col gap-[30px] items-center">
                    <picture>
                        <img alt="FoxImage" src={FooterFoxImage} />
                    </picture>
                    <div className="flex flex-col items-center gap-[50px] mx-[26px]">
                        <div className="mx-6">
                            <Topic title="Supported currencies" />
                        </div>
                        <div className="w-full grid grid-cols-4 grid-rows-3 gap-[10px] ">
                            {SICONS.map((item, index) => (
                                <img src={item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto flex flex-col gap-[20px]">
                    {NAVITEMS.map((item, index) => (
                        <NavButton key={index} title={item._name} href={item._href}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer