import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const MomentsSection = ({
  className,
  bgColor,
  hoverBgColor,
  textColor = "text-white",
  moments,
}) => {
  const numItems = moments.length;

  const [activeIdx, setActiveIdx] = useState(0);

  const handleDown = () => setActiveIdx((activeIdx + 1) % numItems);
  const handleUp = () => setActiveIdx((activeIdx - 1 + numItems) % numItems);

  return (
    <div className={className}>
      <h2 className="pb-10 uppercase text-h3">The Moments</h2>
      <div className="flex gap-x-10 items-center">
        <div className="hidden gap-y-4 items-center lg:flex lg:flex-col">
          <div className="relative">
            <IoIosArrowDropup
              className={`absolute top-0 inset-x-1/2 ${textColor} ${bgColor} rounded-full -translate-x-1/2 -translate-y-1/2 ${hoverBgColor} drop-shadow-2xl`}
              onClick={handleUp}
              size={48}
            />
            <img
              alt={moments[(activeIdx - 1 + numItems) % numItems].title}
              className="w-72 rounded-3xl aspect-video object-cover"
              src={moments[(activeIdx - 1 + numItems) % numItems].image}
            />
          </div>
          <img
            alt={moments[activeIdx].title}
            className="w-96 rounded-3xl aspect-video object-cover"
            src={moments[activeIdx].image}
          />
          <div className="relative">
            <img
              alt={moments[(activeIdx + 1) % numItems].title}
              className="w-72 rounded-3xl aspect-video object-cover"
              src={moments[(activeIdx + 1) % numItems].image}
            />
            <IoIosArrowDropdown
              className={`absolute bottom-0 inset-x-1/2 ${textColor} ${bgColor} rounded-full -translate-x-1/2 translate-y-1/2 ${hoverBgColor} drop-shadow-2xl`}
              onClick={handleDown}
              size={48}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-8 items-center mt-2 max-w-screen-lg lg:mt-0 lg:w-3/4">
          <div className="relative">
            <IoIosArrowDropup
              className={`absolute top-0 inset-x-1/2 ${textColor} ${bgColor} rounded-full -translate-x-1/2 -translate-y-1/2 lg:hidden ${hoverBgColor} drop-shadow-2xl`}
              onClick={handleUp}
              size={36}
            />
            <img
              alt={moments[activeIdx].title}
              className="w-full max-w-screen-lg rounded-3xl aspect-video object-cover"
              src={moments[activeIdx].image}
            />
            <IoIosArrowDropdown
              className={`absolute bottom-0 inset-x-1/2 ${textColor} ${bgColor} rounded-full -translate-x-1/2 translate-y-1/2 lg:hidden ${hoverBgColor} drop-shadow-2xl`}
              onClick={handleDown}
              size={36}
            />
          </div>
          <div className="w-full h-40">
            <article
              className={`py-4 pr-16 pl-5 ${textColor} ${bgColor} rounded-xl sm:py-6 sm:pl-8 [clip-path:polygon(0_0,_0_100%,_80%_100%,_100%_75%,_100%_0)]`}
            >
              <p className="italic text-p">{moments[activeIdx].day}</p>
              <h4 className="mb-1 font-bold leading-tight sm:mb-2 sm:text-2xl">
                {moments[activeIdx].title}
              </h4>
              <p className={`${textColor} text-p`}>
                {moments[activeIdx].description}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

MomentsSection.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  moments: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MomentsSection;
