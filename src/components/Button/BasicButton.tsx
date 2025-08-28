import { BasicButtonProps } from "../../types/BasicButtonProps";

const BasicButton = ({ title }: BasicButtonProps) => {
  return (
    <div className="midlg:max-w-[120px] xmmlg:max-w-[235px] hover:bg-orange realCenter border-yellow w-full max-w-[356px] cursor-pointer rounded-[100px] border-[2px] px-[10px] py-[14px] md:max-w-[100px] xl:max-w-[150px] 2xl:max-w-[200px]">
      <p className="midlg:text-[12px] xmmlg:text-[20px] md:text-[10px] xl:text-[16px] 2xl:text-[18px]">
        {title}
      </p>
    </div>
  );
};

export default BasicButton;
