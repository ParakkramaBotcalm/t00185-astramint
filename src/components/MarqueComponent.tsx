import Star from "../assets/image/icons/star.svg";

const MarqueComponent = () => {
  return (
    <div className="bg-orange flex w-auto gap-[40px] py-[35px]">
      <picture>
        <img src={Star} alt="STAR" />
      </picture>
      <div>
        <p className="font-Poppins text-[30px] font-[900] text-black">LET’S DISCUSS IDEAS!</p>
      </div>
    </div>
  );
};

export default MarqueComponent;
