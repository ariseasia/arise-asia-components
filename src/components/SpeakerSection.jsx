import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const SpeakerSection = ({
  className,
  bgColor,
  hoverBgColor,
  nameTextColor,
  speakersData,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = window.innerWidth < 768 ? 2 : 3;

  const handleLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRight = () => {
    if (currentIndex < speakersData.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const displayedSpeakers = speakersData.slice(
    currentIndex,
    currentIndex + itemsToShow,
  );

  return (
    <div id="speakers" className={className}>
      <h3 className="text-2xl uppercase font-bold font-heading pb-10">
        Our Speakers
      </h3>

      <div className="flex flex-col lg:flex-row lg:space-x-20">
        {/* Carousel */}
        <div className="flex gap-x-10 mt-10 sm:-mr-10 justify-center lg:mr-10">
          {displayedSpeakers.map((item, i) => (
            <div key={i} className="flex flex-col w-1/2 xl:w-1/4 items-center">
              <img src={item.image} alt={item.name} />
              <p
                className={`text-center text-sm md:text-lg font-heading font-bold ${nameTextColor}`}
              >
                {item.name}
              </p>
              <p className="text-center text-xs md:text-sm">
                {item.titles.map((title, index) => (
                  <Fragment key={index}>
                    {title}
                    {index < item.titles.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex flex-row space-x-5 items-center justify-end">
          <IoIosArrowDropleft
            className={`${bgColor} ${hoverBgColor} text-white rounded-full drop-shadow-2xl`}
            onClick={handleLeft}
            size={48}
            disabled={currentIndex === 0} // Disable if at the start
          />
          <IoIosArrowDropright
            className={`${bgColor} ${hoverBgColor} text-white rounded-full drop-shadow-2xl`}
            onClick={handleRight}
            size={48}
            disabled={currentIndex >= speakersData.length - itemsToShow} // Disable if at the end
          />
        </div>
      </div>
    </div>
  );
};

SpeakerSection.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string.isRequired,
  nameTextColor: PropTypes.string.isRequired,
  speakersData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      titles: PropTypes.array,
    }),
  ).isRequired,
};

export default SpeakerSection;
