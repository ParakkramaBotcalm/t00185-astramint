import { NavButtonProps } from "../../types/NavButtonProps";

const NavButton = ({ title = "Home", href = "Questions",onClick }: NavButtonProps) => {
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
      <div className="px-2 font-Bungee w-full rounded-[16px] border-[2px] border-[#000002] bg-white py-4 text-center text-[14px] leading-[22px] font-[400] uppercase drop-shadow-[0px_6px_0px_#E7BB0D] hover:bg-orange group cursor-pointer">
        <p className="md:text-[7px] midlg:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] xmmlg:text-[16px] group-hover:text-white transition-colors duration-300 ease-in">{title}</p>
      </div>
    </div>
  );
};

export default NavButton;
