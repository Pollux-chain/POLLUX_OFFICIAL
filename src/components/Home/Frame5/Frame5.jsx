import { useInView } from "react-intersection-observer";
import Frame5Card from "./Frame5Card";
import IncreasingGraphWithMan from "../../../assets/IncreasingGraphWithMan.webp";
import IncreasingGraph from "../../../assets/IncreasingGraph.webp";
import SettingIcon2 from "../../../assets/SettingIcon2.webp";
import BG5 from "../../../assets/BG45.webp";

const Frame5 = () => {
  const { ref: topRef, inView: inViewTop } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: bottomRef, inView: inViewBottom } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${BG5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <p
        ref={topRef}
        className={`text-center text-4xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text pt-6 ${
          inViewTop ? "animate-slideInFromTop" : ""
        }`}
      >
        POXPROTOCOL FEATURES
      </p>
      <p
        ref={topRef}
        className={`text-white pt-6 pb-12 text-2xl ${
          inViewTop ? "animate-slideInFromTop" : ""
        }`}
      >
        POXPROTOCOL is the world's leading decentralized blockchain protocol.
      </p>
      <div
        ref={bottomRef}
        className={`w-full flex flex-col md:flex-row lg:flex-row items-start justify-around ${
          inViewBottom ? "animate-slideInFromBottom" : ""
        }`}
      >
        <div className="sm:w-full md:w-[33%] lg:w-[33%] xl:w-[33%] 2xl:w-[33%]">
          <Frame5Card
            img={IncreasingGraphWithMan}
            desc="HIGH-THROUGHPUT"
            para=" Experience the power of our enhanced network with unparalleled transaction speeds, perfect for daily use. POX blockchain's high-throughput ensures every transaction is swift and efficient.."
          />
        </div>
        <div className="sm:w-full md:w-[33%] lg:w-[33%] xl:w-[33%] 2xl:w-[33%]">
          <Frame5Card
            img={IncreasingGraph}
            desc="HIGH-SCALABILITY"
            para="Experience lightning-fast transactions without breaking the bank! POX blockchain offers incredibly low gas fees, making every transaction seamless and affordable. Perfect for developers and businesses aiming to maximize efficiency and minimize costs."
          />
        </div>

        <div className="sm:w-full md:w-[33%] lg:w-[33%] xl:w-[33%] 2xl:w-[33%]">
          <Frame5Card
            img={SettingIcon2}
            desc="HIGH-FLEXIBILITY"
            para="From DeFi to gaming, POX blockchain supports a wide range of applications, making it the perfect platform for diverse projects.
Whether you're serving a small community or millions of users, POX's high-flexibility ensures your application runs smoothly and efficiently, no matter the scale."
          />
        </div>
      </div>
    </div>
  );
};

export default Frame5;
