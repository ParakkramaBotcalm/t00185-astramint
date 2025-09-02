import { useEffect } from "react";
import Hero from "./sections/Hero";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Tokonomics from "./sections/Tokonomics";
import Marquee from "react-fast-marquee";
import MarqueComponent from "./components/MarqueComponent";
import TokenStory from "./sections/TokenStory";
import Quictions from "./sections/Quictions";
import HowToBuy from "./sections/HowToBuy";

function App() {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]") as HTMLElement;

    if (!scrollEl) return;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 5, // speed factor
      class: "is-reveal",
    } as any);

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-start bg-black">
      <Hero />
      <Tokonomics />
      <Marquee autoFill={true} pauseOnHover={true}>
        <MarqueComponent />
      </Marquee>
      <TokenStory />
      <Quictions />
      <HowToBuy/>
      <Marquee autoFill={true} pauseOnHover={true} direction={"right"} >
        <MarqueComponent />
      </Marquee>
    </div>
  );
}

export default App;
