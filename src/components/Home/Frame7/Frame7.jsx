import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import Frame7Card from "./Frame7Card";
import BG from "../../../assets/BG.webp";
import PoxsrImg from "../../../assets/slide1.webp";
import PoxwalletImg from "../../../assets/slide2.webp";
import PolinkImg from "../../../assets/slide3.webp";
import ScanImg from "../../../assets/ScanImg.webp";
import UsdxImg from "../../../assets/UsdxImg.webp";
import UviswapImg from "../../../assets/UviswapImg.webp";

const Frame7 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.frame7-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInViewport) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately in case already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cardsData = [
    {
      img: PoxsrImg,
      desc: "POX Super Representatives are elected via decentralized voting to govern the POX community on-chain. By voting for SRs, participants not only shape the ecosystem but also earn rewards for their active contribution to POX's growth.",
      title: "POX SR",
      link:" https://www.poxscan.io/governance/super-representatives"
    },
    {
      img: PoxwalletImg,
      desc: "A revolutionary solution crafted by the exceptional community developers of POX. This state-of-the-art wallet has not only garnered attention for its innovative features but has also forged robust partnerships with several world-class wallets, ensuring a seamless and secure digital asset experience.",
      title: "POX Wallet",
      link:"https://poxscan.io/download-polink"
    },
    {
      img: PolinkImg,
      desc: "This is an official Oracle project operating on the Pollux network, securely providing real-world data to on-chain smart contracts.",
      title: "Polink",
      link:"https://chromewebstore.google.com/detail/polink/afeibjjgfjfphjedhdjgbgbhpomolbjm"
    },
    {
      img: ScanImg,
      desc: "The pioneering blockchain explorer for POX, providing comprehensive on-chain data queries and effortless token creation support.",
      title: "POX Scan",
      link:"https://www.poxscan.io/"
    },
    {
      img: UviswapImg,
      desc: "Unlock the Future of Development with POX DApps: Minimal Gas Fees and Lightning-Fast Transactions!",
      title: "UVISWAP",
      link:"https://uviswap.org/"
    },
    {
      img: UsdxImg,
      desc: "A stablecoin backed by Pollux coin reserves, offering quick issuance and low transaction fees. From day one, it has captivated users with its unparalleled popularity and reliability.",
      title: "PRC-20 USDX",
      link:"https://poxusdx.com/ "
    },
  ];

  return (
    <div className={`md:min-h-screen lg:min-h-screen frame7-container flex flex-col justify-center items-center py-16 px-0 md:px-24 lg:px-24 ${isVisible ? 'animate-slideInFromBottom' : ''}`}
    style={{backgroundImage: `url(${BG})`,}}>
      <p className="text-4xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-7xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text mb-12">
        POX Ecosystem
      </p>
      <div className="carousel-wrapper px-2 md:px-0 lg:px-0 xl:px-0 2xl:px-28">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[EffectCoverflow, Navigation,Autoplay ]}
          className="swiper-container"
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index} className="carousel-slide">
              <Frame7Card img={card.img} desc={card.desc} title={card.title} isActive={index === activeIndex} link={card?.link} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev slider-arrow"></div>
        <div className="swiper-button-next slider-arrow"></div>
      </div>
    </div>
  );
};

export default Frame7;
