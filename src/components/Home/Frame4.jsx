import { useInView } from "react-intersection-observer";
import BG4 from "../../assets/BG45.webp";

const CardComponent = ({img, title,readmorelink,desc}) => {
  return (
    <div className="max-w-sm bg-[#1B043B] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg h-48 w-full object-fill"
          src={img}
          alt={title}
        />
      </a>
      <div className="p-5 ">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white text-white h-16 truncate-multiline-title">
         {title}
          </h5>
        </a>
        <p className="mb-3 font-normal  dark:text-gray-400 text-justify h-24 text-white truncate-multiline-desc">
          {desc}
        </p>
        <a
          href={readmorelink}
          className="inline-flex items-center px-3 py-2 text-sm text-center text-black font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] rounded-lg"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Frame4 = () => {
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
      className="md:min-h-screen lg:min-h-screen flex flex-col  justify-center py-12 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${BG4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "top",
      }}
    >
      <p className="pb-12 text-center text-4xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] text-transparent bg-clip-text">
          Insights
        </p>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0 md:space-x-4">
      <div
        className={`w-full md:w-1/2 lg:w-1/4 ${inViewLeft ? "animate-slideInFromLeft" : ""}`}
        ref={leftRef}
      >
        <CardComponent 
          img="https://miro.medium.com/v2/resize:fit:700/1*_iMsr00OsNCiMNjHSTtmUQ.jpeg" 
          title="Revolutionize Your Crypto Experience with PoLink Wallet" 
          readmorelink="https://medium.com/@polluxchainofficial/exploring-polink-wallet-d96344fd98f2"
          desc="PoLink is a cyrptocurrency wallet ecosystem that helps users manage their digital assets"
        />
      </div>
      <div
        className={`w-full md:w-1/2 lg:w-1/4 ${inViewRight ? "animate-slideInFromRight" : ""}`}
        ref={rightRef}
      >
        <CardComponent 
          img="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Gc_TK0ePMumkZGoL2FW5tg.jpeg" 
          title="The PoLink Chrome extension is live now." 
          readmorelink="https://medium.com/@polluxchainofficial/the-polink-chrome-extension-is-live-now-6278bed26a04"
          desc="PoLink is a native cryptocurrency wallet and Chrome extension ecosystem that offers"
        />
      </div>
      <div
        className={`w-full md:w-1/2 lg:w-1/4 ${inViewRight ? "animate-slideInFromRight" : ""}`}
        ref={rightRef}
      >
        <CardComponent 
          img="https://miro.medium.com/v2/resize:fit:700/1*IjUVzGzRecjBkHhGIcyQQg.jpeg" 
          title="Growth of Pox Coin Surges Threefold in Just 39 Days" 
          readmorelink="https://medium.com/@polluxchainofficial/unveiling-the-phenomenon-growth-of-pox-coin-surges-threefold-in-just-39-days-0ad7c52d1042"
          desc="The journey of Pox Coin from obscurity to acclaim has been nothingn short of remarkable." 
        />
      </div>
      <div
        className={`w-full md:w-1/2 lg:w-1/4 ${inViewLeft ? "animate-slideInFromLeft" : ""}`}
        ref={leftRef}
      >
        <CardComponent 
          img="https://miro.medium.com/v2/resize:fit:700/1*9jozZxvLoDkmxBpHwfViNQ.png" 
          title="Best Crypto to Buy Now: The Top Coins for 2024"
          readmorelink="https://medium.com/@polluxchainofficial/best-crypto-to-buy-now-we-analyzed-the-top-coins-for-2024-09c534527ce7"
          desc="We've analyzed the best cyptocurrencies you can buy to share some insight into..." 
        />
      </div>
    </div>
    </div>

  );
};

export default Frame4;
