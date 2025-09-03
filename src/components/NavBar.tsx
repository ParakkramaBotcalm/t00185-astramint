import { useState } from "react";
import MainLogo from "../assets/image/icons/mainLogo.svg"
import { Menu } from 'lucide-react';
import { NAVITEMS } from "../constants/Nav.const";
import NavButton from "./Button/NavButton";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handlerOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="w-full max-w-[1920px] fixed py-5 md:pt-[30px] xl:pt-[50px] 2xl:pt-[60px] px-[25px] bg-black z-40 flex justify-center" >
            <div className="w-full flex justify-between max-w-[1520px]">
                <picture className="cursor-pointer">
                    <img src={MainLogo} alt="Main Logo" />
                </picture>
                <div className={`size-[47px] ${isOpen ? "bg-orange" : "bg-yellow"} md:hidden flex justify-center items-center rounded-[10px] cursor-pointer border-[3px]`} onClick={handlerOpen}>
                    <Menu />
                </div>
                {/* desktop */}
                <div className="w-5/6 h-auto md:flex flex-row justify-end gap-2 lg:gap-3 2xl:gap-5 items-center hidden ">
                {
                    NAVITEMS.map((item,index)=>(
                        <NavButton key={index} title={item._name} href={item._href} />
                    ))
                }

                </div>
            </div>

            {/* mobileNav */}
            <div className="md:hidden">
                {isOpen &&
                    <div className="w-full h-auto absolute left-0 py-[30px] px-[20px] gap-5 flex flex-col bg-black backdrop-blur-2xl">
                        {NAVITEMS.map((items, index) => (
                            <NavButton key={index} title={items._name} href={items._href} onClick={handlerOpen} />
                        ))}

                    </div>}
            </div>


        </div>
    )
}

export default NavBar