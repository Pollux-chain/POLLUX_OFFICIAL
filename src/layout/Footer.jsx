import { useEffect, useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaRegCopyright,FaDiscord,FaTelegram  } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from '../assets/Logo.webp';
import BG from "../assets/BG.webp";
import PrivacyPDF from "../assets/PrivacyDoc.pdf";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.footer-container');
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
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`footer-container text-white py-12 px-6 md:px-12 lg:px-24 ${isVisible ? 'animate-slideInFromLeft' : ''}`}
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <div className="border-t-[2px] pt-6 flex flex-col md:flex-row items-center justify-between">
        <div className={`w-full md:w-1/3 ${isVisible ? 'animate-slideInFromLeft' : ''} mb-6 md:mb-0`}>
          <img src={Logo} alt="pox-logo" className="w-1/2 mx-auto md:mx-0" />
        </div>
        <div className={`w-full md:w-1/3 ${isVisible ? 'animate-slideInFromLeft' : ''} mb-6 md:mb-0 text-center md:text-left`}>
          <p className="text-2xl pb-8 md:indent-[80px]">Pollux Coin</p>
          <div className="flex flex-row items-center justify-around">
            <ul className="mb-4 md:mb-0">
            <a href='https://pox-chain.gitbook.io/doc'><li className="py-1 cursor-pointer">Developers</li></a>
              <li className="py-1 cursor-pointer">Partners</li>
              <li className="py-1 cursor-pointer">Bug Bounty Program</li>
              <li className="py-1 cursor-pointer">Contact us</li>
              {/* <li className="py-1 cursor-pointer">Documentation</li> */}
              {/* <li className="py-1 cursor-pointer">Grants</li> */}
            </ul>
            <ul>
             <a href=' https://poxscan.io/whitepaper.pdf'> <li className="py-1 cursor-pointer">White Paper</li></a>
              <li className="py-1 cursor-pointer">Educational</li>
             <a href='https://medium.com/@polluxchainofficial'> <li className="py-1 cursor-pointer">Blogs</li></a>
              <li className="py-1 cursor-pointer">About</li>
              {/* <li className="py-1 cursor-pointer">Initiatives</li> */}
              {/* <li className="py-1 cursor-pointer">Team</li> */}
            </ul>
          </div>
        </div>
        <div className={`w-full md:w-1/3 flex flex-col ${isVisible ? 'animate-slideInFromRight' : ''} text-center md:text-right`}>
          <p className="pb-8 text-2xl">JOIN US</p>
          <div className="flex space-x-4 justify-center md:justify-end cursor-pointer">
           <a href='https://www.instagram.com/polluxchainofficial/ '> <FaInstagram size={28} /></a>
           <a href="https://www.facebook.com/PolluxCoin/"><FaFacebook size={28} /></a> 
           <a href='https://x.com/polluxcoin1'><FaXTwitter size={28} /></a>
            <FaLinkedin size={28} />
           <a href="https://discord.com/invite/ngy8F2Cs"><FaDiscord size={28}/></a>
           <a href='https://t.me/polluxchainDAO'> <FaTelegram  size={28}/></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-8 text-center md:text-left">
        <div className={`${isVisible ? 'animate-slideInFromLeft' : ''} mb-4 md:mb-0`}>
          <p className="flex items-center justify-center md:justify-start">
            Copyright <span className="mx-1"><FaRegCopyright /></span> 2024 PolluxCoin. All Rights Reserved
          </p>
        </div>
        <div className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 ${isVisible ? 'animate-slideInFromRight' : ''}`}>
         <a href={PrivacyPDF} target = "_blank" rel="noreferrer"> <p className="cursor-pointer">Privacy Policy</p></a>
          <p className="cursor-pointer">Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
