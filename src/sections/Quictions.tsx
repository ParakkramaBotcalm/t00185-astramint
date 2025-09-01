import BreakLine from "../components/BreakLine";
import QuctionsCard from "../components/Cards/QuctionsCard";
import { QUACTIONCARDCONST } from "../constants/QuctionCard.const";
import FoxIdle from "../assets/image/foxIdel.webp";
import Cicles from "../assets/image/Circles.png";
import RoadMap from "./RoadMap";

const Quictions = () => {
  return (
    <div className="flex h-auto w-full flex-col gap-[50px]">
      <div className="flex h-auto w-full flex-col items-center px-[29px] md:hidden">
        <div className="flex w-full max-w-[356px] flex-col gap-[50px]">
          <div>
            <BreakLine />
          </div>
          <div className="flex flex-col gap-5">
            {QUACTIONCARDCONST.map((item, index) => (
              <QuctionsCard key={index} topic={item.topic} content={item.content} />
            ))}
          </div>
          <picture className="flex justify-center">
            <img src={FoxIdle} alt="FoxIdle" className="h-auto max-w-[265px]" />
          </picture>
        </div>
      </div>
      <div className="h-auto w-full px-[29px] md:hidden">
        <RoadMap />
      </div>
      <div className="xmmlg:px-[200px] relative hidden w-full flex-col gap-[30px] md:flex md:px-[50px] lg:px-[100px] 2xl:px-[150px]">
        <div>
          <BreakLine />
        </div>
        <div className="flex h-auto w-full justify-center">
          <picture>
            <img
              src={Cicles}
              alt="CiclesImage"
              className="xmmlg:min-w-[1100px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]"
            />
          </picture>
        </div>

        <div className="absolute top-1/8 left-6/11 -translate-x-1/2 lg:top-1/8">
          <div className="relative">
            <picture className="">
              <img
                src={FoxIdle}
                className="xmmlg:size-[638px] md:size-[300px] lg:size-[400px] xl:size-[500px]"
              />
            </picture>
            <div className="midxl:-left-[400px] absolute top-5 -left-[220px] lg:top-2 lg:-left-[250px] xl:-left-[340px] 2xl:-left-[430px]">
              <QuctionsCard
                topic={QUACTIONCARDCONST[1].topic}
                content={QUACTIONCARDCONST[1].content}
              />
            </div>
            <div className="midxl:-left-[350px] xmmlg:top-[360px] absolute top-[200px] -left-[180px] lg:top-[180px] lg:-left-[200px] xl:top-[220px] xl:-left-[300px] 2xl:-left-[380px]">
              <QuctionsCard
                topic={QUACTIONCARDCONST[2].topic}
                content={QUACTIONCARDCONST[2].content}
              />
            </div>
            <div className="midxl:-right-[150px] midxl:top-[420px] xmmlg:top-[530px] absolute top-[250px] -right-[120px] lg:top-[300px] lg:-right-[80px] xl:top-[400px] xl:-right-[120px]">
              <QuctionsCard
                topic={QUACTIONCARDCONST[3].topic}
                content={QUACTIONCARDCONST[3].content}
              />
            </div>
            <div className="midxl:-right-[280px] absolute top-[0] -right-[140px] lg:-top-[50px] lg:-right-[150px] xl:-right-[220px]">
              <QuctionsCard
                topic={QUACTIONCARDCONST[0].topic}
                content={QUACTIONCARDCONST[0].content}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="xmmlg:h-[100px] relative hidden h-[300px] w-full flex-col justify-end bg-black md:flex lg:h-[250px] xl:h-[350px]">
        <div className="xmmlg:-top-[400px] absolute inset-0 -top-[200px] z-10 flex items-center justify-center lg:-top-[250px]">
          <RoadMap />
        </div>
        <div className="xmmlg:px-[200px] md:px-[50px] lg:px-[100px] 2xl:px-[150px]">
          <BreakLine />
        </div>
      </div>
    </div>
  );
};

export default Quictions;
