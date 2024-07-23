import { useInView } from "react-intersection-observer";
import FrameRight from "../../assets/Frame1Right.webp";
import Navbar from "../../layout/Navbar";

const Frame1 = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="fram1-bg px-6 md:px-6 lg:px-6 xl:px-6 2xl:px-12 min-h-screen pb-32 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0">
      <Navbar />
      <div
        className="flex flex-col-reverse md:flex-row items-center px-0 md:px-12 lg:px-12 
      md:border-l-[2px] lg:border-l-[2px] md:border-r-[2.5px] lg:border-r-[2.5px] border-[#393555]"
      >
        <div
          className={`w-full md:w-1/2 ${
            leftInView ? "animate-slideInFromLeft" : ""
          }`}
          ref={leftRef}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-bold tracking-wide">
            DECENTRALIZE
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text">
            THE WEB
          </h1>
          <h1 className="text-white text-justify py-6 md:py-12 text-base md:text-xl">
            Pollux is an open-source blockchain platform designed for smart
            contracts, ensuring compatibility with Ethereum for smooth
            transitions. Its exceptional transaction speeds, surpassing
            Ethereum, are powered by a distinctive consensus mechanism.
            Developers enjoy a swift and efficient experience on Pollux for
            seamless blockchain operations.
          </h1>
          <a href="https://poxscan.io/">
            <button className="bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] rounded-3xl px-4 py-3 font-bold">
              Learn more
            </button>{" "}
          </a>
        </div>
        <div
          className={`flex justify-center md:justify-end w-full mt-6 md:w-1/2 ${
            rightInView ? "animate-slideInFromRight" : ""
          }`}
          ref={rightRef}
        >
          <img
            src={FrameRight}
            alt="pox-logo"
            className="w-full h-auto max-h-[400px] md:max-h-[65%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame1;
