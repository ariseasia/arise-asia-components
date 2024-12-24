import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const MomentsCarousel = ({
  className,
  bgColor,
  hoverBgColor,
  textColor = "text-white",
  momentsData,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const len = momentsData.length;

  const handleLeft = () => setActiveIdx((activeIdx + 1) % len);

  const handleRight = () => setActiveIdx((activeIdx - 1 + len) % len);

  const descriptionRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  const calculateMaxHeight = () => {
    const heights = momentsData.map((data) => {
      if (!data.description) return 0;
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.visibility = "hidden";
      div.style.height = "auto";
      div.style.width = descriptionRef.current.offsetWidth + "px";
      div.innerHTML = data.description;
      document.body.appendChild(div);
      const height = div.offsetHeight;
      document.body.removeChild(div);
      return height;
    });
    setMaxHeight(Math.max(...heights));
  };

  useEffect(() => {
    calculateMaxHeight();
    window.addEventListener("resize", calculateMaxHeight);
    return () => window.removeEventListener("resize", calculateMaxHeight);
  }, [momentsData]);

  return (
    <div className={className}>
      <div className="relative">
        <IoIosArrowDropleft
          className={`absolute left-0 top-2/5 md:top-1/2 ${textColor} ${bgColor} rounded-full -translate-x-1/2 ${hoverBgColor} drop-shadow-2xl`}
          onClick={handleLeft}
          size={36}
        />
        <div className="py-5">
          <img
            alt={momentsData[activeIdx].title}
            className="object-cover m-auto w-full h-full rounded-xl aspect-video"
            src={momentsData[activeIdx].image}
          />
        </div>
        <IoIosArrowDropright
          className={`absolute right-0 top-2/5 md:top-1/2 ${textColor} ${bgColor} rounded-full translate-x-1/2 ${hoverBgColor} drop-shadow-2xl`}
          onClick={handleRight}
          size={36}
        />
      </div>
      <div className="w-full h-40">
        <article
          className={`py-4 pr-16 pl-5 ${textColor} ${bgColor} rounded-xl sm:py-6 sm:pl-8 [clip-path:polygon(0_0,_0_100%,_80%_100%,_100%_75%,_100%_0)]`}
        >
          <p className="italic text-p">{momentsData[activeIdx].day}</p>
          <h4 className="mb-1 font-bold leading-tight sm:mb-2 sm:text-2xl">
            {momentsData[activeIdx].title}
          </h4>
          <p
            ref={descriptionRef}
            className={`${textColor} text-p`}
            style={{ height: `${maxHeight}px` }}
          >
            {momentsData[activeIdx].description}
          </p>
        </article>
      </div>
    </div>
  );
};

MomentsCarousel.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  momentsData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default MomentsCarousel;
