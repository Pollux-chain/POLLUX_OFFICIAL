import LogoImage from "../assets/Logo.webp";
import { useInView } from "react-intersection-observer";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { ref: topRef, inView: inViewTop } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleEcosystem = () => {
    setIsEcosystemOpen(!isEcosystemOpen);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <>
      <nav
        ref={topRef}
        className={`hidden md:block lg:block navbar-react pt-16 ${
          inViewTop ? "animate-slideInFromTop" : ""
        } `}
      >
        <div className="container mx-auto flex items-center md:justify-around lg:justify-around xl:justify-around 2xl:justify-between">
        <div className="relative">
            <p
              className="text-white font-semibold text-2xl cursor-pointer"
              onClick={toggleEcosystem}
            >
              Ecosystem
            </p>
            {isEcosystemOpen && (
              <div className="absolute left-0 mt-2 z-40">
                <ul className="bg-[#230C44] rounded-md shadow-lg px-10 py-2 transition transform duration-300 ease-out opacity-100 translate-y-0 text-white">
                 <a href=" https://www.poxscan.io/governance/super-representatives"> <li className="py-1">POX SR</li></a>
                  <a href="https://poxscan.io/download-polink"><li className="py-1">Wallet</li></a>
                  <a href="https://poxscan.io"><li className="py-1">Explorer</li></a>
                 <a href=" https://chromewebstore.google.com/detail/polink/afeibjjgfjfphjedhdjgbgbhpomolbjm"><li className="py-1">Extension</li></a>
                </ul>
              </div>
            )}
          </div>
          <a href="https://pox-chain.gitbook.io/doc">
          <p className="text-white font-semibold text-2xl cursor-pointer ">
            Developers
          </p></a>
          <div className="flex items-center space-x-2 md:-mt-[4rem] lg:-mt-[4rem] xl:-mt-[4rem] 2xl:-mt-[2rem] mr-32">
            <img src={LogoImage} alt="Logo" className="h-16 w-auto" />
            <p className="text-white text-3xl mt-2 font-semibold cursor-pointer">
              Polluxcoin
            </p>
          </div>
          <a href="https://poxscan.io/token/pox">
          <p className="text-white font-semibold text-2xl cursor-pointer ">
            Coin
          </p></a>
        <div className="relative">
          <p className="text-white font-semibold text-2xl cursor-pointer" onClick={toggleLogin}>
            Login
          </p>

          {isLoginOpen && (
              <div className="absolute top-8 bg-[#361466] rounded-lg shadow-lg px-10 py-2 text-white">
                <p className="py-1 cursor-pointer">
                  <a href="https://www.polluxchain.com/chain/members/signin">SR/SRR</a>
                </p>
                <p className="py-1">
                  <a href="https://main.polluxcoin.info/members/signin">Mining</a>
                </p>
              </div>
            )}
            </div>
        </div>
      </nav>

      <div className="md:hidden lg:hidden pt-4 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <img src={LogoImage} alt="Logo" className="h-12 w-auto" />
          <p className="text-white text-2xl font-semibold cursor-pointer">
            Polluxcoin
          </p>
        </div>
        <div className="text-white">
          <MdMenu size={28} onClick={() => setIsMobile(!isMobile)} />
        </div>
        {isMobile && (
          <div className="absolute right-0 top-full mt-2 bg-[#170535] rounded-md shadow-lg px-12 py-4 z-10">
            <p className="text-white font-semibold text-lg cursor-pointer mb-2" 
              onClick={toggleEcosystem}
              >
              Ecosystem
            </p>
            {isEcosystemOpen && (
              <div className="absolute left-0 mt-2 z-40">
                <ul className="bg-[#230C44] rounded-md shadow-lg px-10 py-2 transition transform duration-300 ease-out opacity-100 translate-y-0 text-white">
                <a href=" https://www.poxscan.io/governance/super-representatives"> <li className="py-1">POX SR</li></a>
                  <a href="https://poxscan.io/download-polink"><li className="py-1">Wallet</li></a>
                  <a href="https://poxscan.io"><li className="py-1">Explorer</li></a>
                 <a href=" https://chromewebstore.google.com/detail/polink/afeibjjgfjfphjedhdjgbgbhpomolbjm"><li className="py-1">Extension</li></a>
                </ul>
              </div>
            )}
            <p className="text-white font-semibold text-lg cursor-pointer mb-2">
              Developers
            </p>
            <p className="text-white font-semibold text-lg cursor-pointer mb-2">
             Coin
            </p>
            <p className="text-white font-semibold text-lg cursor-pointer" onClick={toggleLogin}>
             Login
            </p>
            {isLoginOpen && (
              <div className="absolute top-38 right-6 bg-[#361466] rounded-lg shadow-lg px-10 py-2 text-white">
                <p className="py-1 cursor-pointer">
                  <a href="https://www.polluxchain.com/chain/members/signin">SR/SRR</a>
                </p>
                <p className="py-1">
                  <a href="https://main.polluxcoin.info/members/signin">Mining</a>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
