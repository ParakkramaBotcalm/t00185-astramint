const BreakLine = () => {
  return (
    <div className="bg-orange relative h-[2px] w-full">
      <div className="bg-orange absolute -top-1 left-0 size-[10px] rounded-full"></div>
      <div className="bg-orange absolute -top-1 right-0 size-[10px] rounded-full"></div>
    </div>
  );
};

export default BreakLine;
