import { NavButtonProps } from "../../types/NavButtonProps";

const NavButton = ({ title = "Home", href = "Questions" }: NavButtonProps) => {
  const handleClick = () => {
    console.log("uhujh");
    if (href) {
      const element = document.querySelector(`#${href}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="h-auto w-full" onClick={handleClick}>
      <div className="font-Bungee w-full rounded-[16px] border-[2px] border-[#000002] bg-white py-4 text-center text-[14px] leading-[22px] font-[400] uppercase drop-shadow-[0px_6px_0px_#E7BB0D]">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default NavButton;
