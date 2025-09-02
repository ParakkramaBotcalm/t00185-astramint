import { NavButtonProps } from "../../types/NavButtonProps"

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
        <div className="w-full h-auto" onClick={handleClick}>
            <div className="w-full py-4 rounded-[16px] uppercase bg-white border-[2px] border-[#000002] text-[14px] font-Bungee leading-[22px] font-[400] text-center drop-shadow-[0px_6px_0px_#E7BB0D]">
                <p>{title}</p>
            </div>
        </div>

    )
}

export default NavButton