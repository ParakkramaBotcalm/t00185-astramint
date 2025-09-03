import { useState } from "react";
import MainLogo from "../assets/image/icons/mainLogo.svg";
import { Menu } from "lucide-react";
import { NAVITEMS } from "../constants/Nav.const";
import NavButton from "./Button/NavButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-40 flex w-full max-w-[1920px] justify-center bg-black px-[25px] py-5 md:pt-[30px] xl:pt-[50px] 2xl:pt-[60px]">
      <div className="flex w-full max-w-[1520px] justify-between">
        <picture className="cursor-pointer">
          <img src={MainLogo} alt="Main Logo" />
        </picture>
        <div
          className={`size-[47px] ${isOpen ? "bg-orange" : "bg-yellow"} flex cursor-pointer items-center justify-center rounded-[10px] border-[3px] md:hidden`}
          onClick={handlerOpen}
        >
          <Menu />
        </div>
        {/* desktop */}
        <div className="hidden h-auto w-5/6 flex-row items-center justify-end gap-2 md:flex lg:gap-3 2xl:gap-5">
          {NAVITEMS.map((item, index) => (
            <NavButton key={index} title={item._name} href={item._href} />
          ))}
        </div>
      </div>

      {/* mobileNav */}
      <div className="md:hidden">
        {isOpen && (
          <div className="absolute left-0 flex h-auto w-full flex-col gap-5 bg-black px-[20px] py-[30px] backdrop-blur-2xl">
            {NAVITEMS.map((items, index) => (
              <NavButton key={index} title={items._name} href={items._href} onClick={handlerOpen} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
