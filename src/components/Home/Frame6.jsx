import { useInView } from "react-intersection-observer";
import OffChain from "../../assets/offchain.webp";
import Net from "../../assets/net.webp";
import BG from "../../assets/BG.webp";

const Frame6 = () => {
  const { ref: leftRef, inView: inViewLeft } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightRef, inView: inViewRight } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="md:min-h-screen lg:min-h-screen flex flex-col md:flex-row items-center py-12 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        ref={leftRef}
        className={`w-full text-center md:text-left lg:text-left md:w-1/2 px-4 md:px-8 lg:px-12 ${
          inViewLeft ? "animate-slideInFromLeft" : ""
        }`}
      >
        <p className="text-4xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text">
          UVI NETWORK
        </p>
        <p className="text-white text-base md:text-lg text-justify py-4 md:py-6 lg:py-10">
          Introducing UVSwap, the cutting-edge token swapping platform built on
          the POX blockchain. As a standout DApp in the fastest-growing
          ecosystem, UVSwap offers an unparalleled experience for all your token
          exchange needs. uvswap provides Low Gas Fees, Lightning-Fast
          Transactions, User-Friendly Interface and it's Secure and Reliable.
        </p>
        <a href="https://uviswap.org">
          {" "}
          <button className="bg-gradient-to-r from-[#FDE3AD] to-[#FAA811] rounded-3xl px-3 py-2 md:px-4 md:py-3 font-bold">
            Learn more
          </button>
        </a>
      </div>
      <div
        ref={rightRef}
        className={`relative w-full md:w-1/2 flex justify-center items-center px-4 md:px-8 lg:px-12 mt-8 md:mt-0 ${
          inViewRight ? "animate-slideInFromRight" : ""
        }`}
      >
        <div className="relative w-full flex justify-center items-center">
          <img
            src={OffChain}
            alt="OffChain"
            className="w-full h-auto animate-jiggle"
          />
          <img src={Net} alt="Net" className="absolute top-0 w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Frame6;
