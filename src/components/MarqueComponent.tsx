import Star from "../assets/image/icons/star.svg"

const MarqueComponent = () => {
  return (
    <div className="w-auto bg-orange flex gap-[40px] py-[35px]">

        <picture>
            <img src={Star} alt="STAR"/>
        </picture>
        <div>
            <p className="text-[30px] font-Poppins font-[900] text-black">LET’S   DISCUSS   IDEAS!</p>
        </div>
    </div>
    
  )
}

export default MarqueComponent