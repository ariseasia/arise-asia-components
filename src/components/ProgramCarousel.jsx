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
      <div className="p-5 bg-white rounded-lg shadow-lg lg:w-max w-fit">
        <h3 className="flex flex-row gap-2 pb-5 text-2xl font-bold uppercase font-heading">
          <CiCalendar size={32} />
          Program
        </h3>
        <div className="flex flex-col gap-4 w-fit">
          {/* Day title & Arrows */}
          <div className="flex flex-row gap-3 justify-between items-center mx-3">
            <div className="flex-shrink-0" style={{ width: "40px" }}>
              {currentIndex !== 0 ? (
                <IoIosArrowDropleft
                  className={`${arrowBgColor} ${arrowHoverBgColor} text-white rounded-full drop-shadow-2xl`}
                  onClick={handleLeft}
                  size={window.innerWidth < 768 ? 28 : 48}
                />
              ) : null}
            </div>

            <div className="text-sm font-bold text-center lg:text-lg font-heading max-w-96">
              <p>
                DAY {programData[currentIndex].day} -{" "}
                {programData[currentIndex].date}
              </p>
              {programData[currentIndex].topic && (
                <p>{programData[currentIndex].topic}</p>
              )}
            </div>

            <div className="flex-shrink-0" style={{ width: "40px" }}>
              {currentIndex < programData.length - 1 ? (
                <IoIosArrowDropright
                  className={`${arrowBgColor} ${arrowHoverBgColor} text-white rounded-full drop-shadow-2xl`}
                  onClick={handleRight}
                  size={window.innerWidth < 768 ? 28 : 48}
                />
              ) : null}
            </div>
          </div>
          <div
            className="flex overflow-y-auto flex-col gap-4"
            style={{ height: "500px" }}
          >
            {/* Adjust this height as needed */}
            {programData[currentIndex].schedule.map((item, j) => (
              <div
                key={j}
                className={`border-2 ${borderColor} rounded-md font-heading text-[10px] lg:text-sm p-2 flex flex-row space-x-2 justify-between`}
              >
                <p>{item.activity}</p>
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
      topic: PropTypes.string,
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
