import { BasicButtonProps } from "../../types/BasicButtonProps"

const BasicButton = ({title}:BasicButtonProps) => {
  return (
    <div className=" max-w-[356px] md:max-w-[100px] midlg:max-w-[120px] xl:max-w-[150px] 2xl:max-w-[200px] xmmlg:max-w-[235px] py-[14px] px-[10px] hover:bg-orange w-full realCenter rounded-[100px] border-[2px] border-yellow cursor-pointer">
        <p className="md:text-[10px] midlg:text-[12px] xl:text-[16px] 2xl:text-[18px] xmmlg:text-[20px]">{title}</p>
    </div>
  )
}

export default BasicButton