import { useInView } from 'react-intersection-observer';
import BG from "../../../assets/BG.webp";
import Frame3Chart from './Frame3Chart';
import { useEffect, useState } from 'react';
import { getBlockHeight, getPriceChart } from '../../../utils/axios';
import { formatNumberWithCommas } from '../../../utils/FormattingNumber';

const Frame3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [blockHeightData, setBlockHeightData] = useState({});
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchBlockHeightData = async () => {
      try {
        const data = await getBlockHeight();
        setBlockHeightData(data?.message);
      } catch (error) {
        console.error('Error fetching block height:', error);
      }
    };

    const getChartData=async()=>{
      try {
        const data = await getPriceChart();
        setChartData(data?.message);
      } catch (error) {
        console.log(error)
      }
    }

    fetchBlockHeightData();
    getChartData();
  }, []);

  return (
    <div className={`min-h-screen text-center px-6 md:px-12 lg:px-24 mt-0 md:mt-16 ${inView ? 'animate-slideInFromLeft' : ''}`} ref={ref}
    style={{backgroundImage: `url(${BG})`,}}>
      <p className="text-4xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl md:h-28 lg:h-28 font-bold bg-gradient-to-r
       from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text">
        POX Market Performance
      </p>
      <p className="text-white text-center pb-12 text-2xl font-semibold">
      Our Token (POX) is listed on Coinstore, kkoinbx, Lbank exchanges, POX, on of the most promising cryptos, connects millions of value investors across the globe.
      </p>

      <div className='whitespace-nowrap flex flex-col md:flex-row lg:flex-row md:space-x-6 lg:space-x-6'>
      <Frame3Chart data={chartData}/>
      <div className='flex flex-col space-y-6 md:space-y-0 lg:space-y-0 justify-around text-white'>

          <div className='mt-6 md:mt-0 lg:mt-0 flex flex-col border-[1px] border-gray-700 rounded-3xl px-16 py-9 bg-[#271B3F]'>
            <p className='font-bold text-3xl'>${blockHeightData?.poxMarketCap && formatNumberWithCommas(parseInt(blockHeightData?.poxMarketCap))}</p>
            <p className='font-semibold text-xl whitespace-nowrap'>Total Market Cap</p>
          </div>
          <div className='flex flex-col border-[1px] border-gray-700 rounded-3xl px-16 py-9 bg-[#271B3F]'>
            <p className='font-bold text-3xl'>{blockHeightData?.poxRank && formatNumberWithCommas(parseInt(blockHeightData?.poxRank))}</p>
            <p className='font-semibold text-xl'>Global Rank</p>
          </div>
          <div className='flex flex-col border-[1px] border-gray-700 rounded-3xl px-16 py-9 bg-[#271B3F]'>
            <p className='font-bold text-3xl'>{blockHeightData?.AccountHolder && formatNumberWithCommas(parseInt(blockHeightData?.AccountHolder))}</p>
            <p className='font-semibold text-xl whitespace-nowrap'>Accounts holding POX</p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row lg:flex-row justify-between text-white py-6 space-y-4 md:space-y-0 md:space-x-4'>
  <div className='flex-1 flex flex-col border-y-[1px] border-gray-700 border-l-[1px] rounded-3xl md:rounded-r-none lg:rounded-r-none px-4 py-9 md:px-16 bg-[#271B3F]'>
    <p className='font-bold text-3xl'>{blockHeightData?.poxPrice && (blockHeightData?.poxPrice)}</p>
    <p className='font-semibold text-xl'>Current Price</p>
  </div>
  <div className='flex-1 flex flex-col border-y-[1px] border-gray-700 px-4 py-9 rounded-3xl md:rounded-none lg:rounded-none md:px-16 bg-[#271B3F]'>
    <p className='font-bold text-3xl'>{blockHeightData?.txnVol24 && formatNumberWithCommas(parseInt(blockHeightData?.txnVol24))}</p>
    <p className='font-semibold text-xl'>Transaction Volume (24hr)</p>
  </div>
  <div className='flex-1 flex flex-col border-y-[1px] border-gray-700 border-r-[1px] rounded-3xl md:rounded-l-none lg:rounded-l-none px-4 py-9 md:px-16 bg-[#271B3F]'>
    <p className='font-bold text-3xl'>{blockHeightData?.txCount24 && formatNumberWithCommas(parseInt(blockHeightData?.txCount24))}</p>
    <p className='font-semibold text-xl'>Transaction Count (24hr)</p>
  </div>
</div>

    </div>
  );
};

export default Frame3;
