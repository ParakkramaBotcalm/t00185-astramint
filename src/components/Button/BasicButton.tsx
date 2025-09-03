import { BasicButtonProps } from "../../types/BasicButtonProps";

const BasicButton = ({
  title,
  className,
  textColor = "text-white group-hover:text-black",
}: BasicButtonProps) => {
  return (
    <div
      className={`midlg:max-w-[120px] xmmlg:max-w-[235px] hover:bg-orange realCenter border-yellow group w-full max-w-[356px] cursor-pointer rounded-[100px] border-[2px] px-[10px] py-[14px] transition-all duration-300 hover:scale-110 md:max-w-[100px] xl:max-w-[150px] 2xl:max-w-[200px] ${className}`}
    >
      <p
        className={`midlg:text-[10px] xmmlg:text-[20px] - font-Poppins text-center font-[200] md:text-[8px] xl:text-[14px] 2xl:text-[18px] ${textColor}`}
      >
        {title}
      </p>
    </div>
  );
};

export default BasicButton;
