import BG from "../assets/BG.webp";
import GIF from "../assets/Coming.gif";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat" style={{
        backgroundImage: `url(${BG})`,
        backgroundPosition: "top",
      }}>
       <img src={GIF} alt="Coming Soon" className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6" />
       <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4">Coming soon...</p>
    </div>
  )
}

export default ComingSoon
