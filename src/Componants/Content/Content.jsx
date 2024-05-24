
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import conimg from '../../assets/contentAsset.png';
// import rightArrow from '../../assets/rightArrow.png';

// const Content = () => {
//   const [showButton, setShowButton] = useState(false);
//   const navigate = useNavigate();

//   const toggleButtonVisibility = () => {
//     setShowButton(!showButton);
//   };

//   const handleStartExploring = () => {
//     navigate('/carousel');
//   };

//   return (
//     <>
//       <div
//         className="bg-white w-full max-w-4xl mx-auto h-auto my-4 rounded-md shadow-lg p-4 cursor-pointer"
//         onClick={toggleButtonVisibility}
//       >
//         <div className="flex flex-col sm:flex-row justify-between items-center">
//           <div className="con flex flex-col sm:flex-row gap-4 sm:gap-12 items-center sm:items-start">
//             <div className="w-28 h-28 rounded-md flex-shrink-0">
//               <img className="rounded-md w-full h-full object-cover" src={conimg} alt="" />
//             </div>
//             <div className="text-center sm:text-left">
//               <h2 className="font-semibold text-black text-lg">
//                 Introduction to Machine Learning
//               </h2>
//               <span className="text-gray-400 font-semibold">
//                 14 min | 24 bytes
//               </span>
//             </div>
//           </div>
//           <div className="mt-4 sm:mt-0">
//             <img src={rightArrow} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
//           </div>
//         </div>
//         {showButton && (
//           <div className="mt-4">
//             <button
//               onClick={handleStartExploring}
//               className="w-full sm:w-[98%] border-none bg-violet-600 text-white font-semibold rounded-md p-3"
//             >
//               Start Exploring
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Content;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import conimg from '../../assets/contentAsset.png';
import rightArrow from '../../assets/rightArrow.png';

const Content = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const toggleButtonVisibility = () => {
    setShowButton(!showButton);
  };

  const handleStartExploring = () => {
    navigate('/carousel');
  };

  return (
    <>
      <div
        className="bg-white w-full max-w-4xl mx-auto h-auto my-4 rounded-md shadow-lg p-4 cursor-pointer"
        onClick={toggleButtonVisibility}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="con flex flex-col sm:flex-row gap-4 sm:gap-12 items-center sm:items-start">
            <div className="w-28 h-28 rounded-md flex-shrink-0">
              <img className="rounded-md w-full h-full object-cover" src={conimg} alt="" />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-black text-lg">
                Introduction to Machine Learning
              </h2>
              <span className="text-gray-400 font-semibold">
                14 min | 24 bytes
              </span>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <img src={rightArrow} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
        </div>
        {showButton && (
          <div className="mt-4">
            <button
              onClick={handleStartExploring}
              className="w-full sm:w-[98%] border-none bg-violet-600 text-white font-semibold rounded-md p-3"
            >
              Start Exploring
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Content;

