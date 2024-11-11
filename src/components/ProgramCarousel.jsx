import PropTypes from "prop-types";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const ProgramCarousel = ({
  className,
  arrowBgColor,
  arrowHoverBgColor,
  borderColor,
  programData,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRight = () => {
    if (currentIndex < programData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={className}>
      <div className={`bg-white rounded-lg shadow-lg p-5`}>
        <h3 className="text-2xl uppercase font-bold font-heading flex flex-row gap-2 pb-5">
          <CiCalendar size={32} />
          Program
        </h3>
        <div className="w-10/12 md:w-11/12">
          <div className="w-full flex flex-col gap-4 mx-10">
            {/* Day title & Arrows */}
            <div className="flex flex-row justify-between items-center mx-3">
              <IoIosArrowDropleft
                className={`${arrowBgColor} ${arrowHoverBgColor} text-white rounded-full drop-shadow-2xl`}
                onClick={handleLeft}
                size={window.innerWidth < 768 ? 28 : 48}
                disabled={currentIndex === 0} // Disable if at the start
              />

              <div className="font-heading font-bold text-sm lg:text-lg text-center pb-5">
                DAY {programData[currentIndex].day} -{" "}
                {programData[currentIndex].date}
              </div>

              <IoIosArrowDropright
                className={`${arrowBgColor} ${arrowHoverBgColor} text-white rounded-full drop-shadow-2xl`}
                onClick={handleRight}
                size={window.innerWidth < 768 ? 28 : 48}
                disabled={currentIndex >= programData.length - 1} // Disable if at the end
              />
            </div>

            {programData[currentIndex].schedule.map((item, j) => (
              <div
                key={j}
                className={`border-2 ${borderColor} rounded-md font-heading text-[10px] lg:text-sm p-2 flex flex-row space-x-2 justify-between`}
              >
                <div>{item.activity}</div>
                <div className="text-nowrap">
                  {item.startTime} {item.endTime && `- ${item.endTime}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ProgramCarousel.propTypes = {
  className: PropTypes.string,
  arrowBgColor: PropTypes.string.isRequired,
  arrowHoverBgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  programData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      schedule: PropTypes.arrayOf(
        PropTypes.shape({
          startTime: PropTypes.string.isRequired,
          endTime: PropTypes.string.isRequired,
          activity: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

export default ProgramCarousel;
