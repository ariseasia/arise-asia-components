import PropTypes from "prop-types";
import logoPath from "../assets/respond-123go.svg";

const Go123Box = ({ description, bgColor, textColor = "text-black" }) => {
  return (
    <div
      className={`${bgColor} flex flex-col justify-center items-center py-5 px-2 rounded-lg text-center h-full`}
    >
      <p className={`text-center text-p ${textColor}`}>{description}</p>
      <img src={logoPath} alt="Arise Asia response logo" className="w-36" />
    </div>
  );
};

Go123Box.propTypes = {
  description: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

const SummaryBox = ({
  quantity,
  quantifier,
  bgColor,
  textColor = "text-white",
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} flex flex-col justify-center items-center py-5 px-2 rounded-lg text-center w-full h-full`}
    >
      <p className="text-3xl font-bold md:text-4xl font-heading">{quantity}</p>
      <p className="text-sm md:text-base">{quantifier}</p>
    </div>
  );
};

SummaryBox.propTypes = {
  quantity: PropTypes.string.isRequired,
  quantifier: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

const SummarySection = ({
  className,
  gridClassName,
  bgColor,
  textColor,
  has123Go,
  goBgColor,
  goTextColor,
  goDescription,
  summaryList,
}) => {
  return (
    <div className={className}>
      <div className={`grid ${gridClassName}`}>
        {has123Go && (
          <Go123Box
            description={goDescription}
            bgColor={goBgColor}
            textColor={goTextColor}
          />
        )}
        {summaryList.map(({ quantity, quantifier }) => (
          <SummaryBox
            key={quantifier}
            quantity={quantity}
            quantifier={quantifier}
            bgColor={bgColor}
            textColor={textColor}
          />
        ))}
      </div>
    </div>
  );
};

SummarySection.propTypes = {
  className: PropTypes.string,
  gridClassName: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  has123Go: PropTypes.bool,
  goBgColor: PropTypes.string,
  goTextColor: PropTypes.string,
  goDescription: PropTypes.string,
  summaryList: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.string.isRequired,
      quantifier: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SummarySection;
