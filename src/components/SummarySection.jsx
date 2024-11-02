import PropTypes from "prop-types";
import Go123Box from "./Go123Box";
import SummaryBox from "./SummaryBox";

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
            className={className}
            description={goDescription}
            bgColor={goBgColor}
            textColor={goTextColor}
          />
        )}
        {summaryList.map(({ className, quantity, quantifier }) => (
          <SummaryBox
            key={quantifier}
            className={className}
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
      className: PropTypes.string,
      quantity: PropTypes.string,
      quantifier: PropTypes.string,
    }),
  ).isRequired,
};

export default SummarySection;
