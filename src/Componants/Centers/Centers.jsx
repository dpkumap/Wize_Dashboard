import React from "react";
import domain from "../../assets/domain.png";
import venue from "../../assets/venue.png";
import calender from "../../assets/calendar.png";
import imageUrl from "../../assets/s1.png";
import imageUrl2 from "../../assets/s2.png";
import Card from '../../Componants/Card/Card'

const Center = () => {
  return (
    <div className="ml-64 mt-16 h-screen w-fit overflow-y-auto p-4 bg-gray-200">
      <div className="flex">
        <div className="flex bg-white w-2/3 rounded-lg p-3">
          <div className="details flex-grow w-2/3">
            <h2 className="font-semibold text-xl">
              Journeying through GenAI and LLMS
            </h2>

            <div className="my-3">
              <button className="bg-gray-200 w-1/5 h-2/3 p-2 text-blue-500 font-semibold rounded-lg">
                3 Weeks
              </button>
              <button className="bg-gray-200 w-1/5 h-2/3 mx-3 p-2 text-blue-500 font-semibold rounded-lg">
                Online
              </button>
            </div>

            <div className="my-6">
              <img loading='lazy' className="inline mx-2 " src={domain} alt="" />
              <span className="font-semibold mx-2 text-gray-500 ">
                Domain{" "}
                <span className="font-semibold text-gray-500 mx-11">
                  Bootcamp: Data Science
                </span>
              </span>
              <br />
              <img loading='lazy' className="inline mx-2 my-3" src={venue} alt="" />
              <span className="font-semibold mx-2  text-gray-500">
                Venue{" "}
                <span className="font-semibold text-gray-500 mx-14">
                  Online, Zoom
                </span>
              </span>
            </div>

            <div>
              <div className="bg-gray-200 w-1/2 rounded-2xl p-2 inline">
                {" "}
                <img loading='lazy' className="inline" src={calender} alt="" />
                <span className=" mx-1 font-semibold text-gray-500 text-center">
                  3-5 June, 2024 05:00 PM
                </span>
              </div>

              <span className="text-xs font-semibold text-gray-500 mx-5 ">
                7 days to go{" "}
              </span>
            </div>
            <div>
              <button className="w-2/5 border-2 border-violet-600 my-6 p-3 text-violet-600 rounded-lg">
                {" "}
                Past Workshops
              </button>
              <button className="w-2/5 border-none bg-violet-600 my-6 p-3 text-white rounded-lg mx-4">
                {" "}
                Join Workshop
              </button>
            </div>
          </div>
          <div className="card flex flex-col w-1/3 h-auto rounded-2xl">
            <div className="w-full h-1/2">
              <img loading='lazy'
                className="h-full w-full object-contain rounded-t-lg"
                src={imageUrl}
                alt=""
              />
            </div>
            <div
              className="bg-contain bg-no-repeat h-full w-full rounded-b-lg"
              style={{ backgroundImage: `url(${imageUrl2})` }}
            ></div>
          </div>
        </div>
        <div className="lasty bg-white w-1/3 h-auto mx-3 rounded-lg"></div>
      </div>
      <Card/>
    </div>
  );
};

export default Center;

