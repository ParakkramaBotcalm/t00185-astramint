import { useEffect } from "react";
import Hero from "./sections/Hero";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Tokonomics from "./sections/Tokonomics";

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
    <div className="flex flex-col justify-start items-center bg-black" >
      <Hero/>
      <Tokonomics/>
    </div>
  );
}

export default App;
