import { NavButtonProps } from "../../types/NavButtonProps";

const NavButton = ({ title = "Home", href = "Questions", onClick }: NavButtonProps) => {
  const handleClick = () => {
    if (href) {
      const element = document.querySelector(`#${href}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClick?.();
  };

  return (
    <div className="h-auto w-full" onClick={handleClick}>
      <div className="font-Bungee hover:bg-orange group w-full cursor-pointer rounded-[16px] border-[2px] border-[#000002] bg-white px-2 py-4 text-center text-[14px] leading-[22px] font-[400] uppercase drop-shadow-[0px_6px_0px_#E7BB0D]">
        <p className="midlg:text-[9px] xmmlg:text-[16px] transition-colors duration-300 ease-in group-hover:text-white md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default NavButton;
