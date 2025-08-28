import { BasicButtonProps } from "../../types/BasicButtonProps"

const BasicButton = ({title}:BasicButtonProps) => {
  return (
    <div className=" max-w-[356px] md:text-[10px] md:max-w-[100px] py-[14px] hover:bg-orange w-full realCenter rounded-[100px] border-[2px] border-yellow">
        <p>{title}</p>
    </div>
  )
}

export default BasicButton