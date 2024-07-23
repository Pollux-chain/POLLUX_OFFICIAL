import { useState } from 'react';

const Frame5Card = ({ img, desc, para }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 150; // Set your character limit here

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col text-center">
      <div className="border-1 rounded-3xl bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] p-1 mx-4">
        <div className="bg-[#10022A] rounded-t-3xl flex justify-center py-12 back">
          <img src={img} alt={desc} className="hover:animate-tada animate-jiggle" />
        </div>
        <div className="bg-[#10022A] rounded-b-3xl text-white px-6 pb-10 text-justify">
          <div>
            {isExpanded ? para : `${para.slice(0, characterLimit)}...`}
          </div>
          {para.length > characterLimit && (
            <div>
              <button onClick={toggleReadMore}
                className="inline-flex items-center px-3 py-2 mt-4 text-sm font-bold text-center text-black 
                bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] rounded-lg"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="font-bold py-6 text-white text-2xl">{desc}</p>
    </div>
  );
};

export default Frame5Card;
